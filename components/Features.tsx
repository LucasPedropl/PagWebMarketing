import React from 'react';
import { Users, CreditCard, LayoutDashboard, Zap, ShieldCheck, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Gestão de Clientes",
    description: "Centralize todos os dados dos seus clientes. Histórico de pagamentos, assinaturas ativas e status em um único lugar.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: LayoutDashboard,
    title: "Planos Flexíveis",
    description: "Crie planos personalizados com ciclos de cobrança variados (mensal, anual). Defina descontos e períodos de teste.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: CreditCard,
    title: "Automação Financeira",
    description: "Conecte assinaturas a pagamentos automáticos. O sistema gera faturas e notifica clientes sobre vencimentos.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Smartphone,
    title: "Portal do Cliente",
    description: "Uma área exclusiva onde seu cliente pode gerenciar a própria assinatura, baixar faturas e atualizar dados.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Zap,
    title: "Relatórios Inteligentes",
    description: "Insights valiosos sobre churn, MRR (Receita Recorrente Mensal) e crescimento da base de assinantes.",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: ShieldCheck,
    title: "Segurança Total",
    description: "Seus dados e de seus clientes protegidos com criptografia de ponta a ponta e backups diários.",
    color: "bg-teal-100 text-teal-600"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Funcionalidades Poderosas</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tudo que você precisa para escalar suas assinaturas
          </h3>
          <p className="text-gray-600 text-lg">
            Substitua planilhas complexas por um sistema unificado que trabalha por você 24 horas por dia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default">
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};