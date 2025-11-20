import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'abertura',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert(`Obrigado, ${formData.name}! Recebemos sua mensagem e entraremos em contato em breve.`);
    setFormData({ name: '', email: '', phone: '', subject: 'abertura', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <div className="bg-gray-50 min-h-screen">
       <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Fale Conosco</h1>
          <p className="text-slate-300 text-lg">Estamos prontos para atender sua empresa.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
         <div className="grid lg:grid-cols-3 gap-8">
             
             {/* Contact Info Cards */}
             <div className="lg:col-span-1 space-y-6">
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-brand-100 p-3 rounded-lg text-brand-600">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Telefone</h3>
                            <p className="text-slate-600 mt-1">{COMPANY_INFO.phone}</p>
                            <a href={COMPANY_INFO.whatsappLink} target="_blank" rel="noreferrer" className="text-sm text-brand-600 font-medium mt-2 block hover:underline">Chamar no WhatsApp</a>
                        </div>
                    </div>
                 </div>

                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-brand-100 p-3 rounded-lg text-brand-600">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">E-mail</h3>
                            <p className="text-slate-600 mt-1">{COMPANY_INFO.email}</p>
                        </div>
                    </div>
                 </div>

                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-brand-100 p-3 rounded-lg text-brand-600">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Endereço</h3>
                            <p className="text-slate-600 mt-1">{COMPANY_INFO.address}</p>
                        </div>
                    </div>
                 </div>
             </div>

             {/* Form */}
             <div className="lg:col-span-2">
                 <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-slate-100">
                     <h2 className="text-2xl font-bold text-slate-900 mb-6">Envie uma mensagem</h2>
                     <form onSubmit={handleSubmit} className="space-y-6">
                         <div className="grid md:grid-cols-2 gap-6">
                             <div>
                                 <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                                 <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                    placeholder="Seu nome"
                                 />
                             </div>
                             <div>
                                 <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Telefone / WhatsApp</label>
                                 <input 
                                    type="tel" 
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                    placeholder="(00) 00000-0000"
                                 />
                             </div>
                         </div>

                         <div>
                             <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-mail Corporativo</label>
                             <input 
                                type="email" 
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                placeholder="seu@email.com"
                             />
                         </div>

                         <div>
                             <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Assunto</label>
                             <select 
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white"
                             >
                                 <option value="abertura">Quero Abrir uma Empresa</option>
                                 <option value="migracao">Quero Trocar de Contador</option>
                                 <option value="duvidas">Dúvidas Gerais</option>
                                 <option value="parceria">Parcerias</option>
                             </select>
                         </div>

                         <div>
                             <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mensagem</label>
                             <textarea 
                                id="message"
                                name="message"
                                rows={4}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                placeholder="Conte um pouco mais sobre sua necessidade..."
                             ></textarea>
                         </div>

                         <button 
                            type="submit" 
                            className="w-full bg-brand-600 text-white font-bold py-4 rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center gap-2"
                         >
                             <MessageSquare size={20} /> Enviar Mensagem
                         </button>
                     </form>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
}