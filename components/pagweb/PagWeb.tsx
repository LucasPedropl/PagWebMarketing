import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { MobileNav } from './MobileNav';
import { MoreHorizontal } from 'lucide-react';

interface PagWebProps {
  children: React.ReactNode;
}

export const PagWeb: React.FC<PagWebProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col w-full h-[600px] md:h-[700px] select-none font-sans text-left">
      {/* Browser Bar (Decoration) */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shrink-0 h-11 relative z-20">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="bg-gray-100 text-gray-400 text-xs px-8 md:px-32 py-1.5 rounded-md flex items-center gap-2 mx-auto overflow-hidden max-w-[50%] md:max-w-none">
           <span className="truncate">pagweb.app/dashboard</span>
        </div>
        <div className="flex gap-2 text-gray-400">
           <MoreHorizontal size={16} />
        </div>
      </div>

      {/* Main App Layout */}
      <div className="flex flex-1 h-[calc(100%-44px)] overflow-hidden bg-[#F3F4F6] relative">
        {/* Sidebar (Desktop) */}
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Content Area */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden relative">
          <TopBar />
          
          <main className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
            {children}
          </main>
          
          {/* Mobile Bottom Navigation */}
          <MobileNav />
        </div>
      </div>
    </div>
  );
};