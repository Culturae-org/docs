# Premiers Pas avec Cultpedia

Bienvenue sur la documentation de Cultpedia ! Cette section vous guidera pour commencer à utiliser et contribuer à notre dépôt de questions éducatives.

## Installation et Configuration

### Prérequis

- **Git**
- **Go 1.24+**
- **Éditeur de texte**
- **Nix** (Recommandé)

### Cloner le dépôt

Avant de cloner le dépôt, vous devez fork le dépôt sur GitHub.

```bash
# Clonez votre fork
git clone https://github.com/YOUR_USERNAME/cultpedia.git
cd cultpedia
```

Remplacez `YOUR_USERNAME` par votre nom d'utilisateur GitHub.

### Configurer l'environnement

#### Option 1 : Avec Nix (Recommandé)

```bash
# Installez Nix si nécessaire
# Puis configurez l'environnement
direnv allow
# ou
nix develop

# L'environnement inclut automatiquement :
# - Go 1.24
# - Binaire cultpedia compilé
# - Dépendances nécessaires
```

#### Option 2 : Installation manuelle

Pour installer Go et compiler vous-même :
[Documentation officielle d'installation de Go](https://go.dev/doc/install)

## Premiers pas pratiques

### 1. Explorer les données existantes

```bash
# Affichez les premières questions
head -5 datasets/general-knowledge/questions.ndjson

# Comptez le nombre de questions
wc -l datasets/general-knowledge/questions.ndjson

# Vérifiez la validité des données
./cultpedia validate
```

### 2. Tester l'outil CLI

```bash
# Affichez l'aide
./cultpedia --help

# Vérifiez les doublons
./cultpedia check-duplicates

# Vérifiez les traductions
./cultpedia check-translations
```

### 3. Créer votre première question

```bash
# Éditez avec votre éditeur préféré
code datasets/new-question.json

# Validez avec l'outil TUI
./cultpedia
```

1. **Apprenez le format** : Consultez [Format des Données](./format)
2. **Découvrez l'outil CLI** : Allez à [Outil CLI](./cli)
3. **Contribuez** : Suivez le [Guide de Contribution](./contributing)
