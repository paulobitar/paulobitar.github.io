import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Clock, CheckCircle, Monitor } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="bg-white">
       <section className="bg-brand-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Como Funciona</h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            Entenda como é simples migrar para o digital e ter o controle da sua empresa na palma da mão.
          </p>
        </div>
      </section>

      <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              
              <div className="relative border-l-4 border-brand-100 ml-4 md:ml-8 space-y-16">
                  
                  {/* Step 1 */}
                  <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-3.5 top-1 w-7 h-7 bg-brand-600 rounded-full border-4 border-white shadow-sm"></div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Diagnóstico Inicial</h2>
                      <p className="text-slate-600 mb-4">
                          Tudo começa com uma conversa. Você nos conta sobre seu negócio (tamanho, faturamento, atividade) e nós identificamos o melhor regime tributário e o plano ideal para você.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 inline-block">
                          <span className="font-semibold text-slate-800 flex items-center gap-2"><Clock size={16}/> Prazo: 24 horas</span>
                      </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-3.5 top-1 w-7 h-7 bg-brand-600 rounded-full border-4 border-white shadow-sm"></div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Envio de Documentos</h2>
                      <p className="text-slate-600 mb-4">
                          Você envia os documentos necessários através da nossa plataforma segura. Se for abertura, RG e Comprovante de Endereço. Se for troca, os últimos balancetes.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                           <span className="bg-blue-50 text-brand-700 px-3 py-1 rounded-full text-sm font-medium">Contrato Social</span>
                           <span className="bg-blue-50 text-brand-700 px-3 py-1 rounded-full text-sm font-medium">CNPJ</span>
                           <span className="bg-blue-50 text-brand-700 px-3 py-1 rounded-full text-sm font-medium">Certificado Digital</span>
                      </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-3.5 top-1 w-7 h-7 bg-brand-600 rounded-full border-4 border-white shadow-sm"></div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Configuração e Onboarding</h2>
                      <p className="text-slate-600 mb-4">
                          Nós configuramos sua empresa no nosso sistema e agendamos um treinamento rápido para te ensinar a emitir notas, visualizar guias e usar o aplicativo.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-center gap-3">
                          <Monitor className="text-brand-500" />
                          <span className="text-slate-700">Acesso liberado à Área do Cliente</span>
                      </div>
                  </div>

                   {/* Step 4 */}
                   <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-3.5 top-1 w-7 h-7 bg-accent-500 rounded-full border-4 border-white shadow-sm"></div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Operação Mensal</h2>
                      <p className="text-slate-600 mb-4">
                          Pronto! Todo mês nós calculamos seus impostos, folha de pagamento e enviamos as obrigações. Você recebe tudo por e-mail e notificação no celular antes do vencimento.
                      </p>
                      <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-slate-600"><CheckCircle size={16} className="text-accent-500"/> Guias de Impostos</li>
                          <li className="flex items-center gap-2 text-slate-600"><CheckCircle size={16} className="text-accent-500"/> Holerites</li>
                          <li className="flex items-center gap-2 text-slate-600"><CheckCircle size={16} className="text-accent-500"/> Balancetes</li>
                      </ul>
                  </div>

              </div>

              <div className="mt-16 text-center">
                  <Link to="/servicos/abertura-de-empresa" className="bg-brand-600 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-brand-700 transition-colors">
                      Começar Agora
                  </Link>
              </div>

          </div>
      </section>
    </div>
  );
}