import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "R$ 49",
    description: "Ideal para freelancers e pequenos negócios iniciando.",
    features: [
      "Até 50 Clientes",
      "Gestão de Planos Básica",
      "Portal do Cliente",
      "Suporte por Email"
    ]
  },
  {
    name: "Pro",
    price: "R$ 149",
    description: "Para empresas em crescimento que precisam de automação.",
    features: [
      "Até 500 Clientes",
      "Planos e Assinaturas Ilimitados",
      "Relatórios Financeiros Avançados",
      "Automação de Cobrança",
      "Suporte Prioritário"
    ],
    recommended: true
  },
  {
    name: "Enterprise",
    price: "Consultar",
    description: "Soluções customizadas para grandes operações.",
    features: [
      "Clientes Ilimitados",
      "API Dedicada",
      "Gerente de Conta",
      "SLA Garantido",
      "Customização White-label"
    ]
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-2">Preços Transparentes</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha o plano ideal para seu negócio
          </h3>
          <p className="text-gray-400 text-lg">
            Comece pequeno e cresça com a gente. Sem taxas escondidas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.recommended 
                  ? 'bg-gradient-to-b from-blue-600 to-blue-800 shadow-2xl scale-105 border-none' 
                  : 'bg-slate-800 border border-slate-700'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Mais Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-2">{tier.name}</h4>
                <div className="flex items-baseline gap-1">
                    {tier.price !== "Consultar" && <span className="text-sm text-gray-300">Mensal</span>}
                    <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                </div>
                <p className={`mt-4 text-sm ${tier.recommended ? 'text-blue-100' : 'text-gray-400'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check size={20} className={tier.recommended ? 'text-blue-200' : 'text-brand-500'} />
                    <span className={`text-sm ${tier.recommended ? 'text-white' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  tier.recommended 
                    ? 'bg-white text-blue-700 hover:bg-gray-100' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                Selecionar {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};