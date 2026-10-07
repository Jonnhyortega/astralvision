# Efectos visuales — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Animaciones de entrada, parallax, microinteracciones, transiciones de ruta, Lenis y un fondo de constelación 3D global, sin perder legibilidad del hero ni más de 5 puntos de Lighthouse mobile.

**Architecture:** Tokens y variantes centralizados en `src/lib/motion.js`, consumidos por componentes `Reveal`/`RevealGroup`/`RevealItem`/`Parallax`. Un único `StarfieldBackground` fijo en `App`: fallback CSS siempre presente + canvas R3F lazy montado en idle solo en desktop capaz. Lógica pura (capacidad del dispositivo, generación de la constelación, color por scroll, estado del navbar) en módulos sin React, cubiertos con Vitest.

**Tech Stack:** Vite 5, React 18, styled-components 6, framer-motion 12, @react-three/fiber 8, @react-three/drei 9, three 0.182, lenis (nuevo), vitest (nuevo, dev).

**Spec:** `docs/superpowers/specs/2026-10-07-efectos-visuales-design.md`

## Global Constraints

- Animar solo `transform` y `opacity` (en framer-motion: `x`, `y`, `scale`, `scaleX`, `rotate*`, `opacity`).
- Tokens: `durations` fast 0.2 / base 0.5 / slow 0.8; `easings.out` `[0.22, 1, 0.36, 1]`; `distances.reveal` 24; `distances.parallax` 40; stagger 0.08; transición de ruta ~0.25s.
- Reveal anima una sola vez (`once: true`).
- Fondo 3D: `pointer-events: none`, `aria-hidden="true"`, `frameloop="demand"`, `dpr={[1, 1.5]}`, `antialias: false`, `powerPreference: "low-power"`, ~700 puntos, ~40 segmentos (opacidad ~0.1), sin luces/postprocesado/modelos, color `#6411ad` → cian según scroll, inclinación por mouse ≤ 3°, sin animación idle.
- Sin canvas (ni descarga del chunk three) si ancho < 768, `hardwareConcurrency <= 4` o `connection.saveData`.
- `prefers-reduced-motion: reduce`: sin parallax, sin Lenis, reveals solo fade, 3D renderiza un frame y no escucha eventos.
- El `Title` del hero (LCP) visible sin animación de entrada.
- GSAP no se instala. Única dependencia de runtime nueva: `lenis`.
- `animate.css` se mantiene (sigue en uso en Chatbot, ModalMessage, LogoComponent); solo se quita de `CardProject`.
- Lint baseline: 150 problemas (149 errores, 1 warning). No sumar problemas nuevos.
- No deploy, no push a `main`.

## Review Focus

1. **Sección más alta que el viewport** (p. ej. Projects con muchas tarjetas): debe revelarse igual. → `Reveal` usa `viewport={{ once: true, amount: "some", margin: "0px 0px -10% 0px" }}`, no `amount: 0.2`. Verificación en Task 2.
2. **WebGL no disponible / contexto perdido**: el sitio no se rompe, queda el fallback CSS. → Error boundary en Task 4.
3. **Cambio de ruta con Lenis + AnimatePresence**: la nueva página arranca arriba, sin salto visible a mitad de la animación de salida. → scroll a 0 en `onExitComplete` (Task 3).
4. **Chatbot abierto**: su lista de mensajes scrollea con rueda/touch y el `scrollIntoView` sigue funcionando. → `data-lenis-prevent` (Task 3).
5. **Contenido legible sin JS de efectos / con reduced motion**: nada queda en `opacity: 0` permanente. → verificación con override de `matchMedia` (Task 3 y 5).

---

### Task 0: Baseline de Lighthouse y Vitest

**Files:**
- Create: `scripts/lighthouse.mjs`, `vitest.config.js`, `docs/superpowers/perf/lighthouse.md`
- Modify: `package.json` (scripts `test`, `perf`; devDep `vitest@^2.1.9`)

- [ ] **Step 1:** `npm i -D vitest@^2.1.9`. Agregar scripts `"test": "vitest run"` y `"perf": "node scripts/lighthouse.mjs"`. `vitest.config.js` con `environment: "node"`, `include: ["src/**/*.test.js"]`.
- [ ] **Step 2:** `scripts/lighthouse.mjs <label>`: corre `npx lighthouse http://localhost:4173/ --only-categories=performance --output=json --output-path=<tmp>/<label>-<n>.json --chrome-flags="--headless=new" --quiet` 3 veces (preset mobile por defecto), imprime mediana de: score, LCP, TBT, CLS, Speed Index, y bytes de JS transferidos (suma de `network-requests` con `resourceType === "Script"`). Archivos JSON en `os.tmpdir()`.
- [ ] **Step 3:** `npm run build`, luego `npx vite preview --port 4173` en background, luego `npm run perf -- baseline`. Expected: tabla con 5 métricas + JS.
- [ ] **Step 4:** Volcar la tabla en `docs/superpowers/perf/lighthouse.md` sección "Baseline (main @ cc31d88)". Detener preview.
- [ ] **Step 5:** Commit `chore: vitest y script de lighthouse con baseline`.

### Task 1: Sistema de motion

**Files:**
- Create: `src/lib/motion.js`, `src/lib/motion.test.js`, `src/components/motion/Reveal.jsx`, `src/components/motion/Parallax.jsx`, `src/components/motion/index.js`

**Interfaces:**
- Produces: `durations`, `easings`, `distances`, `stagger` (0.08), variantes `fadeUp`, `fadeIn`, `staggerContainer`, `hoverLift`, `tapPress`, `pageTransition` (objetos con `hidden`/`visible`, y `exit` en `pageTransition`), `hoverLift`/`tapPress` como objetos de target (`{ y, scale }`). Helper `ANIMATABLE_KEYS` (array).
- Produces: `<Reveal as? delay? variants? className? children>`, `<RevealGroup as? className?>`, `<RevealItem as? className?>`, `<Parallax offset? (px, default distances.parallax) className?>`, todos re-exportados desde `src/components/motion/index.js`.

- [ ] **Step 1: test** `motion.test.js`:
  - `durations` igual a `{ fast: 0.2, base: 0.5, slow: 0.8 }`; `easings.out` igual a `[0.22, 1, 0.36, 1]`; `distances.reveal === 24`; `distances.parallax === 40`.
  - "variantes solo usan transform/opacity": para cada estado de `fadeUp`, `fadeIn`, `staggerContainer`, `pageTransition`, y para `hoverLift`, `tapPress`, toda key distinta de `transition` está en `["opacity","x","y","scale","scaleX","scaleY","rotate","rotateX","rotateY"]`.
  - `fadeUp.hidden` igual a `{ opacity: 0, y: 24 }`; `staggerContainer.visible.transition.staggerChildren === 0.08`.
- [ ] **Step 2:** `npm test` → FAIL (módulo inexistente).
- [ ] **Step 3:** Implementar `motion.js`.
- [ ] **Step 4:** `npm test` → PASS.
- [ ] **Step 5:** Implementar `Reveal` (`motion[as]` con `initial="hidden" whileInView="visible" viewport={{ once: true, amount: "some", margin: "0px 0px -10% 0px" }}`, `delay` sumado a la transición), `RevealGroup` (mismo viewport, `staggerContainer`), `RevealItem` (`fadeUp`, sin `initial`/`whileInView` propios). `Parallax`: `useScroll({ target: ref, offset: ["start end", "end start"] })` + `useTransform(scrollYProgress, [0,1], [offset, -offset])` en `style.y`; si `useReducedMotion()` devuelve true, renderiza `div` sin `style.y`.
- [ ] **Step 6:** `npm run build` → OK. Commit `feat(motion): tokens centralizados y componentes Reveal/Parallax`.

### Task 2: Aplicar reveals, parallax y microinteracciones

**Files (Modify):** `src/components/Hero/Hero.jsx`, `src/components/Hero/HeroStyles.js`, `src/components/Servicios/Servicios.jsx`, `src/components/Servicios/TiltCard.jsx`, `src/components/HowWeDoIt/HowWeDoIt.jsx`, `src/components/Opinions/Opinions.jsx`, `src/components/ContactForm/ContactForm.jsx`, `src/components/TechnologiesComponente/Technologies.jsx`, `src/pages/Projects/ProjectsPage.jsx`, `src/components/CardProject/CardProject.jsx`, `src/pages/ServiceLanding/ServiceLanding.jsx`, `src/pages/Contact/Contact.jsx`, `src/App.css`

**Interfaces:** Consumes Task 1.

- [ ] **Step 1: Hero.** `Title` sin props de animación (ya lo está; no tocar). `Subtitle`/`MicroText`/`ButtonsContainer`: `transition` con `durations`/`easings`. `TextContent` envuelto en parallax de salida: `useScroll()` de la página, `y` 0→-60 y `opacity` 1→0.4 entre `scrollY` 0 y `innerHeight` (sin efecto con reduced motion). Quitar la animación infinita de `Background` (sin `as={motion.div}`, sin `will-change`). Mantener `Overlay`.
- [ ] **Step 2: secciones.** Reemplazar cada `initial/whileInView/transition` ad hoc listado en el relevamiento por `Reveal` (títulos, bloques) y `RevealGroup`/`RevealItem` (grillas de Servicios, pasos de HowWeDoIt, tarjetas de Opinions, logos de Technologies, tarjetas de ProjectsPage, items de ServiceLanding). Respetar estilos existentes pasando `as` o `className`; cuando el elemento es un styled `motion.*` (p. ej. `ProjectCard`, `TestimonialCard`), pasarle `variants={fadeUp}` en lugar de envolverlo.
- [ ] **Step 3: parallax de imágenes.** `Parallax offset={20}` alrededor de la imagen en `CardProject` y de la imagen de `HowWeDoIt`. Quitar `animate__*` e `import "animate.css"` de `CardProject`.
- [ ] **Step 4: microinteracciones.** Clases `.btn-primary`/`.btn-secondary` en `App.css`: `transition: transform 0.2s cubic-bezier(0.22,1,0.36,1)`, `:hover { transform: scale(1.03) }`, `:active { transform: scale(0.97) }` (son `<a>`/`NavLink`, CSS evita convertirlos en motion). Botones `motion.button` existentes: `whileHover={{ scale: 1.03 }} whileTap={tapPress}`. Tarjetas de servicios/proyectos/opiniones: `whileHover={hoverLift}`. `TiltCard`: usar `durations`/`easings` en sus transiciones; reemplazar `transition: transform 0.1s ease-out` hardcodeado por el token `fast`.
- [ ] **Step 5: verificar** con `npm run dev` en el navegador integrado: cada sección entra una sola vez al scrollear (volver arriba y bajar no re-anima); `/projects` con todas las tarjetas visibles al llegar al final (Review Focus 1); `grep -rn "animate:\|initial=" src --include=*.jsx` no muestra props sobre `width|height|top|left|margin|padding`. `npm run build` OK; `npm run lint` ≤ 150 problemas.
- [ ] **Step 6:** Commit `feat(motion): reveals, parallax y microinteracciones en secciones`.

### Task 3: Navbar, progreso de scroll, transiciones de ruta, Lenis

**Files:**
- Create: `src/lib/navbarState.js`, `src/lib/navbarState.test.js`, `src/components/ScrollProgress/ScrollProgress.jsx`, `src/lib/lenis.js`
- Modify: `src/components/Navbar/Navbar.jsx`, `src/components/Navbar/NavbarStyles.jsx`, `src/Routes/Routes.jsx`, `src/components/Layout/Layout.jsx`, `src/pages/ServiceLanding/ServiceLanding.jsx:43`, `src/components/Chatbot/Chatbot.jsx`, `src/App.jsx`, `package.json`

**Interfaces:**
- Produces: `getNavbarState(prevY: number, y: number) -> { hidden: boolean, scrolled: boolean }` (`scrolled = y > 40`; `hidden = y > prevY && y > 100`; `hidden=false` si `y <= 100`).
- Produces: `initLenis() -> Lenis | null` (null con reduced motion), `getLenis() -> Lenis | null`, `scrollToTop()` (usa `lenis.scrollTo(0, { immediate: true })` o `window.scrollTo(0, 0)`).

- [ ] **Step 1: test** `navbarState.test.js`: `(0,50)` → `{hidden:false, scrolled:true}`; `(200,300)` → `{hidden:true, scrolled:true}`; `(300,200)` → `{hidden:false, scrolled:true}`; `(0,30)` → `{hidden:false, scrolled:false}`; `(80,99)` → `hidden:false`.
- [ ] **Step 2:** `npm test` → FAIL. **Step 3:** implementar. **Step 4:** `npm test` → PASS.
- [ ] **Step 5: Navbar.** Usar `getNavbarState` dentro del handler de scroll existente (listener `{ passive: true }`). `NavbarNav`: quitar `top` dinámico; `transform: translateY(${hidden ? "-100%" : "0"})`; transición solo de `transform` y `background-color`. Estado `scrolled`: `background-color: rgba(5,5,15,0.75); backdrop-filter: blur(12px)`; no scrolled: transparente. Renombrar prop `$scrollDirection` → `$hidden`, agregar `$scrolled`.
- [ ] **Step 6: ScrollProgress.** `motion.div` fijo `top:0; left:0; right:0; height:3px; transform-origin: 0 50%; z-index: 1001; pointer-events:none`, `style={{ scaleX: useSpring(scrollYProgress, { stiffness: 200, damping: 30 }) }}`, fondo `linear-gradient(90deg, #6411ad, #00d4ff)`. Montar en `App`.
- [ ] **Step 7: Lenis.** `npm i lenis`. `src/lib/lenis.js` con `new Lenis({ autoRaf: true })` salvo `matchMedia("(prefers-reduced-motion: reduce)").matches`. Llamar `initLenis()` en un `useEffect` de `App` (destroy en cleanup). Envolver el árbol de `App` en `<MotionConfig reducedMotion="user">`. En `Chatbot` agregar `data-lenis-prevent` al `.chat-window`.
- [ ] **Step 8: Transiciones de ruta.** `Routes.jsx`: `const location = useLocation()`; `<AnimatePresence mode="wait" onExitComplete={scrollToTop}>` con `<motion.div key={location.pathname} variants={pageTransition} initial="hidden" animate="visible" exit="exit">` envolviendo `<Routes location={location}>`. Quitar el `useEffect` de scroll de `Layout` y el `window.scrollTo(0,0)` de `ServiceLanding` (lo cubre `onExitComplete`; primer carga ya está arriba).
- [ ] **Step 9: verificar** en navegador integrado: header se oculta/aparece con transform y toma vidrio pasados 40px; barra de progreso llega al 100% al final; navegar Home → Proyectos → Servicio arranca arriba sin salto (Review Focus 3); chatbot abierto scrollea con rueda (Review Focus 4). Reduced motion: abrir `"C:\Program Files\Google\Chrome\Application\chrome.exe" --force-prefers-reduced-motion --user-data-dir=<tmp> http://localhost:5173` y comprobar en consola que `window.__lenis` (asignado solo en `import.meta.env.DEV`) es `null`, que no hay parallax y que todo el contenido es visible al scrollear (Review Focus 5). `npm test`, `npm run build` OK; lint ≤ 150.
- [ ] **Step 10:** Commit `feat(motion): navbar por transform, barra de progreso, transiciones de ruta y Lenis`.

### Task 4: Fondo de constelación

**Files:**
- Create: `src/components/StarfieldBackground/capability.js`, `capability.test.js`, `constellation.js`, `constellation.test.js`, `StarfieldBackground.jsx`, `StarfieldCanvas.jsx`, `StarfieldStyles.js`
- Modify: `src/App.jsx`, `src/components/Layout/LayoutStyles.js`, `src/components/Hero/Hero.jsx`, `src/components/Hero/HeroStyles.js`, `src/components/Opinions/Opinions.jsx`, `src/components/Opinions/OpinionsStyles.js` (fondo), `src/App.css` (`body`/`#root` background)
- Delete: `src/components/Hero/HeroScene.jsx`, `AstralObject.jsx`, `BlackHole.jsx`, `src/components/Opinions/GalaxyBackground.jsx`

**Interfaces:**
- Produces: `shouldRenderStarfield({ width, cores, saveData }) -> boolean`; `prefersReducedMotion() -> boolean`.
- Produces: `createConstellation({ count = 700, maxSegments = 40, seed = 7, radius = 12 }) -> { positions: Float32Array (count*3), sizes: Float32Array (count), segments: Float32Array (≤ maxSegments*6) }` — determinista por `seed` (PRNG mulberry32), puntos en un volumen achatado (z en [-radius, 0]); segmentos = para puntos al azar, unir con su vecino más cercano si distancia < 2.5, sin duplicados.
- Produces: `colorAtProgress(p: number) -> [r, g, b]` en 0..1, lerp entre `#6411ad` y `#00d4ff`, `p` clampeado a [0,1].

- [ ] **Step 1: tests.**
  - `capability.test.js`: `{width:1440,cores:8,saveData:false}` → true; width 767 → false; cores 4 → false; saveData true → false; `cores` undefined → true (Safari no lo expone).
  - `constellation.test.js`: `positions.length === 2100`; `sizes.length === 700`; `segments.length <= 240` y `% 6 === 0`; misma `seed` → arrays iguales; distinta `seed` → distintos; todo z en `[-12, 0]`; ningún valor `NaN`.
  - `colorAtProgress(0)` ≈ `[100/255, 17/255, 173/255]`; `colorAtProgress(1)` ≈ `[0, 212/255, 1]`; `colorAtProgress(-1)` igual a `(0)`; `colorAtProgress(2)` igual a `(1)`.
- [ ] **Step 2:** `npm test` → FAIL. **Step 3:** implementar `capability.js`, `constellation.js` (incluye `colorAtProgress`). **Step 4:** `npm test` → PASS.
- [ ] **Step 5: StarfieldBackground.jsx.** Siempre renderiza `<Fallback aria-hidden>`: `position: fixed; inset: 0; z-index: 0; pointer-events: none;` fondo `radial-gradient(ellipse at 50% 30%, #0b1030 0%, #05060f 60%, #000 100%)` + 2–3 capas `radial-gradient(1px 1px at x y, rgba(255,255,255,.5), transparent)` como puntos estáticos. Si `shouldRenderStarfield({ width: innerWidth, cores: navigator.hardwareConcurrency, saveData: navigator.connection?.saveData })`, tras `requestIdleCallback` (fallback `setTimeout(…, 1500)`) setea `ready` y monta `<Suspense fallback={null}><StarfieldCanvas reducedMotion={prefersReducedMotion()} /></Suspense>` (con `React.lazy`) dentro de un error boundary local que renderiza `null` (Review Focus 2). El canvas entra con `opacity` 0→1 en `durations.slow`. El wrapper raíz lleva `data-starfield`; `LayoutWrapper` agrega `& > *:not([data-starfield]) { position: relative; z-index: 1; }` para que todo el contenido quede encima (Navbar y ScrollProgress conservan su `position: fixed` y z-index propios).
- [ ] **Step 6: StarfieldCanvas.jsx.** `<Canvas frameloop="demand" dpr={[1, 1.5]} gl={{ antialias: false, alpha: true, powerPreference: "low-power" }} camera={{ position: [0,0,6], fov: 60 }} style={{ pointerEvents: "none" }}>`. `Points` con `bufferGeometry` (positions, sizes) + `pointsMaterial` (`size` 0.05, `sizeAttenuation`, `transparent`, `opacity` 0.55, `depthWrite: false`, mapa circular generado en canvas 32px); `lineSegments` con `lineBasicMaterial` `opacity` 0.1. Un componente `Rig` con `useFrame`: lerp (factor 0.08) de `camera.rotation.x/y` hacia target del mouse (máx. `3 * Math.PI/180`) y de `camera.position.z` hacia `6 - progress * 2`; actualiza color de ambos materiales con `colorAtProgress(progress)`; si la diferencia con el target es > 1e-4 llama `invalidate()`, si no, se detiene. Listeners `pointermove` y `scroll` (`passive`) en `window` que actualizan targets e `invalidate()`; `progress = scrollY / (scrollHeight - innerHeight)`. Con `reducedMotion` no se registran listeners (un único frame). `visibilitychange`: no invalidar si `document.hidden`.
- [ ] **Step 7: integración.** Montar `<StarfieldBackground />` como primer hijo de `Layout` en `App`. Quitar de `Hero` el `CanvasContainer`, `useInView`, `HeroScene` lazy; `HeroContainer` `background-color: transparent`; `Background` con imagen comentada → eliminarlo si no pinta nada. `TextContent`: reforzar viñeta `radial-gradient(ellipse at center, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 70%)`. `Opinions`: quitar `GalaxyBackground`, su `useInView` y el contenedor del canvas; fondo de sección transparente/semitransparente. `App.css`: `body { background: #000 }`. Borrar los 4 archivos listados.
- [ ] **Step 8: verificar** en navegador integrado (desktop): estrellas detrás de todo el sitio; hero legible (contraste título/botones ≥ 4.5:1 medido con `getComputedStyle` + muestreo del fondo en screenshot); click en "Ver proyectos" funciona (canvas no intercepta); sin movimiento → `renderer.info.render.frame` (exponer vía `window.__starfield` solo en dev) no aumenta en 3 s; mover mouse/scrollear → aumenta y luego se detiene. Viewport 375px (`resize_window` mobile, recargar): en red no hay chunk de three/R3F, sin scroll horizontal. Forzar contexto perdido (`WEBGL_lose_context` en consola) → no hay error sin capturar y queda el fallback. `npm test`, `npm run build` OK; lint ≤ 150.
- [ ] **Step 9:** Commit `feat(3d): fondo de constelación global y remoción de canvas anteriores`.

### Task 5: Medición final y ajustes

**Files:** Modify `docs/superpowers/perf/lighthouse.md` (+ código si hay que ajustar)

- [ ] **Step 1:** `npm run build`, `npx vite preview --port 4173`, `npm run perf -- final`.
- [ ] **Step 2:** Agregar sección "Final" y tabla comparativa (score, LCP, TBT, CLS, SI, JS inicial; columnas baseline / final / Δ).
- [ ] **Step 3:** Si Δ score < -5: aplicar en orden y re-medir tras cada uno: (a) `import("lenis")` dinámico en `initLenis`; (b) subir el delay de montaje del canvas a `setTimeout` 3000 tras `load`; (c) `count` 450, `maxSegments` 25. Registrar cada intento en el doc.
- [ ] **Step 4:** Revisión con reduced motion (Chrome con `--force-prefers-reduced-motion`): sin parallax, sin Lenis, 3D estático, todo el contenido visible.
- [ ] **Step 5:** Commit `perf: comparación lighthouse antes/después`.
