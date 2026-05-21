## Deploying to GitHub + Vercel

These steps prepare the repo for automatic deploys to Vercel via GitHub Actions. The workflow `.github/workflows/vercel-deploy.yml` runs on push to `main` and expects the following GitHub secrets:

- `VERCEL_TOKEN` — a personal token you create in Vercel (Account > Tokens > Create). Keep this secret.
- `VERCEL_ORG_ID` — your Vercel organization ID (Project Settings or Account > Organizations).
- `VERCEL_PROJECT_ID` — your Vercel project ID (Project Settings > General > Project ID).

Steps to finish deploy:

1. Create a GitHub repo (if not already):

```bash
git init
git add .
git commit -m "prepare site + vercel deploy workflow"
# replace with your repo URL
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

2. Add the required secrets to GitHub:
- Go to your repository > Settings > Secrets > Actions > New repository secret
- Add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` values from your Vercel dashboard.

3. Connect the GitHub repo to Vercel (recommended):
- On Vercel dashboard, "Import Project" and select the GitHub repo. Vercel can deploy on push automatically without tokens if you connect the repo; the Action still works for manual token-based deploys.

4. Trigger a deploy by pushing to `main`. GitHub Actions will build and run the `vercel-deploy` workflow.

If you'd like, I can:
- Open a PR branch with these changes (requires GitHub access), or
- Walk you through obtaining `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` step-by-step.
