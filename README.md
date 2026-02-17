# Landora - Modern Real Estate Platform

Landora is a modern, feature-rich real estate management platform built with Vue 3, Vite, and Supabase. It showcases apartment listings, property details, news updates, and team information with a beautiful, responsive design.

## Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Property Management** - Showcase apartments and properties with detailed information
- **News & Updates** - Manage and display property-related news and press releases
- **Team Management** - Display sales team members and office locations
- **Image Gallery** - Interactive lightbox image gallery
- **Database** - Prisma ORM with PostgreSQL via Supabase
- **State Management** - Pinia for centralized state
- **Testing** - Vitest and Playwright for unit and E2E testing
- **Animations** - Smooth scroll-based and transition animations
- **Form Validation** - VeeValidate + Yup for robust form handling

## Tech Stack

- **Frontend**: Vue 3, Vite, TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Database**: Prisma ORM + PostgreSQL (Supabase)
- **State**: Pinia
- **Routing**: Vue Router 5
- **Form Validation**: VeeValidate + Yup
- **UI Components**: Headless UI, Heroicons
- **Carousels**: Swiper
- **Notifications**: Vue Toastification
- **Testing**: Vitest, Playwright, Vue Test Utils
- **Code Quality**: ESLint, Prettier, Oxlint

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
DATABASE_URL=your_supabase_database_url
```

**⚠️ Security Note**: Never commit `.env.local` or files containing secret keys to version control. These are listed in `.gitignore`.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

The development server will start on `http://localhost:3000` and automatically open in your browser.

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

### Database Management

**Generate Prisma Client**

```sh
npm run prisma:generate
```

**Push schema changes to database**

```sh
npm run prisma:push
```

**Open Prisma Studio** (visual database browser)

```sh
npm run prisma:studio
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Code Quality

**Lint and fix code**

```sh
npm run lint
```

**Format code with Prettier**

```sh
npm run format
```

## Project Structure

```
src/
├── components/          # Reusable Vue components
│   ├── common/         # Common components (Button, Modal, etc.)
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   ├── home/           # Home page sections
│   ├── gallery/        # Gallery components
│   └── icons/          # SVG icon components
├── pages/              # Page components
│   ├── apartments/     # Apartment listing pages
│   ├── about/          # About section pages
│   └── pages/          # Other pages (FAQ, Gallery, etc.)
├── router/             # Vue Router configuration
├── stores/             # Pinia store modules
├── composables/        # Vue composition utilities
├── lib/                # Library utilities (Prisma, Supabase)
├── types/              # TypeScript type definitions
├── utils/              # Helper functions and constants
└── assets/             # CSS and static assets
```

## Database Schema

The database includes the following main models:

- **Property** - Real estate listings with pricing, features, and status
- **NewsPost** - Blog posts and news about properties
- **TeamMember** - Sales team information
- **Office** - Sales office locations

See [prisma/schema.prisma](prisma/schema.prisma) for the complete schema.

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com). The build command and output directory are configured in `vercel.json`.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository on Vercel
3. Vercel will automatically detect the Vue 3 project and deploy it

## Security Best Practices

- Environment variables are kept in `.env.local` (never committed)
- API keys and secrets are never hardcoded
- Sensitive files are listed in `.gitignore`
- HTTPS headers are configured in `vercel.json`

## License

This project is proprietary software developed By Caleb.