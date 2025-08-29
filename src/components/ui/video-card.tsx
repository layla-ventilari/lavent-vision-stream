import { useState } from "react";
import { Play, Clock, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views?: string;
  category?: string;
  className?: string;
  size?: "default" | "large" | "small";
  href?: string;
  onClick?: () => void;
}

export function VideoCard({
  title,
  description,
  thumbnail,
  duration,
  views,
  category,
  className,
  size = "default",
  href,
  onClick
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: "w-64 h-36",
    default: "w-80 h-44",
    large: "w-96 h-56"
  };

  const CardWrapper = href ? "a" : "div";
  const cardProps = href 
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : onClick 
    ? { onClick }
    : {};

  return (
    <CardWrapper
      {...cardProps}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-gradient-card backdrop-blur-sm border border-border/50 transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-pointer block",
        sizeClasses[size],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-white">
          <Clock className="w-3 h-3" />
          {duration}
        </div>

        {/* Category Badge */}
        {category && (
          <div className="absolute top-2 left-2 bg-gradient-primary px-2 py-1 rounded text-xs font-medium text-white">
            {category}
          </div>
        )}

        {/* Play Button - Visible on Hover */}
        <div className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <div className="bg-primary/90 backdrop-blur-sm rounded-full p-3 shadow-glow transition-transform duration-200 hover:scale-110">
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </div>
        </div>
      </div>

      {/* Content Overlay - Visible on Hover */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-all duration-300 transform",
        isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      )}>
        <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2 leading-tight">
          {title}
        </h3>
        <p className="text-gray-300 text-xs mb-2 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        {/* Views */}
        {views && (
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <Eye className="w-3 h-3" />
            <span>{views} visualizações</span>
          </div>
        )}
      </div>
    </CardWrapper>
  );
}