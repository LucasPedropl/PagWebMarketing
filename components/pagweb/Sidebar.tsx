import React from 'react';
import { 
  LayoutDashboard, Users, Layers, CreditCard, 
  DollarSign, FileText, Activity, LifeBuoy, Settings,
  ChevronLeft, ChevronRight, Wallet
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}

const SidebarItem = ({ icon: Icon, label, active, collapsed }: { icon: any, label: string, active?: boolean, collapsed: boolean }) => (
  <div 
    className={`
      flex items-center px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 group relative 
      ${active ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'} 
      ${collapsed ? 'justify-center gap-0' : 'gap-3'}
    `}
  >
    <Icon size={18} strokeWidth={active ? 2.5 : 2} className="shrink-0" />
    
    {/* Text Label Wrapper */}
    <div className={`overflow-hidden transition-all duration-300 ${collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
        <span className="whitespace-nowrap origin-left text-sm font-medium">
        {label}
        </span>
    </div>

    {/* Tooltip - Visible only when collapsed */}
    {collapsed && (
      <div className="absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-slate-800 text-white text-xs font-medium rounded shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-[100] transition-opacity duration-200 border border-slate-700">
        {label}
        {/* Little triangle pointing left */}
        <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-slate-800 border-l border-b border-slate-700 transform rotate-45"></div>
      </div>
    )}
  </div>
);

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  return (
    <div 
      className={`
        bg-slate-900 flex flex-col transition-all duration-300 ease-in-out shrink-0 relative flex h-full border-r border-slate-800 z-30
        ${collapsed ? 'w-16' : 'w-52'} 
        overflow-visible
      `}
    >
      
      {/* Toggle Button - Positioned exactly at the bottom-left intersection of TopBar/Sidebar */}
      <button 
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-[3.25rem] bg-white border border-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-slate-500 hover:text-brand-600 shadow-sm z-50 hover:scale-110 transition-transform cursor-pointer"
        aria-label={collapsed ? "Expandir menu" : "Recolher menu"}
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Logo Area - Height matches TopBar (h-16) */}
      <div className={`h-16 flex items-center text-white mb-2 transition-all duration-300 ${collapsed ? 'justify-center px-0' : 'px-5 gap-2'}`}>
         <div className="bg-brand-500 p-1 rounded-lg shrink-0 transition-transform duration-300 hover:rotate-12">
            <Wallet size={18} className="text-white" />
         </div>
         
         <div className={`overflow-hidden transition-all duration-300 ${collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
             <span className="font-bold text-lg tracking-tight whitespace-nowrap block">
             PagWeb
             </span>
         </div>
      </div>

      {/* Navigation - Removed overflow-y-auto to allow tooltips to pop out freely */}
      <div className="flex-1 px-3 space-y-1 overflow-visible">
        <SidebarItem icon={LayoutDashboard} label="Overview" active collapsed={collapsed} />
        <SidebarItem icon={Users} label="Clientes" collapsed={collapsed} />
        <SidebarItem icon={Layers} label="Planos" collapsed={collapsed} />
        <SidebarItem icon={CreditCard} label="Assinaturas" collapsed={collapsed} />
        <SidebarItem icon={DollarSign} label="Pagamentos" collapsed={collapsed} />
        <SidebarItem icon={FileText} label="Relatórios" collapsed={collapsed} />
        <SidebarItem icon={Activity} label="Histórico" collapsed={collapsed} />
        <SidebarItem icon={LifeBuoy} label="Suporte" collapsed={collapsed} />
      </div>

      {/* Footer Settings */}
      <div className="p-3 border-t border-slate-800 mt-auto">
         <SidebarItem icon={Settings} label="Configurações" collapsed={collapsed} />
      </div>
    </div>
  );
};