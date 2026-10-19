# Guardrails for Claude: working with community leads

Read this before making any change in this repo. Most people who open this project with Claude are
**community leads** (for example the Johor Bahru lead). They organise events. Many of them are not developers. Your job is
to make small, safe edits to *their own community's page*, check them, and get them live through a pull request.

The repo maintainers are listed under `maintainers` in `.github/community-leads.json`. If the user says they
are a maintainer, the file limits below do not apply to them, but the git safety rules still do.

## 1. Find out which community you are working on

At the start of a session, ask the user which community they lead, unless they have already said. Then confirm
the files you will touch, for example:

> "You're the Johor Bahru lead, so I'll only edit `src/content/communities/johor.ts` and files in
> `public/communities/johor/`. OK?"

Slugs: `singapore`, `johor`, `indonesia`, `vietnam`, `philippines`.

## 2. Files you may edit

A community lead's change may touch **only** these:

| Path | What it is |
| --- | --- |
| `src/content/communities/<slug>.ts` | All the text and links for that community's page |
| `public/communities/<slug>/` | Photos for that community (the hero photo is `hero.jpg`) |

**Do not edit anything else**, even if it looks like a quick fix. That includes:

- other communities' files
- `src/components/`, `src/app/`, `src/lib/` (the shared layout and logic every community uses)
- `package.json`, `package-lock.json`, any config file, `.github/`, `CLAUDE.md`, `AGENTS.md`, `docs/`

If what the user wants needs a change outside their files (a new section, a layout change, a new kind of social
channel), **stop**. Explain that this affects every community, then write a short message they can send to a maintainer
describing what they want. Do not make the change.

An automatic check on every pull request also blocks a lead's change if it touches files outside their community.
Editing outside the allowed paths wastes the user's time, because the pull request cannot be merged.

## 3. What each field in the community file does

- `name`, `city`: shown on the page ("Claude Johor Bahru Community", "Meetups & workshops in Johor Bahru").
- `code`: the logo text. `"JB"` renders as **ClaudeJB**. Do not change it without asking a maintainer.
- `slug`: the page address (`/johor`). **Never change it.** That would break the link.
- `description`: the sentence under the logo. Keep it short, community-focused, and one or two sentences.
- `heroImage` / `heroCredit`: the photo on the home page card. If you use someone else's photo, `heroCredit` must
  name the photographer and licence.
- `timezone`, `coords`: drive the live time and weather card. They rarely need changing.
- `channels`: the social links. Allowed `type` values are `whatsapp`, `telegram`, `eventbrite`, `luma`, `linkedin`,
  `facebook`, `instagram`. Order matters: they appear in this order. The first chat channel (WhatsApp/Telegram) is
  the "Join Community" button, and the first event platform (Eventbrite/Luma) is "Join Next Event". Every `href` must be
  a full `https://` link to the community's official account, never `"#"` once the real link is known.

## 4. Content rules

This is a **non-profit community site**. When writing or approving text:

- No sales, pricing, paid services, "book a call", enterprise offers or sponsor advertising.
- Do not say or imply the community is run by, or affiliated with, Anthropic. Do not add Anthropic logos.
- No personal data: no individual phone numbers, personal emails or attendee details. Use the community's
  official channels.
- Photos: only ones the community took or has permission to use. Resize to roughly 1920px wide and under ~600 KB,
  as `.jpg` or `.webp`.
- Keep the tone friendly, welcoming and plain-English.

## 5. Git workflow (follow every time)

Explain each step to the user in plain language before running it.

1. **Start from the latest version:** `git checkout main`, then `git pull`.
2. **Make a branch:** `git checkout -b <slug>/<short-description>`, for example `johor/update-whatsapp-link`.
3. **Make the edit** in the allowed files only.
4. **Check it locally:** run `npm run dev` and ask the user to open `http://localhost:3000/<slug>` and confirm it
   looks right. Then run `npm run lint` and `npm run build`. Both must pass.
5. **Show the user what changed** (`git diff`) in a short plain-English summary, and get their OK.
6. **Commit only the files you changed:** `git add src/content/communities/<slug>.ts public/communities/<slug>/`,
   never `git add -A` or `git add .`. Write a clear message, for example "Johor: add real WhatsApp and Luma links".
7. **Push the branch:** `git push -u origin <branch-name>`.
8. **Open a pull request** into `main`. If the `gh` CLI is not installed, give the user this link:
   `https://github.com/ClaudeLabsg/claude-global/compare/main...<branch-name>`
9. Tell the user to wait for the checks to go green and to open the **Vercel preview** link on the pull request to
   check the page. Once it looks right and the checks pass, they can merge. The live site updates a few minutes later.

### Never do these

- Never push to `main` directly, force-push (`--force`), or rewrite history (`rebase`, `reset` on shared branches).
- Never run destructive commands (`git reset --hard`, `git checkout -- .`, `git clean -fd`, deleting branches)
  without explaining what will be lost and getting a clear yes.
- Never skip checks or hooks (`--no-verify`).
- Never commit passwords, tokens, `.env` files, or anything from the community Gmail or social account logins.
- Never install, upgrade or remove npm packages.

### If something goes wrong

Merge conflicts, failed builds, a red check you don't understand, or a git error: **stop and explain** what happened
in plain language. Suggest asking a maintainer rather than trying riskier fixes.
