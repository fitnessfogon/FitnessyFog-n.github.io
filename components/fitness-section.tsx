import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame, TrendingUp, Clock } from "lucide-react"

const fitnessPrograms = [
  {
    title: "Fuego Inicial",
    description: "Rutina completa de cuerpo entero para encender tu metabolismo",
    intensity: "Alta",
    duration: "30 min",
    icon: Flame,
    focus: "Full Body",
  },
  {
    title: "Caminata de Fuerza",
    description: "Fortalece piernas y glúteos con ejercicios funcionales",
    intensity: "Media",
    duration: "25 min",
    icon: TrendingUp,
    focus: "Tren Inferior",
  },
  {
    title: "Pausa de Fogón",
    description: "Movilidad y estiramientos para descanso activo",
    intensity: "Baja",
    duration: "15 min",
    icon: Clock,
    focus: "Movilidad",
  },
]

export function FitnessSection() {
  return (
    <section id="fitness" className="py-20 md:py-32 bg-gradient-to-b from-black to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Programas de Entrenamiento</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Rutinas funcionales diseñadas para adaptarse a tu ritmo de vida
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {fitnessPrograms.map((program) => {
            const Icon = program.icon
            return (
              <Card
                key={program.title}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <CardTitle className="font-serif text-2xl text-primary">{program.title}</CardTitle>
                  <CardDescription className="text-foreground/70">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Enfoque</span>
                    <span className="font-medium text-foreground">{program.focus}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Duración</span>
                    <span className="font-medium text-foreground">{program.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Intensidad</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        program.intensity === "Alta"
                          ? "bg-secondary/20 text-secondary"
                          : program.intensity === "Media"
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {program.intensity}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
