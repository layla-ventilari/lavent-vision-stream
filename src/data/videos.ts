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
    title: "Fundamentos de IA Generativa",
    description: "Aprenda os conceitos básicos de inteligência artificial generativa, incluindo redes neurais, machine learning e deep learning aplicados à geração de conteúdo.",
    thumbnail: "/src/assets/ai-generative-thumb.jpg",
    duration: "15:30",
    views: "2.1K",
    category: "ia-generativa",
    featured: true,
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "2", 
    title: "GPT e Transformers Explicados",
    description: "Entenda como funcionam os modelos de linguagem GPT e a arquitetura Transformer que revolucionou a IA.",
    thumbnail: "/src/assets/ai-generative-thumb.jpg",
    duration: "22:45",
    views: "1.8K",
    category: "ia-generativa",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "3",
    title: "Criando Imagens com IA",
    description: "Explore as principais ferramentas de geração de imagens como DALL-E, Midjourney e Stable Diffusion.",
    thumbnail: "/src/assets/ai-generative-thumb.jpg", 
    duration: "18:12",
    views: "3.2K",
    category: "ia-generativa",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "4",
    title: "IA Generativa na Prática",
    description: "Cases reais de aplicação de IA generativa em empresas e projetos pessoais.",
    thumbnail: "/src/assets/ai-generative-thumb.jpg",
    duration: "25:18",
    views: "1.5K", 
    category: "ia-generativa",
    videoId: "dQw4w9WgXcQ"
  },

  // Tutoriais
  {
    id: "5",
    title: "React do Zero ao Avançado",
    description: "Tutorial completo de React.js cobrindo hooks, context, routing e melhores práticas para desenvolvimento moderno.",
    thumbnail: "/src/assets/tutorial-thumb.jpg",
    duration: "45:20",
    views: "5.2K",
    category: "tutoriais",
    featured: true,
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "6",
    title: "TypeScript para Iniciantes", 
    description: "Aprenda TypeScript do básico ao intermediário com exemplos práticos e projetos reais.",
    thumbnail: "/src/assets/tutorial-thumb.jpg",
    duration: "32:15",
    views: "3.8K",
    category: "tutoriais",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "7",
    title: "CSS Grid e Flexbox Masterclass",
    description: "Domine as técnicas modernas de layout CSS com Grid e Flexbox através de exercícios práticos.",
    thumbnail: "/src/assets/tutorial-thumb.jpg",
    duration: "28:30",
    views: "4.1K",
    category: "tutoriais", 
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "8",
    title: "API REST com Node.js",
    description: "Construa APIs robustas com Node.js, Express e MongoDB do zero.",
    thumbnail: "/src/assets/tutorial-thumb.jpg",
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
    thumbnail: "/src/assets/conference-thumb.jpg", 
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
    thumbnail: "/src/assets/conference-thumb.jpg",
    duration: "35:22",
    views: "6.7K", 
    category: "palestras",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "11",
    title: "Inovação e Empreendedorismo Digital",
    description: "Como identificar oportunidades e criar soluções inovadoras no mundo digital.",
    thumbnail: "/src/assets/conference-thumb.jpg",
    duration: "48:15",
    views: "4.5K",
    category: "palestras",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "12",
    title: "Liderança Técnica Eficaz",
    description: "Estratégias para se tornar um líder técnico inspirador e eficiente.",
    thumbnail: "/src/assets/conference-thumb.jpg",
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
    thumbnail: "/src/assets/neuroeducation-thumb.jpg",
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
    thumbnail: "/src/assets/neuroeducation-thumb.jpg", 
    duration: "26:18",
    views: "3.6K",
    category: "neuroeducacao",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "15",
    title: "Neuroplasticidade e Aprendizado Contínuo",
    description: "Como a neuroplasticidade pode acelerar seu aprendizado em tecnologia.",
    thumbnail: "/src/assets/neuroeducation-thumb.jpg",
    duration: "29:52",
    views: "2.7K",
    category: "neuroeducacao", 
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "16",
    title: "Inteligência Emocional no Trabalho",
    description: "A importância da inteligência emocional para profissionais de tecnologia.",
    thumbnail: "/src/assets/neuroeducation-thumb.jpg",
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

export const searchVideos = (query: string): Video[] => {
  const searchTerm = query.toLowerCase();
  return videos.filter(video => 
    video.title.toLowerCase().includes(searchTerm) ||
    video.description.toLowerCase().includes(searchTerm)
  );
};