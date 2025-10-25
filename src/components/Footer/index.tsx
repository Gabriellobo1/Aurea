import React from 'react';

// Dados do footer
const footerData = {
  logo: {
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='8' fill='%236C122C'/%3E%3Cpath d='M20 8L28 16H24V28H16V16H12L20 8Z' fill='%23EAD38C'/%3E%3C/svg%3E",
    alt: "Logo Arquitetura",
    title: "ArchiDesign"
  },
  tagline: "Transformando espaços em experiências únicas",
  menuItems: [
    {
      title: "Serviços",
      links: [
        { text: "Projetos Residenciais", url: "#residencial" },
        { text: "Projetos Comerciais", url: "#comercial" },
        { text: "Consultoria", url: "#consultoria" },
        { text: "Interiores", url: "#interiores" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { text: "Sobre Nós", url: "#sobre" },
        { text: "Portfólio", url: "#portfolio" },
        { text: "Equipe", url: "#equipe" },
        { text: "Carreira", url: "#carreira" }
      ]
    },
    {
      title: "Recursos",
      links: [
        { text: "Blog", url: "#blog" },
        { text: "Cases", url: "#cases" },
        { text: "FAQ", url: "#faq" },
        { text: "Contato", url: "#contato" }
      ]
    },
    {
      title: "Contato",
      links: [
        { text: "(84) 3000-0000", url: "tel:+558430000000" },
        { text: "contato@archidesign.com", url: "mailto:contato@archidesign.com" },
        { text: "Natal, RN", url: "#localizacao" }
      ]
    }
  ],
  copyright: "© 2025 ArchiDesign. Todos os direitos reservados.",
  bottomLinks: [
    { text: "Política de Privacidade", url: "#privacidade" },
    { text: "Termos de Uso", url: "#termos" },
    { text: "Cookies", url: "#cookies" }
  ]
};

export  function Footer() {
  const { logo, tagline, menuItems, copyright, bottomLinks } = footerData;

  return (
    <footer className="bg-card border-t border-border">
      <div className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-6">
              {/* Logo e Tagline */}
              <div className="col-span-1 sm:col-span-2 mb-8 lg:mb-0">
                <div className="flex items-center gap-3">
                  <div>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      title={logo.title}
                      className="h-10 w-10"
                    />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-card-foreground">{logo.title}</p>
                  </div>
                </div>
                <p className="mt-4 font-semibold text-card-foreground/80 max-w-sm">
                  {tagline}
                </p>
                
                {/* Social Links */}
                <div className="flex gap-4 mt-6">
                  <a 
                    href="#instagram" 
                    className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#facebook" 
                    className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="#linkedin" 
                    className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Menu Sections */}
              {menuItems.map((section, sectionIdx) => (
                <div key={sectionIdx} className="col-span-1">
                  <h3 className="mb-4 font-bold text-card-foreground text-base">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a
                          href={link.url}
                          className="text-muted-foreground hover:text-primary font-medium text-sm transition-colors inline-block"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="mt-16 md:mt-24 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:justify-between md:items-center">
              <p className="text-muted-foreground text-sm font-medium">
                {copyright}
              </p>
              <ul className="flex flex-wrap gap-4 md:gap-6">
                {bottomLinks.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.url}
                      className="text-muted-foreground hover:text-primary text-sm font-medium underline underline-offset-4 transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}