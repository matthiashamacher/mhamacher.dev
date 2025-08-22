import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto bg-card border-border shadow-lg">
        <CardContent className="p-8 text-center space-y-6">
          {/* Profile Image */}
          <div className="flex justify-center">
            <Avatar className="w-32 h-32 border-4 border-primary/20">
              <AvatarImage src="/matthias_hamacher.png" alt="Profilbild" />
              <AvatarFallback className="text-2xl font-bold bg-muted text-muted-foreground">JD</AvatarFallback>
            </Avatar>
          </div>

          {/* Name and Title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground font-sans">Matthias Hamacher</h1>
            <p className="text-lg text-muted-foreground font-sans">Head of Development Pimcore<br /> <a
                href="https://basecom.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                @basecom
              </a></p>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <p className="text-foreground leading-relaxed font-sans">
              DevOps interessierter Fullstack Developer und Pimcore Enthusiast.
            </p>
            <p className="text-foreground leading-relaxed font-sans">
              Product Owner & Lead Developer von{" "}
              <a
                href="https://elternsprechtag-digital.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Elternsprechtag Digital
              </a>
              .
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 pt-4">
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/matthiashamacher/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profil"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
              asChild
            >
              <a href="https://github.com/matthiashamacher" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profil">
                <Github className="h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
              asChild
            >
              <a href="mailto:hallo@mhamacher.dev" aria-label="E-Mail senden">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground font-sans">© 2025 Matthias Hamacher.<br /> Alle Rechte vorbehalten.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
