import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Wrench as ToolIcon, 
  Activity, 
  Workflow, 
  ArrowLeft, 
  CheckCircle2, 
  Info 
} from 'lucide-react';
import { TOOLS } from '../constants';
import { Tool } from '../types';

export default function Tools() {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  if (selectedTool) {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-8 pb-12"
      >
        <button 
          onClick={() => setSelectedTool(null)}
          className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm uppercase tracking-widest">Retour à la boîte à outils</span>
        </button>

        <div className="bg-[#111] border border-gray-800 rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="p-8 md:p-12 border-b border-gray-800 bg-gradient-to-br from-[#1a1a1a] to-[#111]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 border border-orange-500/20">
                  <ToolIcon size={40} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-orange-500 uppercase tracking-[0.3em] mb-2 block">{selectedTool.category}</span>
                  <h2 className="text-4xl font-black text-white tracking-tighter uppercase">{selectedTool.name}</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <Info size={20} className="text-orange-500" />
                  Guide d'Utilisation
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed italic border-l-4 border-orange-500/30 pl-6 py-2">
                  {selectedTool.description}
                </p>
                <div className="bg-orange-500/5 border border-orange-500/10 p-4 rounded-xl flex items-center gap-3">
                  <ChevronRight size={18} className="text-orange-500" />
                  <span className="text-sm font-mono text-gray-300">USAGE PRINCIPAL: {selectedTool.usage}</span>
                </div>
              </section>

              {selectedTool.schematic && (
                <section className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <Workflow size={20} className="text-orange-500" />
                    Flux Opérationnel
                  </h3>
                  <div className="relative p-10 bg-black/40 border border-gray-800 rounded-3xl overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <ToolIcon size={120} />
                    </div>
                    <p className="text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">{selectedTool.schematic.title}</p>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      {selectedTool.schematic.steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-center gap-4 flex-1 w-full">
                          <div className="w-full px-6 py-5 bg-[#111] border border-gray-800 rounded-2xl text-center group hover:border-orange-500/50 transition-colors shadow-lg">
                            <span className="text-[10px] font-mono text-gray-600 block mb-1 uppercase tracking-tighter">Étape {idx + 1}</span>
                            <span className="font-bold text-white whitespace-nowrap">{step}</span>
                          </div>
                          {idx < selectedTool.schematic!.steps.length - 1 && (
                            <ChevronRight className="text-gray-700 rotate-90 md:rotate-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-[#1a1a1a] border border-gray-800 rounded-2xl space-y-6">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-orange-500" />
                  Capacités Clés
                </h4>
                <ul className="space-y-4">
                  {selectedTool.details?.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-400 leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 border border-gray-800 bg-[#0d0d0d] rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Activity size={16} className="text-green-500" />
                  <span className="text-xs font-mono text-gray-500 uppercase">Status Opérationnel</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Outil validé par l'équipe Infrastructure pour les environnements de production et de staging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="border-b border-gray-800 pb-8">
        <h2 className="text-4xl font-black text-white mb-3 tracking-tighter uppercase">Boîte à Outils <span className="text-orange-500">Support</span></h2>
        <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
          Sélection des outils indispensables pour le diagnostic, l'automatisation et la gestion des infrastructures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {TOOLS.map((tool, idx) => (
          <motion.div
            onClick={() => setSelectedTool(tool)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={tool.id}
            className="group relative bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-500 cursor-pointer"
          >
            <div className="p-8 flex items-start gap-6">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform flex-shrink-0 border border-orange-500/10">
                <ToolIcon size={28} />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-orange-500/50 uppercase tracking-widest">{tool.category}</span>
                  <ChevronRight size={16} className="text-gray-700 group-hover:translate-x-1 group-hover:text-orange-500 transition-all" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{tool.name}</h3>
                <p className="text-gray-500 text-sm line-clamp-2">{tool.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
