/**
 * COMPONENTE: RectanguloCuadricula
 * 
 * Rectángulo decorativo con patrón de cuadrícula SVG. Se usa como fondo
 * decorativo en secciones hero, cards, o cualquier área que necesite
 * un fondo visual atractivo.
 * 
 * ═══════════════════════════════════════════════════════════════════════
 * IMPORTANTE: POSICIONAMIENTO
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * Este componente usa `position: absolute` internamente. Para que funcione
 * correctamente, DEBES agregar `relative` al contenedor padre donde lo coloques.
 * 
 * Si no agregas `relative` al padre, el rectángulo se posicionará respecto
 * a toda la página (o al ancestro más cercano con position relativo/absoluto),
 * en lugar de quedarse dentro de tu componente.
 * 
 * ═══════════════════════════════════════════════════════════════════════
 * DÓNDE COLOCARLO EN TU COMPONENTE
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * Generalmente se coloca como PRIMER hijo dentro del contenedor con `relative`,
 * seguido del contenido real con `z-10` o mayor para que quede encima.
 * 
 * ESTRUCTURA TÍPICA:
 * 
 * ```tsx
 * <section>                              // ← Contenedor externo (opcional)
 *   <div className="relative">           // ← PADRE CON RELATIVE (obligatorio)
 *     <RectanguloCuadricula              // ← El componente (z-0 implícito)
 *       className="absolute inset-0"
 *     />
 *     <div className="relative z-10">    // ← Tu contenido encima
 *       <h1>Título</h1>
 *     </div>
 *   </div>
 * </section>
 * ```
 * 
 * EJEMPLO EN COMPONENTE REAL (Hero típico):
 * 
 * ```tsx
 * function HeroSection() {
 *   return (
 *     <section className="py-24">                    // div 1: section wrapper
 *       <div className="mx-auto max-w-7xl px-6">    // div 2: contenedor max-width
 *         <div className="relative">                // div 3: ¡AQUÍ VA EL RELATIVE!
 *           <RectanguloCuadricula                   // Rectángulo como fondo
 *             className="absolute -inset-4 z-0"
 *             colorFondo="bg-indigo-600"
 *           />
 *           <div className="relative z-10 p-8">    // div 4: contenido encima
 *             <h1>Bienvenido</h1>
 *             <p>Descripción...</p>
 *           </div>
 *         </div>
 *       </div>
 *     </section>
 *   )
 * }
 * ```
 * 
 * REGLA GENERAL:
 * - Busca el div que envuelve directamente el área donde quieres el fondo
 * - Agrégale `relative` (normalmente es el 3er o 4to div anidado)
 * - Coloca <RectanguloCuadricula> como primer hijo con `absolute`
 * - Tu contenido va después con `relative z-10`
 * 
 * ═══════════════════════════════════════════════════════════════════════
 * DEMO Y EJEMPLOS
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * Ver ejemplos interactivos en: /demos/decorativo/rectangulo-cuadricula
 */

import { useId } from 'react'
import { cn } from '../../lib/utils'

interface RectanguloCuadriculaProps {
  /**
   * Color de fondo del rectángulo (clase de Tailwind)
   * @default "bg-blue-600"
   * @example "bg-purple-500", "bg-gradient-to-r from-blue-600 to-indigo-600"
   */
  colorFondo?: string
  
  /**
   * Color del patrón de cuadrícula (clase de Tailwind para text-*)
   * @default "text-white/10"
   * @example "text-black/5", "text-blue-200/20"
   */
  colorCuadricula?: string
  
  /**
   * Clases CSS adicionales para posicionamiento y tamaño del rectángulo
   * @example "absolute inset-0 z-10", "absolute -top-20 right-1/2 -bottom-12 left-0"
   */
  className?: string
  
  /**
   * Radio del borde redondeado (clase de Tailwind)
   * @default "rounded-br-6xl"
   * @example "rounded-xl", "rounded-tl-6xl"
   */
  radioRedondeado?: string
  
  /**
   * Ancho del patrón de cuadrícula
   * @default "128"
   */
  anchoCuadricula?: string
  
  /**
   * Alto del patrón de cuadrícula
   * @default "128"
   */
  altoCuadricula?: string
  
  /**
   * Posición X del patrón
   * @default "100%"
   */
  x?: string
  
  /**
   * Posición Y del patrón
   * @default "100%"
   */
  y?: string
  
  /**
   * Transformación del patrón
   * @default "translate(112 64)"
   */
  patternTransform?: string
}

export function RectanguloCuadricula({
  colorFondo = 'bg-blue-600',
  colorCuadricula = 'text-white/10',
  className = '',
  radioRedondeado = 'rounded-br-6xl',
  anchoCuadricula = '128',
  altoCuadricula = '128',
  x = '100%',
  y = '100%',
  patternTransform = 'translate(112 64)',
}: RectanguloCuadriculaProps) {
  const patternId = useId()
  
  return (
    <div className={cn(colorFondo, colorCuadricula, radioRedondeado, className)}>
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id={patternId}
            width={anchoCuadricula}
            height={altoCuadricula}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
            patternTransform={patternTransform}
          >
            <path d={`M0 ${altoCuadricula}V.5H${anchoCuadricula}`} fill="none" stroke="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  )
}
