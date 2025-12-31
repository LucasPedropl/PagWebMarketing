import React, { useState } from 'react';
import { Check, Users, ChevronLeft, ChevronRight, BarChart3, ShieldCheck, Lock } from 'lucide-react';

// --- Mockup Components ---

const PlansMockup = () => (
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
);

const PortalMockup = () => (
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
);

const ReportsMockup = () => (
    <div className="bg-white rounded-lg p-6 min-h-[300px] flex flex-col gap-6">
        <div className="flex justify-between items-end border-b border-gray-100 pb-4">
             <div className="space-y-2">
                <div className="h-3 w-20 bg-gray-200 rounded"></div>
                <div className="h-8 w-32 bg-brand-900 rounded"></div>
             </div>
             <div className="h-6 w-20 bg-green-100 text-green-700 rounded text-xs flex items-center justify-center font-bold">+12.5%</div>
        </div>
        <div className="flex items-end gap-3 h-32 px-2">
            {[30, 45, 35, 60, 50, 75, 65, 90].map((h, i) => (
                <div key={i} className="flex-1 bg-brand-500 rounded-t-sm opacity-90" style={{height: `${h}%`}}></div>
            ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
             <div className="p-3 bg-gray-50 rounded">
                 <div className="h-2 w-12 bg-gray-300 rounded mb-2"></div>
                 <div className="h-4 w-16 bg-gray-800 rounded"></div>
             </div>
             <div className="p-3 bg-gray-50 rounded">
                 <div className="h-2 w-12 bg-gray-300 rounded mb-2"></div>
                 <div className="h-4 w-16 bg-gray-800 rounded"></div>
             </div>
        </div>
    </div>
);

const SecurityMockup = () => (
    <div className="bg-slate-900 rounded-lg p-6 min-h-[300px] flex flex-col gap-4 border border-slate-700">
        <div className="flex items-center gap-3 border-b border-slate-700 pb-4">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <div className="ml-auto text-xs text-slate-400 font-mono">audit_log.txt</div>
        </div>
        <div className="space-y-3 font-mono text-xs">
            <div className="flex gap-2 text-slate-300">
                <span className="text-blue-400">[10:42:15]</span>
                <span>User: admin_01 accessed billing_settings</span>
            </div>
             <div className="flex gap-2 text-slate-300">
                <span className="text-blue-400">[10:45:22]</span>
                <span>System: Automatic backup completed (2.4GB)</span>
            </div>
             <div className="flex gap-2 text-green-400">
                <span className="text-blue-400">[11:01:00]</span>
                <span>Payment: Transaction #9923 verified</span>
            </div>
            <div className="mt-4 p-3 bg-slate-800 rounded border border-slate-700 flex items-center gap-3">
                <div className="bg-green-500/20 p-2 rounded text-green-400">
                    <ShieldCheck size={16} />
                </div>
                <div>
                    <div className="text-white font-bold">Criptografia AES-256</div>
                    <div className="text-slate-400 text-[10px]">Dados sensíveis protegidos</div>
                </div>
            </div>
        </div>
    </div>
);

// --- Data ---

const features = [
  // Slide 1
  {
    title: "Crie Planos e Vincule Assinaturas em Segundos",
    description: "Defina a validade, preço, descontos e benefícios de cada plano. Cadastrar uma assinatura é tão simples quanto conectar um cliente a um plano existente.",
    features: [
      "Catálogo de planos personalizado",
      "Controle de vencimentos e renovações",
      "Histórico completo de alterações"
    ],
    mockup: <PlansMockup />,
    color: "from-brand-100",
    reverse: false
  },
  {
    title: "Autonomia para seus Clientes",
    description: "Ofereça uma experiência profissional. Seus clientes acessam um portal exclusivo para gerenciar assinaturas, atualizar cartões e visualizar o histórico de pagamentos sem acionar seu suporte.",
    extraBox: {
      icon: Users,
      title: "Redução de Suporte",
      text: "Clientes resolvem questões financeiras sozinhos, liberando sua equipe para vender mais."
    },
    mockup: <PortalMockup />,
    color: "from-purple-100",
    reverse: true
  },
  // Slide 2
  {
    title: "Relatórios Financeiros em Tempo Real",
    description: "Acompanhe a saúde do seu negócio com métricas precisas. Visualize MRR, Churn Rate e LTV em dashboards intuitivos que ajudam na tomada de decisão.",
    extraBox: {
        icon: BarChart3,
        title: "Dados Acionáveis",
        text: "Identifique tendências de cancelamento e oportunidades de upsell instantaneamente."
    },
    mockup: <ReportsMockup />,
    color: "from-green-100",
    reverse: false
  },
  {
    title: "Segurança e Auditoria Completa",
    description: "Durma tranquilo sabendo que seus dados estão seguros. Logs de auditoria detalhados e criptografia de ponta a ponta garantem a conformidade e proteção do seu negócio.",
    features: [
      "Logs de acesso detalhados",
      "Backups automáticos diários",
      "Conformidade com LGPD"
    ],
    mockup: <SecurityMockup />,
    color: "from-gray-700",
    reverse: true
  }
];

export const Showcase: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(features.length / itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const currentFeatures = features.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Carousel Content */}
        <div className="relative">
            <div className="transition-all duration-500 ease-in-out">
                {/* Render the pair of features for the current page */}
                <div className="space-y-24 animate-in fade-in slide-in-from-right-8 duration-500" key={currentPage}>
                    {currentFeatures.map((feature, idx) => (
                        <div 
                            key={idx} 
                            className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
                        >
                            <div className="flex-1 space-y-6">
                                <h3 className="text-3xl font-bold text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                                
                                {feature.features && (
                                    <ul className="space-y-4 pt-4">
                                    {feature.features.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                    </ul>
                                )}

                                {feature.extraBox && (
                                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                                                {React.createElement(feature.extraBox.icon, { size: 24 })}
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-gray-900">{feature.extraBox.title}</h5>
                                                <p className="text-sm text-gray-500 mt-1">{feature.extraBox.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 relative w-full">
                                <div className={`absolute -inset-4 bg-gradient-to-tr ${feature.color} to-transparent rounded-full opacity-50 blur-2xl`}></div>
                                <div className={`relative bg-white rounded-xl shadow-2xl border border-gray-100 p-2 overflow-hidden transform transition-all duration-500 ${feature.reverse ? '-rotate-1 hover:rotate-0' : 'rotate-1 hover:rotate-0'}`}>
                                    {feature.mockup}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-8 mt-24 pt-8 border-t border-gray-200">
                     <button 
                        onClick={prevPage}
                        className="p-4 rounded-full border border-gray-200 hover:bg-white hover:shadow-lg transition-all text-gray-600 hover:text-brand-900 group"
                        aria-label="Anterior"
                     >
                         <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                     </button>
                     
                     <div className="flex gap-3">
                         {Array.from({ length: totalPages }).map((_, idx) => (
                             <button 
                                key={idx}
                                onClick={() => setCurrentPage(idx)}
                                className={`h-2.5 rounded-full transition-all duration-500 ${currentPage === idx ? 'w-10 bg-brand-900' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
                                aria-label={`Ir para slide ${idx + 1}`}
                             />
                         ))}
                     </div>

                     <button 
                        onClick={nextPage}
                        className="p-4 rounded-full bg-brand-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all group"
                        aria-label="Próximo"
                     >
                         <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                     </button>
                </div>
            )}

        </div>
      </div>
    </section>
  );
};