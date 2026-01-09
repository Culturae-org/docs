# Data Format Specification

Cultpedia uses standardized JSON formats for its datasets. Data is stored in Newline-Delimited JSON (NDJSON) files for efficient streaming and optimized version control.

## Questions Dataset

The `general-knowledge` dataset contains quiz questions and country data in multiple languages.

### Question Structure

For the full schema, see [question.schema](https://github.com/Culturae-org/cultpedia/blob/main/schemas/question.schema.json).

Each question is a JSON object with the following fields:

- `kind`: Always `"question"` for now
- `version`: Version string (e.g., `"1.0"`)
- `slug`: Unique identifier (see Slug Format below)
- `theme`: Object with `slug` (e.g., `{"slug": "history"}`)
- `subthemes`: Array of objects with `slug`
- `tags`: Array of objects with `slug`
- `qtype`: `"single_choice"` or `"true_false"`
- `difficulty`: `"beginner"`, `"intermediate"`, `"advanced"`, or `"pro"`
- `estimated_seconds`: Number (time to answer, e.g., 20)
- `points`: Number (score weight, e.g., 1.0 - between 0.5 and 5.0)
- `shuffle_answers`: Boolean (mix answer order)
- `i18n`: Object with translations for `fr`, `en`, `es`:
  - Each language has `title`, `stem`, `explanation`
- `answers`: Array of answer objects:
  - `slug`: Unique answer identifier
  - `is_correct`: Boolean (exactly one `true`)
  - `i18n`: Object with `label` for each language
- `sources`: Array of URLs (verifiable references)

---

### Question Types

#### Single Choice (`single_choice`)

Standard multiple choice questions with exactly **4 answers**.

- One answer must be correct (`is_correct: true`)
- Answer slugs can be any valid identifier

#### True/False (`true_false`)

Binary questions with exactly **2 answers**.

- One answer must be correct (`is_correct: true`)
- Answer slugs must be exactly `"true"` and `"false"`
- The `shuffle_answers` field is ignored for this type

---

### Slug Format

Recommended: `{theme}-{subtheme}-{key-element}-{specific-detail}`

- `{theme}`: Theme slug (e.g., `"art"`, `"science"`)
- `{subtheme}`: Primary subtheme (e.g., `"renaissance"`, `"chemistry"`)
- `{key-element}`: Main element (e.g., `"artist name"`, `"chemical element"`)
- `{specific-detail}`: Unique detail (e.g., `"artwork"`, `"atomic number"`)

Examples:

- `art-renaissance-botticelli-birth-of-venus`
- `science-chemistry-element-hydrogen-atomic-number`

> [!IMPORTANT]
> Slugs must be unique, lowercase, and use hyphens.

## Geography Dataset

The geography dataset is a **reference dataset** (not quiz questions) containing geographic data for map games, flag quizzes, capital quizzes, etc.

### Country Structure

Each country in `countries.ndjson` is a JSON object. See schema [countrie.schema](https://github.com/Culturae-org/cultpedia/blob/main/schemas/countrie.schema.json) or an example [countrie.example](https://github.com/Culturae-org/cultpedia/blob/main/schemas/countrie.example.json).
