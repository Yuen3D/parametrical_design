"use client"

import { ArrowRight } from "lucide-react"
import { RandomButton } from "./random-button"
import { ParametricObject } from "./parametric-object"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <p className="text-sm tracking-widest uppercase text-muted-foreground">
              Fabricacion digital con proposito
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-balance">
              Donde la matematica se convierte en{" "}
              <span className="italic">diseno funcional</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Creamos muebles y objetos para el hogar impresos en 3D, 
              disenados con precision matematica. Cada pieza sigue 
              proporciones aureas y patrones geometricos que combinan 
              estetica y funcionalidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <RandomButton href="#productos" variant="solid">
                Explorar coleccion
                <ArrowRight className="h-4 w-4" />
              </RandomButton>
              <RandomButton href="#filosofia" variant="outline">
                Nuestra filosofia
              </RandomButton>
            </div>
          </div>

          {/* Hero Visual - Parametric Object */}
          <div className="relative">
            <ParametricObject />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-sm shadow-lg">
              <p className="text-xs tracking-widest uppercase text-muted-foreground">Basado en</p>
              <p className="font-serif text-2xl mt-1 italic">phi = 1.618</p>
              <p className="text-xs text-muted-foreground mt-1">Proporcion aurea</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
