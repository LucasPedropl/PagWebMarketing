import React from 'react';
import { DollarSign, Users, Activity, FileText, MoreHorizontal } from 'lucide-react';

// --- Sub-components for Dashboard ---

const StatCard = ({ title, value, trend, trendValue, icon: Icon, color }: any) => (
  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow duration-300">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{value}</h3>
      </div>
      <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
        <Icon size={20} className={color.replace('bg-', 'text-').replace('100', '600')} />
      </div>
    </div>
    <div className="flex items-center gap-2 text-xs font-medium">
      <span className={`${trend === 'up' ? 'text-emerald-600' : 'text-rose-600'} flex items-center gap-1 bg-opacity-10 px-1.5 py-0.5 rounded`}>
        {trend === 'up' ? '↗' : '↘'} {trendValue}
      </span>
      <span className="text-gray-400">vs. mês anterior</span>
    </div>
  </div>
);

const LineChart = () => (
  <div className="relative h-48 w-full group">
    {/* Grid Lines */}
    <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-300 pointer-events-none">
      <div className="border-b border-gray-50 border-dashed w-full h-0"></div>
      <div className="border-b border-gray-50 border-dashed w-full h-0"></div>
      <div className="border-b border-gray-50 border-dashed w-full h-0"></div>
      <div className="border-b border-gray-50 border-dashed w-full h-0"></div>
      <div className="border-b border-gray-100 w-full h-0"></div>
    </div>
    
    {/* Chart Line (SVG) */}
    <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
      <path 
        d="M0,150 C50,100 100,50 200,40 C300,30 400,80 500,70 C600,60 700,90 800,120" 
        fill="none" 
        stroke="#3b82f6" 
        strokeWidth="3" 
        vectorEffect="non-scaling-stroke"
        className="drop-shadow-sm"
      />
      <path 
        d="M0,150 C50,100 100,50 200,40 C300,30 400,80 500,70 C600,60 700,90 800,120 V192 H0 Z" 
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
    
    {/* Tooltip Simulation on Hover */}
    <div className="absolute top-10 left-[40%] bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transform -translate-x-1/2">
       R$ 42.000
       <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
    </div>

    {/* X Axis Labels */}
    <div className="absolute bottom-[-20px] left-0 right-0 flex justify-between text-xs text-gray-400 font-medium">
      <span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span>
    </div>
  </div>
);

const DonutChart = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <div className="relative w-40 h-40 group">
      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90 transition-transform duration-700 hover:scale-105">
        <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
        <path className="text-blue-500" strokeDasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
        <path className="text-emerald-500" strokeDasharray="25, 100" strokeDashoffset="-50" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
        <path className="text-amber-500" strokeDasharray="15, 100" strokeDashoffset="-75" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
        <path className="text-rose-500" strokeDasharray="10, 100" strokeDashoffset="-90" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
         <span className="text-3xl font-bold text-gray-800">147</span>
         <span className="text-xs text-gray-500 font-medium">Total</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-8 text-xs w-full px-4">
      <div className="flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div><span className="text-gray-600">Website</span></div><span className="font-bold">50%</span></div>
      <div className="flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div><span className="text-gray-600">Indicação</span></div><span className="font-bold">25%</span></div>
      <div className="flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div><span className="text-gray-600">Social</span></div><span className="font-bold">15%</span></div>
      <div className="flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div><span className="text-gray-600">Outros</span></div><span className="font-bold">10%</span></div>
    </div>
  </div>
);

// --- Main Page Component ---

export const DashboardPage: React.FC = () => {
  return (
    <div className="p-6 md:p-8 max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="hidden md:block">
          <p className="text-gray-500">Bem-vindo de volta! Aqui está o que está acontecendo hoje.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Faturamento Total" 
            value="R$ 328.000" 
            trend="up" 
            trendValue="+12.5%" 
            icon={DollarSign} 
            color="bg-blue-100 text-blue-600" 
          />
          <StatCard 
            title="Clientes Ativos" 
            value="147" 
            trend="up" 
            trendValue="+8" 
            icon={Users} 
            color="bg-purple-100 text-purple-600" 
          />
          <StatCard 
            title="Taxa de Conversão" 
            value="15.3%" 
            trend="down" 
            trendValue="-2.1%" 
            icon={Activity} 
            color="bg-emerald-100 text-emerald-600" 
          />
          <StatCard 
            title="Mensalidades Atrasadas" 
            value="23" 
            trend="down" 
            trendValue="12 vencidas" 
            icon={FileText} 
            color="bg-orange-100 text-orange-600" 
          />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm lg:col-span-2 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-900 text-lg">Tendência de Faturamento</h3>
                <button className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded"><MoreHorizontal size={20} /></button>
            </div>
            <LineChart />
          </div>
          
          {/* Secondary Chart */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-900 text-lg">Fontes dos Clientes</h3>
            </div>
            <DonutChart />
          </div>
      </div>
    </div>
  );
};