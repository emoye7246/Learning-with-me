export const projectCurrencyConverter = {
  id: "project-currency-converter",
  title: "Project: Currency Converter",

  article: `
## Overview

Build a currency converter CLI that fetches live exchange rates.

The user enters an amount, a source currency, and a target currency. The app returns the converted amount using real-time data.

---

## Functional Requirements

Your app must:

- [ ] Accept source currency, target currency, and amount (via input or args)
- [ ] Fetch live exchange rates from a free API
- [ ] Display the converted amount with proper formatting
- [ ] Show the exchange rate used
- [ ] Handle invalid currency codes gracefully
- [ ] Handle API failures gracefully
- [ ] Support at least 5 common currencies (USD, EUR, GBP, JPY, CAD)

---

## API Options (no key required)

**ExchangeRate-API (free tier):**
\`\`\`
https://open.er-api.com/v6/latest/USD
\`\`\`
Returns all rates relative to USD.

**Frankfurter (no key, clean API):**
\`\`\`
https://api.frankfurter.app/latest?from=USD&to=EUR
https://api.frankfurter.app/latest?from=USD
\`\`\`

Start with Frankfurter — simple and reliable.

---

## Suggested File Structure

\`\`\`text
currency_converter/
  main.py
  converter.py
  display.py
\`\`\`

---

## Implementation Milestones

1. Call the API and print the raw rates.
2. Extract the rate for the target currency.
3. Calculate: converted = amount * rate.
4. Display result formatted to 2 decimal places.
5. Add input validation (invalid currency codes).
6. Add error handling for network failures.
7. Accept arguments via input() or sys.argv.

---

## Testing Checklist

- [ ] USD → EUR returns a reasonable rate
- [ ] EUR → JPY returns correct converted amount
- [ ] Invalid currency code gives a clear error message
- [ ] Amount of 0 handled correctly
- [ ] No internet gives a graceful error message
- [ ] Output is formatted: "100.00 USD = 91.23 EUR (rate: 0.9123)"

---

## Optional Extensions

- [ ] Show all available currencies with their codes
- [ ] Cache exchange rates for 1 hour to avoid repeat calls
- [ ] Accept multiple conversions in one session
- [ ] Convert one source to multiple targets at once

---

## Submission Requirements

Entry file: \`main.py\`

\`\`\`bash
python main.py 100 USD EUR
\`\`\`

Or interactive:

\`\`\`bash
python main.py
Amount: 100
From: USD
To: EUR
\`\`\`

---

## What This Project Proves

You can fetch live financial data, perform calculations on it, handle error cases professionally, and build a tool that feels production-ready.
`,

  support: {
    intro: `
Level 1 → Level 2 → Blueprint → Example.
Build it yourself before reading the example.
    `.trim(),

    level1Nudges: [
      "What does the Frankfurter API return for a base currency?",
      "How will you extract just the rate for your target currency?",
      "What should happen if the user enters 'XYZ' as a currency code?",
      "How will you format the final output so it's clear and readable?",
      "What happens to the conversion if you mix up source and target?",
    ],

    level2Hints: [
      "Frankfurter returns: {'rates': {'EUR': 0.91, 'GBP': 0.79, ...}}. Access with data['rates'][target].",
      "Check if target_currency is in data['rates'] before accessing — if not, print error.",
      "Convert: result = amount * rate. Format: f'{amount:.2f} {src} = {result:.2f} {target}'.",
      "For sys.argv: amount=float(sys.argv[1]), src=sys.argv[2].upper(), target=sys.argv[3].upper().",
    ],

    blueprint: [
      "In converter.py: define get_rates(base_currency) → dict of rates or None.",
      "Handle ConnectionError, Timeout, HTTPError inside get_rates.",
      "Define convert(amount, from_currency, to_currency) → float or None.",
      "Inside convert: call get_rates(from_currency), extract target rate, multiply.",
      "In display.py: format and print the result with rate shown.",
      "In main.py: get inputs, call convert, call display.",
    ],

    debuggingGuide: [
      {
        problem: "I get KeyError on data['rates']['GBP'].",
        hint: "Print data['rates'] to see what's available. Some APIs use different currency codes (e.g. EUR vs EURO).",
      },
      {
        problem: "My conversion is 100x off for JPY.",
        hint: "Check if the API returns rates relative to the source currency or always relative to USD. Read the docs.",
      },
      {
        problem: "float('USD') throws ValueError.",
        hint: "Make sure you're converting the amount (position 1), not the currency code.",
      },
    ],

    revealSolutionWarning: `
Reference implementation. If yours works and meets the checklist, it's valid.
    `.trim(),

    exampleSolution: `import sys
import requests


def get_rates(base):
    try:
        response = requests.get(
            f"https://api.frankfurter.app/latest",
            params={"from": base},
            timeout=10,
        )
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"API error: {e}")
        return None


def convert(amount, from_currency, to_currency):
    from_currency = from_currency.upper()
    to_currency = to_currency.upper()

    if from_currency == to_currency:
        return amount, 1.0

    data = get_rates(from_currency)
    if not data:
        return None, None

    rates = data.get("rates", {})
    if to_currency not in rates:
        print(f"Unknown currency: {to_currency}")
        print(f"Available: {', '.join(sorted(rates.keys()))}")
        return None, None

    rate = rates[to_currency]
    return amount * rate, rate


if __name__ == "__main__":
    if len(sys.argv) == 4:
        amount = float(sys.argv[1])
        src = sys.argv[2]
        target = sys.argv[3]
    else:
        amount = float(input("Amount: "))
        src = input("From currency: ").strip()
        target = input("To currency: ").strip()

    result, rate = convert(amount, src, target)
    if result is not None:
        print(f"{amount:.2f} {src.upper()} = {result:.2f} {target.upper()} (rate: {rate:.4f})")`,

    upgrades: {
      cacheBlueprint: [
        "Store rates and timestamp in a file (rates_cache.json).",
        "On startup, check if cache is less than 1 hour old.",
        "Use cached rates if fresh, fetch new if stale.",
      ],
      multiTargetBlueprint: [
        "Accept multiple target currencies: 100 USD EUR GBP JPY.",
        "Loop through targets, print one line per conversion.",
      ],
    },
  },
};
