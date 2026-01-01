import { Heart, Lightbulb, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/images/fitness-cooking-lifestyle.jpg"
              alt="Fitness y cocina saludable"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Nuestro Manifiesto</h2>

            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p className="text-lg">
                Creemos en un bienestar <strong className="text-primary">sostenible</strong>, sin extremismos ni modas
                pasajeras. Combinamos la ciencia nutricional y el entrenamiento funcional con la calidez de la cocina
                casera.
              </p>

              <p className="text-lg">
                No vendemos milagros. Ofrecemos <strong className="text-primary">conocimiento aplicado</strong>, recetas
                reales y rutinas accesibles que caben en tu vida diaria.
              </p>

              <p className="text-lg">
                Desde tu fogón, construimos hábitos que perduran. Con formación científica y un enfoque{" "}
                <strong className="text-primary">100% humano</strong>.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Lightbulb className="text-primary" size={24} />
                </div>
                <p className="text-sm font-medium">Ciencia Real</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="text-primary" size={24} />
                </div>
                <p className="text-sm font-medium">Enfoque Humano</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
                <p className="text-sm font-medium">Sin Extremismos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
