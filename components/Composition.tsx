
import React from 'react';

const Composition: React.FC = () => {
  const components = [
    {
      name: "Махорка или Табак",
      desc: "Основа изделия, содержащая высокие дозы никотина.",
      icon: "🍃"
    },
    {
      name: "Гашеная известь",
      desc: "Изменяет кислотность среды, способствуя быстрому всасыванию никотина через слизистую.",
      icon: "🏗️"
    },
    {
      name: "Древесная зола",
      desc: "Используется как связующий элемент и для усиления эффекта извести.",
      icon: "🔥"
    },
    {
      name: "Куриный помет",
      desc: "В некоторых рецептах заменяет известь. Источник тяжелых металлов и инфекций.",
      icon: "⚠️"
    }
  ];

  return (
    <section id="composition" className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Химический состав</h2>
          <p className="text-zinc-400">Насвай не является «безобидной травой». Это смесь агрессивных химических компонентов, каждый из которых наносит удар по организму.</p>
        </div>
        <div className="text-sm font-medium text-green-500 uppercase tracking-widest">
          Component Analysis
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {components.map((c, i) => (
          <div key={i} className="glass-effect p-8 rounded-2xl border border-zinc-800 hover:border-green-500/50 transition-colors group">
            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform inline-block">
              {c.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{c.name}</h3>
            <p className="text-zinc-500 leading-relaxed text-sm">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Composition;
