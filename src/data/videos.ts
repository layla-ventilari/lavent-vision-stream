export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  category: 'ia-generativa' | 'tutoriais' | 'palestras' | 'neuroeducacao';
  featured?: boolean;
  videoId: string; // YouTube video ID
}

export const videos: Video[] = [
  // IA Generativa
  {
    id: "1",
    title: "IVELTON' S GENERATIVE AI WORKS 2025.1",
    description: "Aprenda os conceitos básicos de inteligência artificial generativa, incluindo redes neurais, machine learning e deep learning aplicados à geração de conteúdo.",
    thumbnail: "https://img.youtube.com/vi/GNQFjIJhuMA/hqdefault.jpg",
    duration: "15:30",
    views: "2.1K",
    category: "ia-generativa",
    featured: true,
    videoId: "GNQFjIJhuMA"
  },
  {
    id: "2", 
    title: "BOIBLOX ‐ A Alegria e Beleza do Festival de Parintins em IA - ROBLOX style",
    description: " ÊÊÊÊ BOI -  Festival de Parintins ROBLOX style animação em IA Generativa por Ivelton de Queiroz 2025 ",
    thumbnail: "https://img.youtube.com/vi/ZUC6l6T1o2w/hqdefault.jpg",
    duration: "22:45",
    views: "1.8K",
    category: "ia-generativa",
    videoId: "ZUC6l6T1o2w"
  },
  {
    id: "3",
    title: "VIAGENS GHIBLI - JOÃO PESSOA",
    description: "VIAGENS GHIBLI - JOÃO PESSOA",
    thumbnail: "https://img.youtube.com/vi/y75COx-MD9k/hqdefault.jpg", 
    duration: "18:12",
    views: "3.2K",
    category: "ia-generativa",
    videoId: "y75COx-MD9k"
  },
  {
    id: "4",
    title: "VIAGENS GHIBLI - ACAJATUBA",
    description: "VIAGENS GHIBLI - ACAJATUBA",
    thumbnail: "https://img.youtube.com/vi/RrMMqOTGhC8/hqdefault.jpg",
    duration: "25:18",
    views: "1.5K", 
    category: "ia-generativa",
    videoId: "RrMMqOTGhC8"
  },

  {
    id: "5",
    title: "VIAGENS GHIBLI - PURA VIDA - COSTA RICA ",
    description: "VIAGENS GHIBLI ",
    thumbnail: "https://img.youtube.com/vi/F90Z0YyZYYY/hqdefault.jpg",
    duration: "45:20",
    views: "5.2K",
    category: "tutoriais",
    featured: true,
    videoId: "F90Z0YyZYYY"
  },
  {
    id: "6",
    title: "VIAGENS GHIBLI - RIO DE JANEIRO ", 
    description: "VIAGENS GHIBLI ",
    thumbnail: "https://img.youtube.com/vi/fCMB-d1ELdU/hqdefault.jpg",
    duration: "32:15",
    views: "3.8K",
    category: "tutoriais",
    videoId: "fCMB-d1ELdU&t"
  },
  {
    id: "7",
    title: "PANEMA Official Trailer",
    description: "PANEMA Official Trailer",
    thumbnail: "https://img.youtube.com/vi/EYUhVLpIIxw/hqdefault.jpg",
    duration: "28:30",
    views: "4.1K",
    category: "tutoriais", 
    videoId: "EYUhVLpIIxw"
  },
  {
    id: "8",
    title: "PANEMA AI Short movie",
    description: "n 2024, criminal fires devastate Brazil and the Amazon. This short movie created completly with AI mixes animation, video art and real images to tell a surprising story about destruction, greed and hope. With an unexpected ending, o filme faz questionar o futuro da floresta e da humanidade",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: "38:45",
    views: "2.9K",
    category: "tutoriais",
    videoId: "dQw4w9WgXcQ"
  },

  // Palestras
  {
    id: "9",
    title: "O Futuro da Programação",
    description: "Palestra inspiradora sobre as tendências emergentes em desenvolvimento de software e o papel da IA na programação.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", 
    duration: "42:10",
    views: "8.3K",
    category: "palestras",
    featured: true,
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "10",
    title: "Carreira em Tech: Por Onde Começar",
    description: "Dicas valiosas para iniciar uma carreira bem-sucedida na área de tecnologia.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: "35:22",
    views: "6.7K", 
    category: "palestras",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "11",
    title: "Inovação e Empreendedorismo Digital",
    description: "Como identificar oportunidades e criar soluções inovadoras no mundo digital.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: "48:15",
    views: "4.5K",
    category: "palestras",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "12",
    title: "Liderança Técnica Eficaz",
    description: "Estratégias para se tornar um líder técnico inspirador e eficiente.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: "41:30",
    views: "3.2K",
    category: "palestras",
    videoId: "dQw4w9WgXcQ"
  },

  // Neuroeducação
  {
    id: "13", 
    title: "Como o Cérebro Aprende",
    description: "Descubra os fundamentos neurocientíficos da aprendizagem e como aplicá-los no ensino de tecnologia.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: "33:45",
    views: "4.8K",
    category: "neuroeducacao",
    featured: true,
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "14",
    title: "Técnicas de Memorização para Programadores",
    description: "Métodos científicos para melhorar a retenção de informações técnicas e conceitos de programação.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", 
    duration: "26:18",
    views: "3.6K",
    category: "neuroeducacao",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "15",
    title: "Neuroplasticidade e Aprendizado Contínuo",
    description: "Como a neuroplasticidade pode acelerar seu aprendizado em tecnologia.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: "29:52",
    views: "2.7K",
    category: "neuroeducacao", 
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "16",
    title: "Inteligência Emocional no Trabalho",
    description: "A importância da inteligência emocional para profissionais de tecnologia.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: "31:25",
    views: "4.1K",
    category: "neuroeducacao",
    videoId: "dQw4w9WgXcQ"
  }
];

export const getVideoById = (id: string): Video | undefined => {
  return videos.find(video => video.id === id);
};

export const getVideosByCategory = (category: Video['category']): Video[] => {
  return videos.filter(video => video.category === category);
};

export const getFeaturedVideos = (): Video[] => {
  return videos.filter(video => video.featured);
};

export const getAllVideos = (): Video[] => {
  return videos;
};

export const searchVideos = (query: string): Video[] => {
  const searchTerm = query.toLowerCase();
  return videos.filter(video => 
    video.title.toLowerCase().includes(searchTerm) ||
    video.description.toLowerCase().includes(searchTerm)
  );
};