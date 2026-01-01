import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FitnessSection } from "@/components/fitness-section"
import { RecipesSection } from "@/components/recipes-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <FitnessSection />
      <RecipesSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
