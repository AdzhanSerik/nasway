
import React from 'react';

const HealthSection: React.FC = () => {
  const risks = [
    {
      title: "Рак ротовой полости",
      desc: "Постоянное раздражение слизистой известью и никотином приводит к перерождению клеток.",
      danger: "Critical"
    },
    {
      title: "Заболевания ЖКТ",
      desc: "Слюна с компонентами насвая попадает в желудок, вызывая гастрит, язвы и инфекции.",
      danger: "High"
    },
    {
      title: "Психическая зависимость",
      desc: "Никотин вызывает быстрое привыкание, а регулярное употребление влияет на когнитивные способности.",
      danger: "High"
    },
    {
      title: "Разрушение зубов",
      desc: "Пародонтоз, выпадение зубов и необратимое повреждение десен — спутники употребления.",
      danger: "Immediate"
    }
  ];

  return (
    <section id="health" className="max-w-7xl mx-auto px-4 bg-zinc-950/50 rounded-[40px] py-16 border border-zinc-900/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Последствия для здоровья</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto italic">«Насвай — это не альтернатива сигаретам, это другой, более грязный способ саморазрушения»</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {risks.map((risk, i) => (
          <div key={i} className="flex gap-6 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 transition-all">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold">{risk.title}</h3>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                  {risk.danger}
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {risk.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthSection;
