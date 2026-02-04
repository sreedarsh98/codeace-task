## Product Listing Experience

This project implements a product listing experience for an internal dashboard.
Products are fetched from the Fake Store API and can be searched, filtered, paginated,
and augmented with new products via a modal form.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Decisions & Assumptions

- Client-side pagination, search, and filters keep the UI responsive without extra API calls.
- Categories are derived from the fetched products and used for filtering and form suggestions.
- Added products are stored in local state only (no persistence), as required.
- The root route (`/`) and `/products` both render the product listing experience.

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- shadcn/ui (Dialog, Button, Input, Label)
- React Hook Form + Zod validation
- Fake Store API for data

## What I’d Improve With More Time

- Server-side fetching with caching and error boundaries.
- Sorting options (price, rating, newest).
- Better accessibility for modals and pagination.
- Image fallback handling and skeleton loaders.


