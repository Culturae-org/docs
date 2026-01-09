# Primeros Pasos con Cultpedia

¡Bienvenido a la documentación de Cultpedia! Esta sección le guiará para comenzar a usar y contribuir a nuestro repositorio de preguntas educativas.

## Instalación y Configuración

### Requisitos Previos

- **Git**
- **Go 1.24+**
- **Editor de texto**
- **Nix** (Recomendado)

### Clonar el repositorio

Antes de clonar el repositorio, debe hacer un fork del repositorio en GitHub.

```bash
# Clone su fork
git clone https://github.com/SU_USUARIO/cultpedia.git
cd cultpedia
```

Reemplace `SU_USUARIO` con su nombre de usuario de GitHub.

### Configurar el entorno

#### Opción 1: Con Nix (Recomendado)

```bash
# Instale Nix si es necesario
# Luego configure el entorno
direnv allow
# o
nix develop

# El entorno incluye automáticamente:
# - Go 1.24
# - Binario cultpedia compilado
# - Dependencias necesarias
```

#### Opción 2: Vía Release (Binario)

Descargue la última versión para su sistema en la [página de Releases](https://github.com/Culturae-org/cultpedia/releases).
Extraiga el archivo y coloque el binario `cultpedia` en la raíz del repositorio.

#### Opción 3: Instalación manual

Para instalar Go y compilar usted mismo:
[Documentación oficial de instalación de Go](https://go.dev/doc/install)

## Primeros pasos prácticos

### 1. Explorar datos existentes

```bash
# Muestre las primeras preguntas
head -5 datasets/general-knowledge/questions.ndjson

# Cuente el número de preguntas
wc -l datasets/general-knowledge/questions.ndjson

# Verifique la validez de los datos
./cultpedia validate
```

### 2. Probar la herramienta CLI

```bash
# Muestre la ayuda
./cultpedia --help

# Verifique duplicados
./cultpedia check-duplicates

# Verifique traducciones
./cultpedia check-translations
```

### 3. Crear su primera pregunta

```bash
# Edite con su editor favorito
code datasets/new-question.json

# Valide con la herramienta TUI
./cultpedia
```

1. **Aprenda el formato**: Consulte [Formato de Datos](./format)
2. **Descubra la herramienta CLI**: Vaya a [Herramienta CLI](./cli)
3. **Contribuya**: Siga la [Guía de Contribución](./contributing)
