# Template Base para Sitios Nuevos

Template preconfigurado para crear sitios web que soporten componentes copy-paste de @brandpetram/ui.

## Inicio Rapido

```bash
# 1. Clonar o usar como template en GitHub
gh repo create mi-nuevo-sitio --template brandpetram/template-base-sitios-nuevos

# 2. Clonar el nuevo repo
git clone https://github.com/TU_USUARIO/mi-nuevo-sitio
cd mi-nuevo-sitio

# 3. Instalar dependencias
pnpm install

# 4. Iniciar servidor de desarrollo
pnpm dev
```

## Uso de Componentes

1. Copiar el codigo de un componente del catalogo de Brandpetram
2. Pegar en `src/components/`
3. Importar y usar en tus paginas

```tsx
// src/app/page.tsx
import { HeroMarketing1 } from '@/components/hero-marketing-1'

export default function Home() {
  return <HeroMarketing1 />
}
```

## Sistema de Estilos Incluido

El archivo `globals.css` incluye:

- **Variables semanticas**: `bg-background`, `text-foreground`, `bg-primary`, etc.
- **Breakpoints adicionales**: `3xl` (1920px), `4xl` (2560px)
- **Temas**: light (default), dark, quartz, svelte
- **Animaciones**: accordion, fade, scale, reveal, etc.
- **Utilidades**: heading-xl, heading-lg, container-padding-x, section-padding-y

## Temas Disponibles

```tsx
// Tema claro (default)
<div className="bg-background text-foreground">...</div>

// Tema oscuro con clase
<html className="dark">

// Tema oscuro con data-theme (para componentes Tailark)
<section data-theme="dark">...</section>

// Tema quartz
<section data-theme="quartz">...</section>
```

## Estructura de Carpetas

```
src/
├── app/
│   ├── globals.css    # Sistema completo de estilos
│   ├── layout.tsx     # Layout raiz con fuentes
│   └── page.tsx       # Pagina principal
├── components/        # Tus componentes copiados
│   └── ui/            # Componentes UI base (shadcn)
└── lib/
    └── utils.ts       # Funcion cn() para clases

public/
└── images/            # Tus imagenes
```

## Componentes UI Incluidos

El template incluye componentes base de shadcn/ui listos para usar:

```
src/components/ui/
├── badge.tsx      # Badges y etiquetas
├── button.tsx     # Botones con variantes
├── card.tsx       # Cards y contenedores
├── chart.tsx      # Graficas con recharts
├── checkbox.tsx   # Checkboxes accesibles
├── field.tsx      # Wrapper para campos de formulario
├── input.tsx      # Campos de texto
├── label.tsx      # Etiquetas para formularios
├── separator.tsx  # Separadores visuales
└── textarea.tsx   # Areas de texto multilinea
```

## Dependencias Preinstaladas

El template incluye todas las dependencias necesarias para componentes de:

**Tailark Pro:**
- dotted-map (mapas con puntos)
- @radix-ui/react-avatar

**Pro-Blocks (shadcn/design):**
- recharts@2.15.4 (graficas - NO usar v3.x)
- @radix-ui/react-checkbox
- @radix-ui/react-label
- @radix-ui/react-separator
- @radix-ui/react-slot
- class-variance-authority

**Tailwind UI:**
- @headlessui/react
- @heroicons/react

## Stack Tecnologico

- Next.js 16
- React 19
- Tailwind CSS v4
- motion/react (animaciones)
- tw-animate-css

## Personalizar Metadata

Editar `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Mi Sitio",
  description: "Descripcion de mi sitio",
};
```
