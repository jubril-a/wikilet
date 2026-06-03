# Wikilet
 
A property listing and booking platform built with Next.js 16. It supports two user roles — **guests** who search and book properties, and **agents** (hosts) who list and manage their properties.
 
---
 
## Tech Stack
 
| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| State Management | Zustand 5 |
| Server State | TanStack React Query 5 |
| Package Manager | pnpm (workspace) |
| HTTP / Auth | Custom `fetchWithAuth` + JWT cookies |
| Key UI libs | `react-day-picker`, `react-dropzone`, `react-select`, `lucide-react`, `@heroicons/react` |
 
---
 
## Prerequisites
 
- Node.js (see `.nvmrc` or use LTS)
- pnpm (`npm install -g pnpm`)
- A running backend API (Express) at the URL configured in `.env`
---
 
## Getting Started
 
1. **Install dependencies**
   ```bash
   pnpm install
   ```
 
2. **Set up environment variables**
   Copy `.env` and fill in your values:
   ```bash
   cp .env .env.local
   ```
 
   | Variable | Description |
   |---|---|
   | `NEXT_PUBLIC_EXPRESS_API_URL` | Base URL of the Express backend API (e.g. `http://localhost:3001/api/v1`) |
   | `NODE_ENV` | `development` or `production` |
3. **Run the development server**
   ```bash
   pnpm dev
   ```
 
   The app runs on **port 5000** by default: [http://localhost:5000](http://localhost:5000)
4. **Build for production**
   ```bash
   pnpm build
   pnpm start
   ```
 
---
 
## Project Structure
 
```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/             # Auth-only pages (login, signup, verify-email, etc.)
│   ├── (guest)/            # Authenticated guest pages (bookings, saved, manage)
│   ├── (public)/           # Public pages (home, listings, property detail)
│   ├── host/               # Agent dashboard (properties, bookings, account)
│   └── api/                # Next.js API routes (token refresh, logout)
│
├── components/             # Shared, reusable UI components
│   ├── layout/             # Navbar, Footer, Section wrappers, Popup, etc.
│   └── ui/                 # FormInput, StarRating, Loading, PhotoInput, etc.
│
├── features/               # Feature-scoped logic (actions + components)
│   ├── auth/               # signup, login, logout, email verification
│   ├── account/            # User account management
│   ├── booking/            # Booking card, order box, cancel action
│   ├── property/           # Property CRUD, multi-step listing form
│   ├── review/             # Add review, star rating
│   └── search/             # Filter bar, date picker, location popup, search store
│
├── hooks/                  # Custom React hooks (e.g. useClickOutside)
├── lib/                    # Utility helpers
│   ├── auth.ts             # getMe() — fetch current user server-side
│   ├── fetchWithAuth.ts    # Authenticated fetch wrapper with auto token refresh
│   ├── fontLoader.ts       # Custom font loading (Kugile, Perfectly Nineties)
│   ├── refreshToken.ts     # Token refresh utility
│   └── utils.ts            # General utility functions
│
├── middleware.ts            # Route protection (see Auth & Routing below)
├── stores/                  # Zustand global stores
│   ├── listingStore.ts      # Multi-step property creation form state
│   ├── searchStore.ts       # Search params (location, dates, guests)
│   ├── filtersStore.ts      # Listing filter state
│   └── popupsStore.ts       # Global popup open/close state
└── types/                   # Shared TypeScript types
    ├── property.ts
    ├── booking.ts
    ├── account.ts
    └── search.ts
```
 
---
 
## Auth & Routing
 
Authentication uses **JWT access + refresh tokens stored as HttpOnly cookies** (`accessToken`, `refreshToken`, `userRole`).
 
Middleware in `src/middleware.ts` enforces route protection:
 
| Route group | Access rule |
|---|---|
| `/saved`, `/bookings`, `/manage` | Requires `accessToken` |
| `/host/**` | Requires `accessToken` + `userRole === "agent"` |
| `/login`, `/signup`, `/recover-password` | Redirects away if already authenticated |
 
If an access token is missing or stale (within 30s of expiry), the middleware redirects to `/api/refresh` which silently refreshes it using the refresh token. If the refresh fails, the user is redirected to `/api/logout` which clears all cookies.
 
Server Actions that need auth use `fetchWithAuth()` from `src/lib/fetchWithAuth.ts`, which automatically retries with a refreshed token on a `401` response.
 
---
 
## User Roles
 
### Guest
- Browse and search listings (public)
- Create an account, verify email
- Save properties, view saved listings
- Book properties and manage bookings
### Agent (Host)
- All guest capabilities
- Access to `/host` dashboard
- Create, edit, and delete property listings via a multi-step form
- Manage rooms per property
- View all bookings for their properties
- Account and profile settings
Role is set during registration (`role` field in the signup form) and cached in the `userRole` cookie after login.
 
---
 
## Key Features
 
### Multi-step Property Listing Form
Agents create listings through a step-by-step wizard managed by `useListingStore` (Zustand). Steps are in `src/features/property/components/steps/`:
 
1. **PropertyDetails** — title, type, space type, capacity
2. **Description** — description text
3. **LocationInfo** — city, country, area, address, landmark
4. **Facilities** — amenities, power supply, house rules
5. **Pricing** — price, currency, cleaning fee, min/max stay
6. **Media** — 5 property images (drag-and-drop via `react-dropzone`)
7. **Rules** — allowed/not-allowed items
8. **PartnerInfo**, **PayoutDetails**, **Terms**, **Review** — final steps
### Search & Filtering
Search state is managed in `searchStore` and `filtersStore`. The `Filter` component in `src/features/search/components/` handles location popups, date pickers, guest counters, price range, and pet filters.
 
### Token Refresh Flow
```
Request → middleware checks token expiry
  → stale/missing + refreshToken exists → redirect to /api/refresh
    → /api/refresh calls backend, sets new accessToken cookie → redirect back
    → refresh fails → redirect to /api/logout → clear cookies
```
 
---
 
## API Integration
 
All API calls go to `NEXT_PUBLIC_EXPRESS_API_URL`. Server Actions in `src/features/*/actions.ts` make direct `fetch()` calls (public endpoints) or use `fetchWithAuth()` (authenticated endpoints).
 
Key endpoint groups (relative to API base):
 
| Endpoint | Used for |
|---|---|
| `POST /auth/register` | Signup |
| `POST /auth/login` | Login |
| `GET /auth/verify-email/:token` | Email verification |
| `GET /users/me` | Fetch current user |
| `GET /properties` | Public property listing |
| `GET /properties/:id` | Property detail |
| `GET /properties/:id/rooms` | Rooms for a property |
| `GET/POST /agents/properties` | Agent: list / create properties |
| `PUT/DELETE /agents/properties/:id` | Agent: update / delete property |
| `POST /rooms` | Agent: add room to property |
| `DELETE /rooms/:id` | Agent: delete room |
| `PATCH /bookings/:id/cancel` | Guest: cancel booking |
 
---
 
## Scripts
 
```bash
pnpm dev      # Start dev server on port 5000
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```
 
---
 
## Notes for New Contributors
 
- **Server Actions**: `"use server"` actions live in `features/*/actions.ts`. They run on the server and handle data mutations. Never import client-only code into them.
- **Server Components vs Client Components**: Pages under `app/` are Server Components by default. Add `"use client"` only when needed (event handlers, browser APIs, Zustand stores).
- **Zustand stores** are client-side only — do not use them in Server Components or Server Actions.
- **Custom fonts**: `Kugile` and `Perfectly Nineties` are loaded from `public/fonts/` via `src/lib/fontLoader.ts`.