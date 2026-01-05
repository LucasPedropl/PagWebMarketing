import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

interface TopBarProps {
  forceMobile?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ forceMobile = false }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-6 h-16 flex justify-between items-center shrink-0 z-10 w-full">
      {/* Left: Mobile Brand / Desktop Title */}
      <div className="flex items-center gap-4">
         <div className={`flex items-center gap-3 ${forceMobile ? 'flex' : 'md:hidden'} text-slate-900`}>
             <div className="bg-brand-900 p-1.5 rounded text-white shadow-sm">
                <Menu size={18} />
             </div>
             <span className="font-bold text-base tracking-tight">PagWeb</span>
         </div>
         <div className={`${forceMobile ? 'hidden' : 'hidden md:block'}`}>
            <h2 className="text-xl font-bold text-slate-800">Dashboard Overview</h2>
         </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3 md:gap-4">
         <div className={`relative ${forceMobile ? 'hidden' : 'hidden sm:block'}`}>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="pl-9 pr-4 py-1.5 bg-gray-50 border border-transparent hover:border-gray-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-brand-100 outline-none w-32 xl:w-48 transition-all" 
            />
         </div>
         
         <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
         </button>
         
         <div className="flex items-center gap-3 pl-2 border-l border-gray-200">
            <div className={`text-right ${forceMobile ? 'hidden' : 'hidden sm:block'}`}>
               <p className="text-sm font-bold text-gray-900 leading-none">Admin</p>
               <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">ERP System</p>
            </div>
            <div className="w-8 h-8 md:w-9 md:h-9 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold shadow-sm border border-brand-200 text-sm">
              A
            </div>
         </div>
      </div>
    </header>
  );
};