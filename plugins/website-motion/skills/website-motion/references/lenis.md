# Lenis + GSAP setup

Lenis (`lenis`, v1.3.x) gives the weighted, smooth scroll that premium sites have. It must share one animation loop with GSAP or ScrollTrigger effects will lag or jitter.

```bash
npm i lenis gsap @gsap/react
```

## React / Next.js (App Router)

One client provider, mounted once in the root layout.

```tsx
// components/smooth-scroll.tsx
'use client';
import { ReactLenis, type LenisRef } from 'lenis/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;
    lenis.on('scroll', ScrollTrigger.update);
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root ref={lenisRef} options={{ autoRaf: false, lerp: 0.1, anchors: true }}>
      {children}
    </ReactLenis>
  );
}
```

```tsx
// app/layout.tsx
<body><SmoothScroll>{children}</SmoothScroll></body>
```

`autoRaf: false` because GSAP's ticker drives Lenis. If GSAP is not used, drop the effect and set `autoRaf: true`.

## Vanilla JS / plain HTML

```js
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({ anchors: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

Without a bundler: `<link rel="stylesheet" href="https://unpkg.com/lenis@1.3.27/dist/lenis.css">` and `<script src="https://unpkg.com/lenis@1.3.27/dist/lenis.min.js"></script>`, then `new Lenis({ autoRaf: true })`.

## Gotchas

- **Reduced motion:** don't start Lenis when `window.matchMedia('(prefers-reduced-motion: reduce)').matches`.
- **Nested scroll areas** (modals, dropdowns, chat widgets, code blocks): add `data-lenis-prevent` to the element, or the page scrolls instead of it.
- **Anchor links** only work with `anchors: true`. Use `lenis.scrollTo('#id', { offset: -80 })` for a sticky header.
- **Don't combine** with GSAP ScrollSmoother or CSS `scroll-behavior: smooth`. Pick one smoother (Lenis).
- **Route changes** in Next.js: call `lenis.scrollTo(0, { immediate: true })` on navigation if the page doesn't reset.
- **Pinned ScrollTrigger sections** work as normal once the ticker sync above is in place. Call `ScrollTrigger.refresh()` after images or fonts load if positions are off.
