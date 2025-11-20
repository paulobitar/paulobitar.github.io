import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Clock, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Sobre a Nexus</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nascemos com o propósito de descomplicar a vida do empreendedor brasileiro. 
              Unimos a segurança da contabilidade tradicional com a agilidade da era digital.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center px-4">
                    <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Target size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Missão</h3>
                    <p className="text-slate-600">
                        Simplificar a gestão empresarial através de tecnologia e educação, permitindo que nossos clientes foquem em crescer.
                    </p>
                </div>
                <div className="text-center px-4">
                    <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Heart size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Valores</h3>
                    <p className="text-slate-600">
                        Transparência absoluta, proatividade, empatia com a dor do cliente e excelência técnica em cada entrega.
                    </p>
                </div>
                <div className="text-center px-4">
                    <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Award size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Visão</h3>
                    <p className="text-slate-600">
                        Ser referência nacional em contabilidade consultiva digital, transformando dados em estratégias de negócio.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                     <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600" 
                        alt="Reunião da equipe" 
                        className="rounded-2xl shadow-2xl"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
                    <div className="space-y-6 text-slate-300">
                        <p>
                            A Nexus começou em 2018, quando percebemos que o modelo tradicional de contabilidade – cheio de papéis, motoboys e prazos perdidos – não atendia mais às necessidades do mercado moderno.
                        </p>
                        <p>
                            O que começou numa pequena sala comercial, hoje é uma operação que atende mais de 500 empresas em 12 estados brasileiros. Crescemos porque colocamos o cliente no centro de tudo.
                        </p>
                        <p>
                            Não somos apenas contadores que geram guias. Somos consultores, desenvolvedores e analistas de dados dedicados ao sucesso do seu negócio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Quer fazer parte dessa história?</h2>
              <Link to="/contato" className="inline-block bg-brand-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-700 transition-colors">
                  Fale com a gente
              </Link>
          </div>
      </section>
    </div>
  );
}