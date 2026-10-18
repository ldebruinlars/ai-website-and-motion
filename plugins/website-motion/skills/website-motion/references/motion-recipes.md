# Motion recipes

Proven combinations per section. Pick one per section; don't stack them.

## Hero
- **Calm / luxury:** React Bits `SoftAurora`, `Silk` or `DarkVeil` background + `BlurText` or GSAP SplitText headline (words rise 20 px and fade, 0.06 s stagger) + Magic UI `shimmer-button` CTA.
- **Bold / tech:** React Bits `Hyperspeed`, `Galaxy` or Magic UI `retro-grid` + `DecryptedText` / Magic UI `hyper-text` headline.
- **Playful:** React Bits `Ballpit` or `BlobCursor` + `RotatingText` / Magic UI `word-rotate` for the changing word.
- **Product:** Magic UI `safari` or `iphone` mockup with `border-beam`, sliding up on load, + `hero-video-dialog`.

## Social proof
- Client logo strip: Magic UI `marquee` or React Bits `LogoLoop`, greyscale logos, pause on hover, edge fade.
- Numbers: Magic UI `number-ticker` / React Bits `CountUp`, triggered when in view.
- Testimonials: two `marquee` rows in opposite directions, or Magic UI `tweet-card`.
- Live activity: Magic UI `animated-list` (bookings, signups, notifications).

## Features
- Magic UI `bento-grid` with `magic-card` spotlight, or React Bits `MagicBento` / `SpotlightCard`.
- Integrations: Magic UI `animated-beam` or `orbiting-circles` between logos.
- Section reveals: GSAP ScrollTrigger batch, cards fade + rise 30 px, 0.08 s stagger, `start: 'top 80%'`, once.

## Storytelling / scroll
- Pinned section with a scrubbed GSAP timeline (image scales, text swaps).
- React Bits `ScrollStack` for stacked cards, `ScrollReveal` / Magic UI `text-reveal` for a statement paragraph.
- Horizontal scroll gallery: pin the section, translate the track with `scrub: 1`.
- Magic UI `scroll-progress` bar at the top.

## Navigation & CTA
- React Bits `PillNav`, `CardNav` or `StaggeredMenu` (mobile).
- Buttons: Magic UI `shimmer-button`, `rainbow-button`, `interactive-hover-button`; React Bits `StarBorder`, `Magnet` (desktop only).
- Final CTA: big headline with Magic UI `aurora-text` / React Bits `GradientText` in brand colours, `confetti` on form submit.

## Small details that sell "premium"
- React Bits `Noise` or Magic UI `noise-texture` grain at 3 to 6 % opacity.
- Subtle custom cursor only if the brand is creative (agency, portfolio). Never on e-commerce or booking flows.
- Image reveals with a clip-path wipe on scroll.
- Consistent easing and durations across the whole page.
