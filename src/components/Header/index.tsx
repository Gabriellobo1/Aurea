import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export  function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: 'Home', href: 'home' },
    { label: 'Soluções Climáticas', href: 'solucoes' },
    { label: 'Sobre', href: 'sobre' },
    { label: 'Contato', href: 'contato' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary shadow-lg' 
          : 'bg-primary'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/">
          <a  className="flex items-center gap-3 group">
            <div className="relative">
              {/* Logo Icon */}
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 48 48" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:scale-105"
              >
                {/* Círculos concêntricos */}
                <circle cx="24" cy="24" r="22" stroke="#EAD38C" strokeWidth="2" opacity="0.3"/>
                <circle cx="24" cy="24" r="16" stroke="#EAD38C" strokeWidth="2" opacity="0.6"/>
                <circle cx="24" cy="24" r="10" stroke="#EAD38C" strokeWidth="2"/>
                <circle cx="24" cy="24" r="4" fill="#EAD38C"/>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl md:text-2xl font-bold text-primary-foreground tracking-tight">
                AUREA
              </span>
              <span className="text-xs md:text-sm font-light text-primary-foreground/80 tracking-widest uppercase">
                Studio
              </span>
            </div>
          </a></Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-primary-foreground hover:text-accent font-medium text-sm transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
           <div className='flex flex-row '>
              <div className=" px-4">
              <Button 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agendar Consultoria
              </Button>
            </div>
            <div className=" px-4">
             <Link to="/Login">
              <Button 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                Login
              </Button></Link>
            </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-2 border-t border-primary-foreground/20">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 font-medium text-base py-3 px-4 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            <div>
              <div className="pt-4 px-4">
              <Button 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agendar Consultoria
              </Button>
            </div>
            <div className="pt-4 px-4">
             <Link to="/Login">
              <Button 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                Login
              </Button></Link>
            </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}