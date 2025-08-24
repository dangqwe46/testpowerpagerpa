
# Security

- Use least-privilege for the service principal. Grant only required Dataverse roles.
- Prefer GitHub OIDC federation to avoid storing long-lived secrets.
- Rotate `PP_APP_SECRET` regularly if used.
- Do not print secrets in logs.
