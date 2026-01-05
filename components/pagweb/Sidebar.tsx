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
  <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200 group relative ${active ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}>
    <Icon size={20} strokeWidth={active ? 2.5 : 2} className="shrink-0" />
    <span className={`whitespace-nowrap transition-all duration-300 origin-left ${collapsed ? 'w-0 opacity-0 scale-0' : 'w-auto opacity-100 scale-100'}`}>
      {label}
    </span>
    {collapsed && (
      <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 shadow-lg">
        {label}
      </div>
    )}
  </div>
);

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  return (
    <div className={`bg-slate-900 flex-col transition-all duration-300 ease-in-out ${collapsed ? 'w-20' : 'w-64'} shrink-0 relative hidden md:flex h-full border-r border-slate-800`}>
      {/* Toggle Button */}
      <button 
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-8 bg-white border border-gray-200 rounded-full p-1 text-slate-500 hover:text-brand-600 shadow-sm z-20 hover:scale-110 transition-transform"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Logo Area */}
      <div className={`p-6 flex items-center gap-3 text-white mb-2 h-20 ${collapsed ? 'justify-center px-0' : ''}`}>
         <div className="bg-brand-500 p-1.5 rounded-lg shrink-0 transition-transform duration-300 hover:rotate-12">
            <Wallet size={20} className="text-white" />
         </div>
         <span className={`font-bold text-xl tracking-tight transition-all duration-300 overflow-hidden whitespace-nowrap ${collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
           PagWeb
         </span>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 space-y-1 scrollbar-hide">
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
      <div className="p-4 border-t border-slate-800 mt-auto">
         <SidebarItem icon={Settings} label="Configurações" collapsed={collapsed} />
      </div>
    </div>
  );
};