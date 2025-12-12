
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-900 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-lg font-bold">NASWAY<span className="text-green-500">FACTS</span></span>
            </div>
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
              Независимый информационный проект, созданный для повышения осведомленности о рисках употребления некурительных табачных изделий.
            </p>
          </div>
          
          <div className="glass-effect p-6 rounded-2xl border border-red-900/20 bg-red-950/5">
            <h4 className="text-red-500 font-bold mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Дисклеймер
            </h4>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Информация на данном сайте носит исключительно ознакомительный характер и не заменяет консультацию врача. Употребление табака вредит вашему здоровью и вызывает зависимость. Мы не поддерживаем и не пропагандируем употребление любых психоактивных веществ.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Nasway Facts Project. Все права защищены.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-600 hover:text-white text-xs transition-colors">Научные источники</a>
            <a href="#" className="text-zinc-600 hover:text-white text-xs transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
