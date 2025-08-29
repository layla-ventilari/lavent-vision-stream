import { ChevronRight } from "lucide-react";
import { VideoCard } from "@/components/ui/video-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Video } from "@/data/videos";


interface ContentSectionProps {
  title: string;
  description?: string;
  videos: Video[];
  showViewMore?: boolean;
}

export function ContentSection({ 
  title, 
  description, 
  videos, 
  showViewMore = true 
}: ContentSectionProps) {
  const categoryPath = videos[0]?.category || '';
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {title}
            </h2>
            {description && (
              <p className="text-muted-foreground max-w-2xl">
                {description}
              </p>
            )}
          </div>
          
          {showViewMore && (
            <Button asChild variant="ghost" className="hidden md:flex items-center gap-2 text-primary hover:text-primary-glow">
              <Link to={`/${categoryPath}`}>
                Ver Tudo
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          )}
        </div>

        {/* Video Grid */}
        <div className="relative">
          {/* Horizontal Scroll Container */}
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {videos.map((video) => (
              <div key={video.id} className="flex-shrink-0">
                <Link to={`/watch/${video.id}`}>
                  <VideoCard
                    title={video.title}
                    description={video.description}
                    thumbnail={video.thumbnail}
                    duration={video.duration}
                    views={video.views}
                    category={video.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Fade Effect for Scroll Indication */}
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Mobile View More Button */}
        {showViewMore && (
          <div className="md:hidden mt-6 text-center">
            <Button asChild variant="outline" className="w-full">
              <Link to={`/${categoryPath}`}>
                Ver Todos os Vídeos
              </Link>
            </Button>
          </div>
        )}
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}