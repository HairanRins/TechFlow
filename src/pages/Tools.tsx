import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { TOOLS } from '../constants';

export default function Tools() {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-800 pb-6">
        <h2 className="text-3xl font-bold text-white mb-2">Boîte à Outils</h2>
        <p className="text-gray-500">Les outils indispensables pour dompter l'infrastructure.</p>
      </div>
      <div className="space-y-4">
        {TOOLS.map((tool, idx) => (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={tool.id}
            className="flex flex-col md:flex-row bg-[#111] border border-gray-800 rounded-xl overflow-hidden group hover:border-orange-500/30 transition-all"
          >
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-800 md:w-48 bg-[#0d0d0d] flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-orange-500 uppercase">{tool.category}</span>
            </div>
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-black/40 p-3 rounded-lg border border-gray-800">
                <ChevronRight size={14} className="text-orange-500" />
                <span>Cas d'usage: {tool.usage}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
