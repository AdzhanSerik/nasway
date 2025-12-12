
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';
import { Message } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Здравствуйте. Я ИИ-консультант портала Nasway Facts. Вы можете спросить меня о чем угодно, что касается состава, вреда или истории насвая. Пожалуйста, задавайте свои вопросы.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    const responseText = await getGeminiResponse(messages, userMessage);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 h-[calc(100vh-160px)] flex flex-col">
      <div className="flex items-center justify-between mb-4 flex-shrink-0">
        <h2 className="text-2xl font-bold">Консультация эксперта</h2>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Система онлайн
        </div>
      </div>

      <div className="flex-grow glass-effect rounded-2xl border border-zinc-800 flex flex-col overflow-hidden mb-6">
        <div 
          ref={scrollRef}
          className="flex-grow p-4 md:p-6 overflow-y-auto space-y-6 scroll-smooth"
        >
          {messages.map((m, i) => (
            <div 
              key={i} 
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] md:max-w-[70%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-green-500 text-zinc-950 font-medium ml-4' 
                  : 'bg-zinc-800/50 text-zinc-200 border border-zinc-700/50 mr-4'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-zinc-800/50 text-zinc-400 p-4 rounded-2xl text-sm border border-zinc-700/50 animate-pulse flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                Эксперт печатает...
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-4 bg-zinc-900/50 border-t border-zinc-800">
          <div className="flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Введите ваш вопрос (например: «Какой вред от извести?»)"
              className="flex-grow bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors"
            />
            <button 
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-green-500 text-zinc-950 px-6 py-3 rounded-xl font-bold text-sm hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
      
      <div className="text-center text-[10px] text-zinc-600 uppercase tracking-widest pb-4">
        Powered by Gemini 2.5 — Scientific approach only
      </div>
    </section>
  );
};

export default AIChat;
