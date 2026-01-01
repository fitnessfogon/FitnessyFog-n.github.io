"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Mail, Send } from "lucide-react"

export function ContactSection() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Get free key from web3forms.com
          name: formData.name,
          email: formData.email,
          subject: `Fitness&Fogón - ${formData.subject}`,
          message: formData.message,
          to: "fitnessfogon@gmail.com",
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "¡Mensaje enviado al Fogón!",
          description: "Te responderemos en las próximas 24-48 horas.",
        })

        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Hubo un problema. Por favor intenta de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Mail className="text-primary" size={32} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Acceso Clientes</h2>
            <p className="text-lg text-foreground/80">¿Listo para transformar tu bienestar? Contáctanos</p>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-foreground">Formulario de Contacto</CardTitle>
              <CardDescription className="text-foreground/70">
                Completa el formulario y nos pondremos en contacto contigo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Nombre Completo *
                    </Label>
                    <Input
                      id="name"
                      required
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">
                    Asunto *
                  </Label>
                  <Select
                    required
                    value={formData.subject}
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                  >
                    <SelectTrigger className="bg-background border-border text-foreground">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asesoria-nutricional">Asesoría Nutricional</SelectItem>
                      <SelectItem value="plan-entrenamiento">Plan de Entrenamiento</SelectItem>
                      <SelectItem value="programa-completo">Programa Completo</SelectItem>
                      <SelectItem value="consulta-general">Consulta General</SelectItem>
                      <SelectItem value="colaboracion">Colaboración</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Cuéntanos sobre tus objetivos y cómo podemos ayudarte..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border text-foreground resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Enviar al Fogón
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Toaster />
    </section>
  )
}
