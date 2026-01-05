import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PagWeb } from './pagweb/PagWeb';
import { DashboardPage } from './pagweb/DashboardPage';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Novo: Relatórios com Inteligência Artificial
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Gerencie Assinaturas com <span className="text-brand-600">Inteligência</span> e Facilidade
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            O ERP completo para conectar empresas e clientes. Automatize planos, gerencie recorrência e reduza a inadimplência com o PagWeb.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 bg-brand-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-brand-900/20 hover:scale-105 transform w-full sm:w-72">
              Começar Agora Grátis
              <ArrowRight size={20} />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all hover:border-gray-300 w-full sm:w-72">
              Ver Demonstração
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>Setup instantâneo</span>
            </div>
          </div>
        </div>

        {/* Live Code Dashboard Simulator */}
        <div className="relative mt-12 mx-auto max-w-6xl px-2 sm:px-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
          <div className="relative transform hover:scale-[1.01] transition-transform duration-500">
            <PagWeb>
               <DashboardPage />
            </PagWeb>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -right-12 top-1/2 w-24 h-24 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -left-12 bottom-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
};