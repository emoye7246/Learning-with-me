export const trackAiMlFoundations = {
  id: "track-ai-ml-foundations",
  title: "Track: AI / ML Foundations",

  article: `
## AI / ML Foundations

This track is about understanding and using machine learning — starting from the practical side.

You don't need a math degree to get value from this track. You need to understand what ML models do, how to train and evaluate them, and how to use pre-trained models to solve real problems.

---

## Two Paths in This Track

**Path A — Traditional ML (scikit-learn)**
Classification, regression, clustering. You provide labelled data, train a model, evaluate its accuracy, make predictions.

**Path B — LLMs & Pre-trained Models (HuggingFace, APIs)**
Use models that have already been trained. Pass them text, images, or audio. Get back outputs. No training data required.

Most beginners start with Path A (to understand the concepts) and move to Path B (to do practical work).

---

## What You'll Build

- Classifiers that predict categories from input data
- Regression models that predict numerical values
- Text processing pipelines using pre-trained NLP models
- Tools that call LLM APIs (OpenAI, Anthropic) to automate reasoning tasks
- Scripts that embed text, cluster data, or generate summaries

---

## The Core Libraries

\`\`\`text
scikit-learn     — Classical ML: classification, regression, clustering, pipelines
numpy / pandas   — Data preparation (prerequisite for ML work)
matplotlib       — Visualize model results and training data
transformers     — HuggingFace: pre-trained models for NLP, vision, audio
openai / anthropic — SDKs for LLM APIs
sentence-transformers — Fast, practical text embeddings
\`\`\`

---

## A Taste of the Work

Train a simple classifier on labelled data:

\`\`\`python
from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = RandomForestClassifier()
model.fit(X_train, y_train)

predictions = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, predictions):.2%}")
\`\`\`

Use a pre-trained model with HuggingFace:

\`\`\`python
from transformers import pipeline

classifier = pipeline("sentiment-analysis")
result = classifier("This course is excellent and worth every minute.")
print(result)  # [{'label': 'POSITIVE', 'score': 0.9998}]
\`\`\`

---

## Why This Track Is Valuable

AI is no longer a specialist field. Developers who can integrate ML models into real software — or use LLM APIs effectively — are in extremely high demand.

Understanding how models work conceptually changes how you use them in practice. This track gives you that foundation.

---

## Where to Start

1. Finish the **Data Analysis** track first (or at least learn pandas basics).
2. Install scikit-learn: \`pip install scikit-learn\`
3. Work through a simple classification problem with a built-in dataset.
4. Understand: training data, train/test split, model fitting, evaluation.
5. Then explore HuggingFace or an LLM API when you're ready for pre-trained models.

---

## Recommended Path

1. Learn the ML workflow: data → split → train → evaluate → predict.
2. Try classification (predict a category) and regression (predict a number).
3. Learn what overfitting is and how to prevent it.
4. Experiment with HuggingFace pipelines on text classification.
5. Integrate an LLM API into a real tool you build.

---

## What you just learned

- What the AI / ML Foundations track covers
- The two main paths: classical ML vs pre-trained models
- What real ML code looks like
- Where to start

---

## What comes next

Decide whether to start with scikit-learn or pre-trained models. Both paths are valid — the right one depends on your goals.
`,
};
