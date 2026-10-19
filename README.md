# Claude Global Community

The site for the non-profit Claude communities: Singapore, Johor Bahru, Indonesia, Vietnam and the Philippines.
Built with Next.js and deployed on Vercel.

## Run it locally

```bash
npm install
npm run dev   # http://localhost:3000
```

## Where things live

| Path | What |
| --- | --- |
| `src/content/communities/<slug>.ts` | One file per community: text, city, social links |
| `public/communities/<slug>/` | That community's photos |
| `src/components/`, `src/app/` | Shared layout used by every community page |

## Community leads

Each lead edits only their own community file and photo folder. The rules Claude follows (it reads them
automatically via `CLAUDE.md`) are in [docs/community-lead-guardrails.md](docs/community-lead-guardrails.md).

Who leads which community is set in `.github/community-leads.json`. The **Community scope** check on every pull request
fails if a lead's change touches files outside their community.
