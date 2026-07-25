# Developer Portfolio

A developer-centric portfolio using Next.js, Tailwind CSS and PostgreSQL. It showcases real-time development stats, full-stack web development projects (via database), skills, and about.

## Features

- **Responsive UI:** Optimised for desktop, tablet, and mobile with Tailwind CSS and modular components.
- **Stats Integration:** Real-time fetching of GitHub GraphQL API to render contribution stats and top programming language graph.
- **Project Showcase:** Based on PostgreSQL database, detailed project overviews using a custom thumbnail slider and modal(drawer) architecture.
- **Contact Form:** Real-time email system by the Resend API.

## Tech Stack

**Frontend & Backend:**
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Database: PostgreSQL (accessed via `pg` driver)

**Infrastructure & DevOps:**
- Hosting: DigitalOcean Droplet (Ubuntu)
- Web Server: Nginx
- Process Manager: PM2
- DNS & CDN: Cloudflare
- CI/CD: GitHub Actions (Automated Deployment via `deploy.yml`)

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated deployment configuration
├── db/
│   ├── schema.sql              # Database table definitions
│   └── seed.sql                # Database seed data
├── infra/
│   └── nginx.conf              # Nginx reverse proxy configuration
├── public/                     # Static assets (images, videos, favicons)
├── src/
│   ├── app/                    # Next.js App Router (pages, layout, API routes)
│   ├── components/             # Modular UI (common, layout, sections)
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Core utilities (database connection, GitHub API)
│   └── types/                  # Shared TypeScript interfaces
├── .env.sample                 # Template for environment variables
├── ecosystem.config.js         # PM2 configuration for production server
└── next.config.ts              # Next.js configuration
```

## Running Locally

1. Clone the repository:

   ```bash
   git clone git@github.com:youngryou/developer-portfolio.git
   cd developer-portfolio
   ```

2. Install dependencies:

   ```bash
   npm ci
   ```

3. Set up environment variables:
   - Copy `.env.sample` to `.env.local` and fill in your database and API credentials (the `.env.local` file is excluded from Git).

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser:
   - **Portfolio**: `http://localhost:3000`

## License

MIT License