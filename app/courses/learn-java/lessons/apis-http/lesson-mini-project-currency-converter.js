export const lessonMiniProjectCurrencyConverter = {
  id: "mini-project-currency-converter",
  title: "Mini Project: Currency Converter with Live Exchange Rates",
  hasChallenge: false,
  article: `
## Mini Project: Currency Converter with Live Exchange Rates

Build a currency converter that fetches live exchange rates and converts amounts between currencies.

---

## Free API: exchangerate-api.com

The free tier at exchangerate-api.com requires registration but gives you 1,500 calls/month.

Alternatively, use the fully free (no key required) endpoint at \`open.er-api.com\`:

\`\`\`
GET https://open.er-api.com/v6/latest/USD
\`\`\`

Response:
\`\`\`json
{
  "result": "success",
  "base_code": "USD",
  "rates": {
    "EUR": 0.9201,
    "GBP": 0.7891,
    "JPY": 149.32,
    "CAD": 1.3640
  }
}
\`\`\`

---

## What You'll Build

\`\`\`
$ java Main 100 USD EUR
100.00 USD = 92.01 EUR
(Rate: 1 USD = 0.9201 EUR)
(Source: open.er-api.com, updated: 2024-03-15)

$ java Main 250 GBP JPY
250.00 GBP = 47,307.85 JPY
(Rate: 1 GBP = 189.23 JPY)
\`\`\`

---

## Step 1: The Exchange Rate Model

\`\`\`java
import com.google.gson.annotations.SerializedName;
import java.util.Map;

public class ExchangeRateResponse {
    public String result;

    @SerializedName("base_code")
    public String baseCode;

    public Map<String, Double> rates;

    @SerializedName("time_last_update_utc")
    public String lastUpdated;

    public boolean isSuccess() {
        return "success".equals(result);
    }
}
\`\`\`

---

## Step 2: The Exchange Rate Client

\`\`\`java
import com.google.gson.Gson;
import java.io.IOException;
import java.net.URI;
import java.net.http.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.Map;

public class ExchangeRateClient {
    private static final String BASE_URL = "https://open.er-api.com/v6/latest/";
    private final HttpClient http;
    private final Gson gson;

    // Simple in-memory cache: base currency → rates
    private final Map<String, ExchangeRateResponse> cache = new ConcurrentHashMap<>();

    public ExchangeRateClient() {
        this.http = HttpClient.newHttpClient();
        this.gson = new Gson();
    }

    public ExchangeRateResponse getRates(String baseCurrency)
            throws IOException, InterruptedException {

        String base = baseCurrency.toUpperCase();

        // Return cached result if available
        if (cache.containsKey(base)) {
            return cache.get(base);
        }

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(BASE_URL + base))
            .GET()
            .build();

        HttpResponse<String> response = http.send(request,
            HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() != 200) {
            throw new RuntimeException("API error: " + response.statusCode());
        }

        ExchangeRateResponse rates = gson.fromJson(response.body(), ExchangeRateResponse.class);

        if (!rates.isSuccess()) {
            throw new RuntimeException("API returned error result for currency: " + base);
        }

        cache.put(base, rates);  // cache for subsequent calls
        return rates;
    }
}
\`\`\`

---

## Step 3: The Converter Logic

\`\`\`java
public class CurrencyConverter {
    private final ExchangeRateClient client;

    public CurrencyConverter() {
        this.client = new ExchangeRateClient();
    }

    public void convert(double amount, String from, String to)
            throws IOException, InterruptedException {

        String fromUpper = from.toUpperCase();
        String toUpper   = to.toUpperCase();

        ExchangeRateResponse rates = client.getRates(fromUpper);

        if (!rates.rates.containsKey(toUpper)) {
            System.err.println("Unknown currency: " + toUpper);
            System.err.println("Supported: " + rates.rates.keySet());
            return;
        }

        double rate   = rates.rates.get(toUpper);
        double result = amount * rate;

        System.out.printf("%.2f %s = %,.2f %s%n", amount, fromUpper, result, toUpper);
        System.out.printf("(Rate: 1 %s = %.4f %s)%n", fromUpper, rate, toUpper);

        if (rates.lastUpdated != null) {
            System.out.printf("(Source: open.er-api.com, updated: %s)%n",
                rates.lastUpdated.substring(0, 16));
        }
    }
}
\`\`\`

---

## Step 4: Main

\`\`\`java
public class Main {
    public static void main(String[] args) {
        if (args.length != 3) {
            System.out.println("Usage: java Main <amount> <from> <to>");
            System.out.println("Example: java Main 100 USD EUR");
            System.exit(1);
        }

        double amount;
        try {
            amount = Double.parseDouble(args[0]);
        } catch (NumberFormatException e) {
            System.err.println("Invalid amount: " + args[0]);
            System.exit(1);
            return;
        }

        String from = args[1];
        String to   = args[2];

        try {
            new CurrencyConverter().convert(amount, from, to);
        } catch (Exception e) {
            System.err.println("Conversion failed: " + e.getMessage());
            System.exit(1);
        }
    }
}
\`\`\`

---

## Stretch Goals

- Convert between multiple target currencies at once: \`java Main 100 USD EUR GBP JPY\`
- Show historical rates (if the API supports it)
- Add a \`--list\` flag to show all supported currencies

---

## What You Practiced

- Calling a real, publicly available API without authentication
- Caching API responses to avoid redundant calls
- Parsing JSON with nested structures
- Validating user input and giving helpful error messages

This completes Course 11 — APIs & HTTP Requests.
`,
};
