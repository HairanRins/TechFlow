/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Layout Components
import Sidebar from './components/layout/Sidebar';

// Pages
import Overview from './pages/Overview';
import Skills from './pages/Skills';
import Tools from './pages/Tools';
import Playbook from './pages/Playbook';
import Maintenance from './pages/Maintenance';

type Section = 'overview' | 'skills' | 'tools' | 'playbook' | 'maintenance';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return <Overview />;
      case 'skills': return <Skills />;
      case 'tools': return <Tools />;
      case 'playbook': return <Playbook />;
      case 'maintenance': return <Maintenance />;
      default: return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-orange-500 selection:text-white">
      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800 z-40 flex items-center px-4 md:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-[#1a1a1a] border border-gray-800 rounded-lg mr-4"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="flex items-center gap-2">
          <img src="/techflowLogo.png" alt="TechFlow Logo" className="w-8 h-8 object-contain" />
          <span className="font-mono font-bold tracking-tighter text-lg text-orange-500">TECHFLOW</span>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative scroll-smooth bg-[radial-gradient(circle_at_50%_0%,_rgba(255,100,20,0.05)_0%,_transparent_50%)]">
        <div className="max-w-5xl mx-auto p-8 pt-16 md:pt-8 min-h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
