import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { VideoCard } from "@/components/ui/video-card";
import { getAllVideos, Video } from "@/data/videos";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simular busca com debounce
    const searchTimeout = setTimeout(() => {
      const allVideos = getAllVideos();
      const filtered = allVideos.filter(video => 
        video.title.toLowerCase().includes(query.toLowerCase()) ||
        video.description.toLowerCase().includes(query.toLowerCase()) ||
        video.category.toLowerCase().includes(query.toLowerCase())
      );
      
      setResults(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Search Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <SearchIcon className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">
                Resultados da busca
              </h1>
            </div>
            
            {query && (
              <p className="text-muted-foreground">
                Buscando por: <span className="text-foreground font-medium">"{query}"</span>
              </p>
            )}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-80 h-44 bg-muted animate-pulse rounded-lg" />
              ))}
            </div>
          )}

          {/* No Query State */}
          {!query && !isLoading && (
            <div className="text-center py-16">
              <SearchIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Digite algo para buscar</h2>
              <p className="text-muted-foreground">
                Use a barra de busca acima para encontrar vídeos por título, descrição ou categoria.
              </p>
            </div>
          )}

          {/* No Results State */}
          {query && !isLoading && results.length === 0 && (
            <div className="text-center py-16">
              <SearchIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Nenhum resultado encontrado</h2>
              <p className="text-muted-foreground">
                Tente buscar com termos diferentes ou navegue pelas categorias.
              </p>
            </div>
          )}

          {/* Results */}
          {results.length > 0 && (
            <>
              <div className="mb-6">
                <p className="text-muted-foreground">
                  {results.length} {results.length === 1 ? "resultado encontrado" : "resultados encontrados"}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {results.map((video) => (
                  <VideoCard
                    key={video.id}
                    href={`/watch/${video.id}`}
                    title={video.title}
                    description={video.description}
                    thumbnail={video.thumbnail}
                    duration={video.duration}
                    views={video.views}
                    category={video.category}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}