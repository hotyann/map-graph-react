# React Sample Project

This project is a React + TypeScript application set up from scratch, including:

- Redux for state management
- React Router for routing
- Jest and React Testing Library for testing
- ESLint and Prettier for linting and formatting
- Tailwind CSS (v4) for styling
- Webpack for bundling

---

## 📦 Requirements

- Node.js (standalone binary or system install)
- npm (included with Node.js)

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

---

## 🧪 Run Tests

```bash
npm test
```

---

## 💅 Linting & Formatting

- Check lint errors:

```bash
npm run lint
```

- Format code with Prettier:

```bash
npm run format
```

---

## 🎨 Tailwind CSS

Tailwind CSS is already set up (v4).

To customize, edit:

- `postcss.config.js` → PostCSS config
- `src/styles/index.css` → global styles

---

## ⚙️ Webpack

The project uses a custom `webpack.config.js`.

Make sure Node.js correctly resolves the config based on your setup.

---

## 🗂 Project Structure

```bash
/src
  ├── styles/          # TailwindCSS and global styles
  ├── tests/           # Unit and integration tests
  ├── App.tsx          # Main App component
  └── index.tsx        # Entry point

/.prettierrc           # Prettier configuration
/eslint.config.mjs     # ESLint configuration
/jest.config.js        # Jest configuration
/jest.setup.ts         # Jest setup file (e.g., jest-dom)
/postcss.config.js     # PostCSS config (used by Tailwind)
/webpack.config.js     # Webpack configuration
```
