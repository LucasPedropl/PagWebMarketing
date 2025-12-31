import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-30"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pronto para transformar sua gestão?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Junte-se a centenas de empresas que automatizaram suas assinaturas com o PagWeb. Teste grátis por 14 dias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 w-full sm:w-72">
                Começar Teste Grátis
                <ArrowRight size={20} />
              </button>
              <button className="bg-transparent border border-gray-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all w-full sm:w-72">
                Falar com Consultor
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Nenhum cartão de crédito necessário para começar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};