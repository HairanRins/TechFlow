import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface NavItemProps {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}

export default function NavItem({ active, onClick, icon, label }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${active
          ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20'
          : 'text-gray-400 hover:bg-gray-800 hover:text-white border border-transparent'
        }`}
    >
      <span className={`${active ? 'text-orange-500' : 'text-gray-500 group-hover:text-gray-300'}`}>
        {icon}
      </span>
      <span className="text-sm font-medium tracking-tight uppercase tracking-wide">{label}</span>
      {active && <motion.div layoutId="active-pill" className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500" />}
    </button>
  );
}
