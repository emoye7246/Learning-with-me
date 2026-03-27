export const lessonMiniProjectMultiModuleApp = {
  id: "mini-project-multi-module-app",
  title: "Mini Project: Multi-Module Console App with External Dependency",
  hasChallenge: false,
  article: `
## Mini Project: Multi-Module Console App with External Dependency

Build a console-based currency lookup app that uses an external library (Gson) to parse JSON data. This introduces the full Maven workflow: external dependencies, structured code, and a packaged JAR.

---

## What You'll Build

A CLI app that displays exchange rates for a base currency:

\`\`\`
Currency Lookup
===============
Enter base currency (e.g., USD): USD

Exchange rates for USD:
  EUR : 0.9201
  GBP : 0.7891
  JPY : 149.32
  CAD : 1.3640
\`\`\`

For simplicity, rates are loaded from a local JSON file (not a live API — that's covered in Course 11).

---

## Project Structure

\`\`\`
currency-lookup/
├── pom.xml
└── src/
    ├── main/
    │   ├── java/com/example/currency/
    │   │   ├── Main.java
    │   │   ├── model/ExchangeRates.java
    │   │   └── service/CurrencyService.java
    │   └── resources/
    │       └── rates.json
    └── test/
        └── java/com/example/currency/
            └── CurrencyServiceTest.java
\`\`\`

---

## Step 1: pom.xml with Gson Dependency

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>currency-lookup</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>21</maven.compiler.source>
        <maven.compiler.target>21</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
            <version>2.10.1</version>
        </dependency>
    </dependencies>
</project>
\`\`\`

---

## Step 2: rates.json (in src/main/resources/)

\`\`\`json
{
  "base": "USD",
  "rates": {
    "EUR": 0.9201,
    "GBP": 0.7891,
    "JPY": 149.32,
    "CAD": 1.3640,
    "AUD": 1.5320,
    "CHF": 0.8901
  }
}
\`\`\`

---

## Step 3: The Model

\`\`\`java
// model/ExchangeRates.java
package com.example.currency.model;

import java.util.Map;

public class ExchangeRates {
    private String base;
    private Map<String, Double> rates;

    public String getBase()              { return base; }
    public Map<String, Double> getRates() { return rates; }
}
\`\`\`

---

## Step 4: The Service

\`\`\`java
// service/CurrencyService.java
package com.example.currency.service;

import com.example.currency.model.ExchangeRates;
import com.google.gson.Gson;
import java.io.InputStream;
import java.io.InputStreamReader;

public class CurrencyService {
    private final ExchangeRates rates;

    public CurrencyService() {
        InputStream in = getClass().getClassLoader()
            .getResourceAsStream("rates.json");

        if (in == null) {
            throw new RuntimeException("rates.json not found in resources");
        }
        this.rates = new Gson().fromJson(new InputStreamReader(in), ExchangeRates.class);
    }

    public void printRatesFor(String baseCurrency) {
        if (!rates.getBase().equalsIgnoreCase(baseCurrency)) {
            System.out.println("Only " + rates.getBase() + " is supported in this demo.");
            return;
        }

        System.out.println();
        System.out.println("Exchange rates for " + baseCurrency + ":");
        rates.getRates().forEach((currency, rate) ->
            System.out.printf("  %-6s: %.4f%n", currency, rate));
    }
}
\`\`\`

---

## Step 5: Main

\`\`\`java
// Main.java
package com.example.currency;

import com.example.currency.service.CurrencyService;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Currency Lookup");
        System.out.println("===============");

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter base currency (e.g., USD): ");
        String input = scanner.nextLine().trim().toUpperCase();

        CurrencyService service = new CurrencyService();
        service.printRatesFor(input);
    }
}
\`\`\`

---

## Step 6: Build and Run

\`\`\`bash
mvn compile
mvn exec:java -Dexec.mainClass="com.example.currency.Main"
\`\`\`

---

## Stretch Goals

- Load rates from multiple files (EUR base, GBP base)
- Allow conversion: "How much is 100 USD in EUR?"
- Add a simple test that verifies rates are loaded correctly
- Add a new currency to the JSON and verify the app picks it up

---

## What You Practiced

- Adding an external dependency (Gson) to pom.xml
- Loading a resource file from the classpath at runtime
- Parsing JSON with Gson
- Layering code into model, service, and main
- Building a complete Maven project end to end

This completes Course 8 — Project Structure & Build Tools.
`,
};
