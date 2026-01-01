import { Button } from "@/components/ui/button"
import { Flame, Dumbbell } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/fitnessfogon.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="text-primary" size={32} />
            <Dumbbell className="text-primary" size={32} />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-balance">
            <span className="text-primary">Bienestar</span> que se <span className="text-primary">cocina</span> y se{" "}
            <span className="text-primary">camina</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Ciencia aplicada, cocina real y fitness accesible desde tu propio fogón.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              asChild
            >
              <a href="#recetas">Explora Recetas</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg bg-transparent"
              asChild
            >
              <a href="#fitness">Entrena Conmigo</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
