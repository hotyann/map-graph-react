# React Sample Project

This project is a **React + TypeScript** application set up from scratch, featuring:

- **Redux** for state management
- **React Router** for routing
- **Jest** and **React Testing Library** for testing
- **ESLint** and **Prettier** for linting and formatting
- **Tailwind CSS** (v4) for styling
- **Webpack** for bundling and optimization

Local Development URL: http://localhost:3000/

---

## 📦 Requirements

- **Node.js** (LTS version recommended)
- **npm** (comes with Node.js)

---

## 🔑 Environment Variables (`.env`)

The project uses a `.env` file to manage environment-specific variables. This file is not included in version control (ignored by `.gitignore`) to protect sensitive information.

Example `.env` File:

```
MapboxAccessToken=your-mapbox-access-token
```

How to Use:

1. Create a `.env` file in the root of your project.
2. Add the required environment variables (e.g., MapboxAccessToken).

---

## 🚀 Setup

1️⃣ Install dependencies:

```bash
npm install
```

2️⃣ Run the development server:

```bash
npm start
```

3️⃣ Build for production:

```bash
npm run build
```

4️⃣ Analyze the production build (optional):

```bash
npm run build:analyze
```

---

## 🧪 Run Tests

Run all tests:

```bash
npm test
```

Run tests with coverage:

```bash
npm run test:coverage
```

Watch tests during development:

```bash
npm run test:watch
```

---

## 💅 Linting & Formatting

Check lint errors:

```bash
npm run lint
```

Auto-fix lint errors:

```bash
npm run lint:fix
```

Format code with Prettier:

```bash
npm run format
```

---

## 🎨 Tailwind CSS

Tailwind CSS is already set up (v4).

To customize, edit the following files:

- `postcss.config.js` → PostCSS configuration
- `src/styles/index.css` → Global styles

---

## ⚙️ Webpack

The project uses a custom `webpack.config.js`.

Key Features:

- **Development Mode**: Includes hot module replacement and source maps.
- **Production Mode**: Optimized with minification, chunk splitting, and caching.
- **Bundle Analysis**: Run `npm run build:analyze` to analyze the production build.

---

## 🗂 Project Structure

```bash
/public
  ├── index.html           # HTML template for the application
/src
  ├── components/          # Reusable UI components
      ├── Charts/          # Chart components (e.g., AreaChart, BarChart)
      ├── Graphs/          # Graph components (e.g., ArcLayer, ContourLayer)
      ├── Layout/          # Layout components (e.g., Navbar)
      ├── SuspenseLazy/    # Lazy-loaded components for performance optimization
  ├── data/                # Static or mock data for the application
  ├── pages/               # Page-level components (mapped to routes)
      ├── Graph/           # Pages for graph visualizations (uses Charts components)
      ├── Map/             # Pages for map visualizations (uses Graphs components)
      ├── NotFound/        # 404 error page for unmatched routes
  ├── router/              # React Router configuration and route definitions
  ├── styles/              # Global styles and TailwindCSS configuration
  ├── tests/               # Unit and integration tests
  ├── App.tsx              # Main application component
  └── index.tsx            # Application entry point

# Configuration and Setup Files
.env                       # Environment variables
.gitignore                 # Files and directories to ignore in version control
.prettierrc                # Prettier configuration for code formatting
.eslint.config.mjs         # ESLint configuration for linting
.jest.config.js            # Jest configuration for testing
.jest.setup.ts             # Jest setup file (e.g., jest-dom)
.package.json              # Project metadata and dependencies
.postcss.config.js         # PostCSS configuration (used by TailwindCSS)
.tsconfig.json             # TypeScript configuration
.webpack.config.js         # Webpack configuration for bundling
```
