import { Button } from '@/components/ui/button';

export function Hero() {
  return (
 
    <div 
      className="bg-background h-screen flex items-center pt-16 md:pt-20" 
      id="home"
    >

      <div className="overflow-hidden w-full relative"> 
        <div className="container mx-auto px-4">
          

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
            <div className="relative lg:h-[500px] h-[350px] rounded-2xl overflow-hidden shadow-2xl">
        
              <img 
                src="/public/Sala.png" 
                alt="Sala de estar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        {/* <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-0"></div> */}
      </div>
    </div>
  );
}