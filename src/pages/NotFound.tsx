import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <div className="mb-8">
          <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Página não encontrada
          </h2>
          <p className="text-muted-foreground mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
