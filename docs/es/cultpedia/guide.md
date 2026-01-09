# Guía General de Contribución

Esta guía cubre aspectos generales de contribución al proyecto Cultpedia, ya sea para código, documentación u organización del proyecto.

## Tipos de Contribuciones

### 🤔 Preguntas y Contenido
- Agregar nuevas preguntas educativas
- Mejorar traducciones existentes
- Corregir contenido erróneo
- Sugerir nuevos temas

### 💻 Desarrollo
- Mejoras en la herramienta CLI
- Nuevas características de validación
- Optimizaciones de rendimiento
- Corrección de errores

### 📚 Documentación
- Mejorar esta documentación
- Agregar ejemplos prácticos
- Traducciones de documentación
- Guías de uso

### 🏗️ Infraestructura
- Mejoras en flujos de trabajo CI/CD
- Scripts de compilación e implementación
- Configuración de Nix
- Pruebas automatizadas

## Proceso de Contribución

### 1. Preparación

#### Fork y Clone
```bash
# Fork en GitHub (interfaz web)
# Luego clona tu fork
git clone https://github.com/TU_USUARIO/cultpedia.git
cd cultpedia

# Agregar remote upstream
git remote add upstream https://github.com/Culturae-org/cultpedia.git
```

#### Configuración del Entorno
```bash
# Con Nix (recomendado)
nix develop

# O manualmente
go build -o cultpedia ./cmd
```

### 2. Desarrollo

#### Crear una Rama
```bash
# Para una característica
git checkout -b feature/nombre-caracteristica

# Para una corrección
git checkout -b fix/descripcion-error

# Para documentación
git checkout -b docs/mejorar-guia
```

#### Convenciones de Commit
```bash
# Formatos aceptados:
git commit -m "feat: agregar validación avanzada de preguntas"
git commit -m "fix: corregir validación de slug"
git commit -m "docs: mejorar guía de contribución"
git commit -m "refactor: simplificar lógica de análisis"
```

### 3. Pruebas y Validación

#### Pruebas Locales
```bash
# Validar todas las preguntas
./cultpedia validate

# Verificar duplicados
./cultpedia check-duplicates

# Verificar traducciones
./cultpedia check-translations

# Pruebas Go (si aplica)
go test ./...
```

#### Compilación y Linting
```bash
# Verificar compilación
go build ./cmd

# Formatear código
go fmt ./...

# Verificar errores
go vet ./...
```

### 4. Pull Request

#### Antes de hacer Push
```bash
# Sincronizar con upstream
git fetch upstream
git rebase upstream/main

# Push a tu rama
git push origin nombre-de-tu-rama
```

#### Crear PR
1. Ir a GitHub en tu fork
2. Clic en "Compare & pull request"
3. Completar:
   - **Título**: Claro y descriptivo
   - **Descripción**: ¿Qué cambia? ¿Por qué? ¿Cómo probar?
   - **Etiquetas**: `enhancement`, `bug`, `documentation`, etc.

#### Plantilla de PR Sugerida
```markdown
## Descripción
[Describe los cambios realizados]

## Tipo de Cambio
- [ ] Nueva característica (feat)
- [ ] Corrección de error (fix)
- [ ] Cambio que rompe compatibilidad (breaking change)
- [ ] Documentación

## Pruebas
- [ ] Pruebas locales pasan
- [ ] CI pasa
- [ ] Documentación actualizada

## Checklist
- [ ] El código sigue los estándares del proyecto
- [ ] Los commits son atómicos
- [ ] No se han commiteado secretos
```

## Reglas y Estándares

### Código de Conducta
- Respeto mutuo e inclusión
- Ayudar a nuevos colaboradores
- Reportar comportamiento inapropiado

### Calidad del Código
- Código auto-documentado cuando sea posible
- Comentarios para lógica compleja
- Pruebas para nuevas características
- Seguir convenciones de Go

### Seguridad
- Sin datos sensibles en el código
- Validación de entrada de usuario
- Actualizaciones regulares de dependencias

### Datos y Contenido
- Preguntas factualmente correctas
- Fuentes verificables
- Traducciones de calidad
- Respeto a la diversidad cultural

## Flujos de Trabajo CI/CD

Cultpedia usa GitHub Actions para automatización:

### Validación de PR (`validate-questions-pr.yml`)
- Se activa en PRs que modifican `questions.ndjson`
- Validación completa de preguntas
- Comprobaciones de integridad de datos

### Sincronización (`sync-on-merge.yml`)
- Se activa después de fusionar a main
- Actualizaciones automáticas de metadatos
- Actualizaciones de archivos generados
- Incremento de versión

## Herramientas y Entornos

### Entorno de Desarrollo Nix
```nix
# flake.nix define:
- Go 1.24
- Dependencias de compilación
- Scripts de instalación
- Variables de entorno
```

### Scripts de Compilación
```bash
# Linux/macOS
./build.sh

# Windows
./build.bat

# Compilación manual
go build -o cultpedia ./cmd
```

## Solución de Problemas

### Problemas Comunes

#### "La validación falla"
```bash
# Verificar sintaxis JSON
python3 -m json.tool datasets/new-question.json

# Validar contra esquema
./cultpedia validate
```

#### "Conflictos de fusión"
```bash
# Abortar rebase
git rebase --abort

# Ver conflictos
git status

# Resolver y continuar
git add archivo-resuelto
git rebase --continue
```

#### "CI falla"
- Verificar logs de GitHub Actions
- Corregir errores locales primero
- Probar todas las comprobaciones antes de hacer push

## Recursos Útiles

- [Documentación de Go](https://golang.org/doc/)
- [Guía de Git](https://git-scm.com/book/)
- [JSON Schema](https://json-schema.org/)
- [Conventional Commits](https://conventionalcommits.org/)

## Agradecimientos

Cada contribución, incluso las menores, es valiosa para Cultpedia. ¡Gracias por ayudar a construir una mejor plataforma educativa para todos! 🌟

Para orientación específica sobre preguntas, ver la [Guía de Contribución de Preguntas](./contributing).
