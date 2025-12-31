import React from 'react';
import { Check, Users } from 'lucide-react';

export const Showcase: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Showcase 1: Plan Management */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Crie Planos e Vincule Assinaturas em Segundos
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Defina a validade, preço, descontos e benefícios de cada plano. Cadastrar uma assinatura é tão simples quanto conectar um cliente a um plano existente.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-gray-700">Catálogo de planos personalizado</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-gray-700">Controle de vencimentos e renovações</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-gray-700">Histórico completo de alterações</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-100 to-transparent rounded-full opacity-50 blur-2xl"></div>
            <div className="relative bg-white rounded-xl shadow-2xl border border-gray-100 p-2 overflow-hidden transform rotate-1 hover:rotate-0 transition-all duration-500">
                {/* Simulated Plans Screenshot */}
                 <div className="bg-gray-50 rounded-lg p-6 min-h-[300px] flex flex-col gap-4">
                     <div className="flex justify-between items-center mb-4">
                         <div className="h-6 w-32 bg-gray-200 rounded"></div>
                         <div className="h-8 w-24 bg-brand-900 rounded"></div>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                         <div className="bg-white p-4 rounded border border-gray-200 shadow-sm">
                             <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                             <div className="h-8 w-16 bg-gray-800 rounded mb-4"></div>
                             <div className="space-y-2">
                                 <div className="h-2 w-full bg-gray-100 rounded"></div>
                                 <div className="h-2 w-full bg-gray-100 rounded"></div>
                             </div>
                         </div>
                         <div className="bg-white p-4 rounded border border-blue-200 shadow-sm ring-2 ring-blue-500 ring-opacity-10 relative">
                             <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-bl">Popular</div>
                             <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                             <div className="h-8 w-16 bg-blue-600 rounded mb-4"></div>
                             <div className="space-y-2">
                                 <div className="h-2 w-full bg-gray-100 rounded"></div>
                                 <div className="h-2 w-full bg-gray-100 rounded"></div>
                                 <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
          </div>
        </div>

        {/* Showcase 2: Client Portal (Reversed) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Autonomia para seus Clientes
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ofereça uma experiência profissional. Seus clientes acessam um portal exclusivo para gerenciar assinaturas, atualizar cartões e visualizar o histórico de pagamentos sem acionar seu suporte.
            </p>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-6">
                <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                        <Users size={24} />
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-900">Redução de Suporte</h5>
                        <p className="text-sm text-gray-500 mt-1">Clientes resolvem questões financeiras sozinhos, liberando sua equipe para vender mais.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="flex-1 relative">
             <div className="absolute -inset-4 bg-gradient-to-bl from-purple-100 to-transparent rounded-full opacity-50 blur-2xl"></div>
            <div className="relative bg-white rounded-xl shadow-2xl border border-gray-100 p-2 overflow-hidden transform -rotate-1 hover:rotate-0 transition-all duration-500">
                {/* Simulated Client Portal Screenshot */}
                 <div className="bg-white rounded-lg min-h-[300px] flex flex-col border border-gray-100">
                     <div className="bg-slate-900 text-white p-4 flex justify-between items-center rounded-t-lg">
                         <div className="h-4 w-24 bg-slate-700 rounded"></div>
                         <div className="h-8 w-8 bg-slate-700 rounded-full"></div>
                     </div>
                     <div className="p-6">
                         <div className="h-6 w-48 bg-gray-200 rounded mb-6"></div>
                         <div className="border rounded-lg p-4 mb-4">
                             <div className="flex justify-between mb-2">
                                 <div className="h-4 w-32 bg-gray-100 rounded"></div>
                                 <div className="h-4 w-16 bg-green-100 rounded"></div>
                             </div>
                             <div className="h-8 w-full bg-gray-50 rounded mt-4"></div>
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                              <div className="h-24 bg-gray-50 rounded border border-dashed border-gray-200"></div>
                              <div className="h-24 bg-gray-50 rounded border border-dashed border-gray-200"></div>
                         </div>
                     </div>
                 </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};