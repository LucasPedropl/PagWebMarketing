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

        {/* --- DEVICE MOCKUPS --- */}
        {/* Interaction Logic: Only dim the OTHER device if ONE is hovered. If neither is hovered, both are 100%. */}
        <div className="relative mt-20 mx-auto max-w-[1200px] h-[400px] sm:h-[600px] md:h-[700px] [&:has(.laptop-mockup:hover)_.phone-mockup]:opacity-40 [&:has(.phone-mockup:hover)_.laptop-mockup]:opacity-40">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-blue-500/20 rounded-full blur-[100px] -z-10"></div>

          {/* LAPTOP (Desktop View) */}
          <div className="laptop-mockup absolute left-1/2 -translate-x-1/2 md:-translate-x-[60%] lg:-translate-x-[60%] w-[90%] md:w-[70%] max-w-[900px] z-10 transition-all duration-500 ease-in-out hover:z-30 hover:scale-[1.02] cursor-default">
            {/* Screen Bezel */}
            <div className="bg-[#1a1b1e] rounded-t-2xl p-2 md:p-3 shadow-2xl ring-1 ring-white/10 relative">
               {/* Camera Notch */}
               <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#1a1b1e] rounded-b-xl z-20 flex justify-center">
                   <div className="w-1.5 h-1.5 bg-[#0f1012] rounded-full mt-1.5 ring-1 ring-gray-700"></div>
               </div>
               
               {/* Screen Content */}
               <div className="bg-white rounded-lg overflow-hidden h-[250px] sm:h-[400px] md:h-[500px] w-full">
                  <PagWeb variant="desktop">
                     {/* Pass 'desktop' variant to enforce 4-col grid even in smaller mockup container */}
                     <DashboardPage variant="desktop" />
                  </PagWeb>
               </div>
            </div>
            {/* Keyboard Base */}
            <div className="relative bg-[#25262b] h-3 md:h-5 w-[104%] -left-[2%] rounded-b-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] flex justify-center items-start">
                <div className="w-32 h-1 bg-[#36373d] rounded-b-lg mt-0"></div>
            </div>
          </div>

          {/* PHONE (Mobile View) */}
          <div className="phone-mockup absolute bottom-[-20px] md:bottom-[50px] right-4 md:right-[5%] lg:right-[12%] w-[140px] sm:w-[200px] md:w-[260px] z-20 transition-all duration-500 ease-in-out hover:z-30 hover:scale-105 hover:-translate-y-4 cursor-grab active:cursor-grabbing">
            {/* Phone Bezel */}
            <div className="bg-[#1a1b1e] rounded-[2rem] md:rounded-[3rem] p-1.5 md:p-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10 relative">
               {/* Side Buttons */}
               <div className="absolute -left-[2px] top-20 w-[3px] h-8 bg-[#2d2e33] rounded-l-md"></div>
               <div className="absolute -left-[2px] top-32 w-[3px] h-12 bg-[#2d2e33] rounded-l-md"></div>
               <div className="absolute -right-[2px] top-24 w-[3px] h-16 bg-[#2d2e33] rounded-r-md"></div>

               {/* Screen Content */}
               <div className="bg-white rounded-[1.5rem] md:rounded-[2.2rem] overflow-hidden h-[280px] sm:h-[400px] md:h-[520px] w-full relative border-[3px] border-[#000]">
                  
                  {/* Wrapper to hide scrollbar */}
                  <div className="h-full w-full overflow-y-auto scrollbar-hide no-scrollbar">
                    <PagWeb variant="mobile">
                      {/* Pass 'mobile' variant to force correct fonts and single column grid */}
                      <DashboardPage variant="mobile" />
                    </PagWeb>
                  </div>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};