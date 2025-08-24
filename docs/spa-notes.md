
# Power Pages SPA (Preview) Notes

- This SPA is a code-first experience. Pages/Styles workspaces and Liquid templates are not used.
- The app is compiled locally/CI (Vite → `/dist`) and pushed via PAC CLI.
- First upload appears under **Inactive sites**. You must activate once; later uploads update in place.
- Use client-side routing and CSS as you normally would in a SPA.
- Interact with Dataverse/Power Platform via Web APIs or custom endpoints.

## Default Route

The landing page (`/src/components/LandingPage.jsx`) is rendered as the default view by App.jsx. This provides:
- Hero section with MEA Fusion branding
- Services showcase grid
- About/highlights section
- Contact information
- Clean, responsive design with mobile-first approach

The landing page uses inline CSS for simplicity and to avoid external dependencies, following the lightweight approach of this SPA starter.
