# React Bits catalogue

218 components, generated from https://reactbits.dev/r/registry.json on 2026-10-18.
Refresh with `node scripts/update-catalogs.mjs`.

Add one with `npx shadcn@latest add @react-bits/<Name>-TS-TW`.
Other variants: `-JS-CSS`, `-JS-TW`, `-TS-CSS`. Pick the one matching the project.
Preview everything at https://reactbits.dev before choosing. The `shadcn` MCP server can show a component's source.

Heavy dependencies to watch: `three`, `ogl`, `@react-three/*`, `matter-js` (WebGL/physics, lazy-load them).

| Component | What it does | Extra deps |
|---|---|---|
| AnimatedContent | Wrapper that reveals its content on scroll with slides, blur, 3D tilts, soft wipes and staggered children. | gsap |
| BlobCursor | Liquid metal blob cursor that stretches, sloshes and bursts into droplets, in chrome, jelly, pearl or ink. | three |
| ClickSpark | Bursts of sparks at every click, as dashes, comets, dots or stars, that can spill around buttons. |  |
| Crosshair | Crosshair cursor with live coordinates that locks onto links and buttons and measures them. |  |
| Cubes | A grid of outlined 3D cubes that turn to face the cursor, spin when swept and ripple on click. |  |
| ElectricBorder | Wraps any element in crackling strands of current that surge near the cursor and leap off in sparks. |  |
| FadeContent | Wrapper that fades content in on scroll, plain or out of focus, from washed-out gray, or through grain, mist and pixel blocks. | gsap |
| GlareHover | A glossy light streak that sweeps across any element in the direction the cursor moves. |  |
| GradualBlur | Progressive edge blur for headers, footers, captions and carousels, with an optional fade to color that hides at the ends of a scroll. |  |
| CrystalizedBall | A glass ball with a crackling electric rim and glowing dust that swirls with the cursor. | ogl |
| ElectricLogo | Turns any logo into a living lightning outline, with arcs that leap off its edges. | ogl |
| DitherVeil | A 1-bit dithered photo the cursor burns through to full colour, knitting back cell by cell. | ogl |
| GlowCursor | Light that pours from the cursor, drifts softly through the air and cools as it fades. |  |
| GhostCursor | A ghost of glowing smoke that floats after the cursor and curls away as it rises. |  |
| ImageTrail | Cursor-based image trail with several built-in variants. | gsap |
| LogoLoop | Continuously looping marquee of brand or tech logos with seamless repeat and hover pause. |  |
| Magnet | Elements magnetically ease toward the cursor then settle back with spring physics. |  |
| MetaBalls | Liquid metaballs that merge, stretch and pinch apart, with a cursor blob that pushes through them. |  |
| Strands | Spectral strands that twist inside a frosted glass orb and swell into a smooth bulge where they come together, like the new Siri. |  |
| MetallicPaint | Liquid chrome that flows over your logo or text, adapted from Paper's Liquid Metal shader. |  |
| Noise | Film grain overlay for photos and pages, from fine 35mm grain to dust, paper and TV static. |  |
| PixelTrail | Glossy pixels melt into a fluid goo trail behind the cursor, with color shifts and drips. |  |
| PixelTransition | Retro pixel dissolve that covers a card in solid pixels, swaps the content underneath and clears again. |  |
| PixelSwap | New content builds in pixel by pixel in a springy wave that starts wherever the cursor enters. |  |
| Ribbons | Springy ribbons that trail the cursor, in lens, comet or even shapes with an optional wave. |  |
| ShapeBlur | A crisp logo or shape that drifts out of focus under the pointer like a camera lens. |  |
| SplashCursor | A fluid simulation that trails the cursor in swirling ink and bursts into a splash on click. |  |
| StarBorder | A twinkling star that travels the exact outline of any button, pill or card, trailing light and stardust. |  |
| StickerPeel | A die-cut sticker you can peel at any edge, drag, throw and swing, in gloss, matte or holographic finishes. |  |
| TargetCursor | A reticle cursor whose corner brackets snap around targets, matching their shape. |  |
| LaserFlow | A beam of light that splashes onto your content and pours over its corners. |  |
| Antigravity | A field of particles that lifts into a glowing ring around the cursor and bursts outward on click. |  |
| OrbitImages | SVG Path customizable orbiting images effect |  |
| ASCIIText | Waving ASCII text that tilts toward the pointer, scrambles on hover and ripples on click. |  |
| BlurText | Text starts blurred then crisply resolves for a soft-focus reveal effect. | motion |
| CircularText | Layouts characters around a circle with optional rotation animation. | motion |
| CountUp | Animated number counter supporting formatting and decimals. | motion |
| CurvedLoop | Flowing looping text path along a customizable curve with drag interaction. |  |
| DecryptedText | Hacker-style decryption cycling random glyphs until resolving to real text. | motion |
| FallingText | Text that breaks apart and tumbles into a pile you can drag, throw and swipe, then flies back into place. | matter-js |
| FuzzyText | Vibrating fuzzy text with controllable hover intensity. |  |
| GlitchText | RGB split and distortion glitch effect with jitter effects. |  |
| GradientText | Living gradients inside your text: a sliding sweep, a drifting mesh or a swinging conic fan. |  |
| RotatingText | Cycles through multiple phrases with 3D rotate / flip transitions. | motion |
| ScrambledText | Detects cursor position and applies a distortion effect to text. | gsap |
| ScrollFloat | Text gently floats / parallax shifts on scroll. | gsap |
| ScrollReveal | Text gently unblurs and reveals on scroll. | gsap |
| ScrollVelocity | Text marquee animatio - speed and distortion scale with user's scroll velocity. | motion |
| ShinyText | A sheen of light that sweeps across text, from soft bands to chrome-like reflections. |  |
| SplitText | Splits text into characters / words for staggered entrance animation. | gsap, @gsap/react |
| TextCursor | Text or emoji that trails your cursor as stamped copies, a following chain or a ribbon of letters. |  |
| TextPressure | Characters scale / warp interactively based on pointer pressure zone. |  |
| TextType | Typewriter effect with blinking cursor and adjustable typing cadence. | gsap |
| TrueFocus | Applies dynamic blur / clarity based over a series of words in order. | motion |
| VariableProximity | Letter styling changes continuously with pointer distance mapping. |  |
| Shuffle | Animated text reveal where characters shuffle before settling. | gsap, @gsap/react |
| ParticleText | Text assembles from drifting particles that scatter and reform on demand. |  |
| SplitFlapText | Mechanical split-flap departure board that clacks through to each new phrase. |  |
| WarpText | WebGL warp that bends and refracts the text around the pointer. | ogl |
| TechText | A wordmark whose letters turn into dashed vector paths under the cursor. |  |
| StrokeText | Outlined letterforms draw themselves on, then flood with fill. | gsap |
| DepthText | Layered extruded type with parallax that shifts against the pointer. |  |
| FoldText | Lines unfold into place like creased paper opening flat. | gsap |
| EchoText | Ghosted copies trail behind the text and settle into a single word. |  |
| MaskedHeading | A headline with a drifting colour mesh or image showing through, revealed word by word. | gsap |
| TextLoop | A seamless text marquee that flows along curved SVG paths. | gsap |
| AnimatedList | A scrolling list whose rows spring into view, with a gliding selection and arrow keys. | @hugeicons/react, @hugeicons/core-free-icons |
| BounceCards | A fan of photo cards that bounce in, then spread apart and straighten the one you hover. |  |
| BubbleMenu | Floating circular expanding menu with staggered item reveal. | gsap |
| CardNav | A navigation bar that springs open into a row of cards, each with its own links. | @hugeicons/react, @hugeicons/core-free-icons |
| CardSwap | A 3D stack of cards that sends the front card to the back on a timer, or when you fling it. | @hugeicons/react, @hugeicons/core-free-icons |
| Carousel | Swipeable cards for feature tours, stories and galleries, with five transitions and an autoplay timer. | @hugeicons/react, @hugeicons/core-free-icons |
| ChromaGrid | A grid of grayscale photo cards where a spotlight follows the cursor and brings back color. |  |
| HoloCard | Collectible trading card with a real holographic foil and glitter that sparkles as it tilts. |  |
| CircularCarousel | A 3D ring of images with bendable cards, momentum drag, snapping and click to focus. |  |
| FlexCarousel | An infinite image row that flows through invisible liquid glass at its edges. | ogl |
| DepthCarousel | Cards recede into depth on a 3D rail, with drag, keyboard and auto-advance. | gsap |
| AccordionGallery | Panels expand on hover or focus, revealing parallax imagery and captions. | gsap |
| MorphSlider | WebGL slider that melts between images with a displacement transition. | ogl, gsap |
| DriftWall | An endless perspective wall of tiles drifting past, lifting on hover. |  |
| CircularGallery | A curved image gallery you can drag, scroll or tab through, with cards that open to the full image. |  |
| Counter | An odometer-style number whose digits roll to every new value, with currency, separators and locales. |  |
| DecayCard | An image card that tears and melts as the pointer moves, then pulls itself back together. |  |
| Dock | macOS style dock with smooth magnification, launch bounce, badges and context menus. |  |
| DomeGallery | Immersive 3D dome gallery projecting images on a hemispheric surface. | @use-gesture/react |
| ElasticSlider | A slider that grows under your cursor and stretches like rubber when pulled past either end, then springs back. | @hugeicons/react, @hugeicons/core-free-icons |
| FlowingMenu | A full-height menu with a liquid band that glides between rows and reveals a scrolling marquee of each item. | @hugeicons/react, @hugeicons/core-free-icons |
| FluidGlass | A 3D glass object that refracts your headline, image or video, follows the cursor and melts between shapes. |  |
| FlyingPosters | 3D posters that twist and flip as you scroll or drag through an endless column. |  |
| Folder | Folder that drops its flap open or swings open like a book, with pages you can pick. |  |
| GlassIcons | Liquid glass icons that bend the color behind them, for app grids, docks and social links. |  |
| GlassSurface | Apple-style liquid glass that bends what is behind it, in a rounded panel or any logo shape. |  |
| GooeyNav | A navigation bar whose active pill breaks into goo that flows over to the item you pick. |  |
| InfiniteSpiral | An endlessly looping 3D helix of images with adjustable motion, depth and spacing. |  |
| InfiniteMenu | A draggable sphere of image tiles that snaps the nearest one forward and shows its title. |  |
| Lanyard | Swinging 3D badge on a stretchy woven band that you can drag, throw or click to flip. | three |
| MagicBento | A bento grid of feature cards with live artwork, edge light that follows the cursor and a click wave. | @hugeicons/react, @hugeicons/core-free-icons |
| Masonry | A masonry gallery that springs into place, reflows as it resizes and opens images in a lightbox. | @hugeicons/react, @hugeicons/core-free-icons |
| ModelViewer | A product-style 3D model viewer that frames itself and floats over a soft shadow. | @react-three/fiber, @react-three/drei, three |
| PillNav | A pill navigation bar where a fill rises through each link as its label rolls over, with a sliding active dot. |  |
| PixelCard | A card that fills with twinkling pixels on hover, rippling out from the center or the cursor. |  |
| ProfileCard | A framed profile card that tilts toward the cursor, with holographic foil shining through a tiled pattern. | @hugeicons/react, @hugeicons/core-free-icons |
| ScrollStack | Cards pin and stack as you scroll, settling back into a dimmed deck with smooth, jitter-free motion. |  |
| SpotlightCard | Card lit by a soft spotlight that follows the pointer, catches its edge and reaches nearby cards. |  |
| BorderGlow | Glowing mesh-gradient border that follows cursor direction and intensifies near edges. |  |
| LineSidebar | Static list navigation with a cursor-proximity effect that shifts and highlights nearby items. |  |
| OptionWheel | Curved option picker that spins with scroll, drag or arrow keys, tilting items away. |  |
| SpecularButton | Glass button whose edge catches the light, with a highlight that glides toward the cursor. |  |
| ElasticMesh | Turns text or any logo into a puffy inflated shape you can press, poke and stretch like jelly. |  |
| RippleDistortion | Pointer-driven water displacement that warps content and leaves a decaying wake. | ogl |
| SwarmCursor | A liquid swarm of particles that flows after the cursor, curls into eddies and pours around hovered buttons. |  |
| HalftoneReveal | A halftone print of an image whose dots swell into the real photo under the cursor. |  |
| ScrollExpand | A rounded media frame that grows to full bleed as it scrolls through the viewport. |  |
| CursorGrid | A crisp grid whose cells light up and fade behind the cursor, with grid styles, tiles and click pulses. |  |
| CurvedInput | Arc-bent input bar with text, caret and submit button all following the curve. |  |
| Stack | Pile of cards you can drag, flick or click through, with thrown cards tucking underneath. | motion |
| Stepper | A multi-step flow with a gliding step indicator, spring transitions and horizontal or vertical layouts. | @hugeicons/react, @hugeicons/core-free-icons |
| TiltedCard | A 3D card that tilts toward the cursor, with glare, a soft shadow, floating layers and a flip side. |  |
| StaggeredMenu | Menu with staggered item animations and smooth transitions on open/close. | gsap |
| ReflectiveCard | A metal ID card that reflects your camera or a looping video and catches the light as it tilts. | @hugeicons/react, @hugeicons/core-free-icons |
| PatternWaves | A lit halftone surface of dots, lines or glyphs that moves like draped silk. | ogl |
| MicroSlats | A wall of tiny slats that becomes a rolling sea in perspective, with glinting crests. | ogl |
| ShapeWaves | A field of triangles, circles and squares that brighten and grow along rolling waves. | vgpu |
| AeroShards | Silk ribbons of thick glass shards streaming on layered depths among survey markers, catching light along their edges. | vgpu |
| GhostFibers | Layered ribbons of fine glowing fibers that twist, fold and drift through soft depth of field. |  |
| Aurora | A soft, calm aurora that flows across the top of the page and drifts toward the cursor. |  |
| Balatro | The swirling Balatro paint shader, with crisp pixels, a cursor that stirs the paint and click whirlpools. |  |
| Ballpit | A soft-lit pit of physics balls you can shove with the cursor, grab, throw and blast apart. |  |
| Beams | Glossy ribbons that ripple in the dark and catch the light, which follows your cursor. |  |
| ColorBends | Vibrant color bends with smooth flowing animation. | three |
| CRTWarp | A blocky plasma glowing on a curved CRT, with real scanlines, a phosphor mask, afterglow and a power-on intro. |  |
| DarkVeil | A silky veil of light that drifts in the dark and bends around the cursor. |  |
| Dither | Retro dithered waves with Bayer, halftone, line and noise patterns, palettes and cursor trails. |  |
| DotField | A gradient dot field seen through a lens that follows the cursor, magnifying, pinching or swirling the dots. |  |
| DotGrid | A springy dot grid that the cursor flicks and drags through like jelly, with click shockwaves. |  |
| FaultyTerminal | A flickering CRT terminal of glowing glyphs, with phosphor trails under the cursor and glitches on click. |  |
| Galaxy | Endless flight through a twinkling starfield with warp jumps, cursor repulsion and star palettes. |  |
| GradientBlinds | Satin gradient blinds lit by a spotlight that follows the cursor, swaying and turning toward the light. |  |
| Lightfall | Streaks of light falling down a curved tunnel, bending around the cursor and stretching into warp trails on hold. |  |
| FluxLines | Glowing flux lines tracing a churning magnetic fluid. The cursor magnet reveals and curls them. |  |
| Ferrofluid | A glossy sea of magnetic fluid where swells of spikes roll in and the cursor raises a crown. |  |
| MoltenMetal | Swirling caustic filaments with white-hot cores that heat up under the cursor and flare on click. |  |
| GradientWaves | Lit satin waves rolling in from a hazy horizon, with a light that follows the cursor and swells on click. |  |
| WebThreads | Glowing threads woven through luminous pinch points that light up under the cursor and carry light on click. |  |
| Topography | A 3D landscape drawn in glowing contour lines that rises under the cursor, with light pulses on click. |  |
| LightTunnel | A swirling fibre-optic tunnel where comets of light race into depth, steered by the cursor. |  |
| SlicedWaves | Waves of colored light sliced into glowing bars, seen in depth with a focus that follows the cursor. |  |
| AcidSquares | A rolling field of glossy squares that ripples under two drifting colored lights. |  |
| Scanner | Glowing interference lines swept by a scan beam, with a CRT finish, cursor lensing and click pings. |  |
| GradientASCII | Soft gradient glows drawn in ASCII characters that scramble under the cursor. |  |
| Grainient | Flowing grainy gradients you can stir with the cursor. |  |
| GridScan | A 3D grid room swept by a scanning light that follows your view. |  |
| GridDistortion | Image background that breaks into a grid of blocks under the cursor and settles back into place. |  |
| GridMotion | A tilted wall of drifting tiles that slides with the pointer and lights up where it rests. |  |
| Hyperspeed | Night highway of glowing light trails on a winding road that warps into hyperspace while you hold. | three |
| Iridescence | Liquid iridescent surface with shifting folds that you can stir with the cursor. |  |
| LetterGlitch | A calm field of letters that flicker, scramble and glitch in color, stirred by the cursor and torn by clicks. |  |
| LightRays | Volumetric light rays from any edge, with source glow and haze. The cursor steers the beam and casts a shadow. |  |
| Lightning | Crackling, branching lightning that bends toward the cursor and strikes wherever you click. |  |
| LineWaves | Fine lines that flow in silky waves while a band of light drifts through them. |  |
| EvilEye | Procedural evil eye shader with animated iris, slit pupil, and fiery outer glow. | ogl |
| Radar | A radar scope whose sweep leaves a phosphor afterglow and picks up moving contacts. |  |
| SoftAurora | Soft aurora borealis shader with 3D Perlin noise and cosine gradient palettes. |  |
| MagicRings | Glowing rings that pulse outward in a wave, swell toward the cursor and flare on click. |  |
| LiquidChrome | Soft ribbons of liquid chrome that swirl through a dark pool, ripple under the cursor and catch the light as it moves. |  |
| Orb | A glowing ring of swirling color that breathes, trails an orbiting light and reaches toward the cursor. |  |
| Particles | A drifting 3D field of particles with glow, twinkle, constellation lines and cursor interaction. |  |
| PixelBlast | Dithered pixel clouds that drift, shimmer and light up under the cursor, with ripples, shapes and a perspective floor. |  |
| Plasma | Folds of satin light twisting slowly through the dark, turning to follow the cursor. |  |
| PlasmaWave | Two ribbons of plasma curling through each other, with soft glow and white-hot cores. |  |
| Prism | Rotating prism of glowing spectral light with configurable shape, colors and motion. |  |
| PrismaticBurst | A burst of prismatic light rays that leans toward the cursor and sends a wave of light outward on click. |  |
| RippleGrid | A crisp grid that ripples like water, bending and lighting up as waves pass through it. |  |
| Silk | Flowing satin folds with glossy highlights that turn toward the cursor and ripple on click. |  |
| SideRays | Shafts of light that fan in from a corner or side, shimmer slowly and lean toward the cursor. |  |
| ShapeGrid | A drifting grid of shapes that lights up under the cursor, with perspective tilt and rainbow trails. |  |
| Threads | Flowing threads that fray apart and part around the cursor, from fine silk to contour lines. |  |
| Waves | Dense flowing lines that sway like silk, bend around the cursor and spring back into place. |  |
| MagnetLines | A field of magnetic lines that swing toward the cursor, ripple outward and spin with every click. |  |
| LiquidEther | A glowing liquid that swirls under the cursor, colored by how fast it flows. |  |
| FloatingLines | Ribbons of fine glowing lines that drift in waves, part around the cursor and curl when clicked. |  |
| LightPillar | A swirling pillar of light that ignites on load, leans toward the cursor and surges on click. |  |
| PixelSnow | Pixel-art snowflakes drifting down in layers of depth, brushed aside by the cursor. |  |
| SquishSwitch | Switch whose thumb stretches with speed and squashes against the end when you flick it. | motion |
| HoldButton | Hold-to-confirm button whose liquid fill rises while pressed and snaps back if you let go. |  |
| PeekRating | Star rating that lifts a wave of stars up to the pointer, then commits with a pop on click. | @hugeicons/react, @hugeicons/core-free-icons |
| SpringCheck | Checkbox row where one spring fills the box, draws the tick and strikes through the label. | motion, @hugeicons/core-free-icons |
| PulseHeart | Like button that contracts to a dot, flips colour and pulses back as the count ticks over. | @hugeicons/core-free-icons |
| RubberSegment | Segmented control whose rubber thumb stretches across the gap and squashes into place. | motion |
| SlideCommit | Slide-to-confirm handle that spins while your action runs and unfurls into a done pill. | motion, @hugeicons/react, @hugeicons/core-free-icons |
| WarmTooltip | Tooltip group where the first label waits, then its siblings open instantly while warm. | motion |
| FuseButton | Action button whose done state carries an undo on a burning fuse. | @hugeicons/react, @hugeicons/core-free-icons |
| ScrubField | Number chip you drag to scrub, with rubber-band limits and click to type. | motion |
| LatticeLoader | Agent status row with a lattice of cells that brighten in a wave beside a live stopwatch. |  |
| DodgeField | Wrapper that makes any child dodge the pointer until it relents and glides home. | motion |
| CodeSlots | One-time code input whose digits spring into their slots, with paste and SMS autofill. | motion, @hugeicons/react, @hugeicons/core-free-icons |
| WakeSlider | Thumbless range slider of thin bars where drag speed raises a wake behind the handle. | motion |
| CometDial | Tick-ring dial you flick by angle, with a comet that streaks behind the lit head. | motion |
| JellyRadio | Radio group of chips where the chosen one swells and barges its neighbours outward. | motion |
| SwipeRow | List row that swipes open to reveal actions and deletes on a full swipe. | motion, @hugeicons/react, @hugeicons/core-free-icons |
| GlideSelect | Select chip whose menu pops from its corner and whose highlight glides between rows. | @hugeicons/react, @hugeicons/core-free-icons |
| StatusMark | Agent task status glyph that morphs from an idle ring to a progress arc, then a check. | motion |
| CallChip | Tool-call chip whose fill wipes across as a live timer ticks, ending green or shaking red. | @hugeicons/react, @hugeicons/core-free-icons |
| BellToggle | Pill toggle where a press rings the bell, crossfades the label and unfurls the pill. | motion, @hugeicons/react, @hugeicons/core-free-icons |
| SlingButton | Send button you pull back like a slingshot and release to fire. | motion, @hugeicons/react, @hugeicons/core-free-icons |
| SwipeToast | Toast that swipes down to dismiss and burns a thin fuse for its remaining time. | motion, @hugeicons/react, @hugeicons/core-free-icons |
| PromptBar | Chat composer with @ sources, / commands, a model picker, dictation and attachments. | motion, @hugeicons/react, @hugeicons/core-free-icons |
| SloshGauge | Tank gauge whose liquid chases the value, tilts as it moves and splashes when it fills. |  |
| VoicePill | Mic button that swells into a capsule of live equalizer bars and a timer while recording. | @hugeicons/react, @hugeicons/core-free-icons |
| ThoughtLine | Reasoning trace header with a live clock that folds its steps into one line when done. | motion, @hugeicons/react, @hugeicons/core-free-icons |
| RefineFrame | Media frame that steps an image through generation stages without any layout shift. | @hugeicons/react, @hugeicons/core-free-icons |
| FolderFloat | Folder whose notes spring out into a floating cloud when it opens on hover or press. | matter-js |
| BranchedMenu | Collapsible menu that branches each section from a trunk and traces a line to your pick. | @hugeicons/react, @hugeicons/core-free-icons |
| FlipCard | Two-faced card that flips in 3D on a click, drag or flick and settles on a spring. | motion |
| TearTicket | Ticket whose perforated stub tears off by hand, fibre by fibre, and drops away. | motion |
| PaperCrumple | An image that crumples into a textured 3D sheet while you hold and drag it. | three |
| Shredder | A list with a paper shredder at the bottom that cuts dragged rows into curling strips. |  |
| FlyingButton | Button that fires its thrusters on hover, lifts off on a WebGL smoke plume and lands back in its own cloud. |  |
