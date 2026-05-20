"use client"

import Link from "next/link"
import { useState, useCallback } from "react"

const RANDOM_COLORS = [
  "#E07A5F", // Terracotta
  "#3D9970", // Teal
  "#B10DC9", // Purple
  "#FFDC00", // Gold
  "#0074D9", // Blue
  "#FF4136", // Red
  "#2ECC40", // Green
  "#FF851B", // Orange
  "#F012BE", // Magenta
  "#39CCCC", // Cyan
]

interface RandomLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function RandomLink({ href, children, className = "", onClick }: RandomLinkProps) {
  const [hoverColor, setHoverColor] = useState<string | null>(null)

  const handleMouseEnter = useCallback(() => {
    const randomColor = RANDOM_COLORS[Math.floor(Math.random() * RANDOM_COLORS.length)]
    setHoverColor(randomColor)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoverColor(null)
  }, [])

  return (
    <Link 
      href={href}
      className={`text-sm tracking-wide transition-colors duration-300 ${className}`}
      style={{ 
        color: hoverColor || undefined,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
