"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { loginUser, registerUser } from "@/lib/auth"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [registerName, setRegisterName] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const user = loginUser(loginEmail, loginPassword)
    if (user) {
      router.push("/cliente")
    } else {
      setError("Credenciales incorrectas")
    }
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (registerPassword.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres")
      return
    }

    const user = registerUser(registerEmail, registerPassword, registerName)
    if (user) {
      router.push("/cliente")
    } else {
      setError("Este email ya está registrado")
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Link href="/">
          <Button variant="ghost" className="mb-6 text-foreground/80 hover:text-primary">
            <ArrowLeft className="mr-2" size={20} />
            Volver al inicio
          </Button>
        </Link>

        <Card className="bg-card border-border">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <img src="/fogon.jpg" alt="Fitness&Fogón" className="h-16 w-16" />
            </div>
            <CardTitle className="font-serif text-3xl text-primary">Área de Clientes</CardTitle>
            <CardDescription>Accede a contenido exclusivo y personalizado</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
                <TabsTrigger value="register">Registrarse</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="tu@email.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Contraseña</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>
                  {error && <p className="text-secondary text-sm">{error}</p>}
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Iniciar Sesión
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Nombre</Label>
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="Tu nombre"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="tu@email.com"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Contraseña</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="Mínimo 6 caracteres"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
                    />
                  </div>
                  {error && <p className="text-secondary text-sm">{error}</p>}
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Crear Cuenta
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
