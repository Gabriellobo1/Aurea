import { Heart, Users, Award, Leaf } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-background py-16 md:py-24 lg:py-32" id="sobre">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <span className="inline-block text-sm font-medium text-secondary bg-muted px-4 py-2 rounded-full">
                Sobre Nós
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Transformamos espaços em experiências sustentáveis
              </h1>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Somos um estúdio de arquitetura comprometido em criar ambientes que harmonizam estética, eficiência energética e respeito ao meio ambiente. Cada projeto é pensado para melhorar a qualidade de vida das pessoas enquanto preserva os recursos naturais.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Nossa missão é provar que é possível unir beleza, funcionalidade e sustentabilidade em cada detalhe, criando lares que contam histórias e respeitam o planeta.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
                 <img src="/public/Salaverde.webp" alt="" className='cover rounded-lg'/>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-card rounded-lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projetos Concluídos' },
              { number: '12+', label: 'Anos de Experiência' },
              { number: '98%', label: 'Clientes Satisfeitos' },
              { number: '30%', label: 'Economia Energética Média' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Princípios que guiam cada decisão e cada traço dos nossos projetos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Paixão',
                description: 'Amamos o que fazemos e isso se reflete em cada detalhe dos nossos projetos.'
              },
              {
                icon: Users,
                title: 'Colaboração',
                description: 'Trabalhamos lado a lado com nossos clientes para criar espaços únicos.'
              },
              {
                icon: Award,
                title: 'Excelência',
                description: 'Buscamos a perfeição técnica sem abrir mão da criatividade e inovação.'
              },
              {
                icon: Leaf,
                title: 'Sustentabilidade',
                description: 'Compromisso com o meio ambiente em todas as etapas do projeto.'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border">
                  <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossa Equipe
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Profissionais apaixonados por criar ambientes que inspiram
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Ana Paula Silva', role: 'Arquiteta Principal', specialty: 'Design Bioclimático' , img: '/public/ArquitetoH.webp'},
              { name: 'Roberto Costa', role: 'Engenheiro Sustentável', specialty: 'Eficiência Energética', img: '/public/ArquitetoM.webp' },
              { name: 'Mariana Santos', role: 'Designer de Interiores', specialty: 'Ambientes Naturais', img: '/public/ArquitetoM2.webp' }
            ].map((member, index) => (
              <div key={index} className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border">
                <div className=''>
                    <img src={member.img} alt="" className='cover' />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-foreground/70">
                    Especialista em {member.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
}