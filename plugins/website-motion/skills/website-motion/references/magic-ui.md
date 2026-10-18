# Magic UI catalogue

78 components, generated from https://magicui.design/r/registry.json on 2026-10-18.
Refresh with `node scripts/update-catalogs.mjs`.

Add one with `npx shadcn@latest add @magicui/<name>`.
Docs and live demos: https://magicui.design/docs/components/<name>. The `magicui` MCP server can search and return full source and examples.

Landing page favourites: `shimmer-button`, `rainbow-button`, `marquee` (logo strip, testimonials), `animated-list`, `bento-grid`, `number-ticker`, `blur-fade`, `border-beam`, `magic-card`, `text-animate`, `globe`, `safari` / `iphone` mockups.

| Component | What it does | Extra deps |
|---|---|---|
| magic-card | A spotlight effect that follows your mouse cursor and highlights borders on hover. | motion, next-themes |
| android | A mockup of an Android device. |  |
| warp-background | A card with a time warping background effect. | motion |
| line-shadow-text | A text component with a moving line shadow. | motion |
| aurora-text | A beautiful aurora text effect |  |
| morphing-text | A dynamic text morphing component for Magic UI. |  |
| scroll-progress | Animated Scroll Progress for your pages | motion |
| lens | A interactive component that enables zooming into images, videos and other elements. | motion |
| pointer | A component that displays a pointer when hovering over an element | motion |
| smooth-cursor | A customizable, physics-based smooth cursor animation component with spring animations and rotation effects | motion |
| progressive-blur | The Progressive Blur component adds a smooth blur gradient effect to scrollable content, indicating more content below or above. |  |
| neon-gradient-card | A beautiful neon card effect |  |
| noise-texture | An SVG fractal noise layer using feTurbulence, desaturation, and contrast controls for subtle texture overlays. |  |
| meteors | A meteor shower effect. |  |
| grid-pattern | A background grid pattern made with SVGs, fully customizable using Tailwind CSS. |  |
| hexagon-pattern | A background hexagon pattern made with SVGs, fully customizable using Tailwind CSS. |  |
| striped-pattern | A background striped pattern made with SVGs, fully customizable using Tailwind CSS. |  |
| interactive-grid-pattern | A interactive background grid pattern made with SVGs, fully customizable using Tailwind CSS. |  |
| dot-pattern | A background dot pattern made with SVGs, fully customizable using Tailwind CSS. |  |
| flickering-grid | A flickering grid background made with SVGs, fully customizable using Tailwind CSS. |  |
| hero-video-dialog | A hero video dialog component. | motion |
| code-comparison | A component which compares two code snippets. | shiki, next-themes |
| marquee | An infinite scrolling component that can be used to display text, images, or videos. |  |
| globe | An autorotating, interactive, and highly performant globe made using WebGL. | cobe, motion |
| glyph-matrix | An animated grid of subtly shifting glyphs with fade effect and theme support. |  |
| glare-hover | A diagonal glare on hover using a ::before gradient and CSS variables (angle, size, duration, color). |  |
| shimmer-button | A button with a shimmering light which travels around the perimeter. |  |
| tweet-card | A card that displays a tweet with the author's name, handle, and profile picture. | react-tweet |
| client-tweet-card | A client-side version of the tweet card that displays a tweet with the author's name, handle, and profile picture. | react-tweet |
| bento-grid | Bento grid is a layout used to showcase the features of a product in a simple and elegant way. | @radix-ui/react-icons |
| particles | Particles are a fun way to add some visual flair to your website. They can be used to create a sense of depth, movement, and interactivity. |  |
| number-ticker | Animate numbers to count up or down to a target number | motion |
| ripple | An animated ripple effect typically used behind elements to emphasize them. |  |
| retro-grid | An animated scrolling retro grid effect |  |
| animated-list | A list that animates each item in sequence with a delay. Used to showcase notifications or events on your landing page. | motion |
| animated-shiny-text | A light glare effect which pans across text making it appear as if it is shimmering. |  |
| animated-grid-pattern | A animated background grid pattern made with SVGs, fully customizable using Tailwind CSS. | motion |
| border-beam | An animated beam of light which travels along the border of its container. | motion |
| animated-beam | An animated beam of light which travels along a path. Useful for showcasing the integration features of a website. | motion |
| text-reveal | Fade in text as you scroll down the page. | motion |
| dia-text-reveal | A horizontal color band sweeps across text, revealing a gradient shine before settling on the base color. | motion |
| hyper-text | A text animation that scrambles letters before revealing the final text. | motion |
| animated-gradient-text | An animated gradient background which transitions between colors for text. |  |
| orbiting-circles | A collection of circles which move in orbit along a circular path |  |
| dock | An implementation of the MacOS dock using react + tailwindcss + motion | motion |
| word-rotate | A vertical rotation of words | motion |
| avatar-circles | Overlapping circles of avatars. |  |
| typing-animation | Characters appearing in typed animation | motion |
| sparkles-text | A dynamic text that generates continuous sparkles with smooth transitions, perfect for highlighting text with animated stars. | motion |
| spinning-text | The Spinning Text component animates text in a circular motion with customizable speed, direction, color, and transitions for dynamic and engaging effects. | motion |
| comic-text | Comic text animation | motion |
| icon-cloud | An interactive 3D tag cloud component | lucide-react |
| text-animate | A text animation component that animates text using a variety of different animations. | motion |
| scroll-based-velocity | Scrolling text whose speed changes based on scroll speed | motion |
| shiny-button | A shiny button component with dynamic styles in the dark mode or light mode. | motion |
| shine-border | Shine border is an animated background border effect. |  |
| animated-circular-progress-bar | Animated Circular Progress Bar is a component that displays a circular gauge with a percentage value. |  |
| confetti | Confetti animations are best used to delight your users when something special happens | canvas-confetti, @types/canvas-confetti |
| cool-mode | Cool mode effect for buttons, links, and other DOMs |  |
| pulsating-button | An animated pulsating button useful for capturing attention of users. |  |
| ripple-button | An animated button with ripple useful for user engagement. |  |
| file-tree | A component used to showcase the folder and file structure of a directory. |  |
| blur-fade | Blur fade in and out animation. Used to smoothly fade in and out content. | motion |
| safari | A safari browser mockup to showcase your website. |  |
| iphone | A mockup of the iPhone |  |
| rainbow-button | An animated button with a rainbow effect. |  |
| interactive-hover-button |  |  |
| terminal | A terminal component |  |
| video-text | A component that displays text with a video playing in the background. |  |
| pixel-image | A component that displays an image with a pixelated effect, creating a retro aesthetic. |  |
| highlighter | A text highlighter that mimics the effect of a human-drawn marker stroke. | motion, rough-notation |
| animated-theme-toggler | Theme toggle with View Transitions and animated clip-path masks (circle, polygons, star), optional viewport-centered origin. | lucide-react |
| light-rays | A component with animated light rays which shine down from above. | motion |
| dotted-map | A component with a dotted map. | svg-dotted-map |
| backlight | A backlight glow effect for videos, images, and SVGs. |  |
| kinetic-text | A text component that animates font weight of characters on hover. |  |
| text-3d-flip | A text effect that flips each letter in 3D with a staggered animation on hover. | motion |
| floating-3d-particles | A canvas-based pseudo-3D particle field with perspective projection, continuous rotation and buoyant drift. |  |
