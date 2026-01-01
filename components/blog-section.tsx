import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Brain, Dumbbell } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import Link from "next/link"

export function BlogSection() {
  return (
    <section id="blog" className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Blog & Artículos</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Contenido basado en evidencia para tomar mejores decisiones
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <Link href="/blog/nutricion">
            <Badge
              variant="outline"
              className="px-6 py-2 text-base cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <BookOpen className="mr-2" size={16} />
              Nutrición
            </Badge>
          </Link>
          <Link href="/blog/entrenamiento">
            <Badge
              variant="outline"
              className="px-6 py-2 text-base cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Dumbbell className="mr-2" size={16} />
              Entrenamiento
            </Badge>
          </Link>
          <Link href="/blog/salud-mental">
            <Badge
              variant="outline"
              className="px-6 py-2 text-base cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Brain className="mr-2" size={16} />
              Salud Mental
            </Badge>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => {
            const Icon = post.category === "nutricion" ? BookOpen : post.category === "entrenamiento" ? Dumbbell : Brain
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant="outline"
                        className="border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        {post.categoryLabel}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70 leading-relaxed">{post.excerpt}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
