# AI Coding Agent Instructions

Purpose: Make agents immediately productive in this Next.js 14 + Contentful + Tailwind project for the Varsinais-Suomen Kaverikoirat site.

## Architecture Overview

- **Framework**: Next.js App Router (server components by default) with TypeScript.
- **Content Source**: Contentful via a thin client wrapper in [app/lib/contentful/contentfulClient.ts](app/lib/contentful/contentfulClient.ts).
- **Data Models**: Contentful types live under [app/lib/contentful/types/](app/lib/contentful/types/). Blog content is normalized in [app/lib/contentful/blogPosts.ts](app/lib/contentful/blogPosts.ts).
- **Pages & Routing**: App Router directories under [app/](app). Static informational pages in subfolders like [app/info/page.tsx](app/info/page.tsx), group pages under [app/dogs/\*/page.tsx](app/dogs/), blog dynamic route in [app/posts/[slug]/page.tsx](app/posts/[slug]/page.tsx).
- **UI & Components**: Shared components in [app/components/](app/components) and global UI in [app/ui/](app/ui) (e.g., [app/ui/header/index.tsx](app/ui/header/index.tsx), [app/ui/Footer.tsx](app/ui/Footer.tsx)). Tailwind styles in [app/globals.css](app/globals.css).
- **Client Components**: Mark components that use browser-only APIs or hooks with "use client" (see hooks in [app/lib/hooks/useScrollEffect.tsx](app/lib/hooks/useScrollEffect.tsx)).

## Key Dependencies

- **@heroui/react**: Primary UI component library (Navbar, Link, Button, etc.)
- **framer-motion**: Animation library - import from `motion/react` (use `motion.div`, `motion.section` with `initial`, `animate`, `transition` props)
- **embla-carousel-react**: Carousel implementation in [app/components/Gallery.tsx](app/components/Gallery.tsx)
- **react-medium-image-zoom**: Image zoom via [app/components/ImageZoom.tsx](app/components/ImageZoom.tsx)
- **react-photo-album**: Photo grid layouts in [app/components/PhotoGallery.tsx](app/components/PhotoGallery.tsx)
- **lucide-react** & **@iconify/react**: Icon libraries
- **class-variance-authority**: Component variant management (CVA)
- **shadcn/ui**: Configured (see [components.json](components.json)) with "new-york" style, RSC enabled. Only [components/ui/images-slider.tsx](components/ui/images-slider.tsx) installed currently.

## Code Style

- **Component props**: Always define explicit TypeScript interfaces (e.g., `interface BlogCardProps { title: string; ... }`). No prop spreading.
- **Utility merges**: Use `cn()` from [lib/utils.ts](lib/utils.ts) for conditional className merging (combines clsx + tailwind-merge).
- **Date formatting**: Use `formatDate()` from [lib/utils.ts](lib/utils.ts).
- **Exports**: Default exports for page components and named exports for utilities.
- **Linting**: ESLint with `next/core-web-vitals` config. No Prettier configured.

Example component pattern:
```tsx
interface ComponentProps {
  title: string;
  className?: string;
}

export default function Component({ title, className }: ComponentProps) {
  return <div className={cn("base-class", className)}>{title}</div>;
}
```

## Contentful Integration

- **Client selection**: Use `contentfulClient({ preview })` from [contentfulClient.ts](app/lib/contentful/contentfulClient.ts). It switches between published and preview endpoints.
- **Preview/Draft Mode**: GET [app/api/draft/route.ts](app/api/draft/route.ts) enables Next.js `draftMode()` when `?secret=CONTENTFUL_PREVIEW_ACCESS_TOKEN`. Redirect target via `&redirect=/path`.
- **Blog data**: Prefer `fetchBlogPosts({ preview })` and `fetchBlogPost({ slug, preview })` from [blogPosts.ts](app/lib/contentful/blogPosts.ts). They:
  - Query `content_type: 'blogPost'`, include linked assets (`include: 2`).
  - Normalize to `BlogPost` with `parseContentfulBlogPost()` and image helpers from [contentImage.ts](app/lib/contentful/contentImage.ts).
- **Types**: Use skeleton types under [types/](app/lib/contentful/types/) for type-safe queries.

## Conventions & Patterns

- **Server-first pages**: Page files under `app/.../page.tsx` are server components unless the top line is "use client".
- **Data fetching in pages**: Call Contentful fetchers directly in `page.tsx` (server) and pass plain props to client components.
- **Static generation**: Use `generateStaticParams()` for static paths and `generateMetadata()` for dynamic metadata (see [app/posts/[slug]/page.tsx](app/posts/[slug]/page.tsx)).
- **Images**: Two patterns:
  1. Contentful images: Use `ContentImage` type + helpers from [contentImage.ts](app/lib/contentful/contentImage.ts)
  2. Local images: Import directly and use in arrays (see [app/taikatassut/page.tsx](app/taikatassut/page.tsx))
- **Gallery components**: [app/components/Gallery.tsx](app/components/Gallery.tsx) (embla carousel), [app/components/PhotoGallery.tsx](app/components/PhotoGallery.tsx) (photo-album grid). Wrap images with [app/components/ImageZoom.tsx](app/components/ImageZoom.tsx) for zoom.
- **Layout & Providers**: Root layout in [app/layout.tsx](app/layout.tsx) wraps content in `<Providers>` from [app/providers.tsx](app/providers.tsx), which provides `HeroUIProvider` for UI components. Light/dark theming handled via CSS variables in [app/globals.css](app/globals.css).

## Styling & Theming

- **Tailwind Config**: Custom config in [tailwind.config.ts](tailwind.config.ts) with `heroui()` plugin and `tailwindcss-animate`.
- **CSS Variables**: Complete theming system in [app/globals.css](app/globals.css) with light/dark mode via CSS custom properties (colors, border radius via `--radius`).
- **Custom utilities**: `line-clamp-2`, `line-clamp-3`, `text-balance` defined in globals.css.
- **Fonts**: Inter (body), Palanquin weight 600 (headers/brand) - see [app/ui/fonts.ts](app/ui/fonts.ts).
- **Icons**: Use lucide-react or @iconify/react.

## Animation & Interactions

- **Framer Motion**: Import from `motion/react`. Use `motion.div`, `motion.section` with `initial`, `animate`, `transition` props (see [app/components/Hero.tsx](app/components/Hero.tsx), [components/ui/images-slider.tsx](components/ui/images-slider.tsx)).
- **Scroll Effects**: Custom hook [app/lib/hooks/useScrollEffect.tsx](app/lib/hooks/useScrollEffect.tsx) for scroll-based animations.
- **Carousels**: embla-carousel-react via [app/components/Gallery.tsx](app/components/Gallery.tsx).
- **Image Zoom**: react-medium-image-zoom wrapper in [app/components/ImageZoom.tsx](app/components/ImageZoom.tsx).

## Developer Workflows

- **Run dev**: `npm run dev` (Next.js dev server).
- **Build**: `npm run build`.
- **Start**: `npm run start` for production.
- **Lint**: `npm run lint`.
- **Environment variables**: Required for Contentful:
  - `CONTENTFUL_SPACE_ID`
  - `CONTENTFUL_ACCESS_TOKEN`
  - `CONTENTFUL_PREVIEW_ACCESS_TOKEN` (also used as the draft route `secret`)
    Provide these via `.env.local` in development and Vercel project settings in deployment.

## Implementation Guidance

- **Adding a new content-driven page**:
  1. Create `app/<route>/page.tsx` as a server component.
  2. Fetch content via `contentfulClient` or existing helpers in `app/lib/contentful/*`.
  3. Pass normalized data to presentational components in `app/components/*`.
- **Extending blog**:
  - Add fields to the skeleton under [types/](app/lib/contentful/types/) and update `parseContentfulBlogPost()` in [blogPosts.ts](app/lib/contentful/blogPosts.ts).
  - Keep `include` high enough to resolve needed linked assets.
- **Client-side interactions**:
  - If using hooks (`useEffect`, `useScrollEffect`) or DOM APIs, place code in a client component ("use client") and import into a server page.

## Examples

- **Enable preview and view a draft post**:
  - Visit `/api/draft?secret=<CONTENTFUL_PREVIEW_ACCESS_TOKEN>&redirect=/posts/my-slug` to enable preview, then open the redirected page which will use `preview: true` data if wired.
- **Fetch all blog posts in a page**:
  - In [app/page.tsx](app/page.tsx), import `fetchBlogPosts` and render a list. Use `preview` based on `(await draftMode()).isEnabled` when needed.

## Notes

- **Deployment**: Project targets Vercel; ensure env vars are set in the project.
- **Static assets**: Place images in [public/](public) for non-Contentful assets.
- **Keep server/client boundaries clear**: Heavy data fetching in server components; interactive UI in client components.
- **Testing**: No testing framework currently configured (no Jest, Vitest, or e2e tests).

If any workflow (testing, CI, custom scripts) is missing or unclear, please point it out so we can enrich this file.
