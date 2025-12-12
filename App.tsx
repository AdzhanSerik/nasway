
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Composition from './components/Composition';
import HealthSection from './components/HealthSection';
import HistorySection from './components/HistorySection';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'chat'>('info');

  return (
    <div className="min-h-screen flex flex-col selection:bg-green-500/30">
      <Header onNavigate={setActiveTab} activeTab={activeTab} />
      
      <main className="flex-grow pt-20">
        {activeTab === 'info' ? (
          <div className="space-y-24 pb-24">
            <Hero onChatClick={() => setActiveTab('chat')} />
            <Composition />
            <HistorySection />
            <HealthSection />
          </div>
        ) : (
          <AIChat />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
