import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-lg font-medium tracking-tight text-foreground">
                Yuen
              </span>
              <sup className="text-xs font-serif italic text-foreground -ml-0.5">3D</sup>
            </div>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yuen³D. Todos los derechos reservados.
          </p>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <Link 
              href="#filosofia" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Filosofía
            </Link>
            <Link 
              href="#productos" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Productos
            </Link>
            <Link 
              href="#proceso" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Proceso
            </Link>
            <Link 
              href="#contacto" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
