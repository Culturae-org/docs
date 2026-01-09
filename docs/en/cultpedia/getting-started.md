# Getting Started with Cultpedia

Welcome to the Cultpedia documentation! This section will guide you to start using and contributing to our educational question repository.

## Installation and Configuration

### Prerequisites

- **Git**
- **Go 1.24+**
- **Text Editor**
- **Nix** (Recommended)

### Clone the repository

Before cloning the repository, you must fork the repository on GitHub.

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/cultpedia.git
cd cultpedia
```

Replace `YOUR_USERNAME` with your GitHub username.

### Configure environment

#### Option 1: With Nix (Recommended)

```bash
# Install Nix if necessary
# Then configure the environment
direnv allow
# or
nix develop

# The environment automatically includes:
# - Go 1.24
# - Compiled cultpedia binary
# - Necessary dependencies
```

#### Option 2: Via Release (Binary)

Download the latest version for your system on the [Releases page](https://github.com/Culturae-org/cultpedia/releases).
Extract the archive and place the `cultpedia` binary at the root of the repository.

#### Option 3: Manual Installation

To install Go and compile yourself:
[Official Go installation documentation](https://go.dev/doc/install)

## Practical First Steps

### 1. Explore existing data

```bash
# Display the first questions
head -5 datasets/general-knowledge/questions.ndjson

# Count the number of questions
wc -l datasets/general-knowledge/questions.ndjson

# Check data validity
./cultpedia validate
```

### 2. Test the CLI tool

```bash
# Display help
./cultpedia --help

# Check duplicates
./cultpedia check-duplicates

# Check translations
./cultpedia check-translations
```

### 3. Create your first question

```bash
# Edit with your favorite editor
code datasets/new-question.json

# Validate with TUI tool
./cultpedia
```

1. **Learn the format**: Check [Data Format](./format)
2. **Discover the CLI tool**: Go to [CLI Tool](./cli)
3. **Contribute**: Follow the [Contribution Guide](./contributing)
