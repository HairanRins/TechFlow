import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Search, CheckCircle2 } from 'lucide-react';
import { CASES } from '../constants';

export default function Playbook() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="border-b border-gray-800 pb-6">
        <h2 className="text-3xl font-bold text-white mb-2">Résolutions de Cas</h2>
        <p className="text-gray-500">Dépannages réels et méthodologies appliquées.</p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {CASES.map((item) => (
          <div
            key={item.id}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${selectedCase === item.id ? 'border-orange-500 ring-1 ring-orange-500/20' : 'border-gray-800 bg-[#111]'
              }`}
          >
            <button
              onClick={() => setSelectedCase(selectedCase === item.id ? null : item.id)}
              className="w-full text-left p-6 flex items-start justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded ${item.difficulty === 'hard' ? 'bg-red-500/10 text-red-500' :
                      item.difficulty === 'medium' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-green-500/10 text-green-500'
                    }`}>
                    {item.difficulty}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-gray-800 rounded text-gray-400">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white leading-tight italic">{item.title}</h3>
                <p className="text-gray-400 line-clamp-1">{item.problem}</p>
              </div>
              <span className={`transition-transform duration-300 ${selectedCase === item.id ? 'rotate-180' : ''}`}>
                <ChevronRight size={24} className="text-gray-600" />
              </span>
            </button>

            <AnimatePresence>
              {selectedCase === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <div className="px-6 pb-6 space-y-6 pt-2 border-t border-gray-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-xs uppercase font-mono text-orange-500 flex items-center gap-2">
                          <Search size={14} /> Diagnostic
                        </h4>
                        <ul className="space-y-2">
                          {item.diagnosis.map((step, sIdx) => (
                            <li key={sIdx} className="text-sm text-gray-400 flex items-start gap-2">
                              <span className="text-orange-500 font-mono mt-0.5">0{sIdx + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xs uppercase font-mono text-green-500 flex items-center gap-2">
                          <CheckCircle2 size={14} /> Résolution
                        </h4>
                        <div className="bg-green-500/5 border border-green-500/20 p-4 rounded-xl">
                          <p className="text-sm text-gray-300 leading-relaxed italic">{item.resolution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
