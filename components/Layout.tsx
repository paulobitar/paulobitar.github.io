import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const isActive = (path: string) => {
      if (path === '/' && location.pathname !== '/') return false;
      return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
               <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">N</div>
               <span className="text-xl font-bold text-gray-900 tracking-tight">Nexus<span className="text-brand-600">Contábil</span></span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <div key={link.path} className="relative group">
                  <Link
                    to={link.subLinks ? '#' : link.path}
                    className={`text-base font-medium transition-colors duration-200 flex items-center gap-1 ${
                        isActive(link.path) ? 'text-brand-600' : 'text-gray-600 hover:text-brand-600'
                    }`}
                  >
                    {link.label}
                    {link.subLinks && <ChevronDown size={16} />}
                  </Link>
                  
                  {/* Dropdown */}
                  {link.subLinks && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                      <div className="py-1">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-600"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a 
                href={COMPANY_INFO.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent-600 hover:bg-accent-500 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-600 hover:text-brand-600 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg absolute w-full">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <div key={link.path}>
                    {link.subLinks ? (
                        <div className="space-y-2">
                            <button 
                                onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                                className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-700"
                            >
                                {link.label}
                                <ChevronDown size={18} className={`transform transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                            </button>
                            {activeDropdown === link.label && (
                                <div className="pl-4 space-y-2 border-l-2 border-gray-100 ml-2">
                                    {link.subLinks.map(sub => (
                                        <Link 
                                            key={sub.path} 
                                            to={sub.path} 
                                            className="block text-gray-600 py-1"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            to={link.path}
                            className={`block text-lg font-medium ${
                                isActive(link.path) ? 'text-brand-600' : 'text-gray-700'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    )}
                </div>
              ))}
               <a 
                href={COMPANY_INFO.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent-600 text-white text-center py-3 rounded-lg font-semibold mt-4"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-2 text-white font-bold text-2xl mb-6">
                        <div className="w-8 h-8 bg-brand-500 rounded flex items-center justify-center">N</div>
                        Nexus
                    </div>
                    <p className="mb-6 text-slate-400 leading-relaxed">
                        Contabilidade digital inteligente para empresas que querem crescer. 
                        Burocracia zero e suporte humanizado.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-6">Navegação</h3>
                    <ul className="space-y-3">
                        <li><Link to="/sobre" className="hover:text-brand-400 transition-colors">Sobre Nós</Link></li>
                        <li><Link to="/servicos" className="hover:text-brand-400 transition-colors">Nossos Serviços</Link></li>
                        <li><Link to="/como-funciona" className="hover:text-brand-400 transition-colors">Como Funciona</Link></li>
                        <li><Link to="/contato" className="hover:text-brand-400 transition-colors">Fale Conosco</Link></li>
                        <li><Link to="/servicos/troca-de-contador" className="hover:text-brand-400 transition-colors">Trocar de Contador</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-6">Serviços</h3>
                    <ul className="space-y-3">
                        <li><Link to="/servicos/abertura-de-empresa" className="hover:text-brand-400 transition-colors">Abertura de Empresa</Link></li>
                        <li><Link to="/servicos/contabilidade-mensal" className="hover:text-brand-400 transition-colors">Contabilidade Mensal</Link></li>
                        <li><Link to="/servicos/folha-de-pagamento" className="hover:text-brand-400 transition-colors">Folha de Pagamento</Link></li>
                        <li><Link to="/servicos/consultoria-tributaria" className="hover:text-brand-400 transition-colors">Consultoria Tributária</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-6">Contato</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin className="flex-shrink-0 text-brand-500" size={20} />
                            <span>{COMPANY_INFO.address}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="flex-shrink-0 text-brand-500" size={20} />
                            <span>{COMPANY_INFO.phone}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="flex-shrink-0 text-brand-500" size={20} />
                            <span>{COMPANY_INFO.email}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} Nexus Contabilidade Digital. Todos os direitos reservados.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Privacidade</a>
                    <a href="#" className="hover:text-white">Termos de Uso</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}