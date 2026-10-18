---
name: website-motion
description: Build or upgrade a website so it looks and moves like a premium big-brand site, using GSAP (scroll effects), Lenis (smooth scroll), React Bits (animated text, backgrounds, buttons, cards) and Magic UI (shimmer buttons, animated lists, logo marquees, bento grids), all restyled to the brand's own colours and fonts. Use whenever the user wants to build a landing page or website, redesign or "make it look premium/expensive/award-winning", add animations, scroll effects, smooth scrolling, hero sections, logo strips, or mentions GSAP, ScrollTrigger, Lenis, React Bits, Magic UI, shadcn or motion design — even when phrased casually ("make my site feel less basic", "add some cool effects").
---

# Website motion

The gap between a generic AI site and an award-winning one is mostly motion and detail, not layout. This skill adds that layer with four free libraries, then makes every piece look like it belongs to the brand.

| Tool | Job | How it gets in |
|---|---|---|
| **Lenis** | Smooth, weighted scrolling | `npm i lenis` (see `references/lenis.md`) |
| **GSAP** + ScrollTrigger | Scroll-linked reveals, pinning, timelines | `npm i gsap @gsap/react`. GSAP and all its plugins (SplitText, ScrollSmoother…) are free. The `gsap-skills` plugin skills cover the API in depth. |
| **React Bits** | Animated text, backgrounds, cursors, cards, menus | `npx shadcn@latest add @react-bits/<Name>-TS-TW` (catalogue: `references/react-bits-catalog.md`) |
| **Magic UI** | Shimmer/rainbow buttons, marquee, animated list, bento grid, number ticker, globe | `npx shadcn@latest add @magicui/<name>` (see `references/magic-ui.md`) |

The `magicui` and `shadcn` MCP servers that ship with this plugin let you search both libraries and read a component's source before adding it. Use them instead of guessing component names or props.

Companion plugins from the same marketplace, use them when installed:
- **impeccable**: design taste and anti-patterns. Run `/impeccable teach` once per project to save the brand's design context, and use its critique/audit/polish commands before calling a page done.
- **21st**: search 10,000+ components and templates on 21st.dev when neither React Bits nor Magic UI has the piece (pricing tables, auth forms, dashboards, footers). Needs `API_KEY_21ST`.
- **humanizer**: run all website copy (headlines, about text, CTAs) through it so the words don't read as AI-written.

## Workflow

1. **Read the project first.** Framework (Next.js, Vite, Astro, plain HTML), Tailwind version, TypeScript or JS, existing `components.json`, and where the brand lives (Tailwind theme, CSS variables, logo, fonts). If there is no project, scaffold Next.js + TypeScript + Tailwind (`npx create-next-app@latest`) unless the user wants something else.
2. **Capture the brand.** Primary/secondary/accent colours, background, fonts, tone (calm, bold, playful, luxury). If they aren't in the code, ask once, or pull them from the user's live site. Put them in CSS variables / the Tailwind theme so every component reads from one place.
3. **Pick the moments, not everything.** Plan per section which single effect earns its place. A premium page usually has: one striking hero (animated headline or background), section reveals on scroll, one marquee (logos or testimonials), one interactive card grid, and polished buttons. See `references/motion-recipes.md` for proven combinations.
4. **Install the base:** `shadcn init` if there is no `components.json`, then Lenis and GSAP, and wire them together once (Lenis drives GSAP's ticker, ScrollTrigger updates on Lenis scroll). Put that in one provider component, not in every page.
5. **Add components** through the shadcn CLI so the source lands in the repo (`components/ui/...`) and can be edited. Prefer the `-TS-TW` React Bits variant in TypeScript + Tailwind projects (`-JS-CSS`, `-JS-TW`, `-TS-CSS` also exist).
6. **Restyle every component to the brand.** Replace hard-coded colours, gradients, fonts, radii and shadows with the brand tokens. A component that still looks like the demo is not done.
7. **Verify in a real browser.** Run the dev server, scroll through the whole page, check desktop and mobile widths, check the console for errors. Look at screenshots, don't assume.

## Quality bar

- **Restraint.** 3 to 5 signature effects per page. Motion should guide attention to the headline, the proof and the call to action, never compete with it.
- **Feel.** Ease out on entrances (`power3.out`, `expo.out`), 0.6 to 1.2 s for reveals, small staggers (0.04 to 0.1 s). Nothing should bounce unless the brand is playful.
- **Accessibility.** Respect `prefers-reduced-motion`: skip Lenis and reduce GSAP to simple fades (`gsap.matchMedia()` makes this easy). Keep text readable during animations and keep focus states.
- **Performance.** Animate `transform` and `opacity` only. Lazy-load heavy WebGL backgrounds (`three`, `ogl`) with `next/dynamic` or `React.lazy`, and use at most one of them per viewport. Pause offscreen canvases. Check that Lighthouse performance doesn't collapse.
- **React hygiene.** Use `useGSAP()` from `@gsap/react` (auto cleanup), scope selectors to a ref, register plugins once, mark animated components `"use client"` in Next.js App Router.
- **Mobile.** Disable cursor-follow effects on touch, simplify pinned sections on small screens, test at 375 px.

## When the user just says "make it look premium"

Propose a short plan first (which effect goes in which section, in their colours), then build it. Keep the existing layout and copy unless they ask for changes. Same content, it just has to feel more expensive.
