import { getBlogPostsByCategory } from "@/lib/blog-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Dumbbell } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Entrenamiento | Fitness&Fogón Blog",
  description: "Guías científicas sobre entrenamiento, fuerza, hipertrofia y rendimiento deportivo",
}

export default function EntrenamientoPage() {
  const posts = getBlogPostsByCategory("entrenamiento")

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <div className="bg-gradient-to-b from-secondary/20 to-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <Link href="/#blog">
            <Button variant="ghost" className="mb-6 text-foreground/80 hover:text-primary">
              <ArrowLeft className="mr-2" size={20} />
              Volver al Blog
            </Button>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
              <Dumbbell className="text-secondary" size={32} />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-secondary">Entrenamiento</h1>
          </div>

          <p className="text-xl text-foreground/80 max-w-3xl">
            Maximiza tu rendimiento con ciencia aplicada. Descubre protocolos de entrenamiento, técnicas avanzadas,
            periodización y estrategias probadas para fuerza, hipertrofia y resistencia.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="bg-card border-border hover:border-secondary transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20 group h-full">
                <div className="h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${post.image})` }}>
                  <div className="h-full bg-gradient-to-b from-transparent to-card rounded-t-lg" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-secondary text-secondary">
                      {post.categoryLabel}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="font-serif text-2xl text-foreground group-hover:text-secondary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70 leading-relaxed mb-4">{post.excerpt}</CardDescription>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString("es-ES", { month: "short", day: "numeric" })}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-foreground/60 text-lg">No hay artículos disponibles en esta categoría todavía.</p>
          </div>
        )}
      </div>
    </div>
  )
}
