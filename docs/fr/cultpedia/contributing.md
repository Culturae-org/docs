# Contribuer à Cultpedia

Merci de l'intérêt que vous portez à contribuer à Cultpedia ! Vos contributions permettent d'améliorer la qualité et la diversité du contenu.

## Table des Matières

- [Code de Conduite](#code-de-conduite)
- [Pour Commencer](#pour-commencer)
- [Contribuer des Questions](#contribuer-des-questions)

## Code de Conduite

En participant, vous acceptez de maintenir un environnement respectueux et inclusif. Le harcèlement ou tout comportement discriminatoire ne sera pas toléré.

## Pour Commencer

Vous devez **Forkel le dépôt** sur GitHub et cloner votre fork sur votre machine locale.

```bash
git clone https://github.com/VOTRE_NOM_UTILISATEUR/cultpedia.git
cd cultpedia
```

Remplacez `VOTRE_NOM_UTILISATEUR` par votre nom d'utilisateur GitHub.

### Construire l'outil cultpedia

Vous avez deux façons d'obtenir l'outil **cultpedia** : utiliser le binaire pré-compilé ou le construire depuis la source.

- [Utiliser la Release](#utiliser-la-release)
- [Construction Manuelle](#construction-manuelle)

#### Utiliser la Release

Si vous souhaitez utiliser les binaires pré-compilés, allez sur la [page des Releases](https://github.com/Culturae-org/cultpedia/releases). Téléchargez le fichier ZIP pour votre plateforme, extrayez-le et lancez le binaire `cultpedia` (ou `cultpedia.exe` sur Windows).

> [!WARNING]
> Vous devez déplacer le binaire dans le dossier du dépôt cloné pour l'utiliser avec les datasets.

#### Construction Manuelle

**Linux/macOS:**

```bash
./build.sh
```

**Windows:**

```bash
build.bat
```

**Construction manuelle (Go):**

```bash
go build -o cultpedia ./cmd
```

> [!TIP]
> Si vous utilisez **Nix**, vous pouvez configurer l'environnement de développement (le binaire sera construit automatiquement).

**Familiarisez-vous** avec le [format des données](./format).

## Contribuer des Questions

### Démarrage Rapide

> [!IMPORTANT]
> Ne modifiez pas directement les fichiers questions.ndjson. Utilisez l'outil TUI interactif décrit ci-dessous !

1. Assurez-vous d'avoir effectué les **étapes précédentes** :

   - **Fork**
   - **Clone**
   - **Construction de l'outil**

2. **Choisissez votre type de question et éditez le modèle approprié :**

   - **Questions standard (4 choix) :** Éditez [`datasets/new-question.json`](https://github.com/Culturae-org/cultpedia/blob/main/datasets/new-question.json)
   - **Questions Vrai/Faux (2 choix) :** Éditez [`datasets/new-question-true-false.json`](https://github.com/Culturae-org/cultpedia/blob/main/datasets/new-question-true-false.json)

   Directives :

   - Créez votre question dans le fichier modèle choisi
   - Suivez ces [directives](./format) pour le contenu de la question
   - Chaque ligne doit être du JSON valide
   - Utilisez [question.example.json](https://github.com/Culturae-org/cultpedia/blob/main/schemas/question.example.json) comme modèle

3. Lancez l'outil TUI pour valider et ajouter votre question, suivez les étapes **Valider la nouvelle question** et **Ajouter la question au dataset**.

![Outil Interactif](https://github.com/Culturae-org/cultpedia/raw/main/docs/cultpedia.gif)

### Ajouter une question

Lorsque vous avez créé ou édité votre question dans `datasets/new-question.json`, utilisez l'outil TUI interactif pour l'ajouter au dataset principal.

> [!WARNING]
> N'éditez pas directement les fichiers **.ndjson** et **manifest.json**.

3. **Poussez vers votre fork** et **créez une Pull Request**.

   Assurez-vous d'avoir la dernière version de la branche main avant de pousser vos changements.

   Après avoir ajouté la question avec l'outil TUI, suivez ces étapes :

   1. Créez une nouvelle branche pour votre contribution :

      ```bash
      git checkout -b add-question-{slug}
      ```

      (Remplacez `{slug}` par le slug réel de votre question)

   2. Ajoutez le fichier de dataset mis à jour :

      ```bash
      git add datasets/general-knowledge/questions.ndjson
      ```

   3. Committez vos changements :

      ```bash
      git commit -m "feat: add {slug}"
      ```

   4. Poussez vers votre fork :

      ```bash
      git push origin add-question-{slug}
      ```

   5. Créez une Pull Request sur GitHub depuis votre branche vers le dépôt principal.

4. **La CI va automatiquement** :
   - ✓ Valider toutes les questions
   - ✓ Vérifier les doublons
   - ✓ Vérifier toutes les traductions
   - ✓ Rejeter si des fichiers non désirés ont été modifiés

### Règles Importantes

- **Modifiez uniquement** `datasets/general-knowledge/questions.ndjson`
- **Ne committez pas** manifest.json, themes.ndjson, subthemes.ndjson, ou tags.ndjson
- Ces fichiers sont mis à jour automatiquement par la CI
