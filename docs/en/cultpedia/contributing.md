# Contributing to Cultpedia

Thank you for your interest in contributing to Cultpedia! Your contributions help improve the quality and diversity of the content.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Contributing Questions](#contributing-questions)

## Code of Conduct

By participating, you agree to maintain a respectful and inclusive environment. Harassment or discriminatory behavior will not be tolerated.

## Getting Started

You must **Fork the repository** on GitHub and clone your fork to your local machine.

```bash
git clone https://github.com/YOUR_USERNAME/cultpedia.git
cd cultpedia
```

Replace `YOUR_USERNAME` with your GitHub username.

### Build the cultpedia tool

You have two ways to get the **cultpedia** tool: use the pre-built binary or build it from source.

- [Use Release](#use-release)
- [Manual Build](#manual-build)

#### Use Release

If you want to use the pre-built binaries, go to the [Releases page](https://github.com/Culturae-org/cultpedia/releases). Download the ZIP file for your platform, extract it, and run the `cultpedia` binary (or `cultpedia.exe` on Windows).

> [!WARNING]
> You must move the binary into the cloned repository folder to use it with datasets.

#### Manual Build

**Linux/macOS:**

```bash
./build.sh
```

**Windows:**

```bash
build.bat
```

**Manual build (Go):**

```bash
go build -o cultpedia ./cmd
```

> [!TIP]
> If you use **Nix**, you can configure the development environment (the binary will be built automatically).

**Familiarize yourself** with the [data format](./format).

## Contributing Questions

### Quick Start

> [!IMPORTANT]
> Do not edit questions.ndjson files directly. Use the interactive TUI tool described below!

1. Ensure you have done the **previous steps**:

   - **Fork**
   - **Clone**
   - **Build tool**

2. **Choose your question type and edit the appropriate template:**

   - **Standard questions (4 choices):** Edit [`datasets/new-question.json`](https://github.com/Culturae-org/cultpedia/blob/main/datasets/new-question.json)
   - **True/False questions (2 choices):** Edit [`datasets/new-question-true-false.json`](https://github.com/Culturae-org/cultpedia/blob/main/datasets/new-question-true-false.json)

   Guidelines:

   - Create your question in the chosen template file
   - Follow these [guidelines](./format) for question content
   - Each line must be valid JSON
   - Use [question.example.json](https://github.com/Culturae-org/cultpedia/blob/main/schemas/question.example.json) as a template

3. Run the TUI tool to validate and add your question, follow steps **Validate new question** and **Add question to dataset**.

![Interactive Tool](https://github.com/Culturae-org/cultpedia/raw/main/docs/cultpedia.gif)

### Add a question

When you have created or edited your question in `datasets/new-question.json`, use the interactive TUI tool to add it to the main dataset.

![add_question](https://github.com/Culturae-org/cultpedia/raw/main/docs/add_question.png)

> [!WARNING]
> Do not directly edit **.ndjson** and **manifest.json** files.

3. **Push to your fork** and **create a Pull Request**.

   Ensure you have the latest version of the main branch before pushing your changes.

   After adding the question with the TUI tool, follow these steps:

   1. Create a new branch for your contribution:

      ```bash
      git checkout -b add-question-{slug}
      ```

      (Replace `{slug}` with the real slug of your question)

   2. Add the updated dataset file:

      ```bash
      git add datasets/general-knowledge/questions.ndjson
      ```

   3. Commit your changes:

      ```bash
      git commit -m "feat: add {slug}"
      ```

   4. Push to your fork:

      ```bash
      git push origin add-question-{slug}
      ```

   5. Create a Pull Request on GitHub from your branch to the main repository.

4. **CI will automatically**:
   - ✓ Validate all questions
   - ✓ Check for duplicates
   - ✓ Verify all translations
   - ✓ Reject if unwanted files modified

### Important Rules

- **Only modify** `datasets/general-knowledge/questions.ndjson`
- **Do not commit** manifest.json, themes.ndjson, subthemes.ndjson, or tags.ndjson
- These files are updated automatically by CI
