import React from 'react';
import { Wind, Sun, Thermometer, Leaf } from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      icon: Wind,
      title: 'Ventilação',
      subtitle: 'cruzada',
      description: 'Aproveite a circulação natural do ar para ambientes mais frescos e saudáveis.'
    },
    {
      icon: Sun,
      title: 'Controle de',
      subtitle: 'iluminação',
      description: 'Maximize a luz natural reduzindo custos com energia e criando espaços mais agradáveis.'
    },
    {
      icon: Thermometer,
      title: 'Conforto',
      subtitle: 'térmico',
      description: 'Projetos que mantêm temperatura ideal durante todo o ano sem desperdício energético.'
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      subtitle: 'energética',
      description: 'Soluções eco-friendly que reduzem impacto ambiental e economizam recursos.'
    }
  ];

  return (
    <div className="bg-card py-16 md:py-24 lg:py-32 relative overflow-hidden rounded-lg " id="solucoes">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">
            Soluções Climáticas
          </h2>
          <p className="text-lg md:text-xl text-card-foreground/70">
            Projetos arquitetônicos que aliam conforto, eficiência e sustentabilidade através de técnicas inteligentes de climatização natural.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  {solution.title}
                </h3>
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  {solution.subtitle}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground/70 leading-relaxed">
                {solution.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-semibold">Saiba mais</span>
                <svg 
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Arquitetura Bioclimática
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Nossas soluções consideram orientação solar, ventos predominantes, 
                topografia e clima local para criar ambientes naturalmente confortáveis, 
                reduzindo a necessidade de climatização artificial e promovendo 
                economia energética significativa.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">30%</div>
                <div className="text-sm text-foreground/70">Economia energética</div>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-foreground/70">Natural</div>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">↓40°C</div>
                <div className="text-sm text-foreground/70">Redução térmica</div>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">+50%</div>
                <div className="text-sm text-foreground/70">Conforto</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}