import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 z-10">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  Design inteligente para o conforto do seu lar
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
                  Soluções arquitetônicas que aliam estética, eficiência energética e equilíbrio ambiental.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
                >
                  Conheça nossas soluções
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-border hover:bg-accent hover:text-accent-foreground text-base px-8"
                >
                  Fale conosco
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative lg:h-[600px] h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="w-full h-full flex items-center justify-center bg-card/50 backdrop-blur-sm">
                  {/* Mockup de sala */}
                  <div className="relative w-full h-full">
                    {/* Parede */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary/90"></div>
                    
                    {/* Cortinas */}
                    <div className="absolute right-0 top-0 bottom-0 w-1/3">
                      <div className="h-full bg-gradient-to-r from-accent/30 to-accent/50 backdrop-blur-sm"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                    </div>
                    
                    {/* Estante */}
                    <div className="absolute right-[35%] top-[20%] w-24 h-32 bg-accent rounded-lg shadow-xl">
                      <div className="grid grid-cols-2 gap-1 p-2">
                        <div className="bg-secondary/30 rounded aspect-square"></div>
                        <div className="bg-secondary/30 rounded aspect-square"></div>
                        <div className="bg-secondary/30 rounded aspect-square"></div>
                        <div className="bg-secondary/30 rounded aspect-square"></div>
                      </div>
                    </div>
                    
                    {/* Piso */}
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-muted/40 to-transparent">
                      {/* Sofá */}
                      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-64 h-24 bg-muted rounded-t-3xl shadow-2xl">
                        <div className="absolute -top-8 left-4 right-4 h-8 bg-muted/80 rounded-t-lg"></div>
                        <div className="absolute inset-x-4 top-2 flex gap-2">
                          <div className="flex-1 h-16 bg-accent/40 rounded"></div>
                          <div className="flex-1 h-16 bg-accent/40 rounded"></div>
                          <div className="flex-1 h-16 bg-accent/40 rounded"></div>
                        </div>
                      </div>
                      
                      {/* Mesa de centro */}
                      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-32 h-3 bg-accent/60 rounded-full shadow-lg">
                        <div className="absolute -top-1 inset-x-2 h-2 bg-accent/80 rounded-full"></div>
                      </div>
                      
                      {/* Planta */}
                      <div className="absolute bottom-[15%] left-[15%] w-8 h-12">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-4 bg-muted rounded-b-lg"></div>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full opacity-80"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Estética Refinada</h3>
            <p className="text-card-foreground/70">Design personalizado que reflete sua personalidade e estilo de vida.</p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Eficiência Energética</h3>
            <p className="text-card-foreground/70">Soluções sustentáveis que reduzem custos e preservam o meio ambiente.</p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Equilíbrio Ambiental</h3>
            <p className="text-card-foreground/70">Harmonia perfeita entre conforto, funcionalidade e natureza.</p>
          </div>
        </div>
      </div>
    </div>
  );
}