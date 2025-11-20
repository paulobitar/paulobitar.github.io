import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Briefcase, Calculator, Users, TrendingUp } from 'lucide-react';
import { SERVICES, TESTIMONIALS, COMPANY_INFO } from '../constants';

export default function Home() {
  // Helper to get icon based on string (simplified for Home)
  const getIcon = (name: string) => {
    switch(name) {
      case 'Briefcase': return <Briefcase className="w-8 h-8 text-brand-600" />;
      case 'Calculator': return <Calculator className="w-8 h-8 text-brand-600" />;
      case 'Users': return <Users className="w-8 h-8 text-brand-600" />;
      case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-brand-600" />;
      default: return <Briefcase className="w-8 h-8 text-brand-600" />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Contabilidade Digital <br />
                <span className="text-brand-600">Sem Burocracia</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                Cuidamos da saúde financeira da sua empresa para você focar no que realmente importa: o crescimento do seu negócio. Tecnologia, agilidade e suporte humanizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/servicos/abertura-de-empresa" 
                  className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors shadow-lg hover:shadow-xl flex justify-center items-center gap-2"
                >
                  Abrir minha empresa
                </Link>
                <Link 
                  to="/contato" 
                  className="bg-white hover:bg-gray-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-lg font-semibold text-center transition-colors flex justify-center items-center gap-2"
                >
                  Falar com especialista
                </Link>
              </div>
              <div className="pt-4 flex items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-accent-500"/> Abertura Grátis*</div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-accent-500"/> Troca Fácil</div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-accent-500"/> 100% Online</div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Equipe analisando dados em tablet" 
                className="rounded-2xl shadow-2xl z-10 relative border-4 border-white"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs hidden md:block">
                <p className="font-bold text-slate-900 text-lg mb-1">+ 500 Clientes</p>
                <p className="text-slate-500 text-sm">Empresas satisfeitas com nossa gestão contábil.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Soluções Completas para sua Empresa</h2>
            <p className="text-slate-600">Tudo o que você precisa em um só lugar. Simplificamos a contabilidade para que você ganhe tempo.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.values(SERVICES).slice(0, 4).map((service) => (
              <Link 
                key={service.id} 
                to={`/servicos/${service.id}`}
                className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-brand-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-100 transition-colors">
                  {getIcon(service.iconName)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>
                <div className="text-brand-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Saiba mais <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Por que escolher a Nexus?</h2>
              <p className="text-slate-300 mb-8 text-lg">
                Não somos apenas um gerador de guias de impostos. Somos parceiros estratégicos do seu negócio, utilizando tecnologia para entregar valor real.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-brand-500 p-2 rounded-lg mt-1">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Atendimento Humanizado</h4>
                    <p className="text-slate-400 mt-1">Nada de robôs. Fale com contadores reais via WhatsApp, telefone ou e-mail sempre que precisar.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-brand-500 p-2 rounded-lg mt-1">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Tecnologia de Ponta</h4>
                    <p className="text-slate-400 mt-1">Plataforma intuitiva para envio de documentos, controle de notas fiscais e visualização de relatórios.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-brand-500 p-2 rounded-lg mt-1">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Economia Tributária</h4>
                    <p className="text-slate-400 mt-1">Monitoramento constante para enquadrar sua empresa no regime que paga menos impostos.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                 <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=1000" 
                    alt="Tecnologia contábil" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 bg-brand-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-5xl font-bold text-brand-100 mb-4">1</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Contrate Online</h3>
                <p className="text-slate-600">Escolha seu plano e faça o cadastro em poucos minutos.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-5xl font-bold text-brand-100 mb-4">2</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Onboarding</h3>
                <p className="text-slate-600">Nossa equipe alinha os detalhes e configura sua empresa no sistema.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-5xl font-bold text-brand-100 mb-4">3</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Tudo Pronto</h3>
                <p className="text-slate-600">Sua contabilidade em dia e você livre para vender mais.</p>
             </div>
          </div>
          <div className="mt-12">
            <Link to="/como-funciona" className="text-brand-600 font-semibold hover:text-brand-800 flex items-center justify-center gap-2">
               Ver passo a passo detalhado <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">O que dizem nossos clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <p className="text-slate-600 mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Pronto para modernizar sua contabilidade?</h2>
          <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 500 empreendedores que escolheram a Nexus. Simples, rápido e digital.
          </p>
          <Link 
            to="/contato"
            className="inline-block bg-white text-brand-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-lg"
          >
            Falar com um consultor
          </Link>
        </div>
      </section>
    </>
  );
}