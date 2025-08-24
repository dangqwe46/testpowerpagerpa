
# Deployment Guide

## Workflows
- **Create Power Pages SPA (one-time)**: builds the SPA, authenticates with PAC CLI, uploads the initial site.
  - After first upload, go to **Power Pages → Inactive sites** and **Activate** it.
- **Build & Deploy SPA (Dev)**: runs on push to `main`; builds and uploads to the active site.

## Secrets
- `ENV_URL`, `PP_APP_ID`, `PP_TENANT_ID`, and `PP_APP_SECRET` (or OIDC).
- Rotate credentials periodically and scope the service principal to the required Dataverse roles only.

## CLI
- Installed in workflows via `dotnet tool update -g Microsoft.PowerApps.CLI.Tool`.
- Upload command: `pac pages upload-code-site --rootPath .`
- Config from `powerpages.config.json` controls site name and compiled output path.
