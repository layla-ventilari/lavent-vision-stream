import { useEffect } from 'react';
import { Check } from 'lucide-react';

const Health = () => {
  useEffect(() => {
    console.log('Health page mounted successfully');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Sistema OK</h1>
        <p className="text-muted-foreground">Lavent Vision está funcionando corretamente</p>
        <div className="mt-4 text-sm text-muted-foreground">
          Status: <span className="text-primary font-medium">Ativo</span>
        </div>
      </div>
    </div>
  );
};

export default Health;