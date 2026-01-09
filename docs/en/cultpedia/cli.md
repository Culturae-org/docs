# Cultpedia CLI Tool

Cultpedia provides a command-line interface (CLI) tool written in Go to facilitate dataset management, validation, and contribution.

## Installation

See [Getting Started](./getting-started) for installation instructions.

## Validations

The tool allows validating local data integrity:

```bash
# Check validity of all questions and metadata
./cultpedia validate

# Check for duplicate questions
./cultpedia check-duplicates

# Check that no translation is missing
./cultpedia check-translations
```

## Interactive Mode (TUI)

To easily add or edit questions, run the tool without arguments:

```bash
./cultpedia
```

This will open a terminal user interface (TUI) guiding you to:

1. Validate your new question (from `datasets/new-question.json`).
2. Automatically add it to the main `questions.ndjson` file.

![TUI Demo](https://github.com/Culturae-org/cultpedia/raw/main/docs/cultpedia.gif)

## Initialize a New Dataset

If you want to create your own dataset compatible with the Cultpedia format:

```bash
./cultpedia init {dataset-name}
```
