import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ContentSection } from "@/components/ContentSection";
import aiGenerativeThumb from "@/assets/ai-generative-thumb.jpg";
import tutorialThumb from "@/assets/tutorial-thumb.jpg";
import conferenceThumb from "@/assets/conference-thumb.jpg";
import neuroeducationThumb from "@/assets/neuroeducation-thumb.jpg";

// Mock data for different content sections
const iaGenerativaVideos = [
  {
    id: "1",
    title: "GPT-4 e o Futuro da Comunicação IA",
    description: "Análise profunda das capacidades do GPT-4 e suas implicações para a comunicação humano-máquina.",
    thumbnail: aiGenerativeThumb,
    duration: "42:15",
    views: "12.5K",
    category: "IA Generativa"
  },
  {
    id: "2", 
    title: "Criando Arte com Stable Diffusion",
    description: "Tutorial prático para gerar arte digital profissional usando modelos de difusão.",
    thumbnail: aiGenerativeThumb,
    duration: "28:30",
    views: "8.7K",
    category: "IA Generativa"
  },
  {
    id: "3",
    title: "DALL-E 3: Revolução na Criação Visual",
    description: "Explorando as novas capacidades do DALL-E 3 e técnicas avançadas de prompt engineering.",
    thumbnail: aiGenerativeThumb,
    duration: "35:22",
    views: "15.2K",
    category: "IA Generativa"
  },
  {
    id: "4",
    title: "LLMs Locais: Llama 2 e Alternativas",
    description: "Como configurar e otimizar modelos de linguagem locais para projetos específicos.",
    thumbnail: aiGenerativeThumb,
    duration: "51:45",
    views: "6.9K",
    category: "IA Generativa"
  }
];

const tutoriaisVideos = [
  {
    id: "5",
    title: "Python para IA: Do Zero ao Avançado",
    description: "Curso completo de Python focado em aplicações de inteligência artificial e machine learning.",
    thumbnail: tutorialThumb,
    duration: "1:15:30",
    views: "25.8K",
    category: "Tutoriais"
  },
  {
    id: "6",
    title: "TensorFlow vs PyTorch: Qual Escolher?",
    description: "Comparação detalhada entre os principais frameworks de deep learning do mercado.",
    thumbnail: tutorialThumb,
    duration: "38:45",
    views: "18.3K",
    category: "Tutoriais"
  },
  {
    id: "7",
    title: "Construindo uma API de ML com FastAPI",
    description: "Passo a passo para criar uma API robusta para servir modelos de machine learning.",
    thumbnail: tutorialThumb,
    duration: "45:12",
    views: "11.7K",
    category: "Tutoriais"
  },
  {
    id: "8",
    title: "Docker para Cientistas de Dados",
    description: "Como usar containerização para criar ambientes reproduzíveis em projetos de IA.",
    thumbnail: tutorialThumb,
    duration: "32:18",
    views: "9.4K",
    category: "Tutoriais"
  }
];

const palestrasVideos = [
  {
    id: "9",
    title: "IA Ética: Desafios e Soluções",
    description: "Palestra sobre os dilemas éticos na implementação de sistemas de inteligência artificial.",
    thumbnail: conferenceThumb,
    duration: "55:20",
    views: "22.1K",
    category: "Palestras"
  },
  {
    id: "10",
    title: "O Impacto da IA no Mercado de Trabalho",
    description: "Discussão sobre como a automação inteligente está transformando profissões e criando novas oportunidades.",
    thumbnail: conferenceThumb,
    duration: "48:35",
    views: "31.5K",
    category: "Palestras"
  },
  {
    id: "11",
    title: "Quantum Computing e IA: Próxima Fronteira",
    description: "Exploração das possibilidades da computação quântica aplicada à inteligência artificial.",
    thumbnail: conferenceThumb,
    duration: "1:02:45",
    views: "14.8K",
    category: "Palestras"
  }
];

const neuroeducacaoVideos = [
  {
    id: "12",
    title: "Neuroplasticidade e Aprendizado Adaptativo",
    description: "Como o cérebro se adapta e como podemos otimizar processos de aprendizagem baseados em neurociência.",
    thumbnail: neuroeducationThumb,
    duration: "40:25",
    views: "19.6K",
    category: "Neuroeducação"
  },
  {
    id: "13",
    title: "Gamificação Baseada em Neurociência",
    description: "Princípios neurocientíficos aplicados ao design de experiências educacionais gamificadas.",
    thumbnail: neuroeducationThumb,
    duration: "33:50",
    views: "13.2K",
    category: "Neuroeducação"
  },
  {
    id: "14",
    title: "Memória e Retenção: Técnicas Cientificamente Comprovadas",
    description: "Estratégias baseadas em evidências para melhorar a retenção de conhecimento a longo prazo.",
    thumbnail: neuroeducationThumb,
    duration: "37:15",
    views: "16.9K",
    category: "Neuroeducação"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <HeroCarousel />

        {/* Content Sections */}
        <ContentSection
          title="IA Generativa"
          description="Explore o fascinante mundo da inteligência artificial generativa e suas aplicações revolucionárias."
          videos={iaGenerativaVideos}
        />

        <ContentSection
          title="Tutoriais Práticos"
          description="Aprenda através de projetos hands-on e desenvolva habilidades técnicas essenciais."
          videos={tutoriaisVideos}
        />

        <ContentSection
          title="Palestras e Conferências"
          description="Insights de especialistas sobre o futuro da IA e seu impacto na sociedade."
          videos={palestrasVideos}
        />

        <ContentSection
          title="Neuroeducação"
          description="Descubra como a neurociência pode transformar métodos de ensino e aprendizagem."
          videos={neuroeducacaoVideos}
        />
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border/50 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Lavent Vision
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Plataforma de streaming educacional focada em IA e tecnologia avançada.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Lavent Lab. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;