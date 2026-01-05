import React from 'react';
import { LayoutDashboard, Users, CreditCard, Menu } from 'lucide-react';

const MobileNavItem = ({ icon: Icon, label, id, activeView, onClick }: any) => {
  const active = activeView === id;
  return (
    <div 
        onClick={() => onClick(id)}
        className={`flex flex-col items-center justify-center gap-1 p-2 flex-1 cursor-pointer transition-colors ${active ? 'text-brand-600' : 'text-gray-400 hover:text-gray-600'}`}
    >
        <Icon size={20} strokeWidth={active ? 2.5 : 2} />
        <span className="text-[10px] font-medium">{label}</span>
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
    <div className={`${className} bg-white border-t border-gray-200 flex justify-between items-center px-4 py-2 shrink-0 h-16 z-20`}>
      <MobileNavItem icon={LayoutDashboard} label="Inicio" id="overview" activeView={activeView} onClick={setActiveView} />
      <MobileNavItem icon={Users} label="Clientes" id="clients" activeView={activeView} onClick={setActiveView} />
      <MobileNavItem icon={CreditCard} label="Assinar" id="plans" activeView={activeView} onClick={setActiveView} />
      <MobileNavItem icon={Menu} label="Menu" id="menu" activeView={activeView} onClick={setActiveView} />
    </div>
  );
};