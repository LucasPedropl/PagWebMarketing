import React from 'react';
import { Search, Filter, Plus, Edit2, Trash2 } from 'lucide-react';

interface ClientsPageProps {
  variant?: 'desktop' | 'mobile';
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ variant = 'desktop' }) => {
  const isMobile = variant === 'mobile';

  // Dados estáticos baseados na imagem de referência
  const clients = [
    { 
      name: 'João da Silva', 
      cpf: '123.456.789-00', 
      email: 'joao@empresa.com', 
      phone: '(11) 99999-9999', 
      status: 'Ativo', 
      date: '15/08/2023' 
    },
    { 
      name: 'Maria Oliveira', 
      cpf: '987.654.321-11', 
      email: 'maria@loja.com', 
      phone: '(21) 98888-8888', 
      status: 'Inativo', 
      date: '01/03/2023' 
    },
    { 
      name: 'Carlos Ferreira', 
      cpf: '456.789.123-22', 
      email: 'carlos@tech.com', 
      phone: '(31) 97777-7777', 
      status: 'Ativo', 
      date: '10/09/2023' 
    },
    { 
      name: 'Ana Souza', 
      cpf: '789.123.456-33', 
      email: 'ana@design.com', 
      phone: '(41) 96666-6666', 
      status: 'Ativo', 
      date: '22/09/2023' 
    },
    { 
      name: 'Roberto Mendes', 
      cpf: '321.654.987-00', 
      email: 'roberto@email.com', 
      phone: '(11) 95555-4444', 
      status: 'Inativo', 
      date: '05/10/2023' 
    },
  ];

  return (
    <div className={`flex flex-col h-full bg-white ${isMobile ? 'p-4 pb-24' : 'p-8'}`}>
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 shrink-0">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Gestão de Clientes</h1>
                <p className="text-slate-500 mt-1 text-sm">Cadastro de pessoas físicas.</p>
            </div>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-sm w-full md:w-auto justify-center">
                <Plus size={16} />
                Novo Cliente
            </button>
        </div>

        {/* Search & Filter Section */}
        <div className="flex gap-4 mb-6 shrink-0">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Buscar por nome ou CPF..." 
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
                            <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Nome Completo</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider hidden sm:table-cell">CPF</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider hidden md:table-cell">Contato</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider hidden lg:table-cell">Data Cadastro</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {clients.map((client, idx) => (
                            <tr key={idx} className="hover:bg-gray-50/80 transition-colors group">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm font-semibold text-slate-900 block">{client.name}</span>
                                    {/* Mobile fallback */}
                                    <div className="sm:hidden mt-1 text-xs text-gray-500">{client.email}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 hidden sm:table-cell">
                                    {client.cpf}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                    <div className="flex flex-col">
                                        <span className="text-sm text-slate-900">{client.email}</span>
                                        <span className="text-xs text-slate-500">{client.phone}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                                        client.status === 'Ativo' 
                                        ? 'bg-emerald-50 text-emerald-700' 
                                        : 'bg-rose-50 text-rose-700'
                                    }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${client.status === 'Ativo' ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                                        {client.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 hidden lg:table-cell">
                                    {client.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <div className="flex items-center justify-end gap-2 text-slate-400">
                                        <button className="p-1.5 hover:bg-slate-100 rounded transition-colors hover:text-slate-600"><Edit2 size={16} /></button>
                                        <button className="p-1.5 hover:bg-slate-100 rounded transition-colors hover:text-slate-600"><Trash2 size={16} /></button>
                                    </div>
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