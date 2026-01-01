export interface User {
  id: string
  email: string
  name: string
  membershipType: "free" | "premium"
  joinDate: string
}

export function getStoredUser(): User | null {
  if (typeof window === "undefined") return null
  const userStr = localStorage.getItem("ff_user")
  return userStr ? JSON.parse(userStr) : null
}

export function setStoredUser(user: User) {
  localStorage.setItem("ff_user", JSON.stringify(user))
}

export function clearStoredUser() {
  localStorage.removeItem("ff_user")
}

export function loginUser(email: string, password: string): User | null {
  const users = JSON.parse(localStorage.getItem("ff_users") || "[]")
  const user = users.find((u: any) => u.email === email && u.password === password)

  if (user) {
    const { password, ...userWithoutPassword } = user
    setStoredUser(userWithoutPassword)
    return userWithoutPassword
  }

  return null
}

export function registerUser(email: string, password: string, name: string): User | null {
  const users = JSON.parse(localStorage.getItem("ff_users") || "[]")

  if (users.find((u: any) => u.email === email)) {
    return null
  }

  const newUser = {
    id: Date.now().toString(),
    email,
    password,
    name,
    membershipType: "free" as const,
    joinDate: new Date().toISOString(),
  }

  users.push(newUser)
  localStorage.setItem("ff_users", JSON.stringify(users))

  const { password: _, ...userWithoutPassword } = newUser
  setStoredUser(userWithoutPassword)

  return userWithoutPassword
}
