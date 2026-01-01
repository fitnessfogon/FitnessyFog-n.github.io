import { Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/fogon.jpg" alt="Fitness&Fogón" className="h-10 w-10" />
            <div>
              <p className="font-serif text-xl font-bold text-primary">Fitness&Fogón</p>
              <p className="text-sm text-muted-foreground">© 2025. Bienestar desde tu fogón.</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Diseñado con <span className="text-primary">❤️</span> y ciencia aplicada
          </p>
        </div>
      </div>
    </footer>
  )
}
