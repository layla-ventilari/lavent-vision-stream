import { Search, Menu, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent tracking-tight">
                Lavent Vision
              </h1>
            </div>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              IA Generativa
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Tutoriais
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Palestras
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Neuroeducação
            </a>
          </nav>

          {/* Search and Profile */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar conteúdo..."
                className="pl-10 w-64 bg-muted/50 border-border/50 focus:bg-background transition-colors"
              />
            </div>

            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Search className="w-5 h-5" />
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}