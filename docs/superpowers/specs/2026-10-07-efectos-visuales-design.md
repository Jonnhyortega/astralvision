# Efectos visuales — Diseño

Fecha: 2026-10-07 · Rama: `feat/efectos-visuales` · Proyecto: AstralPage (Vite + React 18 + styled-components)

## Objetivo

Sumar animaciones de entrada, parallax sutil, microinteracciones, transiciones de ruta, smooth scroll y un fondo 3D de constelación, sin perder legibilidad (el texto del hero es la prioridad) ni más de 5 puntos de Lighthouse mobile.

**Principio rector:** el fondo 3D es ambiente, no protagonista. No debe atraer la atención ni competir con el texto.

## Estado actual (relevado)

- Hero con canvas 3D propio (`HeroScene` + `AstralObject`: esfera con `MeshDistortMaterial`, ~3500 estrellas, `OrbitControls`, `frameloop="always"`, `dpr` hasta 2). Ya cargado con `React.lazy`.
- Segundo canvas en Opinions (`GalaxyBackground`).
- `BlackHole.jsx` sin uso.
- Framer Motion instalado, animaciones definidas ad hoc en cada componente; `animate.css` instalado.
- Navbar se oculta animando `top` (propiedad de layout).
- `Hero` `Background` con animación de escala infinita.
- `Layout` hace `window.scrollTo(0, 0)` en cada cambio de ruta.

## Parte 1 — Fondo de constelación

### Componente
- `src/components/StarfieldBackground/` montado una vez en `App`, `position: fixed; inset: 0`, detrás del contenido (`z-index` negativo / capa base), `pointer-events: none`, `aria-hidden="true"`.
- Reemplaza ambos canvas. Se eliminan `HeroScene.jsx`, `AstralObject.jsx`, `BlackHole.jsx`, `GalaxyBackground.jsx` y sus usos.
- Las secciones que hoy pintan fondo negro opaco (p. ej. `HeroContainer`) pasan a fondo transparente o semitransparente para que se vea la constelación.

### Visual
- ~700 puntos (`THREE.Points`) con sprite circular pequeño, opacidad 0.35–0.6, tamaño variable.
- ~40 segmentos (`LineSegments`) entre vecinos cercanos, calculados una sola vez al montar, opacidad ~0.1.
- Sin luces, sin bloom, sin postprocesado, sin modelos externos. Geometría procedural.
- Legibilidad del hero: se mantiene el `Overlay` oscuro y se agrega una viñeta radial oscura detrás de `TextContent`; las estrellas quedan casi invisibles en el centro del hero.

### Interacción
- Sin animación idle: si el usuario no se mueve, no se renderiza.
- Mouse: inclinación de cámara máx. ~2–3°, interpolada (lerp) hasta asentarse.
- Scroll: la cámara avanza levemente en Z y el color de las estrellas/líneas interpola de violeta `#6411ad` a cian según el progreso de scroll de la página.
- `frameloop="demand"`; `invalidate()` en `pointermove`/`scroll` y mientras dura la interpolación; sin render con la pestaña oculta (`visibilitychange`).

### Carga
- Fallback siempre presente: gradiente CSS (azul noche → negro) con algunos puntos estáticos (CSS `radial-gradient`), renderizado sin JS adicional.
- El canvas se importa con `React.lazy` y se monta después del primer render en `requestIdleCallback` (fallback `setTimeout`). Aparece con fade de opacidad.
- `dpr={[1, 1.5]}`, `antialias: false`, `powerPreference: "low-power"`.

### Mobile / gama baja / reduced motion
- Sin canvas (ni descarga de three.js) si: ancho < 768px, `navigator.hardwareConcurrency <= 4`, o `navigator.connection.saveData`. Solo fallback estático.
- `prefers-reduced-motion: reduce`: el canvas se renderiza un frame y no escucha mouse ni scroll.
- La decisión se toma en un hook `useCanStarfield()` evaluado antes del `lazy` import.

## Parte 2 — Sistema de animaciones

### `src/lib/motion.js`
- `durations`: `fast` 0.2, `base` 0.5, `slow` 0.8.
- `easings`: `out` `[0.22, 1, 0.36, 1]`.
- `distances`: `reveal` 24 (px), `parallax` 40 (px máx.).
- Variantes: `fadeUp`, `fadeIn`, `staggerContainer` (stagger 0.08), `hoverLift`, `tapPress`, `pageTransition`.

### `src/components/motion/`
- `<Reveal>`: `whileInView` + `viewport={{ once: true, amount: 0.2 }}`, variante `fadeUp` por defecto, prop `as` y `delay`.
- `<RevealGroup>` / `<RevealItem>`: contenedor con stagger + hijos.
- `<Parallax>`: `useScroll` + `useTransform` sobre `y`, rango configurable acotado a `distances.parallax`; desactivado con reduced motion.
- Solo se anima `transform` y `opacity`.

### Aplicación
- Hero: el `Title` (LCP) se renderiza visible sin animación de entrada. Subtítulo, microtexto y botones mantienen su entrada usando tokens de `motion.js`. Parallax suave del bloque de texto al scrollear (sube más lento y baja opacidad). Se elimina la escala infinita de `Background`.
- Secciones (Servicios, HowWeDoIt, Opinions, Contact, Technologies, páginas internas): envueltas con `<Reveal>`; listas y grillas con `<RevealGroup>`. Se eliminan las animaciones ad hoc reemplazadas; `animate.css` se quita si queda sin uso.
- Imágenes de proyectos: `<Parallax>` sutil.
- Navbar: ocultar/mostrar con `transform: translateY` en lugar de `top`; al pasar ~40px de scroll, fondo oscuro con `backdrop-filter` (estado `scrolled`).
- Barra de progreso de scroll: `motion.div` fijo arriba, `scaleX` ligado a `scrollYProgress`, gradiente violeta→cian, altura 2–3px.
- Microinteracciones: botones `whileHover` scale 1.03 / `whileTap` 0.97; tarjetas de servicios y portfolio `hoverLift` (translateY + sombra vía opacidad de pseudo-capa). `TiltCard` usa los tokens.
- Transiciones de ruta: `AnimatePresence mode="wait"` en `Routes` con `useLocation`, fade ~0.25s.
- `<MotionConfig reducedMotion="user">` en `App`.

### Smooth scroll
- Dependencia nueva: `lenis`. Hook/provider `useLenis` inicializado en `App`.
- Deshabilitado con reduced motion (scroll nativo).
- Chatbot y otras áreas con scroll interno marcadas con `data-lenis-prevent`.
- `Layout` usa `lenis.scrollTo(0, { immediate: true })` en cambio de ruta (fallback `window.scrollTo`).
- GSAP/ScrollTrigger: no se incorpora (no hay secuencias complejas).

## Parte 3 — Medición y verificación

### Lighthouse
- Baseline: build de producción del estado actual (`npm run build` + `vite preview`), Lighthouse mobile, 3 corridas, mediana.
- Final: mismo procedimiento con efectos.
- Reporte: Performance, LCP, TBT, CLS, Speed Index y peso del JS inicial, antes vs. después.
- Criterio: caída ≤ 5 puntos. Si se excede: diferir más el canvas, sacar Lenis del bundle inicial, reducir partículas.

### Verificación manual (navegador integrado)
- Desktop: fondo visible, contraste del título y botones del hero ≥ WCAG AA, clicks atraviesan el canvas, parallax/header/progreso/transiciones correctos.
- Mobile 375px: sin canvas ni chunk de three.js en la red, sin scroll horizontal.
- Reduced motion (simulado vía override de `matchMedia`): sin parallax, sin Lenis, 3D estático.
- Consola sin errores nuevos. `npm run build` pasa. `npm run lint` no introduce errores nuevos respecto del baseline (se registra su estado antes de empezar).

### Etapas / commits
1. `motion.js` + `Reveal`/`RevealGroup`/`Parallax`.
2. Reveals, parallax y microinteracciones en secciones.
3. Navbar, barra de progreso, transiciones de ruta, Lenis.
4. Fondo de constelación + remoción de canvas viejos.
5. Medición final y ajustes.

## Fuera de alcance
- Deploy (no se ejecuta `BUILD_DEPLOY.ps1` ni se pushea a `main`).
- Cambios de copy, contenido o SEO.
