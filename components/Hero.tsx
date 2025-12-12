
import React from 'react';

interface HeroProps {
  onChatClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onChatClick }) => {
  return (
    <section className="relative px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 pt-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs font-medium text-zinc-400 mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Научные данные и объективные факты
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Вся правда о <span className="gradient-text">Насвае</span> в одном месте
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          Узнайте о составе, истории и последствиях употребления самого распространенного некурительного табачного изделия в Центральной Азии.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => document.getElementById('composition')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 rounded-xl font-semibold hover:bg-zinc-200 transition-colors"
          >
            Изучить состав
          </button>
          <button 
            onClick={onChatClick}
            className="w-full sm:w-auto px-8 py-4 glass-effect text-white rounded-xl font-semibold hover:bg-zinc-800 transition-colors"
          >
            Задать вопрос ИИ
          </button>
        </div>
      </div>
      
      <div className="mt-20 max-w-6xl mx-auto relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <img 
          src="https://picsum.photos/id/431/1200/600" 
          alt="Abstract tobacco representation" 
          className="relative rounded-2xl border border-zinc-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover w-full h-[300px] md:h-[450px]"
        />
      </div>
    </section>
  );
};

export default Hero;
