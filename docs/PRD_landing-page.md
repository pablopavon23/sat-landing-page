# PRD — Landing Informativa para Carrera Popular

## Objetivo

Crear una landing page moderna, rápida y responsive para una carrera popular anual que se celebra en enero.

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
  Distances.tsx
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
- Logo/nombre carrera
- Inicio
- Recorrido
- FAQ
- Patrocinadores
- Botón “Inscribirse”

Navbar sticky con blur/transparencia al hacer scroll.

---

# 2. Hero Section

Contenido:
- nombre carrera
- fecha
- ubicación
- claim/mensaje potente
- botón principal:
  - “Inscribirse”
- botón secundario:
  - “Ver recorrido”

Debe incluir:
- imagen de fondo fullscreen
- overlay oscuro
- animaciones suaves

Ejemplo visual:
- texto centrado
- cuenta atrás debajo
- CTA muy visible

---

# 3. Cuenta Atrás

Componente countdown hacia la fecha de la carrera.

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
- descripción breve de la carrera
- ambiente
- terreno
- experiencia
- dificultad

Máximo 2-3 párrafos.

---

# 5. Distancias

Cards para cada modalidad.

Ejemplo:
- 5K
- 10K
- 21K

Cada card incluye:
- distancia
- desnivel
- dificultad
- hora salida
- tiempo límite

Diseño:
- cards modernas
- hover animations
- grid responsive

---

# 6. Recorrido

Sección con:
- mapa o imagen del recorrido
- descarga GPX (placeholder)
- descripción breve

Posibilidad futura:
- integrar mapa interactivo

Por ahora:
- imagen estática optimizada

---

# 7. Galería

Grid responsive de imágenes.

Características:
- lazy loading
- hover zoom
- optimización automática de imágenes

Usar componente Image de Next.js.

---

# 8. FAQ

Accordion simple.

Preguntas típicas:
- edad mínima
- avituallamientos
- recogida dorsales
- cancelaciones
- reglamento

---

# 9. Patrocinadores

Grid simple de logos.

Debe soportar:
- 4–12 logos fácilmente

Formato:
- monocromo o limpio
- responsive

---

# 10. Footer

Contenido:
- redes sociales
- email contacto
- copyright
- enlaces legales

---

# Datos Centralizados

Crear un archivo:

```ts
/data/race.ts
```

Con estructura similar:

```ts
export const raceData = {
  name: "Nombre Carrera",
  date: "2027-01-15",
  city: "Guardamar del Segura",
  registrationUrl: "#",
  heroTitle: "Corre donde empieza el invierno",
  distances: [
    {
      name: "10K",
      elevation: "120m",
      difficulty: "Media",
    },
  ],
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
- carrera popular
- trail running
- running enero
- carrera Alicante
- carrera Guardamar

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

