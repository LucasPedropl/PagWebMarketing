import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight, FileText, User, Plus, Search, Filter, Edit2, Trash2, Crown, Zap, Calendar, CreditCard, Barcode, ArrowUpRight, ArrowDownRight, MoreHorizontal, Download } from 'lucide-react';

// --- Mockup Components ---

const ClientsMockup = () => (
  <div className="bg-white rounded-lg p-6 min-h-[400px] flex flex-col gap-5 border border-gray-200 font-sans shadow-sm">
    {/* Header Section */}
    <div className="flex justify-between items-start">
       <div>
          <h3 className="font-bold text-gray-900 text-lg tracking-tight">Gestão de Clientes</h3>
          <p className="text-gray-500 text-xs mt-0.5">Cadastro de pessoas físicas.</p>
       </div>
       <div className="bg-slate-900 text-white px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 shadow-sm">
          <Plus size={12} strokeWidth={3} />
          Novo Cliente
       </div>
    </div>

    {/* Search Bar Simulation */}
    <div className="flex gap-2">
        <div className="relative flex-1">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <div className="w-full pl-8 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-xs text-gray-400">
                Buscar por nome ou CPF...
            </div>
        </div>
        <div className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 flex items-center gap-1.5 text-xs font-medium">
            <Filter size={12} />
            Filtros
        </div>
    </div>

    {/* Table */}
    <div className="flex-1 border border-gray-200 rounded-lg overflow-hidden flex flex-col">
        {/* Table Header */}
        <div className="bg-gray-50 border-b border-gray-100 flex items-center px-4 py-2.5">
            <div className="flex-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Nome Completo</div>
            <div className="w-24 hidden sm:block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Contato</div>
            <div className="w-20 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Status</div>
            <div className="w-12 text-right text-[10px] font-bold text-gray-400 uppercase tracking-wider">Ações</div>
        </div>

        {/* Client Rows */}
        <div className="divide-y divide-gray-100 bg-white">
            {[
                { name: "João da Silva", cpf: "123.456.789-00", email: "joao@empresa.com", status: "Ativo", color: "emerald" },
                { name: "Maria Oliveira", cpf: "987.654.321-11", email: "maria@loja.com", status: "Inativo", color: "rose" },
                { name: "Carlos Ferreira", cpf: "456.789.123-22", email: "carlos@tech.com", status: "Ativo", color: "emerald" },
                { name: "Ana Souza", cpf: "789.123.456-33", email: "ana@design.com", status: "Ativo", color: "emerald" }
            ].map((client, i) => (
                <div key={i} className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors group">
                    {/* Name Column */}
                    <div className="flex-1 min-w-0 pr-2">
                        <div className="text-sm font-semibold text-gray-900 truncate">{client.name}</div>
                        <div className="text-[10px] text-gray-400 truncate">{client.cpf}</div>
                    </div>
                    
                    {/* Contact Column */}
                    <div className="w-24 hidden sm:block">
                        <div className="text-[11px] text-gray-600 truncate">{client.email}</div>
                    </div>

                    {/* Status Column */}
                    <div className="w-20 flex justify-center">
                         <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${
                             client.color === 'emerald' 
                             ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                             : 'bg-rose-50 text-rose-700 border-rose-100'
                         }`}>
                             <span className={`w-1 h-1 rounded-full ${client.color === 'emerald' ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                             {client.status}
                         </span>
                    </div>

                    {/* Actions Column - Fixed Visibility */}
                    <div className="w-12 flex justify-end gap-1">
                         <div className="p-1 text-gray-400 hover:text-gray-600 cursor-pointer"><Edit2 size={12} /></div>
                         <div className="p-1 text-gray-400 hover:text-red-500 cursor-pointer"><Trash2 size={12} /></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  </div>
);

const PlansMockup = () => (
  <div className="bg-white rounded-lg p-6 min-h-[400px] flex flex-col gap-6 border border-gray-200 font-sans">
    {/* Header */}
    <div className="flex justify-between items-start">
        <div>
            <h3 className="font-bold text-gray-900 text-lg tracking-tight">Catálogo de Planos</h3>
            <p className="text-gray-500 text-xs mt-1">Defina os produtos e serviços que sua empresa oferece.</p>
        </div>
        <div className="bg-slate-900 text-white px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 shadow-sm">
            <Plus size={12} strokeWidth={3} />
            Novo Plano
        </div>
    </div>

    {/* Grid of Plans */}
    <div className="grid grid-cols-2 gap-4 flex-1">
        
        {/* Basic Plan */}
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col relative bg-white hover:border-gray-300 transition-colors">
            <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-gray-900 text-sm">Plano Básico</h4>
                <div className="flex gap-1 text-gray-300">
                    <Edit2 size={12} className="hover:text-gray-500 cursor-pointer" />
                    <Trash2 size={12} className="hover:text-red-500 cursor-pointer" />
                </div>
            </div>
            <div className="mb-4">
                <span className="text-xl font-bold text-slate-900">R$ 49,00</span>
                <span className="text-xs text-gray-500 font-medium">/mês</span>
            </div>
            <div className="space-y-2 mb-4 flex-1">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Check size={12} className="text-green-500 shrink-0" />
                    <span>Gestão de até 50 clientes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Check size={12} className="text-green-500 shrink-0" />
                    <span>Relatórios básicos</span>
                </div>
            </div>
        </div>

        {/* Premium Plan */}
        <div className="border border-slate-800 rounded-lg p-4 flex flex-col relative bg-white shadow-lg ring-1 ring-slate-900/10">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Popular
            </div>
            <div className="flex justify-between items-start mb-3 mt-1">
                <h4 className="font-bold text-gray-900 text-sm">Plano Premium</h4>
                <div className="flex gap-1 text-gray-300">
                    <Edit2 size={12} className="hover:text-gray-500 cursor-pointer" />
                    <Trash2 size={12} className="hover:text-red-500 cursor-pointer" />
                </div>
            </div>
            <div className="mb-4">
                <span className="text-xl font-bold text-slate-900">R$ 99,00</span>
                <span className="text-xs text-gray-500 font-medium">/mês</span>
            </div>
            <div className="space-y-2 mb-4 flex-1">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Check size={12} className="text-green-500 shrink-0" />
                    <span>Todas as do Básico</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Check size={12} className="text-green-500 shrink-0" />
                    <span>Gestão ilimitada</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Check size={12} className="text-green-500 shrink-0" />
                    <span>Relatórios IA Avançados</span>
                </div>
            </div>
        </div>

        {/* Add New Placeholder - Full Width in Grid */}
        <div className="col-span-2 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center p-6 text-gray-400 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50 transition-all cursor-pointer h-24">
             <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mb-2">
                <Plus size={16} />
             </div>
             <span className="text-xs font-medium">Adicionar Novo Plano</span>
        </div>
    </div>
  </div>
);

const SubscriptionsMockup = () => (
    <div className="bg-white rounded-lg p-6 min-h-[400px] flex flex-col gap-6 border border-gray-200 font-sans">
        {/* Header */}
        <div className="flex justify-between items-start">
            <div>
                <h3 className="font-bold text-gray-900 text-lg tracking-tight">Assinaturas</h3>
                <p className="text-gray-500 text-xs mt-0.5">Gerencie os planos ativos.</p>
            </div>
            <div className="bg-slate-900 text-white px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 shadow-sm">
                <Plus size={12} strokeWidth={3} />
                Nova
            </div>
        </div>

        {/* Search */}
        <div className="flex gap-2">
             <div className="relative flex-1">
                 <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                 <div className="w-full pl-8 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-xs text-gray-400">
                     Buscar por cliente...
                 </div>
             </div>
             <div className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 flex items-center gap-1.5 text-xs font-medium">
                 <Filter size={12} />
                 Filtros
             </div>
        </div>

        {/* Table */}
        <div className="flex-1 border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white">
             {/* Header */}
             <div className="bg-gray-50 border-b border-gray-100 flex items-center px-4 py-2.5">
                 <div className="flex-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Cliente / Plano</div>
                 <div className="w-24 hidden sm:block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Valor</div>
                 <div className="w-20 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Status</div>
             </div>
             
             {/* Rows */}
             <div className="divide-y divide-gray-100">
                 {[
                    { client: "João da Silva", plan: "Premium", method: "Cartão", value: "R$ 89.10", discount: true, status: "Ativa", type: "success" },
                    { client: "Carlos Ferreira", plan: "Premium", method: "Boleto", value: "R$ 99.00", discount: false, status: "Pendente", type: "warning" },
                    { client: "Ana Souza", plan: "Básico", method: "Pix", value: "R$ 49.00", discount: false, status: "Ativa", type: "success" }
                 ].map((sub, i) => (
                    <div key={i} className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors">
                        <div className="flex-1 min-w-0 pr-2">
                             <div className="text-sm font-semibold text-gray-900">{sub.client}</div>
                             <div className="flex items-center gap-1 text-[10px] text-gray-400">
                                 <span>{sub.plan}</span>
                                 <span>•</span>
                                 <span>{sub.method}</span>
                             </div>
                        </div>
                        <div className="w-24 hidden sm:block">
                             <div className="text-sm font-bold text-slate-900">{sub.value}</div>
                             {sub.discount && <div className="text-[9px] text-emerald-600 bg-emerald-50 inline-block px-1 rounded">10% OFF</div>}
                        </div>
                        <div className="w-20 flex justify-center">
                             <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                 sub.type === 'success' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                             }`}>
                                 <span className={`w-1 h-1 rounded-full ${sub.type === 'success' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                                 {sub.status}
                             </span>
                        </div>
                    </div>
                 ))}
             </div>
        </div>
    </div>
);

const PaymentsMockup = () => (
    <div className="bg-white rounded-lg p-6 min-h-[400px] flex flex-col gap-6 border border-gray-200 font-sans">
        {/* Header */}
        <div className="flex justify-between items-start">
            <div>
                <h3 className="font-bold text-gray-900 text-lg tracking-tight">Pagamentos</h3>
                <p className="text-gray-500 text-xs mt-0.5">Histórico financeiro.</p>
            </div>
            <div className="bg-white border border-gray-200 text-gray-500 px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 shadow-sm">
                <Download size={12} />
                Exportar
            </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
             <div className="border border-gray-200 rounded p-3 bg-gray-50/50">
                 <div className="text-[10px] text-gray-500 mb-1">Receita (Mês)</div>
                 <div className="text-lg font-bold text-slate-900">R$ 12.4k</div>
                 <div className="text-[10px] text-emerald-600 flex items-center gap-0.5"><ArrowUpRight size={10} /> +12%</div>
             </div>
             <div className="border border-gray-200 rounded p-3 bg-gray-50/50">
                 <div className="text-[10px] text-gray-500 mb-1">Pendente</div>
                 <div className="text-lg font-bold text-slate-900">R$ 1.2k</div>
                 <div className="text-[10px] text-gray-400">12 transações</div>
             </div>
        </div>

        {/* Table List */}
        <div className="flex-1 border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white">
             {/* Header */}
             <div className="bg-gray-50 border-b border-gray-100 flex items-center px-4 py-2.5">
                 <div className="flex-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Transação</div>
                 <div className="w-20 text-right text-[10px] font-bold text-gray-400 uppercase tracking-wider">Valor</div>
                 <div className="w-20 text-center text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</div>
             </div>
             <div className="divide-y divide-gray-100">
                 {[
                     { ref: "#TRX-9821", client: "João da Silva", val: "R$ 99,00", status: "Pago", type: "success" },
                     { ref: "#TRX-9822", client: "Maria Oliveira", val: "R$ 49,00", status: "Pendente", type: "warning" },
                     { ref: "#TRX-9823", client: "Carlos Ferreira", val: "R$ 149,00", status: "Falha", type: "error" },
                     { ref: "#TRX-8100", client: "João da Silva", val: "R$ 99,00", status: "Pago", type: "success" }
                 ].map((trx, i) => (
                     <div key={i} className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors">
                         <div className="flex-1 min-w-0 pr-2">
                             <div className="text-[10px] text-gray-400 font-mono">{trx.ref}</div>
                             <div className="text-xs font-semibold text-gray-900">{trx.client}</div>
                         </div>
                         <div className="w-20 text-right text-xs font-bold text-slate-900">{trx.val}</div>
                         <div className="w-20 flex justify-center">
                             <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold ${
                                 trx.type === 'success' ? 'bg-emerald-50 text-emerald-600' :
                                 trx.type === 'warning' ? 'bg-amber-50 text-amber-600' :
                                 'bg-rose-50 text-rose-600'
                             }`}>
                                 {trx.status}
                             </span>
                         </div>
                     </div>
                 ))}
             </div>
        </div>
    </div>
);

// --- Data ---

const features = [
  // Slide 1 - Clientes
  {
    title: "Gestão Completa de Clientes",
    description: "Visualize sua base de contatos em uma única tela. Adicione novos cadastros, vincule planos, assinaturas e aplique descontos personalizados diretamente no perfil do cliente.",
    features: [
      "Cadastro rápido de clientes (Pessoa Física/Jurídica)",
      "Vínculo imediato de Planos e Assinaturas",
      "Histórico de status (Ativo/Inativo)"
    ],
    mockup: <ClientsMockup />,
    color: "from-brand-100",
    reverse: false
  },
  // Slide 2 - Planos
  {
    title: "Planos e Preços Flexíveis",
    description: "Crie e edite planos de assinatura que se adaptam ao seu modelo de negócio. Defina ciclos de cobrança (mensal, trimestral, anual) e valores promocionais.",
    features: [
      "Catálogo de planos ilimitado",
      "Configuração de ciclos de cobrança",
      "Destaque planos populares"
    ],
    mockup: <PlansMockup />,
    color: "from-purple-100",
    reverse: true
  },
  // Slide 3 - Assinaturas (NOVO MOCKUP)
  {
    title: "Gestão de Assinaturas e Recorrência",
    description: "Centralize o controle de assinaturas ativas. Visualize ciclos, aplique descontos e acompanhe o status de renovação em tempo real.",
    features: [
      "Vínculo de planos a clientes com 1 clique",
      "Controle de descontos e promoções",
      "Visualização clara de status e datas"
    ],
    mockup: <SubscriptionsMockup />,
    color: "from-orange-100",
    reverse: false
  },
  // Slide 4 - Pagamentos (NOVO MOCKUP)
  {
    title: "Controle Financeiro e Pagamentos",
    description: "Acompanhe o fluxo de caixa com precisão. Identifique pagamentos aprovados, pendentes e falhas instantaneamente para agir rápido.",
    features: [
      "Dashboard financeiro em tempo real",
      "Status detalhado de cada transação",
      "Exportação de relatórios gerenciais"
    ],
    mockup: <PaymentsMockup />,
    color: "from-green-100",
    reverse: true
  }
];

export const Showcase: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;
  const totalPages = features.length; 

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const currentFeature = features[currentPage];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Por dentro do sistema</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Telas intuitivas para gestão eficiente
          </h3>
        </div>

        {/* Carousel Content */}
        <div className="relative">
            <div className="transition-all duration-500 ease-in-out">
                {/* Render the current feature */}
                <div className="animate-in fade-in slide-in-from-right-8 duration-500" key={currentPage}>
                    <div 
                        className={`flex flex-col ${currentFeature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
                    >
                        <div className="flex-1 space-y-8">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                    {currentFeature.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {currentFeature.description}
                                </p>
                            </div>
                            
                            {currentFeature.features && (
                                <ul className="space-y-4">
                                {currentFeature.features.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 border border-brand-100">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                                </ul>
                            )}
                        </div>

                        <div className="flex-1 relative w-full">
                            <div className={`absolute -inset-4 bg-gradient-to-tr ${currentFeature.color} to-transparent rounded-full opacity-50 blur-2xl`}></div>
                            <div className={`relative bg-white rounded-xl shadow-2xl border border-gray-200 p-2 overflow-hidden transform transition-all duration-500 ${currentFeature.reverse ? '-rotate-1 hover:rotate-0' : 'rotate-1 hover:rotate-0'}`}>
                                {currentFeature.mockup}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-8 mt-24 pt-8 border-t border-gray-200">
                    <button 
                    onClick={prevPage}
                    className="p-4 rounded-full border border-gray-200 hover:bg-white hover:shadow-lg transition-all text-gray-600 hover:text-brand-900 group"
                    aria-label="Anterior"
                    >
                        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    
                    <div className="flex gap-3">
                        {features.map((_, idx) => (
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

        </div>
      </div>
    </section>
  );
};