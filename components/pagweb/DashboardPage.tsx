import React from 'react';
import { DollarSign, Users, Activity, FileText, MoreHorizontal } from 'lucide-react';

interface DashboardPageProps {
  variant?: 'desktop' | 'mobile';
}

// --- Sub-components for Dashboard ---

const StatCard = ({ title, value, trend, trendValue, icon: Icon, color, variant }: any) => {
  const isMobile = variant === 'mobile';
  
  return (
    <div className={`bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow duration-300 min-w-0 ${isMobile ? 'p-3' : 'p-4'}`}>
      <div className="flex justify-between items-start mb-1.5">
        <div className="min-w-0 flex-1 mr-1">
          <p className={`text-gray-500 font-medium mb-0.5 truncate ${isMobile ? 'text-[10px]' : 'text-xs'}`}>{title}</p>
          <h3 className={`font-bold text-gray-900 tracking-tight truncate ${isMobile ? 'text-sm' : 'text-lg'}`}>{value}</h3>
        </div>
        <div className={`rounded-lg ${color} bg-opacity-10 shrink-0 ${isMobile ? 'p-1.5' : 'p-2'}`}>
          <Icon className={`${color.replace('bg-', 'text-').replace('100', '600')} ${isMobile ? 'w-3.5 h-3.5' : 'w-5 h-5'}`} />
        </div>
      </div>
      <div className={`flex items-center gap-1 font-medium flex-wrap ${isMobile ? 'text-[9px]' : 'text-[11px]'}`}>
        <span className={`${trend === 'up' ? 'text-emerald-600' : 'text-rose-600'} flex items-center gap-0.5 bg-opacity-10 px-1 py-0.5 rounded whitespace-nowrap`}>
          {trend === 'up' ? '↗' : '↘'} {trendValue}
        </span>
        <span className="text-gray-400 whitespace-nowrap truncate">vs. anterior</span>
      </div>
    </div>
  );
};

const LineChart = ({ variant }: { variant: string }) => (
  <div className={`relative w-full group ${variant === 'mobile' ? 'h-32' : 'h-48'}`}>
    {/* Grid Lines */}
    <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-300 pointer-events-none">
      <div className="border-b border-gray-50 border-dashed w-full h-0"></div>
      <div className="border-b border-gray-50 border-dashed w-full h-0"></div>
      <div className="border-b border-gray-50 border-dashed w-full h-0"></div>
      <div className="border-b border-gray-50 border-dashed w-full h-0"></div>
      <div className="border-b border-gray-100 w-full h-0"></div>
    </div>
    
    {/* Chart Line (SVG) */}
    <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 800 200" preserveAspectRatio="none">
      <path 
        d="M0,150 C50,100 100,50 200,40 C300,30 400,80 500,70 C600,60 700,90 800,120" 
        fill="none" 
        stroke="#3b82f6" 
        strokeWidth={variant === 'mobile' ? "6" : "4"} 
        vectorEffect="non-scaling-stroke"
        className="drop-shadow-sm"
      />
      <path 
        d="M0,150 C50,100 100,50 200,40 C300,30 400,80 500,70 C600,60 700,90 800,120 V200 H0 Z" 
        fill="url(#gradient)" 
        opacity="0.15" 
        vectorEffect="non-scaling-stroke"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
    
    {/* X Axis Labels */}
    <div className={`absolute bottom-[-20px] left-0 right-0 flex justify-between text-gray-400 font-medium px-2 ${variant === 'mobile' ? 'text-[8px]' : 'text-xs'}`}>
      <span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span>
    </div>
  </div>
);

const DonutChart = ({ variant }: { variant: string }) => (
  <div className={`flex ${variant === 'mobile' ? 'flex-row items-center w-full gap-4' : 'flex-col items-center justify-center h-full w-full'}`}>
    {/* Chart Circle */}
    <div className={`relative group shrink-0 ${variant === 'mobile' ? 'w-24 h-24' : 'w-40 h-40'}`}>
      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90 transition-transform duration-700 hover:scale-105">
        <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
        <path className="text-blue-500" strokeDasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
        <path className="text-emerald-500" strokeDasharray="25, 100" strokeDashoffset="-50" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
        <path className="text-amber-500" strokeDasharray="15, 100" strokeDashoffset="-75" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
        <path className="text-rose-500" strokeDasharray="10, 100" strokeDashoffset="-90" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
         <span className={`font-bold text-gray-800 ${variant === 'mobile' ? 'text-lg' : 'text-3xl'}`}>147</span>
         <span className={`text-gray-500 font-medium ${variant === 'mobile' ? 'text-[8px]' : 'text-xs'}`}>Total</span>
      </div>
    </div>
    
    {/* Legend */}
    <div className={`w-full ${variant === 'mobile' ? 'flex-1' : 'mt-6 px-0'}`}>
        <div className={`grid gap-x-2 gap-y-2 w-full ${variant === 'mobile' ? 'grid-cols-1 text-[10px]' : 'grid-cols-2 text-xs'}`}>
          <div className="flex items-center justify-between p-1.5 rounded hover:bg-gray-50 w-full">
              <div className="flex items-center gap-2 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                  <span className="text-gray-600 truncate">Web</span>
              </div>
              <span className="font-bold ml-1">50%</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded hover:bg-gray-50 w-full">
              <div className="flex items-center gap-2 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                  <span className="text-gray-600 truncate">Ind.</span>
              </div>
              <span className="font-bold ml-1">25%</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded hover:bg-gray-50 w-full">
              <div className="flex items-center gap-2 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></div>
                  <span className="text-gray-600 truncate">Soc.</span>
              </div>
              <span className="font-bold ml-1">15%</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded hover:bg-gray-50 w-full">
              <div className="flex items-center gap-2 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></div>
                  <span className="text-gray-600 truncate">Out.</span>
              </div>
              <span className="font-bold ml-1">10%</span>
          </div>
        </div>
    </div>
  </div>
);

// --- Main Page Component ---

export const DashboardPage: React.FC<DashboardPageProps> = ({ variant = 'desktop' }) => {
  const isMobile = variant === 'mobile';

  return (
    <div className={`
        mx-auto animate-in fade-in duration-500 
        ${isMobile ? 'p-3 space-y-3 w-full pb-24' : 'p-6 space-y-6 max-w-[1400px]'}
    `}>
      <div className={`${isMobile ? 'hidden' : 'block'}`}>
          <p className="text-gray-500 text-sm">Bem-vindo de volta! Aqui está o que está acontecendo hoje.</p>
      </div>

      {/* Stats Grid - Rigid Layout Enforced */}
      <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-4'}`}>
          <StatCard 
            title="Faturamento" 
            value="R$ 328k" 
            trend="up" 
            trendValue="+12%" 
            icon={DollarSign} 
            color="bg-blue-100 text-blue-600" 
            variant={variant}
          />
          <StatCard 
            title="Ativos" 
            value="147" 
            trend="up" 
            trendValue="+8" 
            icon={Users} 
            color="bg-purple-100 text-purple-600" 
            variant={variant}
          />
          <StatCard 
            title="Conversão" 
            value="15.3%" 
            trend="down" 
            trendValue="-2.1%" 
            icon={Activity} 
            color="bg-emerald-100 text-emerald-600" 
            variant={variant}
          />
          <StatCard 
            title="Atrasados" 
            value="23" 
            trend="down" 
            trendValue="12" 
            icon={FileText} 
            color="bg-orange-100 text-orange-600" 
            variant={variant}
          />
      </div>

      {/* Charts Grid - Rigid Layout Enforced */}
      <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
          {/* Main Chart */}
          <div className={`bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow min-w-0 ${isMobile ? 'p-4 pb-6' : 'p-6 col-span-2'}`}>
            <div className={`flex justify-between items-center ${isMobile ? 'mb-3' : 'mb-6'}`}>
                <h3 className={`font-bold text-gray-900 ${isMobile ? 'text-sm' : 'text-lg'}`}>Faturamento</h3>
                <button className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded"><MoreHorizontal size={isMobile ? 16 : 20} /></button>
            </div>
            <LineChart variant={variant} />
          </div>
          
          {/* Secondary Chart */}
          <div className={`bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow min-w-0 ${isMobile ? 'p-4' : 'p-6'}`}>
            <div className={`flex justify-between items-center ${isMobile ? 'mb-3' : 'mb-6'}`}>
                <h3 className={`font-bold text-gray-900 ${isMobile ? 'text-sm' : 'text-lg'}`}>Fontes</h3>
            </div>
            <DonutChart variant={variant} />
          </div>
      </div>
    </div>
  );
};