import { useParams } from "react-router-dom";
import { getVideosByCategory, Video } from "@/data/videos";
import { VideoCard } from "@/components/ui/video-card";

const categoryTitles: Record<Video['category'], string> = {
  'filmes-curtas': 'Filmes e Curtas-Metragens',
  'animacao-videoarte': 'Animação e Video Arte',
  'arte-digital': 'Arte Digital e Pinturas',
  'projetos-tecnologicos': 'Projetos Tecnológicos'
};

const categoryDescriptions: Record<Video['category'], string> = {
  'filmes-curtas': 'Cinema experimental que mescla tecnologia e narrativa para questionar realidades e explorar futuros possíveis da Amazônia.',
  'animacao-videoarte': 'Criações visuais que reinventam paisagens e culturas através da fusão entre tradição amazônica e estética digital contemporânea.',
  'arte-digital': 'Explorações artísticas que celebram a biodiversidade e diversidade cultural do Norte brasileiro através de técnicas digitais avançadas.',
  'projetos-tecnologicos': 'Inovações em realidade aumentada, Web3 e interfaces experimentais que democratizam o acesso ao patrimônio cultural amazônico.'
};

const Category = () => {
  const { category } = useParams<{ category: string }>();
  
  if (!category || !Object.keys(categoryTitles).includes(category)) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Categoria não encontrada</h1>
          <p className="text-muted-foreground">A categoria solicitada não existe.</p>
        </div>
      </div>
    );
  }

  const videos = getVideosByCategory(category as Video['category']);
  const title = categoryTitles[category as Video['category']];
  const description = categoryDescriptions[category as Video['category']];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              description={video.description}
              thumbnail={video.thumbnail}
              duration={video.duration}
              views={video.views}
              category={video.category}
              size="default"
              
            />
          ))}
        </div>
        
        {videos.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">Nenhum vídeo encontrado</h2>
            <p className="text-muted-foreground">
              Esta categoria ainda não possui conteúdo disponível.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;