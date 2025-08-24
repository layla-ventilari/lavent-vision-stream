import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroAiImage from "@/assets/hero-ai.jpg";

interface HeroVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  featured?: boolean;
}

const heroVideos: HeroVideo[] = [
  {
    id: "1",
    title: "O Futuro da IA Generativa: Transformando a Criatividade",
    description: "Explore como a inteligência artificial está revolucionando o processo criativo em diversas indústrias, desde arte digital até produção musical.",
    thumbnail: heroAiImage,
    category: "IA Generativa",
    featured: true
  },
  {
    id: "2", 
    title: "Neuroeducação: Como o Cérebro Aprende na Era Digital",
    description: "Descubra os princípios científicos por trás da aprendizagem eficaz e como aplicar neurociência na educação moderna.",
    thumbnail: heroAiImage,
    category: "Neuroeducação"
  },
  {
    id: "3",
    title: "Tutorial: Criando seu Primeiro Modelo de Machine Learning",
    description: "Passo a passo completo para desenvolver e treinar seu primeiro modelo de ML, desde a coleta de dados até a implementação.",
    thumbnail: heroAiImage, 
    category: "Tutoriais"
  }
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroVideos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + heroVideos.length) % heroVideos.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroVideos.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const currentVideo = heroVideos[currentIndex];

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <img
          src={currentVideo.thumbnail}
          alt={currentVideo.title}
          className="w-full h-full object-cover transition-transform duration-700 scale-105"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            {/* Category Badge */}
            <div className="inline-flex items-center bg-gradient-primary px-4 py-2 rounded-full text-sm font-medium text-white mb-4 shadow-glow">
              {currentVideo.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {currentVideo.title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
              {currentVideo.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-colors group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Assistir Agora
              </Button>
              
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                <Info className="w-5 h-5 mr-2" />
                Mais Informações
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm"
        onClick={goToNext}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroVideos.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            )}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}