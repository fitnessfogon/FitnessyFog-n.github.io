"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

const recipes = [
  {
    title: "Bowl Post-Entreno",
    category: "Post-Workout",
    image: "/healthy-protein-bowl-dark-moody-food-photography.jpg",
    science: "Combinación óptima de proteínas (25g) y carbohidratos de absorción rápida para ventana anabólica.",
  },
  {
    title: "Cena Siete Minutos",
    category: "Cenas Rápidas",
    image: "/quick-healthy-dinner-dark-moody-food-photography.jpg",
    science: "Alto contenido en triptófano y magnesio que favorecen la producción de melatonina para mejor descanso.",
  },
  {
    title: "Desayuno Saciante",
    category: "Desayunos",
    image: "/filling-breakfast-oats-dark-moody-food-photography.jpg",
    science:
      "Fibra soluble (beta-glucanos) que reduce picos de glucosa y prolonga sensación de saciedad hasta 4 horas.",
  },
  {
    title: "Snack de Resistencia",
    category: "Snacks",
    image: "/energy-bars-nuts-dark-moody-food-photography.jpg",
    science: "Grasas saludables y proteínas vegetales que mantienen energía constante sin picos de insulina.",
  },
  {
    title: "Guiso del Fogón",
    category: "Platos Principales",
    image: "/hearty-stew-pot-dark-moody-food-photography.jpg",
    science: "Cocción lenta que preserva nutrientes y genera compuestos bioactivos con propiedades antiinflamatorias.",
  },
]

const categories = ["Todas", "Post-Workout", "Cenas Rápidas", "Desayunos", "Snacks", "Platos Principales"]

export function RecipesSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todas")

  const filteredRecipes =
    selectedCategory === "Todas" ? recipes : recipes.filter((recipe) => recipe.category === selectedCategory)

  return (
    <section id="recetas" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Recetas con Ciencia</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Cada plato viene con su toque de ciencia nutricional
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <Card
              key={recipe.title}
              className="bg-card border-border overflow-hidden group hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                    {recipe.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-foreground">{recipe.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                  <div className="flex items-start gap-2 mb-2">
                    <Sparkles className="text-primary flex-shrink-0 mt-1" size={18} />
                    <h4 className="font-semibold text-primary text-sm">Toque de Ciencia</h4>
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">{recipe.science}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
