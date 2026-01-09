# Cultpedia

Cultpedia es un repositorio de preguntas y datos geográficos estandarizados y multilingües principalmente para la plataforma Culturae. Este proyecto proporciona información de alta calidad, validada por esquema, en varios temas.

El objetivo de Cultpedia es ofrecer un banco de preguntas centralizado que pueda integrarse fácilmente en diferentes sistemas de gestión de aprendizaje (LMS) y aplicaciones de cuestionarios.

> [!WARNING]
> Como se menciona en la sección Culturae, el servidor principal aún no está disponible.

## Características

- **Soporte Multilingüe**: Inglés, Francés y Español.
- **Validación de Esquema**: Esquema JSON que garantiza el formato de los datos.
- **Versionado**: Versionado automático con actualizaciones de manifiesto.
- **CLI Interactivo**: Herramienta de asistencia para agregar, validar y gestionar preguntas.
- **Sumas de comprobación SHA256**: Verificación de integridad de datos para importaciones.
- **Compatibilidad total con Culturae**: Integración perfecta con la plataforma Culturae.

## API

Cultpedia proporciona una API REST.

La API está disponible en [api.culturae.me](https://api.culturae.me).

**Endpoints disponibles:**

- `GET /api/` - Información y estadísticas de la API
- `GET /api/questions` - Todas las preguntas
- `GET /api/geography/countries` - Todos los países
- `GET /api/geography/flags/{code}` - Bandera de un país (SVG)

**[Documentación Completa de la API](https://github.com/Culturae-org/cultpedia/blob/main/docs/API.md)**

## Importación de Datasets

> [!NOTE]
> Para importar datasets en Culturae (o cualquier plataforma compatible).

Culturae utiliza archivos `manifest.json` para importar datasets con todos los metadatos necesarios y sumas de comprobación sha256.

### Importar Dataset de Cultura General

```
https://raw.githubusercontent.com/Culturae-org/cultpedia/refs/heads/main/datasets/general-knowledge/manifest.json
```

### Importar Dataset de Geografía

```
https://raw.githubusercontent.com/Culturae-org/cultpedia/refs/heads/main/datasets/geography/manifest.json
```

## Estructura del Proyecto

GITHUB : https://github.com/Culturae-org/cultpedia

```
.
├── build.bat                   # Script de construcción para Windows
├── build.sh                    # Script de construcción para Unix
├── cmd/
│   └── main.go                 # Punto de entrada CLI
├── datasets/
│   ├── general-knowledge/
│   │   ├── manifest.json       # Metadatos y hashes
│   │   ├── questions.ndjson    # Archivo principal de preguntas
│   │   ├── subthemes.ndjson    # Subtemas
│   │   ├── tags.ndjson         # Etiquetas
│   │   └── themes.ndjson       # Temas disponibles
│   ├── new-question.json       # Plantilla de nueva pregunta
│   │
│   └── geography/
│       ├── manifest.json       # Metadatos y hashes
│       ├── countries.ndjson    # Archivo principal de Países
│       ├── continents.ndjson   # Archivo de Continentes
│       ├── regions.ndjson      # Archivo de Regiones
│       └── assets/
│           └── flags/
│               └── svg/        # Banderas de países (formato SVG)
├── docs/
│   ├── CONTRIBUTING.md         # Pautas de contribución
│   ├── FORMAT.md               # Especificación de formato de datos
│   └── MEDIA                   # Todos los medios
│
├── flake.lock                  # Archivo lock Nix
├── flake.nix                   # Configuración Nix
├── go.mod                      # Módulo Go
├── go.sum                      # Archivo sum Go
│
├── internal/
│   ├── actions/
│   │   └── actions.go          # Lógica de acciones
│   ├── checks/
│   │   └── checks.go           # Verificaciones de validación
│   ├── models/
│   │   └── question.go         # Modelos de datos
│   ├── ui/
│   │   └── ui.go               # Interfaz TUI
│   └── utils/
│       └── utils.go            # Utilidades
|
├── schemas/
│   ├── manifest-geography.example.json  # Ejemplo de manifiesto geografía
│   ├── manifest-geography.schema.json   # Esquema de manifiesto geografía
│   ├── manifest-questions.example.json  # Ejemplo de manifiesto preguntas
│   ├── manifest-questions.schema.json   # Esquema de manifiesto preguntas
│   ├── question.example.json            # Ejemplo de pregunta
│   ├── question.schema.json             # Esquema de pregunta
│   ├── countrie.example.json            # Ejemplo de país
│   └── countrie.schema.json             # Esquema de país
```
