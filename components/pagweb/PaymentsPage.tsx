import React from 'react';
import { Search, Filter, Download, ArrowUpRight, ArrowDownRight, MoreHorizontal, Calendar } from 'lucide-react';

interface PaymentsPageProps {
  variant?: 'desktop' | 'mobile';
}

export const PaymentsPage: React.FC<PaymentsPageProps> = ({ variant = 'desktop' }) => {
  const isMobile = variant === 'mobile';

  const transactions = [
    { ref: "#TRX-9821", client: "João da Silva", date: "24/10/2023", method: "Cartão", value: "R$ 99,00", status: "Pago", statusType: "success" },
    { ref: "#TRX-9822", client: "Maria Oliveira", date: "23/10/2023", method: "Boleto", value: "R$ 49,00", status: "Pendente", statusType: "warning" },
    { ref: "#TRX-9823", client: "Carlos Ferreira", date: "22/10/2023", method: "Cartão", value: "R$ 149,00", status: "Falha", statusType: "error" },
    { ref: "#TRX-8100", client: "João da Silva", date: "24/09/2023", method: "Cartão", value: "R$ 99,00", status: "Pago", statusType: "success" },
    { ref: "#TRX-9824", client: "Ana Souza", date: "19/10/2023", method: "Pix", value: "R$ 1.200,00", status: "Pago", statusType: "success" },
  ];

  return (
    <div className={`flex flex-col h-full bg-white ${isMobile ? 'p-4 pb-24' : 'p-8'}`}>
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 shrink-0">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Pagamentos</h1>
                <p className="text-slate-500 mt-1 text-sm">Histórico financeiro e transações.</p>
            </div>
            <button className="bg-white border border-gray-200 text-slate-600 px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm w-full md:w-auto justify-center">
                <Download size={16} />
                Exportar Relatório
            </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 shrink-0">
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <p className="text-xs font-medium text-gray-500 mb-2">Receita Aprovada (Mês)</p>
                <div className="flex items-end justify-between">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">R$ 12.450,00</h3>
                    <div className="flex items-center gap-1 text-[10px] font-bold bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded">
                        <ArrowUpRight size={10} />
                        +12%
                    </div>
                </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <p className="text-xs font-medium text-gray-500 mb-2">Pendente</p>
                <div className="flex items-end justify-between">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">R$ 1.280,00</h3>
                    <span className="text-xs text-gray-400">12 transações</span>
                </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <p className="text-xs font-medium text-gray-500 mb-2">Falhas / Estornos</p>
                <div className="flex items-end justify-between">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">R$ 340,00</h3>
                    <div className="flex items-center gap-1 text-[10px] font-bold bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded">
                        <ArrowDownRight size={10} />
                        -2%
                    </div>
                </div>
            </div>
        </div>

        {/* Search & Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 shrink-0">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Buscar por cliente ou ID..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400"
                    readOnly
                />
            </div>
            <div className="flex gap-2">
                 <button className="flex-1 sm:flex-none px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-slate-600 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                    <Filter size={16} />
                    <span>Status</span>
                </button>
                <button className="flex-1 sm:flex-none px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-slate-600 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                    <Calendar size={16} />
                    <span>Data</span>
                </button>
            </div>
        </div>

        {/* Table Section */}
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm flex-1 flex flex-col min-h-0">
             <div className="overflow-auto scrollbar-thin scrollbar-thumb-gray-200">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50/50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider hidden sm:table-cell">Referência</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Cliente</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider hidden md:table-cell">Data</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider hidden lg:table-cell">Método</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right sm:text-left">Valor</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center sm:text-left">Status</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {transactions.map((trx, idx) => (
                            <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 font-mono hidden sm:table-cell">
                                    {trx.ref}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm font-semibold text-slate-900">{trx.client}</span>
                                    <div className="sm:hidden text-[10px] text-gray-400 mt-0.5">{trx.ref}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                                    {trx.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden lg:table-cell">
                                    {trx.method}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right sm:text-left">
                                    <span className="text-sm font-bold text-slate-900">{trx.value}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center sm:text-left">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                        trx.statusType === 'success' 
                                        ? 'bg-emerald-100 text-emerald-700' 
                                        : trx.statusType === 'warning'
                                        ? 'bg-amber-100 text-amber-700'
                                        : 'bg-rose-100 text-rose-700'
                                    }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${
                                            trx.statusType === 'success' ? 'bg-emerald-500' : trx.statusType === 'warning' ? 'bg-amber-500' : 'bg-rose-500'
                                        }`}></span>
                                        {trx.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                        <MoreHorizontal size={16} />
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