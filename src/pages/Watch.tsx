import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Eye, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getVideoById } from "@/data/videos";
import { useEffect } from "react";

const Watch = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const video = id ? getVideoById(id) : null;

  useEffect(() => {
    if (!video) {
      navigate('/404');
    }
  }, [video, navigate]);

  if (!video) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate(-1)}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-lg font-semibold truncate">{video.title}</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-5xl mx-auto">
          {/* Video Player */}
          <div className="aspect-video w-full mb-6">
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
              title={video.title}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video Info */}
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{video.views} visualizações</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{video.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  <Badge variant="secondary" className="capitalize">
                    {video.category.replace('-', ' ')}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-3">Sobre este vídeo</h2>
              <p className="text-muted-foreground leading-relaxed">
                {video.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;