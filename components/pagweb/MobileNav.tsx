import React from 'react';
import { LayoutDashboard, Users, CreditCard, Menu } from 'lucide-react';

const MobileNavItem = ({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) => (
  <div className={`flex flex-col items-center justify-center gap-1 p-2 flex-1 cursor-pointer ${active ? 'text-brand-600' : 'text-gray-400 hover:text-gray-600'}`}>
    <Icon size={20} strokeWidth={active ? 2.5 : 2} />
    <span className="text-[10px] font-medium">{label}</span>
  </div>
);

interface MobileNavProps {
  className?: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ className = "md:hidden" }) => {
  return (
    <div className={`${className} bg-white border-t border-gray-200 flex justify-between items-center px-4 py-2 shrink-0 h-16 z-20`}>
      <MobileNavItem icon={LayoutDashboard} label="Inicio" active />
      <MobileNavItem icon={Users} label="Clientes" />
      <MobileNavItem icon={CreditCard} label="Assinar" />
      <MobileNavItem icon={Menu} label="Menu" />
    </div>
  );
};