export function Philosophy() {
  return (
    <section id="filosofia" className="py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <p className="text-sm tracking-widest uppercase text-accent">
              Nuestra filosofía
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
              Matemáticas aplicadas al{" "}
              <span className="italic">diseño cotidiano</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              En Yuen³ creemos que la belleza tiene una estructura. Los patrones 
              que encontramos en la naturaleza, desde las espirales de un 
              caracol hasta las ramas de un árbol, siguen principios matemáticos 
              que resuenan instintivamente con nosotros.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aplicamos estos principios, la proporción áurea, las secuencias 
              de Fibonacci, y la geometría fractal, para crear objetos que 
              no solo son funcionales, sino que poseen una armonía visual 
              intrínseca.
            </p>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="space-y-4 p-8 border border-border rounded-sm hover:border-foreground/30 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-full h-full text-foreground">
                <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="24" cy="24" r="11" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="24" cy="24" r="7" fill="none" stroke="currentColor" strokeWidth="1" />
                <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="0.5" />
                <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
            <h3 className="font-serif text-xl">Precisión paramétrica</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cada diseño es generado algorítmicamente, permitiendo 
              ajustes precisos mientras mantenemos la armonía matemática 
              del conjunto.
            </p>
          </div>

          <div className="space-y-4 p-8 border border-border rounded-sm hover:border-foreground/30 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-full h-full text-foreground">
                <rect x="8" y="8" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1" />
                <rect x="14" y="14" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" />
                <rect x="20" y="20" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <h3 className="font-serif text-xl">Minimalismo funcional</h3>
            <p className="text-muted-foreground leading-relaxed">
              Eliminamos lo superfluo. Cada curva, cada ángulo tiene un 
              propósito estructural o ergonómico claramente definido.
            </p>
          </div>

          <div className="space-y-4 p-8 border border-border rounded-sm hover:border-foreground/30 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-full h-full text-foreground">
                <path d="M 8 40 L 24 8 L 40 40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <line x1="16" y1="24" x2="32" y2="24" stroke="currentColor" strokeWidth="1" />
                <circle cx="24" cy="24" r="4" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <h3 className="font-serif text-xl">Fabricación sostenible</h3>
            <p className="text-muted-foreground leading-relaxed">
              La impresión 3D minimiza el desperdicio de material. 
              Producimos bajo demanda, eliminando el exceso de inventario.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
