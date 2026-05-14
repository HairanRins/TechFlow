import { motion } from 'motion/react';
import {
  Terminal,
  Search,
  Network,
  Users,
  Shield,
  Cpu,
  Wrench,
  BookOpen
} from 'lucide-react';
import { SKILLS } from '../constants';

const IconMap: Record<string, any> = {
  Search,
  Network,
  Users,
  Shield,
  cpu: Cpu,
  wrench: Wrench,
  book: BookOpen,
};

export default function Skills() {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-800 pb-6">
        <h2 className="text-3xl font-bold text-white mb-2">Compétences Clés</h2>
        <p className="text-gray-500">L'arsenal théorique nécessaire au quotidien.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SKILLS.map((skill, idx) => {
          const Icon = IconMap[skill.icon] || Terminal;
          return (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={skill.id}
              className="p-6 bg-[#111] border border-gray-800 rounded-xl hover:bg-[#151515] transition-colors"
            >
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{skill.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{skill.description}</p>
              <div className="mt-4 flex gap-2">
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-gray-800 rounded text-gray-500">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
