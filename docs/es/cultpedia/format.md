# Especificación del Formato de Datos

Cultpedia utiliza formatos JSON estandarizados para sus datasets. Los datos se almacenan en archivos Newline-Delimited JSON (NDJSON) para un streaming eficiente y control de versiones optimizado.

## Dataset de Preguntas

El dataset `general-knowledge` contiene preguntas de cuestionarios y datos de países en varios idiomas.

### Estructura de una Pregunta

Para el esquema completo, ver [question.schema](https://github.com/Culturae-org/cultpedia/blob/main/schemas/question.schema.json).

Cada pregunta es un objeto JSON con los siguientes campos:

- `kind`: Siempre `"question"` por el momento
- `version`: Cadena de versión (ej: `"1.0"`)
- `slug`: Identificador único (ver Formato del Slug abajo)
- `theme`: Objeto con `slug` (ej: `{"slug": "history"}`)
- `subthemes`: Array de objetos con `slug`
- `tags`: Array de objetos con `slug`
- `qtype`: `"single_choice"` o `"true_false"`
- `difficulty`: `"beginner"`, `"intermediate"`, `"advanced"`, o `"pro"`
- `estimated_seconds`: Número (tiempo para responder, ej: 20)
- `points`: Número (peso de la puntuación, ej: 1.0 - entre 0.5 y 5.0)
- `shuffle_answers`: Booleano (mezclar orden de respuestas)
- `i18n`: Objeto con traducciones para `fr`, `en`, `es`:
  - Cada idioma tiene `title`, `stem`, `explanation`
- `answers`: Array de objetos respuesta:
  - `slug`: Identificador único de respuesta
  - `is_correct`: Booleano (exactamente un `true`)
  - `i18n`: Objeto con `label` para cada idioma
- `sources`: Array de URLs (referencias verificables)

---

### Tipos de Preguntas

#### Opción Única (`single_choice`)

Preguntas de opción múltiple estándar con exactamente **4 respuestas**.

- Una respuesta debe ser correcta (`is_correct: true`)
- Los slugs de respuesta pueden ser cualquier identificador válido

#### Verdadero/Falso (`true_false`)

Preguntas binarias con exactamente **2 respuestas**.

- Una respuesta debe ser correcta (`is_correct: true`)
- Los slugs de respuesta deben ser exactamente `"true"` y `"false"`
- El campo `shuffle_answers` se ignora para este tipo

---

### Formato del Slug

Recomendado: `{theme}-{subtheme}-{key-element}-{specific-detail}`

- `{theme}`: Slug del tema (ej: `"art"`, `"science"`)
- `{subtheme}`: Subtema principal (ej: `"renaissance"`, `"chemistry"`)
- `{key-element}`: Elemento principal (ej: `"artist name"`, `"chemical element"`)
- `{specific-detail}`: Detalle único (ej: `"artwork"`, `"atomic number"`)

Ejemplos:

- `art-renaissance-botticelli-birth-of-venus`
- `science-chemistry-element-hydrogen-atomic-number`

> [!IMPORTANT]
> Los slugs deben ser únicos, en minúsculas y usar guiones.

## Dataset Geográfico

El dataset geográfico es un **dataset de referencia** (no preguntas de cuestionario) que contiene datos geográficos para juegos de mapas, cuestionarios de banderas, cuestionarios de capitales, etc.

### Estructura de un País

Cada país en `countries.ndjson` es un objeto JSON. Ver el esquema [countrie.schema](https://github.com/Culturae-org/cultpedia/blob/main/schemas/countrie.schema.json) o un ejemplo [countrie.example](https://github.com/Culturae-org/cultpedia/blob/main/schemas/countrie.example.json).
