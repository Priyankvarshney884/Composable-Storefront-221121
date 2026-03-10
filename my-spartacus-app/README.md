ng add @spartacus/schematics@~221121.7# Spartacus Learning Series
Recruiter-focused learning project for SAP Spartacus (Composable Storefront), designed to demonstrate deployability and clean engineering practices.

Live demo:
- GitHub Pages (after first successful deploy): `https://<your-username>.github.io/<your-repo>/`

Screenshots:
![Landing](docs/assets/landing.svg)
![Catalog](docs/assets/catalog.svg)
![Checkout](docs/assets/checkout.svg)

## What this demonstrates
- Spartacus learning series structure with incremental storefront features.
- SAP Commerce OCC integration approach (cloud and local).
- Production build and GitHub Pages deployment pipeline.

## Tech stack
- Angular 21
- SAP Spartacus (learning series target)
- SAP Commerce OCC APIs (cloud and local)

## API modes
This project uses SAP Commerce OCC endpoints in two modes:
- Cloud SAP Commerce (real-time hosted OCC)
- Local SAP Commerce (for development and offline iteration)

Document the exact base URLs and credentials you use in a private note (do not commit secrets). If you use environment-based configuration, list the expected env vars in this README.

## Local development
```bash
npm ci
npm run start
```

Open `http://localhost:4200/`.

## Production build
```bash
npm run build
```

Build output is in `dist/my-spartacus-app/browser`.

## GitHub Pages deployment
This repo includes a Pages workflow that:
- Installs dependencies
- Builds with `--base-href "/<repo>/"` for Pages
- Uploads the `dist` artifacts

Workflow file: `.github/workflows/deploy-pages.yml`

## Suggested recruiter notes
- What business flows you implemented (search, PDP, cart, checkout)
- Any Spartacus customization (CMS components, routing, translations, theming)
- How you kept the app deployable and reproducible
