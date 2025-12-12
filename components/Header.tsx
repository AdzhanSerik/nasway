
import React from 'react';

interface HeaderProps {
  onNavigate: (tab: 'info' | 'chat') => void;
  activeTab: 'info' | 'chat';
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activeTab }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate('info')}
        >
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <span className="text-zinc-950 font-bold text-xl">N</span>
          </div>
          <span className="text-xl font-bold tracking-tight">NASWAY<span className="text-green-500">FACTS</span></span>
        </div>

        <nav className="flex items-center gap-6">
          <button 
            onClick={() => onNavigate('info')}
            className={`text-sm font-medium transition-colors ${activeTab === 'info' ? 'text-green-500' : 'text-zinc-400 hover:text-white'}`}
          >
            Информация
          </button>
          <button 
            onClick={() => onNavigate('chat')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'chat' 
              ? 'bg-green-500 text-zinc-950 shadow-[0_0_20px_rgba(34,197,94,0.3)]' 
              : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
            }`}
          >
            Спросить ИИ
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
