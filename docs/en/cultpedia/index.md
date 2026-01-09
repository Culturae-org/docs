# Cultpedia

Cultpedia is a repository of standardized and multilingual questions and geography data primarily for the Culturae platform. This project provides schema-validated, high-quality information across various themes.

The goal of Cultpedia is to offer a centralized question bank that can be easily integrated into different learning management systems (LMS) and quiz applications.

> [!WARNING]
> As mentioned in the Culturae section, the main server is not yet available.

## Features

- **Multilingual Support**: English, French, and Spanish.
- **Schema Validation**: JSON Schema ensuring data format.
- **Versioning**: Automatic versioning with manifest updates.
- **Interactive CLI**: Helper tool to add, validate, and manage questions.
- **SHA256 Checksums**: Data integrity verification for imports.
- **Full compatibility with Culturae**: Seamless integration with the Culturae platform.

## API

Cultpedia provides a REST API.

The API is available at [api.culturae.me](https://api.culturae.me).

**Available endpoints:**

- `GET /api/` - API information and statistics
- `GET /api/questions` - All questions
- `GET /api/geography/countries` - All countries
- `GET /api/geography/flags/{code}` - Country flag (SVG)

**[Full API Documentation](https://github.com/Culturae-org/cultpedia/blob/main/docs/API.md)**

## Importing Datasets

> [!NOTE]
> To import datasets into Culturae (or any compatible platform).

Culturae uses `manifest.json` files to import datasets with all necessary metadata and sha256 checksums.

### Import General Knowledge Dataset

```
https://raw.githubusercontent.com/Culturae-org/cultpedia/refs/heads/main/datasets/general-knowledge/manifest.json
```

### Import Geography Dataset

```
https://raw.githubusercontent.com/Culturae-org/cultpedia/refs/heads/main/datasets/geography/manifest.json
```

## Project Structure

GITHUB : https://github.com/Culturae-org/cultpedia

```
.
├── build.bat                   # Build script for Windows
├── build.sh                    # Build script for Unix
├── cmd/
│   └── main.go                 # CLI entry point
├── datasets/
│   ├── general-knowledge/
│   │   ├── manifest.json       # Metadata and hashes
│   │   ├── questions.ndjson    # Main questions file
│   │   ├── subthemes.ndjson    # Subthemes
│   │   ├── tags.ndjson         # Tags
│   │   └── themes.ndjson       # Available themes
│   ├── new-question.json       # New question template
│   │
│   └── geography/
│       ├── manifest.json       # Metadata and hashes
│       ├── countries.ndjson    # Main Countries file
│       ├── continents.ndjson   # Continents file
│       ├── regions.ndjson      # Regions file
│       └── assets/
│           └── flags/
│               └── svg/        # Country flags (SVG format)
├── docs/
│   ├── CONTRIBUTING.md         # Contribution guidelines
│   ├── FORMAT.md               # Data format specification
│   └── MEDIA                   # All Media
│
├── flake.lock                  # Nix lock file
├── flake.nix                   # Nix configuration
├── go.mod                      # Go module
├── go.sum                      # Go sum file
│
├── internal/
│   ├── actions/
│   │   └── actions.go          # Actions logic
│   ├── checks/
│   │   └── checks.go           # Validation checks
│   ├── models/
│   │   └── question.go         # Data models
│   ├── ui/
│   │   └── ui.go               # TUI interface
│   └── utils/
│       └── utils.go            # Utilities
|
├── schemas/
│   ├── manifest-geography.example.json  # Geography manifest example
│   ├── manifest-geography.schema.json   # Geography manifest schema
│   ├── manifest-questions.example.json  # Questions manifest example
│   ├── manifest-questions.schema.json   # Questions manifest schema
│   ├── question.example.json            # Question example
│   ├── question.schema.json             # Question schema
│   ├── countrie.example.json            # Country example
│   └── countrie.schema.json             # Country schema
```
