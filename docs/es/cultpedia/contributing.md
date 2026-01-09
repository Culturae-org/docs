# Contribuir a Cultpedia

¡Gracias por su interés en contribuir a Cultpedia! Sus contribuciones ayudan a mejorar la calidad y diversidad del contenido.

## Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Para Comenzar](#para-comenzar)
- [Contribuir Preguntas](#contribuir-preguntas)

## Código de Conducta

Al participar, acepta mantener un entorno respetuoso e inclusivo. No se tolerará el acoso ni el comportamiento discriminatorio.

## Para Comenzar

Debe hacer **Fork del repositorio** en GitHub y clonar su fork en su máquina local.

```bash
git clone https://github.com/SU_USUARIO/cultpedia.git
cd cultpedia
```

Reemplace `SU_USUARIO` con su nombre de usuario de GitHub.

### Construir la herramienta cultpedia

Tiene dos formas de obtener la herramienta **cultpedia**: usar el binario precompilado o construirlo desde la fuente.

- [Usar la Release](#usar-la-release)
- [Construcción Manual](#construcción-manual)

#### Usar la Release

Si desea usar los binarios precompilados, vaya a la [página de Releases](https://github.com/Culturae-org/cultpedia/releases). Descargue el archivo ZIP para su plataforma, extráigalo y ejecute el binario `cultpedia` (o `cultpedia.exe` en Windows).

> [!WARNING]
> Debe mover el binario a la carpeta del repositorio clonado para usarlo con los datasets.

#### Construcción Manual

**Linux/macOS:**

```bash
./build.sh
```

**Windows:**

```bash
build.bat
```

**Construcción manual (Go):**

```bash
go build -o cultpedia ./cmd
```

> [!TIP]
> Si usa **Nix**, puede configurar el entorno de desarrollo (el binario se construirá automáticamente).

**Familiarícese** con el [formato de datos](./format).

## Contribuir Preguntas

### Inicio Rápido

> [!IMPORTANT]
> No edite directamente los archivos questions.ndjson. ¡Use la herramienta TUI interactiva descrita a continuación!

1. Asegúrese de haber realizado los **pasos anteriores**:

   - **Fork**
   - **Clone**
   - **Construcción de la herramienta**

2. **Elija su tipo de pregunta y edite la plantilla apropiada:**

   - **Preguntas estándar (4 opciones):** Edite [`datasets/new-question.json`](https://github.com/Culturae-org/cultpedia/blob/main/datasets/new-question.json)
   - **Preguntas Verdadero/Falso (2 opciones):** Edite [`datasets/new-question-true-false.json`](https://github.com/Culturae-org/cultpedia/blob/main/datasets/new-question-true-false.json)

   Directrices:

   - Cree su pregunta en el archivo de plantilla elegido
   - Siga estas [directrices](./format) para el contenido de la pregunta
   - Cada línea debe ser JSON válido
   - Use [question.example.json](https://github.com/Culturae-org/cultpedia/blob/main/schemas/question.example.json) como plantilla

3. Ejecute la herramienta TUI para validar y agregar su pregunta, siga los pasos **Validar nueva pregunta** y **Agregar pregunta al dataset**.

![Herramienta Interactiva](https://github.com/Culturae-org/cultpedia/raw/main/docs/cultpedia.gif)

### Agregar una pregunta

Cuando haya creado o editado su pregunta en `datasets/new-question.json`, use la herramienta TUI interactiva para agregarla al dataset principal.

![add_question](https://github.com/Culturae-org/cultpedia/raw/main/docs/add_question.png)

> [!WARNING]
> No edite directamente los archivos **.ndjson** y **manifest.json**.

3. **Haga push a su fork** y **cree un Pull Request**.

   Asegúrese de tener la última versión de la rama main antes de hacer push a sus cambios.

   Después de agregar la pregunta con la herramienta TUI, siga estos pasos:

   1. Cree una nueva rama para su contribución:

      ```bash
      git checkout -b add-question-{slug}
      ```

      (Reemplace `{slug}` con el slug real de su pregunta)

   2. Agregue el archivo de dataset actualizado:

      ```bash
      git add datasets/general-knowledge/questions.ndjson
      ```

   3. Haga commit de sus cambios:

      ```bash
      git commit -m "feat: add {slug}"
      ```

   4. Haga push a su fork:

      ```bash
      git push origin add-question-{slug}
      ```

   5. Cree un Pull Request en GitHub desde su rama al repositorio principal.

4. **La CI automáticamente**:
   - ✓ Validará todas las preguntas
   - ✓ Verificará duplicados
   - ✓ Verificará todas las traducciones
   - ✓ Rechazará si se modificaron archivos no deseados

### Reglas Importantes

- **Modifique únicamente** `datasets/general-knowledge/questions.ndjson`
- **No haga commit** de manifest.json, themes.ndjson, subthemes.ndjson, o tags.ndjson
- Estos archivos son actualizados automáticamente por la CI
