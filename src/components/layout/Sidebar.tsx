import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal,
  Search,
  Wrench,
  BookOpen,
  AlertCircle,
  ListRestart
} from 'lucide-react';
import NavItem from './NavItem';

type Section = 'overview' | 'skills' | 'tools' | 'playbook' | 'maintenance';

interface SidebarProps {
  isOpen: boolean;
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export default function Sidebar({ isOpen, activeSection, onSectionChange }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className="fixed inset-y-0 left-0 z-40 w-64 bg-[#0a0a0a] border-r border-gray-800 flex flex-col md:relative"
        >
          <div className="p-6 border-bottom border-gray-800">
            <div className="flex items-center gap-3 text-orange-500 mb-2">
              <Terminal size={24} />
              <span className="font-mono font-bold tracking-tighter text-xl">TECHFLOW</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">Support Playbook v1.0.4</p>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            <NavItem
              active={activeSection === 'overview'}
              onClick={() => onSectionChange('overview')}
              icon={<BookOpen size={18} />}
              label="Vue d'ensemble"
            />
            <NavItem
              active={activeSection === 'skills'}
              onClick={() => onSectionChange('skills')}
              icon={<Search size={18} />}
              label="Compétences"
            />
            <NavItem
              active={activeSection === 'tools'}
              onClick={() => onSectionChange('tools')}
              icon={<Wrench size={18} />}
              label="Boîte à Outils"
            />
            <NavItem
              active={activeSection === 'playbook'}
              onClick={() => onSectionChange('playbook')}
              icon={<AlertCircle size={18} />}
              label="Cas Pratiques"
            />
            <NavItem
              active={activeSection === 'maintenance'}
              onClick={() => onSectionChange('maintenance')}
              icon={<ListRestart size={18} />}
              label="Maintenance"
            />
          </nav>

          <div className="p-6 border-t border-gray-800">
            <div className="bg-[#111] p-4 rounded-lg border border-gray-800">
              <p className="text-[10px] uppercase text-gray-500 mb-1">Status Système</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-green-500">OPÉRATIONNEL</span>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
