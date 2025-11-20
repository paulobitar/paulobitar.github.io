import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Check, ArrowRight, HelpCircle } from 'lucide-react';
import { SERVICES } from '../constants';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !SERVICES[slug]) {
    return <Navigate to="/servicos" replace />;
  }

  const service = SERVICES[slug];

  return (
    <div>
      {/* Hero Service */}
      <section className="bg-slate-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-brand-400 font-semibold mb-4 tracking-wide uppercase text-sm">Serviços Nexus</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">{service.title}</h1>
            <p className="text-xl text-slate-300 leading-relaxed">{service.subtitle}</p>
            <div className="mt-8">
              <Link 
                to="/contato" 
                className="inline-block bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-lg font-bold transition-colors"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            
            <div className="prose prose-lg max-w-none text-slate-600 mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Sobre o Serviço</h2>
              <p>{service.fullDescription}</p>
            </div>

            <div className="bg-brand-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Benefícios Principais</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="bg-brand-200 p-1 rounded-full mt-1">
                        <Check size={16} className="text-brand-700" />
                    </div>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-8">Como funciona o processo</h2>
               <div className="space-y-8">
                 {service.processSteps.map((step, idx) => (
                   <div key={idx} className="flex gap-6">
                     <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-brand-500 rounded-full flex items-center justify-center text-brand-600 font-bold text-xl shadow-sm">
                        {idx + 1}
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                        <p className="text-slate-600">{step.description}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* FAQ Section */}
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    {service.faqs.map((faq, idx) => (
                        <div key={idx} className="border border-slate-200 rounded-lg p-6 hover:border-brand-300 transition-colors">
                            <div className="flex gap-3 mb-2">
                                <HelpCircle className="text-brand-500 flex-shrink-0" size={20} />
                                <h4 className="font-bold text-slate-900">{faq.question}</h4>
                            </div>
                            <p className="text-slate-600 pl-8">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Outros Serviços</h3>
              <ul className="space-y-3">
                {Object.values(SERVICES).filter(s => s.id !== slug).map(s => (
                    <li key={s.id}>
                        <Link to={`/servicos/${s.id}`} className="text-slate-600 hover:text-brand-600 flex items-center justify-between group">
                            <span className="text-sm">{s.title}</span>
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Precisa de ajuda?</h4>
                <p className="text-sm text-slate-500 mb-4">Nossa equipe está pronta para tirar suas dúvidas.</p>
                <Link to="/contato" className="block w-full bg-slate-900 text-white text-center py-3 rounded-lg font-medium hover:bg-slate-800">
                    Fale Conosco
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}