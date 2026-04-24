# Project Structure Documentation

This document describes the well-organized structure of this React + Vite + TypeScript project.

## 📁 Directory Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components (Button, Card, etc.)
│   ├── layout/          # Layout components (Header, Footer, Sidebar)
│   └── index.ts         # Export point for components
├── pages/               # Page/Route components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── index.ts
├── hooks/               # Custom React hooks
│   ├── useFetch.ts
│   ├── useLocalStorage.ts
│   └── index.ts
├── services/            # API calls and external services
│   ├── apiService.ts    # Base API service
│   ├── userService.ts   # User-related APIs
│   └── index.ts
├── types/               # TypeScript types and interfaces
│   └── index.ts
├── utils/               # Utility functions
│   └── index.ts
├── constants/           # Application constants
│   └── index.ts
├── config/              # Configuration files
│   └── index.ts
├── App.tsx              # Main app component with routing
├── main.tsx             # React entry point
└── index.css            # Global styles
```

## 📝 Usage Guide

### Adding New Components

**Common Components** (reusable across the app):

```typescript
// src/components/common/MyComponent.tsx
export const MyComponent = () => {
  return <div>My Component</div>;
};

// Then export from src/components/common/index.ts
export { MyComponent } from './MyComponent';

// Use it anywhere:
import { MyComponent } from '@/components/common';
```

**Layout Components** (Header, Footer, Sidebar):

```typescript
// src/components/layout/Sidebar.tsx
export const Sidebar = () => {
  return <aside>Navigation</aside>;
};
```

### Creating New Pages

```typescript
// src/pages/Products.tsx
export const Products = () => {
  return <div>Products Page</div>;
};

// Export from src/pages/index.ts
export { Products } from './Products';

// Add route in App.tsx
<Route path="/products" element={<Products />} />
```

### Creating Custom Hooks

```typescript
// src/hooks/useCounter.ts
import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return { count, increment, decrement };
};

// Export from src/hooks/index.ts
export { useCounter } from "./useCounter";

// Use it anywhere:
import { useCounter } from "@/hooks";
```

### Adding New Services

```typescript
// src/services/productService.ts
import { apiService } from "./apiService";

export const productService = {
  async getProducts() {
    return apiService.get("/api/products");
  },
};

// Export from src/services/index.ts
export { productService } from "./productService";

// Use it:
import { productService } from "@/services";
```

### Adding New Types

```typescript
// src/types/index.ts
export interface Product {
  id: string;
  name: string;
  price: number;
}
```

### Adding Constants

```typescript
// src/constants/index.ts
export const API_ENDPOINTS = {
  USERS: "/api/users",
  PRODUCTS: "/api/products",
} as const;
```

### Utility Functions

```typescript
// src/utils/index.ts
export const formatCurrency = (amount: number) => {
  return `$${amount.toFixed(2)}`;
};

// Use it:
import { formatCurrency } from "@/utils";
```

## 🎯 Best Practices

### 1. **Path Aliases**

Always use `@/` aliases instead of relative paths:

```typescript
// ✅ Good
import { Button } from "@/components/common";
import { userService } from "@/services";

// ❌ Avoid
import { Button } from "../../../components/common";
import { userService } from "../../services";
```

### 2. **Barrel Exports**

Each directory has an `index.ts` for clean imports:

```typescript
// ✅ Clean
import { Button, Card } from "@/components/common";

// ❌ Avoid
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
```

### 3. **Component Organization**

- Place shared UI components in `components/common`
- Place layout/structural components in `components/layout`
- Feature-specific components go in their respective feature directory

### 4. **Service Layer**

- All API calls should go through services
- Services are in `src/services`
- Each feature/domain gets its own service file

### 5. **Type Safety**

- Always define types for your data
- Store types in `src/types`
- Use TypeScript strict mode

### 6. **File Naming**

- Components: `PascalCase.tsx` (e.g., `UserProfile.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Types: `camelCase.ts` (e.g., `user.types.ts`)

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Run Linter

```bash
npm run lint
```

## 🔧 Configuration

### Path Aliases

Path aliases are configured in:

- `vite.config.ts` - Vite configuration
- `tsconfig.app.json` - TypeScript configuration

### Tailwind CSS

Tailwind is set up with the `@tailwindcss/vite` plugin for optimal performance.

## 📦 Dependencies

- **React 19.2.4** - UI library
- **React DOM 19.2.4** - React rendering
- **React Router 7.14.0** - Client-side routing
- **Tailwind CSS 4.2.2** - Utility-first CSS
- **TypeScript 5.9.3** - Type safety
- **Vite 8.0.1** - Build tool

## ✨ Project Growth

As your project grows, you can add:

- `src/store/` - State management (Redux, Zustand, etc.)
- `src/context/` - React Context providers
- `src/middleware/` - Express-like middleware for API
- `src/styles/` - Global styles, themes, or design tokens
- `src/plugins/` - Third-party integrations
- `tests/` - Test files (alongside source or in separate folder)

## 🤝 Contributing

When adding new features:

1. Create files in appropriate directories
2. Use consistent naming conventions
3. Export from barrel files (`index.ts`)
4. Add types in `src/types`
5. Keep components focused and single-responsibility

---

**Happy coding!** 🎉
