import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Calculator, Users, TrendingUp, RefreshCw } from 'lucide-react';
import { SERVICES } from '../constants';

export default function Services() {
  const getIcon = (name: string) => {
    switch(name) {
      case 'Briefcase': return <Briefcase className="w-10 h-10 text-brand-600" />;
      case 'Calculator': return <Calculator className="w-10 h-10 text-brand-600" />;
      case 'Users': return <Users className="w-10 h-10 text-brand-600" />;
      case 'TrendingUp': return <TrendingUp className="w-10 h-10 text-brand-600" />;
      case 'RefreshCw': return <RefreshCw className="w-10 h-10 text-brand-600" />;
      default: return <Briefcase className="w-10 h-10 text-brand-600" />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">Soluções completas e integradas para cada etapa do seu negócio.</p>
        </div>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(SERVICES).map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
              <div className="p-8 flex-grow">
                <div className="mb-6 bg-brand-50 w-16 h-16 rounded-xl flex items-center justify-center">
                   {getIcon(service.iconName)}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.shortDescription}</p>
                <ul className="space-y-2 mb-6">
                  {service.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                 <Link 
                  to={`/servicos/${service.id}`}
                  className="block w-full py-3 text-center border border-brand-200 text-brand-600 font-semibold rounded-lg hover:bg-brand-50 transition-colors"
                >
                  Ver Detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="container mx-auto px-4 max-w-4xl bg-brand-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Não encontrou o que procura?</h2>
          <p className="mb-8 text-brand-100">Entre em contato e montamos uma proposta personalizada para sua necessidade.</p>
          <Link to="/contato" className="bg-white text-brand-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Falar com Consultor
          </Link>
      </div>
    </div>
  );
}