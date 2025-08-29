import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ContentSection } from "@/components/ContentSection";
import { getVideosByCategory } from "@/data/videos";

// Get videos by category from unified data source
const iaGenerativaVideos = getVideosByCategory('ia-generativa');
const tutoriaisVideos = getVideosByCategory('tutoriais');
const palestrasVideos = getVideosByCategory('palestras');
const neuroeducacaoVideos = getVideosByCategory('neuroeducacao');

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <HeroCarousel />

        {/* Content Sections */}
        <ContentSection
          title="IA Generativa"
          description="Explore o fascinante mundo da inteligência artificial generativa e suas aplicações revolucionárias."
          videos={iaGenerativaVideos}
        />

        <ContentSection
          title="Tutoriais Práticos"
          description="Aprenda através de projetos hands-on e desenvolva habilidades técnicas essenciais."
          videos={tutoriaisVideos}
        />

        <ContentSection
          title="Palestras e Conferências"
          description="Insights de especialistas sobre o futuro da IA e seu impacto na sociedade."
          videos={palestrasVideos}
        />

        <ContentSection
          title="Neuroeducação"
          description="Descubra como a neurociência pode transformar métodos de ensino e aprendizagem."
          videos={neuroeducacaoVideos}
        />
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border/50 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Lavent Vision
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Plataforma de streaming educacional focada em IA e tecnologia avançada.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Lavent Lab. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;