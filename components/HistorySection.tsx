
import React from 'react';

const HistorySection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="glass-effect rounded-3xl overflow-hidden border border-zinc-800">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-16 flex flex-col justify-center">
            <div className="text-green-500 font-mono text-sm mb-4">Origins & Evolution</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">От древних традиций до современной эпидемии</h2>
            <div className="space-y-6 text-zinc-400">
              <p>
                Насвай берет свое начало в Центральной Азии. Изначально его называли «нас», так как основным компонентом было растение <strong>Нас</strong>. Позже рецептура изменилась, и в состав вошел табак.
              </p>
              <p>
                В XIX и XX веках он был распространен преимущественно среди сельского населения, но с ростом миграции и доступности компонентов, проблема вышла на городской и международный уровень.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-8 border-t border-zinc-800">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">Центр. Азия</div>
                  <div className="text-xs text-zinc-500 uppercase">Регион происхождения</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">5-10 мин</div>
                  <div className="text-xs text-zinc-500 uppercase">Среднее время приема</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative min-h-[400px]">
            <img 
              src="https://picsum.photos/id/1021/800/800" 
              alt="Central Asia landscape" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent lg:block hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent lg:hidden block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
