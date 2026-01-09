# Cultpedia

Cultpedia est un dépôt de questions et de données géographiques standardisées et multilingues essentiellement pour la plateforme Culturae. Ce projet fournit des informations de qualité, validées par un schéma, sur divers thèmes.

L'objectif de Cultpedia est d'offrir une banque de questions centralisée qui peut être facilement intégrée dans différents systèmes de gestion de l'apprentissage (LMS) et applications de quiz.

> [!WARNING]
> Comme dit dans la partie Culturae, le server principal n'est pas encore disponible.

## Fonctionnalités

- **Support Multilingue** : Anglais, Français et Espagnol.
- **Validation de Schéma** : Le schéma JSON garantissant le format des données.
- **Versionnage** : Versionnage automatique avec mises à jour du manifeste.
- **CLI Interactif** : Outil d'assistance pour ajouter, valider et gérer les questions.
- **Sommes de contrôle SHA256** : Vérification de l'intégrité des données pour les imports.
- **Compatibilité totale avec Culturae** : Intégration transparente avec la plateforme Culturae.

## API

Cultpedia fournit une API REST.

L'API est disponible sur [api.culturae.me](https://api.culturae.me).

**Endpoints disponibles :**

- `GET /api/` - Informations et statistiques de l'API
- `GET /api/questions` - Toutes les questions
- `GET /api/geography/countries` - Tous les pays
- `GET /api/geography/flags/{code}` - Drapeau d'un pays (SVG)

**[Documentation Complète de l'API](https://github.com/Culturae-org/cultpedia/blob/main/docs/API.md)**

## Importation de Datasets

> [!NOTE]
> Pour importer des datasets dans Culturae (ou toute plateforme compatible).

Culturae utilise des fichiers `manifest.json` pour importer des datasets avec toutes les métadonnées nécessaires et les sommes de contrôle sha256.

### Importer le Dataset de Culture Générale

```
https://raw.githubusercontent.com/Culturae-org/cultpedia/refs/heads/main/datasets/general-knowledge/manifest.json
```

### Importer le Dataset de Géographie

```
https://raw.githubusercontent.com/Culturae-org/cultpedia/refs/heads/main/datasets/geography/manifest.json
```

## Structure du Projet

GITHUB : https://github.com/Culturae-org/cultpedia

```
.
├── build.bat                   # Script de build pour Windows
├── build.sh                    # Script de build pour Unix
├── cmd/
│   └── main.go                 # Point d'entrée CLI
├── datasets/
│   ├── general-knowledge/
│   │   ├── manifest.json       # Métadonnées et hashs
│   │   ├── questions.ndjson    # Fichier principal des questions
│   │   ├── subthemes.ndjson    # Sous-thèmes
│   │   ├── tags.ndjson         # Tags
│   │   └── themes.ndjson       # Thèmes disponibles
│   ├── new-question.json       # Modèle de nouvelle question
│   │
│   └── geography/
│       ├── manifest.json       # Métadonnées et hashs
│       ├── countries.ndjson    # Fichier principal des Pays
│       ├── continents.ndjson   # Fichier des Continents
│       ├── regions.ndjson      # Fichier des Régions
│       └── assets/
│           └── flags/
│               └── svg/        # Drapeaux des pays (format SVG)
├── docs/
│   ├── CONTRIBUTING.md         # Directives de contribution
│   ├── FORMAT.md               # Spécification du format des données
│   └── MEDIA                   # Tous les médias
│
├── flake.lock                  # Fichier lock Nix
├── flake.nix                   # Configuration Nix
├── go.mod                      # Module Go
├── go.sum                      # Fichier sum Go
│
├── internal/
│   ├── actions/
│   │   └── actions.go          # Logique des actions
│   ├── checks/
│   │   └── checks.go           # Vérifications de validation
│   ├── models/
│   │   └── question.go         # Modèles de données
│   ├── ui/
│   │   └── ui.go               # Interface TUI
│   └── utils/
│       └── utils.go            # Utilitaires
|
├── schemas/
│   ├── manifest-geography.example.json  # Exemple de manifeste géographie
│   ├── manifest-geography.schema.json   # Schéma de manifeste géographie
│   ├── manifest-questions.example.json  # Exemple de manifeste questions
│   ├── manifest-questions.schema.json   # Schéma de manifeste questions
│   ├── question.example.json            # Exemple de question
│   ├── question.schema.json             # Schéma de question
│   ├── countrie.example.json            # Exemple de pays
│   └── countrie.schema.json             # Schéma de pays
```
