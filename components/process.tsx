export function Process() {
  const steps = [
    {
      number: "01",
      title: "Consulta inicial",
      description: "Entendemos tus necesidades, el espacio disponible y tu estilo. Definimos juntos los parámetros del diseño.",
    },
    {
      number: "02",
      title: "Diseño paramétrico",
      description: "Generamos el modelo 3D aplicando principios matemáticos. Iteramos hasta alcanzar la forma perfecta.",
    },
    {
      number: "03",
      title: "Prototipo y validación",
      description: "Creamos una versión a escala o el producto final para tu aprobación antes de la producción definitiva.",
    },
    {
      number: "04",
      title: "Fabricación y entrega",
      description: "Imprimimos tu pieza con materiales de alta calidad y la entregamos lista para usar.",
    },
  ]

  return (
    <section id="proceso" className="py-32 bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-4">
            <p className="text-sm tracking-widest uppercase text-primary-foreground/60">
              Proceso
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              De la ecuación al objeto
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              Cada proyecto es una colaboración. Te guiamos desde la idea 
              inicial hasta tener la pieza en tus manos.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number}>
              <div className="space-y-4">
                <span className="font-mono text-sm text-primary-foreground/40">
                  {step.number}
                </span>
                <h3 className="font-serif text-xl text-primary-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
