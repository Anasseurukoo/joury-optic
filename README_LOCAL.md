# Loza Optique — Signature V8 · Final Git Candidate

Version locale indépendante basée sur la direction visuelle V7. V8 conserve le design, déplace le contact principal vers le bas du site et ajoute le statut de disponibilité Play Store pour l’essayage virtuel.

Aucun déploiement et aucune modification du site de production ne sont inclus.

## Prérequis

- Node.js 22 recommandé
- npm 10 ou supérieur

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvrir ensuite :

```text
http://localhost:3000
```

## Vérifications avant Git / déploiement

```bash
npm run lint
npm run build
```

Le projet utilise l’export statique Next.js. Après le build, les fichiers sont générés dans `out/`.

## Pages disponibles

- `/`
- `/collections/`
- `/collections/solaire/`
- `/collections/vue/`
- `/produits/[slug]/` — 10 produits
- `/essayage/`
- `/technologies-indo/`
- `/services/`
- `/a-propos/`
- `/contact/`
- `/rendez-vous/`
- `/confidentialite/`
- page 404

## Changements V8

- Header desktop simplifié : logo + navigation.
- Bande contact ajoutée avant le footer avec :
  - `+212 625 49 49 49`
  - `Abd Elhamid Rizki`
  - `Casablanca`
  - bouton `Prendre rendez-vous`
- Mention `Sous test · bientôt disponible sur Play Store` ajoutée à l’essayage virtuel sur la homepage et sur `/essayage/`.
- Attribution BuiltByAnas rendue discrète dans la ligne finale du footer.
- Responsive adapté pour desktop, tablette et mobile.

## Architecture

- `app/` : routes Next.js et styles globaux
- `components/` : composants de pages et composants réutilisables
- `lib/products.ts` : catalogue local
- `lib/config.ts` : coordonnées commerciales et relation fournisseur centralisées
- `public/` : logo, photographies et assets produits

## Notes fonctionnelles

- Le formulaire prépare un e-mail et ne confirme jamais automatiquement un rendez-vous.
- Le vendredi est bloqué dans la validation du formulaire.
- Les disponibilités des montures ne sont pas affichées ni inventées.
- L’essayage virtuel est présenté comme une version mobile facultative actuellement sous test.
