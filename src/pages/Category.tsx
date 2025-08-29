import { useParams } from "react-router-dom";
import { getVideosByCategory, Video } from "@/data/videos";
import { VideoCard } from "@/components/ui/video-card";

const categoryTitles: Record<Video['category'], string> = {
  'ia-generativa': 'IA Generativa',
  'tutoriais': 'Tutoriais',
  'palestras': 'Palestras',
  'neuroeducacao': 'Neuroeducação'
};

const categoryDescriptions: Record<Video['category'], string> = {
  'ia-generativa': 'Explore o mundo da inteligência artificial generativa e suas aplicações práticas.',
  'tutoriais': 'Aprenda programação e tecnologia com nossos tutoriais passo a passo.',
  'palestras': 'Assista palestras inspiradoras sobre carreira, inovação e futuro da tecnologia.',
  'neuroeducacao': 'Descubra como a neurociência pode otimizar seu processo de aprendizagem.'
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