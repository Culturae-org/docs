# Herramienta CLI Cultpedia

Cultpedia proporciona una herramienta de línea de comandos (CLI) escrita en Go para facilitar la gestión, validación y contribución al conjunto de datos.

## Instalación

Ver [Primeros Pasos](./getting-started) para las instrucciones de instalación.

## Validaciones

La herramienta permite validar la integridad de los datos locales:

```bash
# Verificar la validez de todas las preguntas y metadatos
./cultpedia validate

# Verificar duplicados de preguntas
./cultpedia check-duplicates

# Verificar que no falte ninguna traducción
./cultpedia check-translations
```

## Modo Interactivo (TUI)

Para agregar o editar preguntas fácilmente, ejecute la herramienta sin argumentos:

```bash
./cultpedia
```

Esto abrirá una interfaz de usuario en terminal (TUI) que le guiará para:

1. Validar su nueva pregunta (desde `datasets/new-question.json`).
2. Agregarla automáticamente al archivo principal `questions.ndjson`.

![TUI Demo](https://github.com/Culturae-org/cultpedia/raw/main/docs/cultpedia.gif)

## Inicializar un Nuevo Dataset

Si desea crear su propio juego de datos compatible con el formato Cultpedia:

```bash
./cultpedia init {nombre-del-dataset}
```
