import React from 'react';
import { CreditCard, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-900 text-white p-2 rounded-lg">
                <CreditCard size={20} />
              </div>
              <span className="text-xl font-bold text-gray-900">PagWeb</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Simplificando a gestão de assinaturas para empresas modernas. Focados em automação e crescimento.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-600">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-brand-600">Integrações</a></li>
              <li><a href="#" className="hover:text-brand-600">Preços</a></li>
              <li><a href="#" className="hover:text-brand-600">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-600">Sobre nós</a></li>
              <li><a href="#" className="hover:text-brand-600">Carreiras</a></li>
              <li><a href="#" className="hover:text-brand-600">Blog</a></li>
              <li><a href="#" className="hover:text-brand-600">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-600">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-600">Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-600">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PagWeb Tecnologia LTDA. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};