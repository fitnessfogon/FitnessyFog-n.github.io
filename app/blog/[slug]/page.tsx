import { getBlogPostBySlug, blogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react"
import Link from "next/link"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return { title: "Artículo no encontrado" }

  return {
    title: `${post.title} | Fitness&Fogón Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${post.image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <Link href="/#blog">
            <Button variant="ghost" className="mb-6 text-foreground/80 hover:text-primary w-fit">
              <ArrowLeft className="mr-2" size={20} />
              Volver al Blog
            </Button>
          </Link>

          <Badge className="w-fit mb-4 bg-primary text-primary-foreground">{post.categoryLabel}</Badge>

          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 max-w-4xl">{post.title}</h1>

          <div className="flex flex-wrap gap-6 text-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>
                {new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime} lectura</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-serif prose-headings:text-primary
            prose-p:text-foreground/80 prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:text-foreground/80 prose-ol:text-foreground/80
            prose-li:marker:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center gap-3 flex-wrap">
            <Tag size={20} className="text-primary" />
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-primary/50 text-foreground/70">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Artículos Relacionados</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.category === post.category && p.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all group">
                    <Badge className="mb-3 bg-primary/10 text-primary">{relatedPost.categoryLabel}</Badge>
                    <h4 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-foreground/70 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  )
}
