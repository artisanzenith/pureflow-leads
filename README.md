# PureFlow Leads

Production-ready business growth and lead generation platform for **thepureflowleads.com**.

Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.

## Features

- Premium SaaS-style UI with dark/light mode
- Blog system with Markdown content, search, and category filters
- 7 category landing pages
- Free tools section (placeholders for future calculators)
- SEO: metadata, Open Graph, Twitter cards, JSON-LD schema, sitemap, robots.txt
- Legal pages (Privacy, Terms, Disclaimer, Cookies)
- Newsletter and contact form UI
- Fully responsive, mobile-first design

## Project structure

```
├── content/blog/          # Markdown blog posts
├── public/                # Static assets
├── src/
│   ├── app/               # App Router pages & layouts
│   ├── components/        # Reusable UI components
│   │   ├── blog/
│   │   ├── layout/
│   │   ├── legal/
│   │   ├── sections/
│   │   └── ui/
│   └── lib/               # Utilities, blog parser, constants, SEO
```

## Run locally

### Prerequisites

- Node.js 18.18+ (20+ recommended)
- npm, yarn, or pnpm

### Steps

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this project to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com) and **Import Project**.
3. Vercel auto-detects Next.js. Use these settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** (default)
4. Add environment variables in **Project Settings → Environment Variables**:

   | Variable | Value |
   |----------|-------|
   | `NEXT_PUBLIC_SITE_URL` | `https://thepureflowleads.com` |

5. Connect your custom domain `thepureflowleads.com` in **Domains**.
6. Deploy. Vercel runs builds on every push to your production branch.

### CLI deploy (optional)

```bash
npm i -g vercel
vercel
vercel --prod
```

## Adding blog posts

Create a new `.md` file in `content/blog/`:

```markdown
---
title: "Your Post Title"
excerpt: "Short description for cards and SEO."
date: "2025-04-01"
category: "Lead Generation"
categorySlug: "lead-generation"
featured: false
tags: ["Tag1", "Tag2"]
author:
  name: "Author Name"
  role: "Role"
  bio: "Short author bio."
---

Your content here. Use ## and ### for headings (table of contents is auto-generated).
```

`categorySlug` must match a slug in `src/lib/constants.ts` → `CATEGORIES`.

Posts are available at `/blog/[filename-without-extension]`.

## Adding free tools

1. Add tool metadata in `src/lib/constants.ts` → `FREE_TOOLS`.
2. Create a page at `src/app/tools/[slug]/page.tsx` when ready to launch.
3. Update the tools listing page cards from "Coming soon" to active links.

## Adding categories

Edit `CATEGORIES` in `src/lib/constants.ts`. Static pages generate automatically at `/category/[slug]`.

## Monetization hooks (future)

- **AdSense:** Add client ID to `.env` and ad slot components in blog layout.
- **Affiliate links:** Use disclosed link components in article templates.
- **Newsletter:** Wire `NewsletterForm` to ConvertKit/Mailchimp API via env vars.
- **Contact:** Connect form to Resend, Formspree, or a Server Action + email API.

## License

Private — PureFlow Leads. All rights reserved.
