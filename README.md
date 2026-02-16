# Sevenoaks Saxes Website

Welcome to the repository for the Sevenoaks Saxes website. Sevenoaks Saxes is a community saxophone organisation consisting of two groups—the saxophone ensemble and the saxophone orchestra—and regularly organises play days for saxophone enthusiasts.

This website is built with [Astro 5](https://astro.build/), styled with [Tailwind CSS 4](https://tailwindcss.com/), and deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## 🚀 Tech Stack

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation / Hybrid)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Typography:** [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) (Body) and [Young Serif](https://fonts.google.com/specimen/Young+Serif) (Headings)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **Content:** Markdown (using Astro Content Layer)

## 📁 Project Structure

```text
/
├── public/              # Static assets (images, favicons, etc.)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/         # Website content (Markdown files)
│   │   ├── events/      # Event definitions
│   │   ├── pages/       # General page content (Home, About, etc.)
│   │   └── config.ts    # Content schema definitions
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route-based pages (.astro files)
│   ├── styles/          # Global styles and Tailwind configuration
│   └── env.d.ts         # TypeScript environment definitions
├── package.json         # Project dependencies and scripts
├── wrangler.jsonc       # Cloudflare Pages configuration
└── astro.config.mjs     # Astro configuration
```

## 🛠️ Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- `npm` (comes with Node.js)

### Local Setup

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd sevenoaks-saxes
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The site will be available at `http://localhost:4321`.

### Build and Preview

To build the site for production and preview it locally:

```sh
npm run build
npm run preview
```

## 🌐 Deployment

### Automated Deployment

The project is configured for automated deployment via Cloudflare Pages:

- **Previews:** Every commit to any branch triggers a preview deployment.
- **Production:** Commits to the `main` branch are automatically deployed to the production site.

### Manual Deployment (Local)

If you need to deploy manually from your local machine, you can use [Wrangler](https://developers.cloudflare.com/workers/wrangler/):

1. **Login to Cloudflare:**

   ```sh
   npx wrangler login
   ```

2. **Deploy the built site:**
   ```sh
   npm run build
   npx wrangler pages deploy ./dist
   ```

## 📝 Content Management

Non-technical users who want to update the website's content (e.g., adding events or editing page text) should refer to the **[Content Guide](./CONTENT_GUIDE.md)**.

## 🤝 Contributing

### Coding Standards

We use [Prettier](https://prettier.io/) to maintain consistent code formatting. Before submitting a pull request, please ensure your code is formatted:

```sh
npm run format
```

### General Guidelines

- Maintain the "Heritage Modernism" design aesthetic.
- Ensure all changes meet at least WCAG AA accessibility standards.
- Follow the directory-based routing logic for the 'About' section (nested folders in `src/content/pages/about/`).

## 📮 Contact & Support

For any questions or issues, please contact **[@calumabarnett](https://github.com/calumabarnett)** on GitHub or [open an issue](https://github.com/calumabarnett/sevenoaks-saxes/issues) in the repository.
