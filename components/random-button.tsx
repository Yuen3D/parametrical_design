"use client"

import { useState, useCallback } from "react"
import Link from "next/link"

interface RandomButtonProps {
  href: string
  children: React.ReactNode
  variant?: "solid" | "outline"
  className?: string
  onClick?: () => void
}

const COLORS = [
  "oklch(0.65 0.20 30)",   // coral
  "oklch(0.70 0.18 140)",  // teal
  "oklch(0.65 0.22 280)",  // purple
  "oklch(0.75 0.15 80)",   // golden
  "oklch(0.60 0.20 200)",  // blue
  "oklch(0.70 0.22 350)",  // magenta
  "oklch(0.68 0.18 160)",  // emerald
  "oklch(0.72 0.20 50)",   // orange
]

function getRandomColor(exclude?: string): string {
  const filtered = exclude ? COLORS.filter(c => c !== exclude) : COLORS
  return filtered[Math.floor(Math.random() * filtered.length)]
}

export function RandomButton({ href, children, variant = "solid", className = "", onClick }: RandomButtonProps) {
  const [bgColor, setBgColor] = useState<string | null>(null)
  const [borderColor, setBorderColor] = useState<string | null>(null)

  const handleMouseEnter = useCallback(() => {
    const newColor = getRandomColor(bgColor ?? undefined)
    if (variant === "solid") {
      setBgColor(newColor)
    } else {
      setBorderColor(newColor)
    }
  }, [bgColor, variant])

  const handleMouseLeave = useCallback(() => {
    setBgColor(null)
    setBorderColor(null)
  }, [])

  const baseStyles = variant === "solid"
    ? "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium transition-all duration-500 ease-out"
    : "inline-flex items-center justify-center gap-2 rounded-full border-2 px-8 py-4 text-sm font-medium transition-all duration-500 ease-out"

  const defaultStyles = variant === "solid"
    ? "bg-foreground text-primary-foreground"
    : "border-foreground/20 text-foreground hover:border-foreground"

  const dynamicStyles: React.CSSProperties = variant === "solid"
    ? {
        backgroundColor: bgColor ?? undefined,
        color: bgColor ? "white" : undefined,
      }
    : {
        borderColor: borderColor ?? undefined,
        color: borderColor ?? undefined,
      }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${!bgColor && !borderColor ? defaultStyles : ""} ${className}`}
      style={dynamicStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export function RandomButtonElement({ 
  children, 
  variant = "solid", 
  className = "",
  type = "button"
}: { 
  children: React.ReactNode
  variant?: "solid" | "outline"
  className?: string
  type?: "button" | "submit"
}) {
  const [bgColor, setBgColor] = useState<string | null>(null)

  const handleMouseEnter = useCallback(() => {
    const newColor = getRandomColor(bgColor ?? undefined)
    setBgColor(newColor)
  }, [bgColor])

  const handleMouseLeave = useCallback(() => {
    setBgColor(null)
  }, [])

  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium transition-all duration-500 ease-out w-full"
  
  const defaultStyles = "bg-foreground text-primary-foreground"

  return (
    <button
      type={type}
      className={`${baseStyles} ${!bgColor ? defaultStyles : ""} ${className}`}
      style={{
        backgroundColor: bgColor ?? undefined,
        color: bgColor ? "white" : undefined,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}
