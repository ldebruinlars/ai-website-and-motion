# Inspiration, assets and techniques

Where to look before designing, so a site starts from proven references instead of a blank prompt.
Collected from creator videos (Marcelo Design X, Lindsay.ai, Duncan Rogoff, Sergey Lyubavsky and others) and checked on 2026-10-18.

## Workflow that beats "AI slop"

1. **Find references.** Browse the galleries below, screenshot 3 to 6 sections you like, and keep them in a `references/` folder in the project (or build a small inspiration gallery page from them).
2. **Use outside tools.** Impeccable for critique and polish, Taste Skill for art direction, Emil Kowalski's skills for motion, `website-motion` for the build.
3. **Iterate.** Never expect a one-shot result. Prompt each section with four parts:

```
Aesthetic: [family] — [5-8 vocabulary terms]
Reference: [screenshot] — match feel, not content
Intent: [what this should feel like and why]
Guardrails: always [constants]. Never [bans].
```

Typical bans: purple-to-blue gradients, glassy cards on a gradient, generic stock heroes, centred-everything layouts.

## Galleries per section

| Section | Site |
|---|---|
| Pricing | https://pricingpages.design |
| Hero | https://supahero.io |
| Calls to action | https://www.cta.gallery |
| Navigation, mega menus | https://www.navbar.gallery |
| Footers | https://www.footer.design |

## General inspiration

| Site | Best for |
|---|---|
| https://godly.website | Award-level web design, motion |
| https://mobbin.com | Real app and web UI patterns (1,150+ apps) |
| https://designspells.com | Small delightful details and micro-interactions |
| https://designvault.io | E-commerce and product page patterns |
| Dribbble, Pinterest, X | Moodboards; use for feel, not for copying |

## Component libraries (shadcn registries)

- **Skiper UI**: cinematic, scroll-driven components and blocks. `npx shadcn@latest add @skiper-ui/<name>` (e.g. `skiper53`). Registry: https://skiper-ui.com/registry/{name}.json. Mix of free and paid.
- **Vengence UI** (name read from a low-resolution video, not verified): "Next-Gen UI Interactions", React and Tailwind sections for marketing sites. Not in the shadcn directory; confirm the official site before using it.
- Already in this toolkit: Magic UI, React Bits, 21st.dev (see the other references).

## Assets and motion tools

| Tool | Use |
|---|---|
| https://iconsax.io | 34,000+ icons (6,000+ free) |
| https://flecto.io | Generate SVG shapes and patterns |
| https://spline.design | Interactive 3D scenes you can embed |
| https://studio.morflax.com | 3D mockups and objects (devices, products) |
| https://provisual.app | 3D characters and mockups |
| https://shots.so | Device mockup images and videos |
| https://jitter.video | Fast motion design (export video or Lottie) |
| https://www.svgator.com | Animate SVGs |
| https://typefaceanimator.com | No-code text animations |
| TRELLIS.2 (Microsoft, open source) | Turn a single image into a textured 3D model for Blender, Unity or a web viewer |

## Technique: Apple-style "exploded product" on scroll

1. Generate a short video of the product coming apart (image-to-video model, dark seamless background).
2. Split it into frames, e.g. with https://ezgif.com at 24 to 30 fps, export WebP.
3. Put the frames in `public/sequence/` and draw them on a `<canvas>` with GSAP ScrollTrigger (`scrub`), preloading the first frames and loading the rest lazily.
4. Keep it short (60 to 120 frames), pin for at most one screen height, and offer a static image under `prefers-reduced-motion`.
