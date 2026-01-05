import React from 'react';
import { Plus, Edit2, Trash2, Check } from 'lucide-react';

interface PlansPageProps {
  variant?: 'desktop' | 'mobile';
}

export const PlansPage: React.FC<PlansPageProps> = ({ variant = 'desktop' }) => {
  const isMobile = variant === 'mobile';

  return (
    <div className={`flex flex-col h-full bg-white ${isMobile ? 'p-4' : 'p-8'}`}>
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 shrink-0">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Catálogo de Planos</h1>
                <p className="text-slate-500 mt-1 text-sm">Defina os produtos e serviços que sua empresa oferece.</p>
            </div>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-sm w-full md:w-auto justify-center">
                <Plus size={16} />
                Novo Plano
            </button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Card 1: Basic */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-200 flex flex-col h-full group relative">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-slate-900 text-lg">Plano Básico</h3>
                    <div className="flex gap-2 text-gray-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                         <button className="hover:text-gray-500 p-1 rounded"><Edit2 size={16} /></button>
                         <button className="hover:text-red-500 p-1 rounded"><Trash2 size={16} /></button>
                    </div>
                </div>
                
                <div className="mb-6">
                    <span className="text-3xl font-bold text-slate-900 tracking-tight">R$ 49,00</span>
                    <span className="text-gray-500 font-medium text-sm ml-1">/mês</span>
                </div>

                <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Check size={16} className="text-emerald-500 shrink-0" strokeWidth={3} />
                        <span>Gestão de até 50 clientes</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Check size={16} className="text-emerald-500 shrink-0" strokeWidth={3} />
                        <span>Relatórios básicos</span>
                    </div>
                </div>
            </div>

            {/* Card 2: Premium (Popular) */}
            <div className="bg-white border-2 border-slate-900 rounded-xl p-6 shadow-xl flex flex-col h-full relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Popular
                </div>
                <div className="flex justify-between items-start mb-4 mt-2">
                    <h3 className="font-bold text-slate-900 text-lg">Plano Premium</h3>
                    <div className="flex gap-2 text-gray-300 opacity-100 transition-opacity">
                         <button className="hover:text-gray-500 p-1 rounded"><Edit2 size={16} /></button>
                         <button className="hover:text-red-500 p-1 rounded"><Trash2 size={16} /></button>
                    </div>
                </div>
                
                <div className="mb-6">
                    <span className="text-3xl font-bold text-slate-900 tracking-tight">R$ 99,00</span>
                    <span className="text-gray-500 font-medium text-sm ml-1">/mês</span>
                </div>

                <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Check size={16} className="text-emerald-500 shrink-0" strokeWidth={3} />
                        <span>Todas as do Básico</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Check size={16} className="text-emerald-500 shrink-0" strokeWidth={3} />
                        <span>Gestão ilimitada</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Check size={16} className="text-emerald-500 shrink-0" strokeWidth={3} />
                        <span>Relatórios IA Avançados</span>
                    </div>
                </div>
            </div>

            {/* Card 3: Add New */}
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-gray-400 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50 transition-all cursor-pointer h-full min-h-[200px]">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Plus size={24} />
                </div>
                <span className="font-medium">Adicionar Novo Plano</span>
            </div>

        </div>
    </div>
  );
};