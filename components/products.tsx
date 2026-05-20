"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Organizador Fibonacci",
    category: "Almacenamiento",
    description: "Sistema modular de bandejas siguiendo la secuencia de Fibonacci",
    equation: "Fn = Fn-1 + Fn-2",
  },
  {
    id: 2,
    name: "Lámpara Voronoi",
    category: "Iluminación",
    description: "Pantalla generada con diagrama de Voronoi para difusión óptima",
    equation: "V(pi) = {x | d(x,pi) ≤ d(x,pj)}",
  },
  {
    id: 3,
    name: "Mesa Phi",
    category: "Mobiliario",
    description: "Mesa auxiliar con proporciones basadas en la razón áurea",
    equation: "φ = (1 + √5) / 2",
  },
  {
    id: 4,
    name: "Estante Fractal",
    category: "Almacenamiento",
    description: "Estructura auto-similar inspirada en el triángulo de Sierpiński",
    equation: "D = log(3) / log(2)",
  },
]

export function Products() {
  return (
    <section id="productos" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="space-y-4">
            <p className="text-sm tracking-widest uppercase text-accent">
              Colección
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Piezas destacadas
            </h2>
          </div>
          <Link 
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Ver catálogo completo
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <article 
              key={product.id}
              className="group relative bg-card border border-border rounded-sm overflow-hidden hover:border-foreground/30 transition-colors"
            >
              <div className="aspect-[4/3] bg-muted relative">
                {/* Wireframe Visualization */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg viewBox="0 0 200 150" className="w-4/5 h-4/5 text-foreground">
                    {product.id === 1 && (
                      // Fibonacci spiral boxes
                      <>
                        <rect x="80" y="60" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.8" />
                        <rect x="40" y="60" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.8" />
                        <rect x="40" y="100" width="40" height="25" fill="none" stroke="currentColor" strokeWidth="0.8" />
                        <rect x="80" y="100" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="0.8" />
                        <rect x="105" y="100" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="0.8" />
                        <rect x="120" y="60" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.8" />
                      </>
                    )}
                    {product.id === 2 && (
                      // Voronoi pattern lamp
                      <>
                        <ellipse cx="100" cy="75" rx="60" ry="50" fill="none" stroke="currentColor" strokeWidth="0.8" />
                        <path d="M 60 50 L 80 75 L 55 90" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M 100 30 L 85 60 L 100 75 L 115 60 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M 130 45 L 115 75 L 140 85" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M 75 90 L 100 100 L 95 120" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M 120 90 L 100 100 L 110 115" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="100" y1="125" x2="100" y2="145" stroke="currentColor" strokeWidth="0.8" />
                      </>
                    )}
                    {product.id === 3 && (
                      // Golden ratio table
                      <>
                        <ellipse cx="100" cy="50" rx="60" ry="15" fill="none" stroke="currentColor" strokeWidth="0.8" />
                        <line x1="50" y1="50" x2="60" y2="130" stroke="currentColor" strokeWidth="0.8" />
                        <line x1="150" y1="50" x2="140" y2="130" stroke="currentColor" strokeWidth="0.8" />
                        <line x1="100" y1="65" x2="100" y2="130" stroke="currentColor" strokeWidth="0.5" />
                        {/* Golden ratio indicator */}
                        <line x1="40" y1="50" x2="40" y2="112" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" />
                        <line x1="40" y1="112" x2="40" y2="130" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" />
                      </>
                    )}
                    {product.id === 4 && (
                      // Sierpinski shelf
                      <>
                        <path d="M 100 20 L 40 120 L 160 120 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                        <path d="M 70 70 L 100 120 L 130 70 Z" fill="none" stroke="currentColor" strokeWidth="0.6" />
                        <path d="M 55 95 L 70 120 L 85 95 Z" fill="none" stroke="currentColor" strokeWidth="0.4" />
                        <path d="M 115 95 L 130 120 L 145 95 Z" fill="none" stroke="currentColor" strokeWidth="0.4" />
                        <path d="M 85 45 L 100 70 L 115 45 Z" fill="none" stroke="currentColor" strokeWidth="0.4" />
                      </>
                    )}
                  </svg>
                </div>
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-background/90 text-xs tracking-wide">
                  {product.category}
                </span>
              </div>
              
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-xl">{product.name}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                <p className="font-mono text-xs text-muted-foreground/70 pt-2 border-t border-border">
                  {product.equation}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
