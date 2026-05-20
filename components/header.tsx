"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { RandomButton } from "./random-button"
import { RandomLink } from "./random-link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl font-medium tracking-tight text-foreground">
              Yuen
            </span>
            <sup className="text-sm font-serif italic text-foreground -ml-0.5">3D</sup>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <RandomLink href="#filosofia" className="text-muted-foreground">
              Filosofia
            </RandomLink>
            <RandomLink href="#productos" className="text-muted-foreground">
              Productos
            </RandomLink>
            <RandomLink href="#proceso" className="text-muted-foreground">
              Proceso
            </RandomLink>
            <RandomLink href="#contacto" className="text-muted-foreground">
              Contacto
            </RandomLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <RandomButton 
              href="#contacto"
              variant="solid"
              className="!px-5 !py-2"
            >
              Solicitar cotizacion
            </RandomButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-6 pb-4 flex flex-col gap-4">
            <RandomLink 
              href="#filosofia" 
              className="text-muted-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Filosofia
            </RandomLink>
            <RandomLink 
              href="#productos" 
              className="text-muted-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </RandomLink>
            <RandomLink 
              href="#proceso" 
              className="text-muted-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Proceso
            </RandomLink>
            <RandomLink 
              href="#contacto" 
              className="text-muted-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </RandomLink>
            <RandomButton 
              href="#contacto"
              variant="solid"
              className="!px-5 !py-2 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar cotizacion
            </RandomButton>
          </nav>
        )}
      </div>
    </header>
  )
}
