import React from 'react';
import { UserPlus, FilePlus, DollarSign, FileText, Activity, Settings, ShieldCheck, LogOut, ChevronRight } from 'lucide-react';

interface MenuPageProps {
  variant?: 'desktop' | 'mobile';
  setActiveView?: (view: string) => void;
}

const MenuItem = ({ icon: Icon, color, label, border, onClick }: any) => (
  <div 
    onClick={onClick}
    className={`flex items-center justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer active:bg-gray-100 ${border ? 'border-b border-gray-100' : ''}`}
  >
      <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg ${color} flex items-center justify-center`}>
             <Icon size={18} />
          </div>
          <span className="text-sm font-medium text-slate-700">{label}</span>
      </div>
      <ChevronRight size={16} className="text-gray-300" />
  </div>
);

export const MenuPage: React.FC<MenuPageProps> = ({ variant, setActiveView }) => {
  return (
    <div className={`p-5 bg-white h-full flex flex-col animate-in fade-in slide-in-from-right-4 duration-300 ${variant === 'mobile' ? 'pb-24' : ''}`}>
       <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Menu</h1>
          <p className="text-sm text-gray-500 mt-1">Acesso rápido e configurações.</p>
       </div>

       {/* Ações Rápidas */}
       <div className="mb-6">
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">Ações Rápidas</h3>
          <div className="grid grid-cols-2 gap-3">
             <button 
                onClick={() => setActiveView && setActiveView('clients')}
                className="bg-[#1e293b] text-white p-4 rounded-xl flex flex-col items-center justify-center gap-2 shadow-sm hover:bg-[#0f172a] active:scale-95 transition-all h-24"
             >
                <div className="bg-white/10 p-2 rounded-full"><UserPlus size={20} /></div>
                <span className="text-xs font-semibold">Novo Cliente</span>
             </button>
             <button 
                onClick={() => setActiveView && setActiveView('plans')}
                className="bg-white border border-gray-200 text-slate-700 p-4 rounded-xl flex flex-col items-center justify-center gap-2 shadow-sm hover:bg-gray-50 active:scale-95 transition-all h-24"
             >
                <div className="bg-gray-100 p-2 rounded-full"><FilePlus size={20} /></div>
                <span className="text-xs font-semibold">Novo Plano</span>
             </button>
          </div>
       </div>

       {/* Gestão */}
       <div className="mb-6">
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">Gestão</h3>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <MenuItem 
                icon={DollarSign} 
                color="text-emerald-600 bg-emerald-50" 
                label="Pagamentos" 
                border 
                onClick={() => setActiveView && setActiveView('payments')}
              />
              <MenuItem 
                icon={FileText} 
                color="text-blue-600 bg-blue-50" 
                label="Relatórios" 
                border 
              />
              <MenuItem 
                icon={Activity} 
                color="text-purple-600 bg-purple-50" 
                label="Histórico" 
              />
          </div>
       </div>

       {/* Sistema */}
       <div className="mb-8">
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">Sistema</h3>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <MenuItem icon={Settings} color="text-slate-600 bg-slate-50" label="Configurações Gerais" border />
              <MenuItem icon={ShieldCheck} color="text-orange-600 bg-orange-50" label="Privacidade e Segurança" />
          </div>
       </div>

       {/* Logout */}
       <button className="mt-auto w-full bg-rose-50 text-rose-600 font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-rose-100 active:scale-[0.98] transition-all mb-4">
          <LogOut size={18} />
          Sair da conta
       </button>
    </div>
  );
};