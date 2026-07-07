# E-Commerce Store

A modern, responsive e-commerce application built with **Next.js 16**, **React**, **TypeScript**, and **Tailwind CSS**. The application allows users to browse products, view product details, search and filter products, manage a shopping cart, and experience a responsive, SEO-friendly interface.

## Features

- Product listing
- Product details page
- Search products by name
- Filter products by category
- Filter products by price range
- Add products to cart
- Update cart quantity
- Remove products from cart
- Display total cart price
- Cart persistence using Local Storage
- Responsive, mobile-first design
- SEO-friendly pages using Next.js Metadata API
- Optimized images using `next/image`

## Tech Stack

### Frontend

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS

### State Management

- React Context API
- useReducer

### Data Source

- DummyJSON API

### Other

- Next.js Image Optimization
- Local Storage
- ESLint

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

- Node.js 22 or later
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
