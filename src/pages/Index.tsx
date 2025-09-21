import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ContentSection } from "@/components/ContentSection";
import { getVideosByCategory } from "@/data/videos";

// Get videos by category from unified data source  
const filmesVideos = getVideosByCategory('filmes-curtas');
const animacaoVideos = getVideosByCategory('animacao-videoarte');
const arteDigitalVideos = getVideosByCategory('arte-digital');
const projetosTecnologicosVideos = getVideosByCategory('projetos-tecnologicos');
const Index = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <HeroCarousel />

        {/* Content Sections */}
        <ContentSection title="Filmes e Curtas-Metragens" description="Cinema experimental que mescla tecnologia e narrativa para questionar realidades e explorar futuros possíveis da Amazônia." videos={filmesVideos} />

        <ContentSection title="Animação e Video Arte" description="Criações visuais que reinventam paisagens e culturas através da fusão entre tradição amazônica e estética digital contemporânea." videos={animacaoVideos} />

        <ContentSection title="Arte Digital e Pinturas" description="Explorações artísticas que celebram a biodiversidade e diversidade cultural do Norte brasileiro através de técnicas digitais avançadas." videos={arteDigitalVideos} />

        <ContentSection title="Projetos Tecnológicos" description="Inovações em realidade aumentada, Web3 e interfaces experimentais que democratizam o acesso ao patrimônio cultural amazônico." videos={projetosTecnologicosVideos} />
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border/50 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              
              <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Ivelton Queiroz
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Artista digital, cineasta e desenvolvedor web de Manaus. Explorando os limites entre tecnologia e cultura amazônica.
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Formado na Queensland School of Film & Television (2000–2001)</p>
              <p>© 2024 Ivelton Queiroz. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;