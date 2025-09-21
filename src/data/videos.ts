export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  category: 'filmes-curtas' | 'animacao-videoarte' | 'arte-digital' | 'projetos-tecnologicos';
  featured?: boolean;
  videoId: string; // YouTube video ID
  technique?: string; // Técnica utilizada
  culturalRelevance?: string; // Relevância cultural
  tags?: string[]; // Tags para filtros
}

export const videos: Video[] = [
  // Filmes e Curtas-Metragens
  {
    id: "1",
    title: "PANEMA - Curta-Metragem em IA",
    description: "Em 2024, incêndios criminosos devastam o Brasil e a Amazônia. Este curta-metragem criado completamente com IA mescla animação, videoarte e imagens reais para contar uma história surpreendente sobre destruição, ganância e esperança. Com um final inesperado, questiona o futuro da floresta e da humanidade.",
    thumbnail: "https://img.youtube.com/vi/EYUhVLpIIxw/hqdefault.jpg",
    duration: "28:30",
    views: "4.1K",
    category: "filmes-curtas",
    featured: true,
    videoId: "EYUhVLpIIxw",
    technique: "Inteligência Artificial, Video Arte, Animação Digital",
    culturalRelevance: "Crítica ambiental sobre a devastação da Amazônia brasileira",
    tags: ["cinema experimental", "meio ambiente", "amazônia", "ai generativa", "videoarte"]
  },
  {
    id: "2",
    title: "PANEMA - Trailer Oficial",
    description: "Trailer oficial do curta-metragem PANEMA, uma obra cinematográfica experimental que explora os limites entre realidade e ficção através da tecnologia de IA generativa, abordando questões ambientais urgentes do Brasil contemporâneo.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: "2:45",
    views: "2.9K",
    category: "filmes-curtas",
    videoId: "dQw4w9WgXcQ",
    technique: "Trailer cinematográfico, edição avançada",
    culturalRelevance: "Divulgação de cinema experimental brasileiro",
    tags: ["trailer", "cinema brasileiro", "experimental"]
  },

  // Animação e Video Arte
  {
    id: "3",
    title: "IVELTON'S GENERATIVE AI WORKS 2025.1",
    description: "Portfólio completo dos trabalhos em inteligência artificial generativa de Ivelton Queiroz, artista digital e cineasta de Manaus. Explora técnicas avançadas de IA para criação de arte digital, animação e narrativas visuais que reinventam a expressão cultural amazônica.",
    thumbnail: "https://img.youtube.com/vi/GNQFjIJhuMA/hqdefault.jpg",
    duration: "15:30",
    views: "2.1K",
    category: "animacao-videoarte",
    featured: true,
    videoId: "GNQFjIJhuMA",
    technique: "IA Generativa, Redes Neurais, Machine Learning",
    culturalRelevance: "Fusão entre tecnologia moderna e cultura amazônica",
    tags: ["ai generativa", "portfolio", "arte digital", "cultura amazônica"]
  },
  {
    id: "4",
    title: "BOIBLOX - Festival de Parintins em IA Estilo ROBLOX",
    description: "ÊÊÊÊ BOI! Uma reimaginação vibrante do tradicional Festival de Parintins em estilo ROBLOX, criada com IA generativa. Esta animação celebra a alegria e beleza da cultura popular amazônica através de uma estética digital contemporânea, conectando tradição e inovação tecnológica.",
    thumbnail: "https://img.youtube.com/vi/ZUC6l6T1o2w/hqdefault.jpg",
    duration: "22:45",
    views: "1.8K",
    category: "animacao-videoarte",
    videoId: "ZUC6l6T1o2w",
    technique: "Animação em IA, Estilo ROBLOX, Modelagem 3D",
    culturalRelevance: "Reinvenção digital do Festival de Parintins, patrimônio cultural do Amazonas",
    tags: ["festival parintins", "cultura popular", "roblox", "animação", "amazonas"]
  },
  {
    id: "5",
    title: "VIAGENS GHIBLI - João Pessoa",
    description: "Uma jornada visual poética pela cidade de João Pessoa, reimaginada através da estética cinematográfica do Studio Ghibli. Esta obra combina a beleza natural da capital paraibana com a magia visual característica dos filmes de animação japoneses, criando uma narrativa contemplativa única.",
    thumbnail: "https://img.youtube.com/vi/y75COx-MD9k/hqdefault.jpg",
    duration: "18:12",
    views: "3.2K",
    category: "animacao-videoarte",
    videoId: "y75COx-MD9k",
    technique: "Estilo Ghibli, IA Generativa, Paisagismo Digital",
    culturalRelevance: "Retrato artístico da cultura nordestina através de estética japonesa",
    tags: ["ghibli", "joão pessoa", "nordeste", "paisagem", "contemplativo"]
  },
  {
    id: "6",
    title: "VIAGENS GHIBLI - Acajatuba",
    description: "Exploração visual da região de Acajatuba no Amazonas, interpretada através da sensibilidade artística do Studio Ghibli. A obra revela a exuberante natureza amazônica com uma abordagem delicada e contemplativa, destacando a harmonia entre homem e floresta.",
    thumbnail: "https://img.youtube.com/vi/RrMMqOTGhC8/hqdefault.jpg",
    duration: "25:18",
    views: "1.5K",
    category: "animacao-videoarte",
    videoId: "RrMMqOTGhC8",
    technique: "Estilo Ghibli, Paisagismo Digital, IA Artística",
    culturalRelevance: "Valorização da paisagem amazônica através de arte digital",
    tags: ["ghibli", "amazonas", "acajatuba", "natureza", "floresta"]
  },
  {
    id: "7",
    title: "VIAGENS GHIBLI - Costa Rica (Pura Vida)",
    description: "Uma celebração visual da filosofia 'Pura Vida' costarriquenha através da estética Ghibli. Esta obra captura a essência da biodiversidade tropical e do estilo de vida sustentável da Costa Rica, criando uma ponte cultural entre América Latina e Japão através da arte digital.",
    thumbnail: "https://img.youtube.com/vi/F90Z0YyZYYY/hqdefault.jpg",
    duration: "45:20",
    views: "5.2K",
    category: "animacao-videoarte",
    featured: true,
    videoId: "F90Z0YyZYYY",
    technique: "Estilo Ghibli, Narrativa Visual, IA Criativa",
    culturalRelevance: "Intercâmbio cultural entre América Latina e Japão",
    tags: ["ghibli", "costa rica", "pura vida", "biodiversidade", "sustentabilidade"]
  },
  {
    id: "8",
    title: "VIAGENS GHIBLI - Rio de Janeiro",
    description: "O Rio de Janeiro reimaginado através da magia visual do Studio Ghibli. Esta obra apresenta a Cidade Maravilhosa com uma perspectiva única, combinando marcos icônicos cariocas com a poesia visual característica da animação japonesa, criando uma experiência sensorial envolvente.",
    thumbnail: "https://img.youtube.com/vi/fCMB-d1ELdU/hqdefault.jpg",
    duration: "32:15",
    views: "3.8K",
    category: "animacao-videoarte",
    videoId: "fCMB-d1ELdU&t",
    technique: "Estilo Ghibli, Paisagem Urbana, Arte Digital",
    culturalRelevance: "Retrato poético da cultura carioca através de estética japonesa",
    tags: ["ghibli", "rio de janeiro", "cidade maravilhosa", "cultura carioca"]
  },

  // Arte Digital e Pinturas
  {
    id: "9",
    title: "Coleção Digital - Natureza Amazônica",
    description: "Série de pinturas digitais inspiradas na flora e fauna amazônica, criadas por Ivelton Queiroz. Cada obra explora a biodiversidade única da região através de técnicas digitais avançadas, combinando realismo e expressionismo para revelar a alma da floresta tropical.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: "12:45",
    views: "1.2K",
    category: "arte-digital",
    videoId: "dQw4w9WgXcQ",
    technique: "Pintura Digital, Ilustração Botânica, Arte Conceitual",
    culturalRelevance: "Preservação visual da biodiversidade amazônica",
    tags: ["pintura digital", "amazônia", "biodiversidade", "flora", "fauna"]
  },
  {
    id: "10",
    title: "Retratos Culturais do Norte",
    description: "Galeria de retratos digitais que celebram a diversidade étnica e cultural do Norte do Brasil. Ivelton Queiroz captura a essência dos povos ribeirinhos, indígenas e urbanos através de uma abordagem artística contemporânea que honra tradições ancestrais.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: "18:30",
    views: "2.3K",
    category: "arte-digital",
    featured: true,
    videoId: "dQw4w9WgXcQ",
    technique: "Retrato Digital, Pintura Conceitual, Arte Étnica",
    culturalRelevance: "Valorização da diversidade cultural do Norte brasileiro",
    tags: ["retrato", "cultura norte", "diversidade étnica", "povos tradicionais"]
  },

  // Projetos Tecnológicos (RA/Web3)
  {
    id: "11",
    title: "Realidade Aumentada - Museu Virtual Amazônico",
    description: "Projeto pioneiro de realidade aumentada que traz a riqueza cultural amazônica para ambientes digitais interativos. Desenvolvido por Ivelton Queiroz, o museu virtual permite explorar artefatos indígenas, fauna e flora em 3D, democratizando o acesso ao patrimônio cultural amazônico.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: "24:15",
    views: "3.7K",
    category: "projetos-tecnologicos",
    featured: true,
    videoId: "dQw4w9WgXcQ",
    technique: "Realidade Aumentada, Modelagem 3D, Interface Interativa",
    culturalRelevance: "Democratização do acesso ao patrimônio cultural amazônico",
    tags: ["realidade aumentada", "museu virtual", "patrimônio cultural", "3d", "interativo"]
  },
  {
    id: "12",
    title: "Web3 e Arte Digital - NFT Amazônia",
    description: "Exploração do universo Web3 através de uma coleção de NFTs que representam a biodiversidade amazônica. Este projeto combina tecnologia blockchain com arte digital para criar um novo modelo de valorização e preservação do patrimônio natural brasileiro.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: "19:45",
    views: "1.9K",
    category: "projetos-tecnologicos",
    videoId: "dQw4w9WgXcQ",
    technique: "Blockchain, NFT, Arte Digital, Web3",
    culturalRelevance: "Inovação em preservação digital do patrimônio natural",
    tags: ["web3", "nft", "blockchain", "arte digital", "preservação"]
  },
  {
    id: "13",
    title: "Interface Experimental - Navegação Gestual",
    description: "Desenvolvimento de interfaces experimentais que utilizam reconhecimento gestual para navegação intuitiva. Este projeto demonstra a pesquisa de Ivelton Queiroz em interação humano-computador, criando experiências digitais mais naturais e acessíveis.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: "16:20",
    views: "1.1K",
    category: "projetos-tecnologicos",
    videoId: "dQw4w9WgXcQ",
    technique: "Reconhecimento Gestual, UX/UI, Interação Natural",
    culturalRelevance: "Inovação em acessibilidade digital",
    tags: ["interface", "gestual", "ux/ui", "acessibilidade", "inovação"]
  },
  {
    id: "14",
    title: "App Mobile - Cultura Amazônica AR",
    description: "Aplicativo mobile que utiliza realidade aumentada para ensinar sobre a cultura amazônica. Desenvolvido com foco educacional, permite aos usuários descobrir lendas, flora e fauna através de experiências imersivas em seus próprios dispositivos.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: "21:30",
    views: "2.8K",
    category: "projetos-tecnologicos",
    videoId: "dQw4w9WgXcQ",
    technique: "Desenvolvimento Mobile, AR, Gamificação",
    culturalRelevance: "Educação cultural através de tecnologia móvel",
    tags: ["mobile app", "educação", "gamificação", "ar", "cultura amazônica"]
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