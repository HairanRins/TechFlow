import { motion } from 'motion/react';
import { Shield, Cpu, Zap, Users, Layers, Activity, MessageSquare, BookOpen, HardDrive } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Overview() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-16 pb-12"
    >
      {/* Hero Section */}
      <motion.header variants={itemVariants} className="space-y-6">
        <div className="inline-block py-1 px-3 bg-orange-500/10 border border-orange-500/20 rounded-full">
          <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest">Référence Technique</span>
        </div>
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white">
          PLAYBOOK <span className="text-orange-500">SUPPORT IT.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
          Le support informatique est le point névralgique de toute infrastructure moderne. 
          Bien plus qu'une simple assistance, c'est le garant de la continuité opérationnelle et de la productivité des équipes.
        </p>
      </motion.header>

      {/* Philosophy Section */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-[#111] border border-gray-800 rounded-2xl group hover:border-gray-700 transition-all duration-300">
          <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
            <Shield className="text-orange-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Sécurité d'abord</h3>
          <p className="text-gray-400 leading-relaxed">
            Toute intervention commence par la sécurité de l'utilisateur et l'intégrité des données. 
            Dans un monde de cybermenaces constantes, le technicien support est la première ligne de défense.
          </p>
        </div>
        <div className="p-8 bg-[#111] border border-gray-800 rounded-2xl group hover:border-gray-700 transition-all duration-300">
          <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
            <Cpu className="text-orange-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Optimisation Hardware</h3>
          <p className="text-gray-400 leading-relaxed">
            Diagnostiquez les composants critiques et maintenez le parc informatique à son niveau de performance maximal. 
            Une infrastructure saine est la base d'un environnement de travail fluide.
          </p>
        </div>
      </motion.div>

      {/* Missions Section */}
      <motion.section variants={itemVariants} className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-white tracking-tight">Missions Fondamentales</h2>
          <div className="h-px flex-1 bg-gray-800"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Activity size={20} />, title: "Gestion d'Incidents", desc: "Rétablir le service normal le plus rapidement possible." },
            { icon: <MessageSquare size={20} />, title: "Support Utilisateur", desc: "Accompagner et former les collaborateurs sur les outils." },
            { icon: <Zap size={20} />, title: "Maintenance", desc: "Anticiper les pannes par des actions préventives régulières." },
            { icon: <BookOpen size={20} />, title: "Documentation", desc: "Capitaliser le savoir pour accélérer les résolutions futures." }
          ].map((mission, index) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={index} 
              className="p-6 bg-[#0a0a0a] border border-gray-800 rounded-xl hover:bg-[#111] transition-colors"
            >
              <div className="text-orange-500 mb-4">{mission.icon}</div>
              <h4 className="text-white font-bold mb-2">{mission.title}</h4>
              <p className="text-sm text-gray-500">{mission.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Support Levels Section */}
      <motion.section variants={itemVariants} className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-white tracking-tight">La Structure de Support</h2>
          <div className="h-px flex-1 bg-gray-800"></div>
        </div>

        <div className="space-y-4">
          {/* Level 1 */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="flex flex-col md:flex-row gap-6 p-8 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-2xl relative overflow-hidden group transition-colors hover:border-orange-500/30"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="text-8xl font-black text-white">L1</span>
            </div>
            <div className="flex-shrink-0 w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-2xl flex items-center justify-center text-orange-500">
              <Users size={32} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                Niveau 1 <span className="text-sm font-mono text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded">Service Desk</span>
              </h3>
              <p className="text-gray-400 max-w-2xl leading-relaxed">
                C'est le premier point de contact. Le technicien L1 réceptionne les demandes, qualifie les incidents et résout les problèmes connus (mots de passe, bugs logiciels courants, configuration mail). 
                Si la solution n'est pas immédiate, il escalade au niveau supérieur.
              </p>
              <ul className="flex flex-wrap gap-2">
                {['Accueil client', 'Qualification', 'Résolution simple', 'Escalade'].map(tag => (
                  <li key={tag} className="text-[10px] uppercase font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">{tag}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Level 2 */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="flex flex-col md:flex-row gap-6 p-8 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-2xl relative overflow-hidden group transition-colors hover:border-orange-500/30"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="text-8xl font-black text-white">L2</span>
            </div>
            <div className="flex-shrink-0 w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-2xl flex items-center justify-center text-orange-500">
              <Layers size={32} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                Niveau 2 <span className="text-sm font-mono text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded">Technicien Expert</span>
              </h3>
              <p className="text-gray-400 max-w-2xl leading-relaxed">
                Intervient sur les incidents plus complexes demandant une analyse approfondie. 
                Le technicien L2 possède une expertise technique plus large (système, réseau, hardware) et peut se déplacer sur site si nécessaire.
              </p>
              <ul className="flex flex-wrap gap-2">
                {['Analyse avancée', 'Intervention site', 'Configuration réseau', 'Diagnostic OS'].map(tag => (
                  <li key={tag} className="text-[10px] uppercase font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">{tag}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Level 3 */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="flex flex-col md:flex-row gap-6 p-8 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-2xl relative overflow-hidden group transition-colors hover:border-orange-500/30"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="text-8xl font-black text-white">L3</span>
            </div>
            <div className="flex-shrink-0 w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-2xl flex items-center justify-center text-orange-500">
              <HardDrive size={32} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                Niveau 3 <span className="text-sm font-mono text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded">Ingénierie & Éditeurs</span>
              </h3>
              <p className="text-gray-400 max-w-2xl leading-relaxed">
                Le dernier rempart. Ce niveau implique les ingénieurs concepteurs de l'infrastructure ou les supports des éditeurs de logiciels/constructeurs. 
                Ils traitent les bugs critiques, les failles de sécurité majeures et les changements d'architecture.
              </p>
              <ul className="flex flex-wrap gap-2">
                {['Expertise Infrastructure', 'Correction Bug Code', 'Audit Sécurité', 'Liaison Constructeurs'].map(tag => (
                  <li key={tag} className="text-[10px] uppercase font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">{tag}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

