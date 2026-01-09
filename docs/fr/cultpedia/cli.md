# Outil CLI Cultpedia

Cultpedia fournit un outil en ligne de commande (CLI) écrit en Go pour faciliter la gestion, la validation et la contribution au jeu de données.

## Installation

Voir [Premiers Pas](./getting-started) pour les instructions d'installation.

## Validations

L'outil permet de valider l'intégrité des données locales :

```bash
# Vérifier la validité de toutes les questions et métadonnées
./cultpedia validate

# Vérifier les doublons de questions
./cultpedia check-duplicates

# Vérifier qu'il ne manque aucune traduction
./cultpedia check-translations
```

## Mode Interactif (TUI)

Pour ajouter ou éditer des questions facilement, lancez l'outil sans argument :

```bash
./cultpedia
```

Cela ouvrira une interface en ligne de commande (TUI) qui vous guidera pour :

1. Valider votre nouvelle question (depuis `datasets/new-question.json`).
2. L'ajouter automatiquement au fichier principal `questions.ndjson`.

![TUI Demo](https://github.com/Culturae-org/cultpedia/raw/main/docs/cultpedia.gif)

## Initialiser un Nouveau Dataset

Si vous souhaitez créer votre propre jeu de données compatible avec le format Cultpedia :

```bash
./cultpedia init {nom-du-dataset}
```
