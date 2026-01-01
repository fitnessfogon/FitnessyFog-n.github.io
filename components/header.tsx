"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, User } from "lucide-react"
import Link from "next/link"
import { getStoredUser } from "@/lib/auth"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)

    const user = getStoredUser()
    setIsLoggedIn(!!user)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Fitness", href: "#fitness" },
    { label: "Recetas", href: "#recetas" },
    { label: "Blog", href: "#blog" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <img src="/fogon.jpg" alt="Fitness&Fogón" className="h-10 w-10" />
            <span className="font-serif text-2xl font-bold text-primary">Fitness&Fogón</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <Link href="/cliente">
                <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
                  <User className="mr-2" size={18} />
                  MI CUENTA
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button className="hidden md:inline-flex bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  ACCESO CLIENTES
                </Button>
              </Link>
            )}

            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {isLoggedIn ? (
              <Link href="/cliente">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                  <User className="mr-2" size={18} />
                  MI CUENTA
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full">
                  ACCESO CLIENTES
                </Button>
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
