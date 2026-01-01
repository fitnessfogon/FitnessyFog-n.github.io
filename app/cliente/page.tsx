"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getStoredUser, clearStoredUser, type User } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Crown, LogOut, BookOpen, Dumbbell, Utensils, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

export default function ClientePage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const currentUser = getStoredUser()
    if (!currentUser) {
      router.push("/login")
    } else {
      setUser(currentUser)
      setLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    clearStoredUser()
    router.push("/")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-foreground/60">Cargando...</p>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/20 to-black py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">Bienvenido, {user.name}</h1>
                {user.membershipType === "premium" && <Crown className="text-primary" size={32} />}
              </div>
              <p className="text-foreground/70">Miembro desde {new Date(user.joinDate).toLocaleDateString("es-ES")}</p>
            </div>
            <div className="flex gap-3">
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
                >
                  Ir al Sitio
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
              >
                <LogOut className="mr-2" size={20} />
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="programs">Programas</TabsTrigger>
            <TabsTrigger value="recipes">Recetas</TabsTrigger>
            <TabsTrigger value="progress">Progreso</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="text-primary" />
                    Membresía
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge
                    className={
                      user.membershipType === "premium"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }
                  >
                    {user.membershipType === "premium" ? "Premium" : "Gratis"}
                  </Badge>
                  {user.membershipType === "free" && (
                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90">Actualizar a Premium</Button>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dumbbell className="text-secondary" />
                    Entrenamientos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-foreground">12</p>
                  <p className="text-sm text-foreground/60">Este mes</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="text-accent" />
                    Recetas Guardadas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-foreground">8</p>
                  <p className="text-sm text-foreground/60">Favoritos</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="text-primary" />
                  Contenido Recomendado
                </CardTitle>
                <CardDescription>Basado en tus intereses y objetivos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/blog/entrenar-casa-equipo-minimo" className="block">
                  <div className="p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                    <h4 className="font-serif text-lg text-foreground mb-1">Entrenar en Casa: Equipo Mínimo</h4>
                    <p className="text-sm text-foreground/70">Cómo lograr resultados con inversión mínima</p>
                  </div>
                </Link>
                <Link href="/blog/ayuno-intermitente-para-quien" className="block">
                  <div className="p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                    <h4 className="font-serif text-lg text-foreground mb-1">
                      Ayuno Intermitente: ¿Para Quién Funciona?
                    </h4>
                    <p className="text-sm text-foreground/70">Revisión objetiva de protocolos de ayuno</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="programs">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Activo</Badge>
                  <CardTitle className="font-serif text-2xl">Fuego Inicial</CardTitle>
                  <CardDescription>Programa de 4 semanas para principiantes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/70">Progreso</span>
                      <span className="text-sm font-semibold text-primary">60%</span>
                    </div>
                    <div className="w-full bg-muted/20 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }} />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">Continuar Entrenamiento</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border opacity-60">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-muted text-muted-foreground">Premium</Badge>
                  <CardTitle className="font-serif text-2xl">Caminata de Fuerza</CardTitle>
                  <CardDescription>Programa avanzado de hipertrofia</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/60 mb-4">Desbloquea este programa con membresía Premium</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">Actualizar a Premium</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="recipes">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Bowl Proteico de Quinoa",
                  calories: "450 kcal",
                  protein: "32g",
                  image: "/healthy-protein-bowl-dark-moody-food-photography.jpg",
                },
                {
                  name: "Guiso Reconfortante",
                  calories: "380 kcal",
                  protein: "28g",
                  image: "/hearty-stew-pot-dark-moody-food-photography.jpg",
                },
                {
                  name: "Desayuno de Avena",
                  calories: "320 kcal",
                  protein: "15g",
                  image: "/filling-breakfast-oats-dark-moody-food-photography.jpg",
                },
              ].map((recipe) => (
                <Card key={recipe.name} className="bg-card border-border hover:border-primary transition-colors group">
                  <div
                    className="h-48 bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url(${recipe.image})` }}
                  />
                  <CardHeader>
                    <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                      {recipe.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 text-sm text-foreground/70">
                      <span>{recipe.calories}</span>
                      <span>•</span>
                      <span>{recipe.protein} proteína</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="text-primary" />
                  Tu Progreso
                </CardTitle>
                <CardDescription>Seguimiento de tu viaje fitness</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Entrenamientos Completados</h4>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">48</span>
                      <span className="text-foreground/60">en los últimos 3 meses</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Racha Actual</h4>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-secondary">7</span>
                      <span className="text-foreground/60">días consecutivos</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Objetivos del Mes</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-foreground/70">12 entrenamientos</span>
                        <span className="text-sm font-semibold text-primary">12/12</span>
                      </div>
                      <div className="w-full bg-muted/20 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-foreground/70">20 recetas preparadas</span>
                        <span className="text-sm font-semibold text-accent">15/20</span>
                      </div>
                      <div className="w-full bg-muted/20 rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{ width: "75%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
