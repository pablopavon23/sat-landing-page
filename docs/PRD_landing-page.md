# PRD — San Antón Trail · La conquista del Molino

## Objetivo

Crear una landing page moderna, rápida y responsive para el San Antón Trail — La conquista del Molino, carrera trail anual en Puerto Lápice (Ciudad Real) cada enero.

La web debe ser:
- meramente informativa,
- muy visual,
- sencilla de mantener,
- optimizada para móvil,
- con excelente rendimiento y SEO básico,
- sin backend propio,
- sin autenticación,
- sin base de datos.

El objetivo es tener una primera versión funcional y profesional con el menor coste posible.

---

# Stack Tecnológico

## Framework
- Next.js (App Router)

## Estilos
- Tailwind CSS

## Animaciones
- Framer Motion

## Iconos
- Lucide React

## Hosting
- Vercel

---

# Requisitos Técnicos

## Generales
- TypeScript obligatorio
- Mobile-first
- Responsive completo
- Accesibilidad básica
- SEO básico
- Performance alta (>90 Lighthouse)
- Diseño moderno y minimalista

---

# Estructura del Proyecto

```txt
/app
  page.tsx
  layout.tsx
  globals.css

/components
  Navbar.tsx
  Hero.tsx
  Countdown.tsx
  AboutRace.tsx
  Modalities.tsx
  RouteSection.tsx
  Gallery.tsx
  Sponsors.tsx
  FAQ.tsx
  Footer.tsx

/data
  race.ts

/public
  /images
  /logos
  /gallery
  /maps
```

---

# Filosofía del Diseño

Inspiración visual:
- Strava
- Nike Running
- UTMB
- páginas modernas de eventos deportivos

Características visuales:
- tipografía contundente,
- mucho espacio,
- imágenes grandes,
- contraste alto,
- estética deportiva moderna.

No debe parecer:
- institucional,
- corporativa,
- antigua,
- “web de ayuntamiento”.

---

# Paleta Recomendada

## Tema oscuro
- Fondo: negro/gris muy oscuro
- Texto principal: blanco
- Color acento: naranja, rojo o amarillo deportivo

Ejemplo:

```css
background: #0B0B0B;
primary: #FF5A1F;
text: #FFFFFF;
muted: #9CA3AF;
```

---

# Contenido de la Landing

## 1. Navbar

Elementos:
- Logo / "San Antón Trail"
- Inicio
- Recorrido
- Modalidades
- FAQ
- Botón "Inscribirse"

Navbar sticky con blur/transparencia al hacer scroll.

---

# 2. Hero Section

Contenido:
- "San Antón Trail"
- "La conquista del Molino" (subtítulo)
- "11 de enero · Puerto Lápice, Ciudad Real"
- claim: "La carrera con la que empiezas el año, entre senderos y cervezas post-carrera"
- botón principal:
  - "Inscribirse" (registrationUrl → placeholder "#")
- botón secundario:
  - "Ver recorrido"

Debe incluir:
- imagen de fondo fullscreen (placeholder mientras no haya fotos)
- overlay oscuro
- animaciones suaves

Ejemplo visual:
- texto centrado
- cuenta atrás debajo
- CTA muy visible

---

# 3. Cuenta Atrás

Componente countdown hacia la fecha de la carrera (11 de enero, edición anual).

Mostrar:
- días
- horas
- minutos

Diseño:
- números grandes
- muy visual
- responsive

---

# 4. Información General

Bloque con:
- descripción: trail por campo en Puerto Lápice, La Mancha
- ambiente: festivo, cervezas post-carrera
- terreno: caminos rurales y senderos
- experiencia: accesible para todos los niveles (desde Senderismo 10K hasta Carrera 15.2K)
- dificultad: variable según modalidad

Máximo 2-3 párrafos.

---

# 5. Modalidades

Cards para cada modalidad.

Modalidades:
1. **Senderismo 10K** — no competitiva
   - distancia: 10 km
   - desnivel: TBD
   - dificultad: Baja
   - hora salida: 9:00
   - tipo: marche / senderismo
2. **Carrera 15.2K** — competitiva
   - distancia: 15.2 km
   - desnivel: TBD
   - dificultad: Media
   - hora salida: 10:00
   - tipo: trail running competitivo

Cada card incluye:
- distancia
- desnivel (placeholder)
- dificultad
- hora salida
- tipo (competitiva / no competitiva)

Diseño:
- cards modernas
- hover animations
- grid responsive
- distinguir visualmente marcha vs carrera

---

# 6. Recorrido

Sección con:
- mapa o imagen del recorrido (placeholder)
- descarga GPX (placeholder)
- descripción breve: "Trail por los caminos rurales y senderos de Puerto Lápice"

Posibilidad futura:
- integrar mapa interactivo

Por ahora:
- imagen estática optimizada (placeholder)

---

# 7. Galería

Grid responsive de imágenes.

⚠️ Placeholder — sin fotos de ediciones anteriores todavía.

Características:
- lazy loading
- hover zoom
- optimización automática de imágenes

Usar componente Image de Next.js.

---

# 8. FAQ

⚠️ Placeholder — sin preguntas frecuentes todavía.

Accordion simple con preguntas típicas (por confirmar):
- edad mínima
- avituallamientos
- recogida dorsales
- cancelaciones
- reglamento

---

# 9. Patrocinadores

⚠️ Placeholder — sin logos de patrocinadores todavía.

Grid simple de logos.

Debe soportar:
- 4–12 logos fácilmente

Formato:
- monocromo o limpio
- responsive

---

# 10. Footer

Contenido:
- redes sociales (placeholder — sin perfiles todavía)
- email contacto (placeholder)
- copyright: "© 2025 San Antón Trail"
- enlaces legales (placeholder)

---

# Datos Centralizados

Crear un archivo:

```ts
/data/race.ts
```

Con estructura:

```ts
export const raceData = {
  name: "San Antón Trail",
  subtitle: "La conquista del Molino",
  date: "2026-01-11",
  city: "Puerto Lápice, Ciudad Real",
  registrationUrl: "#",
  heroTitle: "La carrera con la que empiezas el año, entre senderos y cervezas post-carrera",
  distances: [
    {
      name: "Senderismo 10K",
      distance: "10 km",
      elevation: "TBD",
      difficulty: "Baja",
      startTime: "9:00",
      type: "no competitiva",
    },
    {
      name: "Carrera 15.2K",
      distance: "15.2 km",
      elevation: "TBD",
      difficulty: "Media",
      startTime: "10:00",
      type: "competitiva",
    },
  ],
  social: {
    instagram: "#",
    strava: "#",
  },
  contactEmail: "placeholder@sat.com",
};
```

Toda la web debe consumir datos desde este archivo.

Objetivo:
- modificar futuras ediciones fácilmente,
- reutilizar la plantilla,
- minimizar hardcoded strings.

---

# SEO

Implementar:
- metadata dinámica
- Open Graph
- favicon
- sitemap
- robots.txt

Schema.org:
- tipo Event

Keywords orientativas:
- trail running
- carrera popular
- carrera enero
- Puerto Lápice
- Ciudad Real
- La Mancha
- San Antón

---

# Rendimiento

Objetivos:
- Lighthouse >90
- carga rápida en móvil
- imágenes optimizadas
- mínimo JavaScript innecesario

---

# Responsive

Breakpoints importantes:
- móvil
- tablet
- desktop

Prioridad absoluta:
- experiencia móvil

La mayoría de usuarios accederán desde Instagram o móvil.

---

# Animaciones

Usar Framer Motion de forma ligera:
- fade-in on scroll
- hover transitions
- botones
- aparición progresiva

Evitar:
- animaciones excesivas,
- parallax pesado,
- efectos complejos.

---

# Fuera de Alcance (NO implementar)

No incluir:
- backend
- login
- panel admin
- pagos
- base de datos
- sistema de resultados
- autenticación
- gestión de usuarios

La landing debe ser completamente estática.

---

# Deploy

Objetivo:
- deploy automático en Vercel conectado a GitHub.

Cada push a main:
- despliegue automático.

---

# Objetivo Final

Resultado esperado:
- landing moderna,
- deportiva,
- rápida,
- profesional,
- extremadamente simple de mantener,
- reutilizable cada año con mínimos cambios.

