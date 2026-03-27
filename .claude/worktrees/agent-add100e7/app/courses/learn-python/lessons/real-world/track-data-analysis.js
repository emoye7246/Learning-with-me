export const trackDataAnalysis = {
  id: "track-data-analysis",
  title: "Track: Data Analysis",

  article: `
## Data Analysis

This track is about understanding data by working with it programmatically.

Raw data is usually messy. It has missing values, inconsistent formats, and columns that make no sense until you've spent time with them. This track teaches you to load that data, clean it, transform it, summarize it, and present findings clearly.

---

## What You'll Build

- Scripts that load and clean messy CSV or Excel data
- Summaries and statistics from real datasets
- Charts and visualizations that reveal patterns
- Data pipelines that transform raw input into clean output
- Reports that combine code, calculations, and narrative

---

## The Core Libraries

\`\`\`text
pandas       — Load, clean, filter, group, and reshape tabular data
matplotlib   — Create charts and plots
numpy        — Numerical operations on arrays (often used with pandas)
csv / json   — Built-in parsing for simple data files
requests     — Fetch data from APIs
openpyxl     — Read and write Excel files
Jupyter      — Interactive notebooks (code + output + text together)
\`\`\`

---

## A Taste of the Work

Load a CSV, compute a summary, and display the top results:

\`\`\`python
import pandas as pd

df = pd.read_csv("sales.csv")

# Clean it
df = df.dropna(subset=["revenue"])
df["revenue"] = pd.to_numeric(df["revenue"], errors="coerce")

# Summarize by region
summary = df.groupby("region")["revenue"].sum().sort_values(ascending=False)
print(summary.head(10))
\`\`\`

Create a bar chart:

\`\`\`python
import matplotlib.pyplot as plt

summary.plot(kind="bar", title="Revenue by Region")
plt.tight_layout()
plt.savefig("revenue_by_region.png")
\`\`\`

---

## Why This Track Is Valuable

Data literacy is one of the most transferable technical skills. Whether you work in software, marketing, finance, science, or operations, the ability to load a dataset and extract insight from it is immediately useful.

This track also prepares you for the AI/ML track — machine learning is built on top of the same data foundations.

---

## Where to Start

1. Install the tools: \`pip install pandas matplotlib\`
2. Find a dataset — [Kaggle](https://www.kaggle.com/datasets), government open data portals, or export from any spreadsheet you use at work.
3. Load it with \`pd.read_csv()\` and run \`df.head()\` and \`df.describe()\`.
4. Answer one question about the data.
5. Visualize the answer.

---

## Recommended Path

1. Learn pandas fundamentals: loading, filtering, grouping, reshaping.
2. Learn matplotlib basics: line charts, bar charts, scatter plots.
3. Work through a real dataset end-to-end: load → clean → analyze → visualize → report.
4. Explore Jupyter notebooks for interactive exploration.
5. Try a dataset from a domain you care about.

---

## What you just learned

- What the Data Analysis track covers
- Which libraries you'll use
- What real data analysis code looks like
- Where to start

---

## What comes next

Choose a dataset and start exploring. The capstone section includes a data pipeline brief.
`,
};
