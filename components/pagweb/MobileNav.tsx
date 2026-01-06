import React from 'react';
import { LayoutDashboard, Users, CreditCard, Menu, Layers } from 'lucide-react';

const MobileNavItem = ({ icon: Icon, label, id, activeView, onClick }: any) => {
  const active = activeView === id;
  return (
    <div 
        onClick={() => onClick(id)}
        className={`flex flex-col items-center justify-center gap-0.5 p-1 flex-1 cursor-pointer transition-colors min-w-0 ${active ? 'text-brand-600' : 'text-gray-400 hover:text-gray-600'}`}
    >
        <Icon size={18} strokeWidth={active ? 2.5 : 2} className="shrink-0" />
        <span className="text-[9px] font-medium truncate w-full text-center leading-tight">{label}</span>
    </div>
  );
};

interface MobileNavProps {
  className?: string;
  activeView: string;
  setActiveView: (view: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ className = "md:hidden", activeView, setActiveView }) => {
  return (
    <div className={`${className} bg-white border-t border-gray-200 flex justify-between items-end px-2 py-2 shrink-0 h-[60px] z-20 w-full`}>
      <MobileNavItem icon={LayoutDashboard} label="Inicio" id="overview" activeView={activeView} onClick={setActiveView} />
      <MobileNavItem icon={Users} label="Clientes" id="clients" activeView={activeView} onClick={setActiveView} />
      <MobileNavItem icon={Layers} label="Planos" id="plans" activeView={activeView} onClick={setActiveView} />
      <MobileNavItem icon={CreditCard} label="Assinaturas" id="subs" activeView={activeView} onClick={setActiveView} />
      <MobileNavItem icon={Menu} label="Menu" id="menu" activeView={activeView} onClick={setActiveView} />
    </div>
  );
};