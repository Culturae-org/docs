# Spécification du Format des Données

Cultpedia utilise des formats JSON standardisés pour ses jeux de données. Les données sont stockées dans des fichiers Newline-Delimited JSON (NDJSON) pour un streaming efficace et un contrôle de version optimisé.

## Jeu de Données de Questions

Le jeu de données `general-knowledge` contient des questions de quiz et des données sur les pays en plusieurs langues.

### Structure d'une Question

Pour le schéma complet, voir [question.schema](https://github.com/Culturae-org/cultpedia/blob/main/schemas/question.schema.json).

Chaque question est un objet JSON avec les champs suivants :

- `kind`: Toujours `"question"` pour le moment
- `version`: Chaîne de version (ex: `"1.0"`)
- `slug`: Identifiant unique (voir Format du Slug ci-dessous)
- `theme`: Objet avec `slug` (ex: `{"slug": "history"}`)
- `subthemes`: Tableau d'objets avec `slug`
- `tags`: Tableau d'objets avec `slug`
- `qtype`: `"single_choice"` ou `"true_false"`
- `difficulty`: `"beginner"`, `"intermediate"`, `"advanced"`, ou `"pro"`
- `estimated_seconds`: Nombre (temps pour répondre, ex: 20)
- `points`: Nombre (poids du score, ex: 1.0 - entre 0.5 et 5.0)
- `shuffle_answers`: Booléen (mélanger l'ordre des réponses)
- `i18n`: Objet avec les traductions pour `fr`, `en`, `es` :
  - Chaque langue a `title`, `stem`, `explanation`
- `answers`: Tableau d'objets réponses :
  - `slug`: Identifiant unique de réponse
  - `is_correct`: Booléen (exactement un `true`)
  - `i18n`: Objet avec `label` pour chaque langue
- `sources`: Tableau d'URL (références vérifiables)

---

### Types de Questions

#### Choix Unique (`single_choice`)

Questions à choix multiple standard avec exactement **4 réponses**.

- Une réponse doit être correcte (`is_correct: true`)
- Les slugs de réponse peuvent être n'importe quel identifiant valide

#### Vrai/Faux (`true_false`)

Questions binaires avec exactement **2 réponses**.

- Une réponse doit être correcte (`is_correct: true`)
- Les slugs de réponse doivent être exactement `"true"` et `"false"`
- Le champ `shuffle_answers` est ignoré pour ce type

---

### Format du Slug

Recommandé : `{theme}-{subtheme}-{key-element}-{specific-detail}`

- `{theme}`: Slug du thème (ex: `"art"`, `"science"`)
- `{subtheme}`: Sous-thème principal (ex: `"renaissance"`, `"chemistry"`)
- `{key-element}`: Élément principal (ex: `"artist name"`, `"chemical element"`)
- `{specific-detail}`: Détail unique (ex: `"artwork"`, `"atomic number"`)

Exemples :

- `art-renaissance-botticelli-birth-of-venus`
- `science-chemistry-element-hydrogen-atomic-number`

> [!IMPORTANT]
> Les slugs doivent être uniques, en minuscules et utiliser des traits d'union.

## Jeu de Données Géographique

Le jeu de données géographique est un **jeu de données de référence** (pas des questions de quiz) contenant des données géographiques pour des jeux de cartes, quiz de drapeaux, quiz de capitales, etc.

### Structure d'un Pays

Chaque pays dans `countries.ndjson` est un objet JSON. Voir le schéma [countrie.schema](https://github.com/Culturae-org/cultpedia/blob/main/schemas/countrie.schema.json) ou un exemple [countrie.example](https://github.com/Culturae-org/cultpedia/blob/main/schemas/countrie.example.json).
