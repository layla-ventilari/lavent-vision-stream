import { Search, Menu, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
export function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };
  const menuItems = [{
    href: "/",
    label: "Início"
  }, {
    href: "/ia-generativa",
    label: "IA Generativa"
  }, {
    href: "/tutoriais",
    label: "Tutoriais"
  }, {
    href: "/palestras",
    label: "Palestras"
  }, {
    href: "/neuroeducacao",
    label: "Neuroeducação"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <SheetHeader>
                  <SheetTitle className="text-left">Navegação</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-6">
                  {menuItems.map(item => <Link key={item.href} to={item.href} className="text-foreground hover:text-primary transition-colors font-medium py-2 px-4 rounded-lg hover:bg-muted" onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>)}
                </nav>
              </SheetContent>
            </Sheet>
            
            <div className="flex items-center gap-2">
              
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent tracking-tight">Ivelton Queiroz</h1>
            </div>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </Link>
            <Link to="/ia-generativa" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              IA Generativa
            </Link>
            <Link to="/tutoriais" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Tutoriais
            </Link>
            <Link to="/palestras" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Palestras
            </Link>
            
          </nav>

          {/* Search and Profile */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              
            </form>

            {/* Mobile Search */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="sm:hidden">
                  <Search className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-32">
                <form onSubmit={handleSearch} className="flex items-center gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Buscar conteúdo..." className="pl-10 bg-muted/50 border-border/50 focus:bg-background transition-colors" autoFocus />
                  </div>
                  <Button type="submit">Buscar</Button>
                </form>
              </SheetContent>
            </Sheet>

            {/* Profile */}
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>;
}