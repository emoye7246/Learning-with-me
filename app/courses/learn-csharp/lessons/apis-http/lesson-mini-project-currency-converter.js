export const lessonMiniProjectCurrencyConverter = {
  id: "mini-project-currency-converter-cs",
  title: "Mini-Project: Currency Converter with Live Rates",
  hasChallenge: false,
  article: `
## Mini-Project: Currency Converter with Live Rates

In this project you'll build a currency converter that fetches live exchange rates from a free API and converts between any two currencies. The highlight is **caching** — storing rates locally so you don't make unnecessary API calls on every conversion.

---

## The API: exchangerate-api.com

The free tier of exchangerate-api.com doesn't require an API key for the open access endpoint:

\`\`\`bash
GET https://open.er-api.com/v6/latest/USD
\`\`\`

This returns USD exchange rates relative to all major currencies. The free tier refreshes daily and requires no signup.

---

## Project Setup

\`\`\`bash
dotnet new console -n CurrencyConverter
cd CurrencyConverter
\`\`\`

---

## DTO Design

\`\`\`csharp
using System.Text.Json.Serialization;

public class ExchangeRateResponse
{
    [JsonPropertyName("result")]
    public string Result { get; set; } = "";

    [JsonPropertyName("base_code")]
    public string BaseCode { get; set; } = "";

    [JsonPropertyName("time_last_update_utc")]
    public string TimeLastUpdateUtc { get; set; } = "";

    [JsonPropertyName("rates")]
    public Dictionary<string, double> Rates { get; set; } = new();
}
\`\`\`

The \`rates\` field maps currency codes to exchange rates: \`{ "EUR": 0.92, "GBP": 0.79, ... }\`. A \`Dictionary<string, double>\` is the perfect C# type for this.

---

## The Cache

Caching stores the fetched rates in a local JSON file. On subsequent runs, the app reads from the file instead of hitting the API — unless the cached data is older than one hour.

\`\`\`csharp
public class RateCache
{
    private const string CacheFile = "rates_cache.json";
    private static readonly TimeSpan CacheDuration = TimeSpan.FromHours(1);

    public static async Task<ExchangeRateResponse?> LoadAsync()
    {
        if (!File.Exists(CacheFile)) return null;

        DateTime lastWrite = File.GetLastWriteTimeUtc(CacheFile);
        if (DateTime.UtcNow - lastWrite > CacheDuration)
        {
            Console.WriteLine("Cache expired. Fetching fresh rates...");
            return null;
        }

        string json = await File.ReadAllTextAsync(CacheFile);
        return JsonSerializer.Deserialize<ExchangeRateResponse>(json);
    }

    public static async Task SaveAsync(ExchangeRateResponse data)
    {
        string json = JsonSerializer.Serialize(data, new JsonSerializerOptions
        {
            WriteIndented = true
        });
        await File.WriteAllTextAsync(CacheFile, json);
    }
}
\`\`\`

---

## The Exchange Rate Service

\`\`\`csharp
using System.Net.Http;
using System.Text.Json;

public class ExchangeRateService
{
    private static readonly HttpClient _client = new HttpClient(new SocketsHttpHandler
    {
        PooledConnectionLifetime = TimeSpan.FromMinutes(2)
    });

    private ExchangeRateResponse? _rates;

    public async Task LoadRatesAsync(string baseCurrency = "USD")
    {
        // Try cache first
        _rates = await RateCache.LoadAsync();

        if (_rates != null)
        {
            Console.WriteLine($"Using cached rates (base: {_rates.BaseCode}, updated: {_rates.TimeLastUpdateUtc})");
            return;
        }

        // Fetch fresh data
        string url = $"https://open.er-api.com/v6/latest/{baseCurrency.ToUpper()}";
        Console.WriteLine($"Fetching rates from API...");

        HttpResponseMessage response = await _client.GetAsync(url);
        response.EnsureSuccessStatusCode();

        string json = await response.Content.ReadAsStringAsync();
        _rates = JsonSerializer.Deserialize<ExchangeRateResponse>(json);

        if (_rates != null)
        {
            await RateCache.SaveAsync(_rates);
            Console.WriteLine($"Rates cached to {Path.GetFullPath("rates_cache.json")}");
        }
    }

    public double Convert(double amount, string fromCurrency, string toCurrency)
    {
        if (_rates is null)
            throw new InvalidOperationException("Rates not loaded. Call LoadRatesAsync first.");

        string from = fromCurrency.ToUpper();
        string to = toCurrency.ToUpper();

        if (!_rates.Rates.TryGetValue(from, out double fromRate))
            throw new ArgumentException($"Unknown currency: {from}");

        if (!_rates.Rates.TryGetValue(to, out double toRate))
            throw new ArgumentException($"Unknown currency: {to}");

        // Convert: amount → base → target
        double inBase = amount / fromRate;
        return inBase * toRate;
    }

    public IEnumerable<string> GetAvailableCurrencies()
        => _rates?.Rates.Keys.OrderBy(k => k) ?? [];
}
\`\`\`

---

## The Entry Point

\`\`\`csharp
// Program.cs — usage: dotnet run -- 100 USD EUR
if (args.Length < 3)
{
    Console.WriteLine("Usage: dotnet run -- <amount> <from> <to>");
    Console.WriteLine("Example: dotnet run -- 100 USD GBP");
    return;
}

if (!double.TryParse(args[0], out double amount) || amount <= 0)
{
    Console.Error.WriteLine("Invalid amount.");
    return;
}

string from = args[1].ToUpper();
string to = args[2].ToUpper();

var service = new ExchangeRateService();

try
{
    await service.LoadRatesAsync();
    Console.WriteLine();

    double result = service.Convert(amount, from, to);
    Console.WriteLine($"{amount:N2} {from} = {result:N2} {to}");
}
catch (ArgumentException ex)
{
    Console.Error.WriteLine(ex.Message);
    Console.WriteLine();
    Console.WriteLine("Available currencies:");
    Console.WriteLine(string.Join(", ", service.GetAvailableCurrencies()));
}
catch (HttpRequestException ex)
{
    Console.Error.WriteLine($"Network error: {ex.Message}");
}
\`\`\`

---

## Running It

\`\`\`bash
dotnet run -- 100 USD EUR
dotnet run -- 50 GBP JPY
dotnet run -- 1000 EUR AUD
\`\`\`

Sample output:

\`\`\`bash
Using cached rates (base: USD, updated: Thu, 01 Jan 2026 00:00:00 +0000)

100.00 USD = 91.85 EUR
\`\`\`

---

## Extension Ideas

- Add a \`--list\` flag that shows all available currency codes
- Accept multiple target currencies at once: \`100 USD EUR GBP JPY\`
- Build an interactive REPL loop that keeps running until the user types \`exit\`
- Display the exchange rate itself, not just the converted amount
- Colour code the output — green if the result is more than the input, red if less
`,
};
