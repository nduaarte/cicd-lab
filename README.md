# CI/CD Lab

App Expo de treino para estudar CI/CD mobile.

## Rodar o mesmo que o CI roda

```bash
npm ci
npm run lint
npm run format:check
npm run typecheck
npm run test:ci
```

## Pipeline

- **CI** (`.github/workflows/ci.yml`): em todo PR e push na `main` roda lint, Prettier, `tsc` e Jest.
- **CD** (próximas etapas): EAS Build para gerar o AAB assinado e EAS Submit para a trilha de teste interno da Google Play.
