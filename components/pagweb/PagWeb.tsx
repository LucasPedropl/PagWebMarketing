import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { MobileNav } from './MobileNav';
import { MoreHorizontal } from 'lucide-react';

interface PagWebProps {
  children: React.ReactNode;
  variant?: 'desktop' | 'mobile';
}

export const PagWeb: React.FC<PagWebProps> = ({ children, variant = 'desktop' }) => {
  // Sidebar collapsed by default as requested
  const [collapsed, setCollapsed] = useState(true);
  const isMobile = variant === 'mobile';

  return (
    <div className={`bg-white overflow-hidden flex flex-col w-full h-full select-none font-sans text-left relative ${isMobile ? '' : 'rounded-b-lg'}`}>
      
      {/* Browser Bar (Desktop Only) */}
      {!isMobile && (
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
      )}

      {/* Main App Layout */}
      <div className="flex flex-1 h-[calc(100%-44px)] overflow-hidden bg-[#F3F4F6] relative">
        {/* Sidebar (Desktop Only) */}
        {!isMobile && (
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        )}

        {/* Content Area */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden relative h-full">
          <TopBar forceMobile={isMobile} />
          
          <main className={`flex-1 ${isMobile ? 'overflow-y-auto scrollbar-hide pb-20' : 'overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400'}`}>
            {/* Content Wrapper */}
            <div className={isMobile ? 'scale-100' : ''}>
              {children}
            </div>
          </main>
          
          {/* Mobile Bottom Navigation - Positioned Absolutely to Stick to Bottom */}
          {isMobile && (
             <div className="absolute bottom-0 left-0 right-0 z-50 bg-white">
                <MobileNav className="flex" />
             </div>
          )}
        </div>
      </div>
    </div>
  );
};