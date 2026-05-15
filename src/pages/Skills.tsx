import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal,
  Search,
  Network,
  Users,
  Shield,
  Cpu,
  Wrench,
  BookOpen,
  ChevronRight,
  ArrowLeft,
  Info,
  CheckCircle2
} from 'lucide-react';
import { SKILLS } from '../constants';
import { Skill } from '../types';

const IconMap: Record<string, any> = {
  Search,
  Network,
  Users,
  Shield,
  Terminal,
  cpu: Cpu,
  wrench: Wrench,
  book: BookOpen,
};

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  if (selectedSkill) {
    const Icon = IconMap[selectedSkill.icon] || Terminal;
    
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-8"
      >
        <button 
          onClick={() => setSelectedSkill(null)}
          className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm uppercase tracking-widest">Retour aux compétences</span>
        </button>

        <div className="bg-[#111] border border-gray-800 rounded-3xl overflow-hidden">
          <div className="p-8 md:p-12 border-b border-gray-800 bg-gradient-to-br from-[#1a1a1a] to-[#111]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 border border-orange-500/20">
                  <Icon size={40} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-orange-500 uppercase tracking-[0.3em] mb-2 block">{selectedSkill.category}</span>
                  <h2 className="text-4xl font-black text-white tracking-tighter uppercase">{selectedSkill.title}</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <Info size={20} className="text-orange-500" />
                  Présentation Technique
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {selectedSkill.description}
                  Cette compétence est cruciale pour maintenir la stabilité des systèmes et assurer une réponse rapide aux incidents complexes. 
                  Elle nécessite une compréhension profonde des interactions entre les différentes couches de l'infrastructure.
                </p>
              </section>

              {selectedSkill.flow && (
                <section className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <ChevronRight size={20} className="text-orange-500" />
                    Architecture du Flux
                  </h3>
                  <div className="relative p-8 bg-black/40 border border-gray-800 rounded-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <Icon size={120} />
                    </div>
                    <p className="text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">{selectedSkill.flow.title}</p>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      {selectedSkill.flow.steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-center gap-4 flex-1 w-full md:w-auto">
                          <div className="w-full md:w-auto px-6 py-4 bg-[#111] border border-gray-800 rounded-xl text-center flex-1 group hover:border-orange-500/50 transition-colors">
                            <span className="text-xs font-mono text-gray-400 block mb-1">ÉTAPE 0{idx + 1}</span>
                            <span className="font-bold text-white whitespace-nowrap">{step}</span>
                          </div>
                          {idx < selectedSkill.flow!.steps.length - 1 && (
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
                  Maîtrise Requise
                </h4>
                <ul className="space-y-4">
                  {selectedSkill.details?.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-400 leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 border border-orange-500/10 bg-orange-500/5 rounded-2xl">
                <p className="text-xs text-orange-500/70 font-mono leading-relaxed">
                  CONSEIL EXPERT: La documentation systématique de chaque étape permet de réduire le temps moyen de résolution (MTTR) de 30%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="border-b border-gray-800 pb-6">
        <h2 className="text-4xl font-black text-white mb-2 tracking-tighter uppercase">Compétences <span className="text-orange-500">Clés</span></h2>
        <p className="text-gray-500 text-lg">L'arsenal théorique nécessaire au quotidien pour exceller en support IT.</p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {SKILLS.map((skill, idx) => {
          const Icon = IconMap[skill.icon] || Terminal;
          return (
            <motion.div
              onClick={() => setSelectedSkill(skill)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={skill.id}
              className="p-8 bg-[#111] border border-gray-800 rounded-2xl hover:bg-[#151515] hover:border-orange-500/30 transition-all group flex flex-col h-full cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <span className="text-[10px] uppercase font-mono px-2 py-1 bg-gray-900 rounded border border-gray-800 text-gray-500">
                  {skill.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">{skill.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6 line-clamp-2">{skill.description}</p>
              
              <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-800/50">
                <span className="text-[10px] font-mono text-orange-500/50 uppercase tracking-widest">Explorer la méthode</span>
                <ChevronRight size={16} className="text-gray-700 group-hover:translate-x-1 group-hover:text-orange-500 transition-all" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
