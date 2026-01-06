import React from 'react';
import { Search, Filter, Plus, MoreVertical, Calendar, CreditCard, Barcode } from 'lucide-react';

interface SubscriptionsPageProps {
  variant?: 'desktop' | 'mobile';
}

export const SubscriptionsPage: React.FC<SubscriptionsPageProps> = ({ variant = 'desktop' }) => {
  const isMobile = variant === 'mobile';

  const subscriptions = [
    {
      client: "João da Silva",
      method: "Cartão",
      plan: "Plano Premium",
      planPrice: "R$ 99.00",
      period: "12 meses",
      dateRange: "14/08/2023 → 14/08/2024",
      value: "R$ 89.10",
      discount: "10% OFF",
      status: "Ativa",
      statusType: "success",
      recurrence: "Recorrente"
    },
    {
      client: "Carlos Ferreira",
      method: "Boleto",
      plan: "Plano Premium",
      planPrice: "R$ 99.00",
      period: "12 meses",
      dateRange: "09/09/2023 → 09/09/2024",
      value: "R$ 99.00",
      discount: null,
      status: "Pendente",
      statusType: "warning",
      recurrence: null
    },
    {
      client: "Ana Souza",
      method: "Pix",
      plan: "Plano Básico",
      planPrice: "R$ 49.00",
      period: "Mensal",
      dateRange: "05/10/2023 → 05/11/2023",
      value: "R$ 49.00",
      discount: null,
      status: "Ativa",
      statusType: "success",
      recurrence: "Recorrente"
    },
    {
      client: "Maria Oliveira",
      method: "Cartão",
      plan: "Plano Básico",
      planPrice: "R$ 49.00",
      period: "Mensal",
      dateRange: "01/10/2023 → 01/11/2023",
      value: "R$ 49.00",
      discount: null,
      status: "Cancelada",
      statusType: "error",
      recurrence: null
    }
  ];

  return (
    <div className={`flex flex-col h-full bg-white ${isMobile ? 'p-4 pb-24' : 'p-8'}`}>
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 shrink-0">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Assinaturas</h1>
                <p className="text-slate-500 mt-1 text-sm">Gerencie os planos ativos dos seus clientes.</p>
            </div>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-sm w-full md:w-auto justify-center">
                <Plus size={16} />
                Nova Assinatura
            </button>
        </div>

        {/* Search & Filter Section */}
        <div className="flex gap-4 mb-6 shrink-0">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Buscar por cliente..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400"
                    readOnly
                />
            </div>
            <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-slate-600 text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors">
                <Filter size={18} />
                <span className="hidden sm:inline">Filtros</span>
            </button>
        </div>

        {/* Table Section */}
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm flex-1 flex flex-col min-h-0">
             <div className="overflow-auto scrollbar-thin scrollbar-thumb-gray-200">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-white border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Cliente</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider hidden sm:table-cell">Plano</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider hidden md:table-cell">Período</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider hidden lg:table-cell">Valor Mensal</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {subscriptions.map((sub, idx) => (
                            <tr key={idx} className="hover:bg-gray-50/80 transition-colors group">
                                {/* Cliente */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm font-semibold text-slate-900 block">{sub.client}</span>
                                    <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-500">
                                        {sub.method === 'Cartão' ? <CreditCard size={12} /> : sub.method === 'Boleto' ? <Barcode size={12} /> : <div className="w-3 h-3 bg-gray-300 rounded-full" />}
                                        {sub.method}
                                    </div>
                                </td>
                                
                                {/* Plano */}
                                <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                                    <span className="text-sm text-slate-900 block">{sub.plan}</span>
                                    <span className="text-xs text-gray-400">{sub.planPrice}</span>
                                </td>

                                {/* Período */}
                                <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                    <div className="flex items-center gap-1.5 text-slate-500 mb-0.5">
                                        <Calendar size={12} />
                                        <span className="text-sm">{sub.period}</span>
                                    </div>
                                    <span className="text-[10px] text-gray-400 block">{sub.dateRange}</span>
                                </td>

                                {/* Valor */}
                                <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                                    <span className="text-sm font-bold text-slate-900 block">{sub.value}</span>
                                    {sub.discount && (
                                        <span className="inline-block bg-emerald-50 text-emerald-600 text-[10px] px-1.5 py-0.5 rounded font-medium mt-0.5">
                                            {sub.discount}
                                        </span>
                                    )}
                                </td>

                                {/* Status */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex flex-col items-start gap-1">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                                            sub.statusType === 'success' 
                                            ? 'bg-emerald-100 text-emerald-700' 
                                            : sub.statusType === 'warning'
                                            ? 'bg-amber-100 text-amber-700'
                                            : 'bg-rose-100 text-rose-700'
                                        }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${
                                                sub.statusType === 'success' ? 'bg-emerald-500' : sub.statusType === 'warning' ? 'bg-amber-500' : 'bg-rose-500'
                                            }`}></span>
                                            {sub.status}
                                        </span>
                                        {sub.recurrence && (
                                            <span className="text-[10px] text-gray-400 flex items-center gap-1 ml-1">
                                                <div className="w-2 h-2 border border-gray-300 rounded-sm"></div>
                                                {sub.recurrence}
                                            </span>
                                        )}
                                    </div>
                                </td>

                                {/* Ações */}
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <button className="p-1.5 hover:bg-slate-100 rounded-full transition-colors text-gray-400 hover:text-gray-600">
                                        <MoreVertical size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};