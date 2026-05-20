"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { RandomButtonElement } from "./random-button"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contacto" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm tracking-widest uppercase text-accent">
                Contacto
              </p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Comencemos tu proyecto
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Ya sea que tengas una idea clara o solo una inspiración vaga, 
              nos encantaría escucharte. Cada pieza comienza con una 
              conversación.
            </p>
            
            <div className="space-y-6 pt-8 border-t border-border">
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Email
                </p>
                <a 
                  href="mailto:hola@yuen3.com" 
                  className="text-foreground hover:text-accent transition-colors"
                >
hola@yuen3d.com
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Redes
                </p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    Instagram
                  </a>
                  <span className="text-muted-foreground">/</span>
                  <a 
                    href="#" 
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label 
                  htmlFor="name" 
                  className="text-xs tracking-widest uppercase text-muted-foreground"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="space-y-2">
                <label 
                  htmlFor="email" 
                  className="text-xs tracking-widest uppercase text-muted-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="project" 
                className="text-xs tracking-widest uppercase text-muted-foreground"
              >
                Tipo de proyecto
              </label>
              <select
                id="project"
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-foreground focus:outline-none transition-colors appearance-none cursor-pointer"
                required
              >
                <option value="" className="bg-background">Selecciona una opción</option>
                <option value="mobiliario" className="bg-background">Mobiliario</option>
                <option value="iluminacion" className="bg-background">Iluminación</option>
                <option value="almacenamiento" className="bg-background">Almacenamiento</option>
                <option value="decoracion" className="bg-background">Decoración</option>
                <option value="personalizado" className="bg-background">Proyecto personalizado</option>
              </select>
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="message" 
                className="text-xs tracking-widest uppercase text-muted-foreground"
              >
                Cuéntanos tu idea
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none transition-colors resize-none"
                placeholder="Describe brevemente lo que tienes en mente..."
              />
            </div>

            <RandomButtonElement type="submit" className="mt-4">
              Enviar mensaje
              <ArrowRight className="h-4 w-4" />
            </RandomButtonElement>
          </form>
        </div>
      </div>
    </section>
  )
}
