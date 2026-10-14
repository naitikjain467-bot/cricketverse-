# CricketVerse — Cricket Information & Blogging Website

> **Tagline:** Every Match. Every Legend. Every Story.  
> **Live Assignment:** Production-ready cricket digital publication built with React, TypeScript, and Tailwind CSS.

---

## Overview

**CricketVerse** is a modern, responsive cricket publication and knowledge platform. It provides 12 comprehensive, in-depth blog articles, 16 legendary player profiles, international tournament guides, verified historical records, interactive cricket rules and glossary, and client-side bookmarking.

---

## 1. How to Install Dependencies

Make sure you have Node.js (v18 or newer) installed on your system. Run:

```bash
npm install
```

This installs all core dependencies including `react`, `react-dom`, `react-router-dom`, `lucide-react`, and `@tailwindcss/vite`.

---

## 2. How to Run the Development Server

Start the local development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000`. The server runs with fast hot-reloading.

---

## 3. How to Build the Project

To compile and produce an optimized production bundle:

```bash
npm run build
```

This executes `vite build` and outputs the production assets into the `dist/` directory.

---

## 4. How to Test the Production Build Locally

After running the build command, test the exact production bundle locally:

```bash
npm run preview
```

Vite will serve the `dist/` directory on a local port (typically `http://localhost:4173`).

---

## 5. How to Connect the Project to GitHub

1. Initialize git in your local directory (if not already initialized):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CricketVerse publication website"
   ```
2. Create a new repository on [GitHub](https://github.com/new) named `cricketverse`.
3. Add the remote and push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/cricketverse.git
   git branch -M main
   git push -u origin main
   ```

---

## 6. How to Import the Repository into Vercel

1. Log into your [Vercel Dashboard](https://vercel.com).
2. Click **Add New…** > **Project**.
3. Select your GitHub provider and import the `cricketverse` repository.
4. Vercel automatically detects the **Vite** framework preset with root directory `./`.

---

## 7. How to Deploy the Website

1. Ensure build settings are:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
2. Click **Deploy**. Vercel will build the project in ~45 seconds.
3. Once finished, you will receive a live URL (e.g., `https://cricketverse.vercel.app`).
4. Client-side routing for sub-routes like `/blogs/history-of-cricket` is already configured via the included `vercel.json` file.

---

## 8. How to Add and Edit Blogs

All articles are stored in structured TypeScript objects within `src/data/blogs.ts`.

To add a new blog article:
1. Open `src/data/blogs.ts`.
2. Add a new object to the `BLOG_POSTS` array with:
   - `id`: Unique identifier (e.g., `blog-13`)
   - `slug`: URL slug (e.g., `cricket-captaincy-psychology`)
   - `title`: Engaging article headline
   - `subtitle`: Subheading
   - `excerpt`: 40–60 word summary
   - `category`: Chosen category from `BlogCategory`
   - `tags`: Array of topic strings
   - `author`: Name and role
   - `publishedAt`: `YYYY-MM-DD`
   - `readingTime`: Estimated reading time (e.g., `9 min read`)
   - `coverImage`: Path to image asset
   - `sections`: Array of sections containing headings, paragraphs, bullet points, callouts, or tables
   - `keyTakeaways`: Array of summary bullet points
   - `verifiedSources`: List of official archives
   - `relatedSlugs`: Array of related blog slugs
3. Save the file. The All Blogs page and search indexing will automatically update.

---

## 9. How to Update Verified Cricket Statistics

All historical milestones are stored in `src/data/records.ts` and `src/data/players.ts`.

To update or add records:
1. Locate the record in `src/data/records.ts`.
2. Verify the new figure against official sources:
   - ICC Official Records: [icc-cricket.com/rankings/mens/overview](https://www.icc-cricket.com)
   - Wisden Archives: [wisden.com](https://www.wisden.com)
   - ESPNcricinfo Statsguru: [stats.espncricinfo.com](https://stats.espncricinfo.com)
3. Update the `figure`, `achievement`, and `lastVerifiedDate`.
4. Keep career statistics separated from biography descriptions so they remain easy to audit.

---

## 10. How to Configure a Future Live-Score Provider

CricketVerse is designed with clean architectural boundaries. Live match scores, ball-by-ball commentary, and tournament points tables can be seamlessly added using a licensed cricket API:

1. **Recommended API Providers:**
   - [CricketData.org](https://cricketdata.org/)
   - [Sportmonks Cricket API](https://www.sportmonks.com/cricket-api/)
   - [EntitySport Cricket API](https://www.entitysport.com/)
2. **Server-Side Integration Pattern:**
   - In production, create a secure backend proxy or serverless function (`/api/live-scores`) to keep your API key secret.
   - Fetch live fixtures and cache responses for 30–60 seconds to comply with rate limits.
   - Provide a front-end hook `useLiveScores()` that updates the Top Bar or match strip with a clear timestamp ("Scores updated 45s ago").
   - Maintain the transparency disclaimer noting the external data provider.

---

## Architecture & Reusable Components

- `src/components/layout/Navbar.tsx`: One-row Top Bar Contract with mobile drawer and saved counter
- `src/components/layout/Footer.tsx`: Categorized directory, disclaimer, and transparency notices
- `src/components/common/BlogCard.tsx`: Zero-pill metadata card with image fallback and bookmark toggle
- `src/components/common/PlayerCard.tsx`: Legends directory card with key metric counters
- `src/components/common/Newsletter.tsx`: Subscription interface with input validation and demo feedback
- `src/context/BookmarkContext.tsx`: LocalStorage persistence for reader bookmarks
- `src/data/blogs.ts`: 12 full-length, in-depth cricket articles with structured sections
- `src/data/players.ts`: 16 player profiles with verified records
- `src/data/tournaments.ts`: Comprehensive guides to World Cups, WTC, IPL, and The Ashes
- `src/data/records.ts`: Verified cross-format historical milestones

---

## Verification & Acceptance Checklist

- [x] Website branded as **CricketVerse** with tagline *"Every Match. Every Legend. Every Story."*
- [x] All 12 required blogs written in full with structured sections, facts, tables, and takeaways
- [x] Dedicated working URLs for every article
- [x] All Blogs page with real-time search, category filters, and sorting
- [x] Dedicated Cricket Basics & Rules guide with 22-yard pitch anatomy and glossary
- [x] Player directory with 16 legends filterable by role and nation
- [x] Tournaments page covering ICC events, IPL, WTC, and The Ashes
- [x] Verified historical records table with sources and last-verified dates
- [x] Persistent browser bookmarks via localStorage
- [x] Contact form with validation and clear demo transparency disclosure
- [x] Newsletter form with validation and feedback
- [x] Responsive layout tested for mobile (375px), tablet (768px), and desktop (1440px)
- [x] Custom 404 page for unknown routes
- [x] Ready for deployment on Vercel with `vercel.json` rewrites and `sitemap.xml`
