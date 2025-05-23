# 📦 Component Library

A modern, customizable React component library built with TailwindCSS, Storybook, and CVA. Designed with reusability, accessibility, and flexibility in mind, this library offers a collection of essential UI components ready to integrate into your projects.

## 🚀 Live Storybook

Explore all components with live previews and documentation:

👉 [View Storybook on Chromatic](https://682b00920d98ca96e9428374-jivbikelwy.chromatic.com/)

## 🧩 Available Components

- Accordion  
- Button  
- Card  
- DatePicker  
- Input  
- Pagination  
- Select  

Each component is built with accessibility and customization in mind, using TailwindCSS, `class-variance-authority` (CVA), and `tailwind-merge` (Tailwind Merge).

## 🛠 Installation

```bash
npm install vibe-components
````

## 🔧 Usage

```tsx
import { Button } from 'vibe-components';

export default function App() {
  return <Button variant="primary">Click Me</Button>;
}
```

## 🧪 Testing

This project uses **Vitest** and **React Testing Library**.

- Run all tests:
  npm run test

- Run tests in UI mode (interactive testing interface):
  npm run test:ui

> All tests are written for each component under `src/tests/components`, and setup is done using `@testing-library/jest-dom`.

## 📚 Built With

- [Vite](https://vite.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [CVA (Class Variance Authority)](https://cva.style/)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 📂 Scripts

| Command             | Description                            |
| ------------------- | -------------------------------------- |
| `npm run storybook` | Run Storybook locally                  |
| `npm run test`      | Run all tests                          |
| `npm run test:ui`   | Open Vitest UI for interactive testing |
| `npm run rollup`    | Build the package                      |

## 📦 Publishing

This component library is published to [npm as `vibe-components`](https://www.npmjs.com/package/vibe-components).

To publish future updates to npm:

```bash
npm publish --access public
```

---

## 🔗 License

MIT © 2025 [Abhijit Manna](https://github.com/abhijitmanna)
