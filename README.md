# E-Commerce Store

A modern, responsive e-commerce application built with **Next.js 16**, **React**, **TypeScript**, and **Tailwind CSS**. The application allows users to browse products, view product details, search and filter products, manage a shopping cart, and experience a responsive, SEO-friendly interface.

## Features

### Product Listing

- Displays products fetched from the DummyJSON API.
- Responsive grid layout.
- Optimized images using `next/image`.

### Product Details

- Dynamic product detail page.
- Displays product image, description, category, rating, price, and stock.
- Add to Cart functionality.
- "View Cart" button appears when the product is already in the cart.

### Search

- Search products by title.
- Instant filtering as the user types.

### Filters

- Filter by category.
- Filter by maximum price.
- Multiple filters work together.

### Shopping Cart

- Add multiple quantities of the same product.
- Increase and decrease quantity.
- Remove products.
- Automatic total calculation.
- Cart persists using Local Storage.

### Responsive Design

- Mobile-first layout.
- Optimized for mobile, tablet, and desktop.

- SEO-friendly pages using Next.js Metadata API
- Optimized images using `next/image`

## Tech Stack

### Frontend

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS

## State Management

The application uses **React Context API** with **useReducer** for cart management.

### Why Context API instead of Redux?

- The application has a small and focused global state (shopping cart).
- Context API keeps the project lightweight.
- No additional dependencies are required.
- `useReducer` provides predictable state updates similar to Redux.
- Redux would be more appropriate for larger applications with complex global state shared across many features.

### Data Source

- DummyJSON API

### Other

- Next.js Image Optimization
- Local Storage
- ESLint

## Architecture

- Next.js App Router
- Server Components for data fetching
- Client Components for interactive UI
- Context API + useReducer for state management
- Service layer for API calls
- Reusable UI components
- TypeScript interfaces for type safety

## Future Enhancements

- Product sorting (Price: Low to High / High to Low)
- Loading skeletons while fetching products
- Toast notifications for cart actions
- Wishlist
- User authentication
- Checkout and payment integration
- Order history
- Unit and integration testing

## Project Structure

```text
src/
├── app/
├── components/
│   ├── cart/
│   ├── layout/
│   ├── product/
│   └── ui/
├── constants/
├── context/
├── hooks/
├── services/
├── types/
└── utils/
```

## Getting Started

### Prerequisites

- Node.js 22 or later exact version used (22.23.1)
- npm 10 or later

### Installation

Clone the repository:

```bash
git clone https://github.com/saurav-saksena/ecommerce-store.git
```

Navigate to the project folder:

```bash
cd ecommerce-store
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

## Available Scripts

Start development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Run ESLint:

```bash
npm run lint
```

## Performance & Best Practices

- Server Components for data fetching
- Client Components for interactive features
- Responsive, mobile-first UI
- Image optimization with `next/image`
- Local Storage for persistent cart data
- Reusable component architecture
- Type-safe development using TypeScript

## Future Enhancements

- User authentication
- Wishlist
- Checkout and payment integration
- Order history
- Pagination
- Product sorting
- Backend integration
- Unit and integration testing

## Author

**Kumar Saurav Saksena**
