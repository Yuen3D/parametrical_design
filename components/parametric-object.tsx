"use client"

import { useEffect, useState } from "react"

export function ParametricObject() {
  const [rotation, setRotation] = useState(0)
  const [morphPhase, setMorphPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((r) => (r + 0.3) % 360)
      setMorphPhase((p) => (p + 0.02) % (Math.PI * 2))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  // Generate torus points
  const generateTorusPoints = (R: number, r: number, segments: number, rings: number) => {
    const points: { x: number; y: number; z: number }[][] = []
    for (let i = 0; i <= rings; i++) {
      const ring: { x: number; y: number; z: number }[] = []
      const theta = (i / rings) * Math.PI * 2
      for (let j = 0; j <= segments; j++) {
        const phi = (j / segments) * Math.PI * 2
        const morph = 1 + Math.sin(morphPhase + theta * 2) * 0.15
        const x = (R + r * morph * Math.cos(phi)) * Math.cos(theta)
        const y = (R + r * morph * Math.cos(phi)) * Math.sin(theta)
        const z = r * morph * Math.sin(phi)
        ring.push({ x, y, z })
      }
      points.push(ring)
    }
    return points
  }

  // Project 3D to 2D with rotation
  const project = (x: number, y: number, z: number, scale: number = 1) => {
    const rad = (rotation * Math.PI) / 180
    const radY = (rotation * 0.7 * Math.PI) / 180
    
    // Rotate around Y axis
    const x1 = x * Math.cos(radY) - z * Math.sin(radY)
    const z1 = x * Math.sin(radY) + z * Math.cos(radY)
    
    // Rotate around X axis
    const y2 = y * Math.cos(rad * 0.3) - z1 * Math.sin(rad * 0.3)
    const z2 = y * Math.sin(rad * 0.3) + z1 * Math.cos(rad * 0.3)
    
    // Perspective projection
    const perspective = 300 / (300 + z2)
    return {
      x: 200 + x1 * scale * perspective,
      y: 200 + y2 * scale * perspective,
      z: z2,
      opacity: 0.3 + (z2 + 50) / 100 * 0.7
    }
  }

  const torusPoints = generateTorusPoints(50, 20, 16, 24)
  
  // Generate icosahedron vertices
  const phi = (1 + Math.sqrt(5)) / 2 // Golden ratio
  const icosahedronVertices = [
    { x: 0, y: 1, z: phi },
    { x: 0, y: -1, z: phi },
    { x: 0, y: 1, z: -phi },
    { x: 0, y: -1, z: -phi },
    { x: 1, y: phi, z: 0 },
    { x: -1, y: phi, z: 0 },
    { x: 1, y: -phi, z: 0 },
    { x: -1, y: -phi, z: 0 },
    { x: phi, y: 0, z: 1 },
    { x: -phi, y: 0, z: 1 },
    { x: phi, y: 0, z: -1 },
    { x: -phi, y: 0, z: -1 },
  ].map(v => ({
    x: v.x * 30,
    y: v.y * 30,
    z: v.z * 30
  }))

  const icosahedronEdges = [
    [0, 1], [0, 4], [0, 5], [0, 8], [0, 9],
    [1, 6], [1, 7], [1, 8], [1, 9],
    [2, 3], [2, 4], [2, 5], [2, 10], [2, 11],
    [3, 6], [3, 7], [3, 10], [3, 11],
    [4, 5], [4, 8], [4, 10],
    [5, 9], [5, 11],
    [6, 7], [6, 8], [6, 10],
    [7, 9], [7, 11],
    [8, 10], [9, 11], [10, 11]
  ]

  // Floating particles
  const particles = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2 + morphPhase
    const radius = 85 + Math.sin(morphPhase * 2 + i) * 10
    return {
      x: 200 + Math.cos(angle) * radius,
      y: 200 + Math.sin(angle) * radius * 0.6,
      size: 2 + Math.sin(morphPhase + i * 0.5) * 1
    }
  })

  return (
    <div className="aspect-square bg-muted rounded-sm overflow-hidden relative">
      {/* Background grid */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
        {/* Fibonacci spiral guides */}
        <path 
          d="M 200 200 Q 250 200 250 150 Q 250 90 190 90 Q 110 90 110 170 Q 110 280 220 280 Q 360 280 360 140"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        {/* Golden ratio grid */}
        {[...Array(7)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 66.6} x2="400" y2={i * 66.6} stroke="currentColor" strokeWidth="0.3" />
        ))}
        {[...Array(7)].map((_, i) => (
          <line key={`v${i}`} x1={i * 66.6} y1="0" x2={i * 66.6} y2="400" stroke="currentColor" strokeWidth="0.3" />
        ))}
      </svg>

      {/* Main 3D Object */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Torus wireframe */}
        {torusPoints.map((ring, i) => 
          ring.slice(0, -1).map((point, j) => {
            const p1 = project(point.x, point.y, point.z)
            const p2 = project(ring[j + 1].x, ring[j + 1].y, ring[j + 1].z)
            if (i < torusPoints.length - 1) {
              const p3 = project(torusPoints[i + 1][j].x, torusPoints[i + 1][j].y, torusPoints[i + 1][j].z)
              return (
                <g key={`${i}-${j}`}>
                  <line
                    x1={p1.x} y1={p1.y}
                    x2={p2.x} y2={p2.y}
                    stroke="currentColor"
                    strokeWidth="0.5"
                    opacity={p1.opacity * 0.6}
                  />
                  <line
                    x1={p1.x} y1={p1.y}
                    x2={p3.x} y2={p3.y}
                    stroke="currentColor"
                    strokeWidth="0.5"
                    opacity={p1.opacity * 0.6}
                  />
                </g>
              )
            }
            return (
              <line
                key={`${i}-${j}`}
                x1={p1.x} y1={p1.y}
                x2={p2.x} y2={p2.y}
                stroke="currentColor"
                strokeWidth="0.5"
                opacity={p1.opacity * 0.6}
              />
            )
          })
        )}

        {/* Icosahedron inside */}
        {icosahedronEdges.map(([a, b], i) => {
          const v1 = icosahedronVertices[a]
          const v2 = icosahedronVertices[b]
          const p1 = project(v1.x, v1.y, v1.z, 0.8)
          const p2 = project(v2.x, v2.y, v2.z, 0.8)
          return (
            <line
              key={`ico-${i}`}
              x1={p1.x} y1={p1.y}
              x2={p2.x} y2={p2.y}
              stroke="currentColor"
              strokeWidth="1.2"
              opacity={Math.min(p1.opacity, p2.opacity)}
            />
          )
        })}

        {/* Icosahedron vertices */}
        {icosahedronVertices.map((v, i) => {
          const p = project(v.x, v.y, v.z, 0.8)
          return (
            <circle
              key={`v-${i}`}
              cx={p.x}
              cy={p.y}
              r={3}
              fill="currentColor"
              opacity={p.opacity}
            />
          )
        })}

        {/* Floating particles */}
        {particles.map((particle, i) => (
          <circle
            key={`p-${i}`}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill="currentColor"
            opacity={0.4}
          />
        ))}

        {/* Center point */}
        <circle cx="200" cy="200" r="4" fill="currentColor" opacity="0.8" />
        
        {/* Orbital rings */}
        <ellipse
          cx="200" cy="200"
          rx={90 + Math.sin(morphPhase) * 5}
          ry={35 + Math.cos(morphPhase) * 3}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.3"
          transform={`rotate(${rotation * 0.2} 200 200)`}
        />
        <ellipse
          cx="200" cy="200"
          rx={100 + Math.cos(morphPhase) * 5}
          ry={40 + Math.sin(morphPhase) * 3}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.2"
          transform={`rotate(${-rotation * 0.15 + 60} 200 200)`}
        />
      </svg>

      {/* Mathematical annotations */}
      <div className="absolute top-4 right-4 text-xs text-muted-foreground font-mono opacity-60">
        <div>phi = {phi.toFixed(6)}</div>
        <div>theta = {(rotation % 360).toFixed(1)} deg</div>
      </div>
    </div>
  )
}
