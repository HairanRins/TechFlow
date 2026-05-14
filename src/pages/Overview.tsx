import { Shield, Cpu } from 'lucide-react';

export default function Overview() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <div className="inline-block py-1 px-3 bg-orange-500/10 border border-orange-500/20 rounded-full">
          <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest">Référence Technique</span>
        </div>
        <h1 className="text-6xl font-black tracking-tighter text-white">
          PLAYBOOK <span className="text-orange-500">SUPPORT IT.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
          Un guide complet conçu pour les techniciens et ingénieurs support.
          Maîtrisez les infrastructures modernes par la méthode et l'outil.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 bg-[#111] border border-gray-800 rounded-2xl group hover:border-gray-700 transition-colors">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="text-orange-500" /> Sécurité d'abord
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Toute intervention commence par la sécurité de l'utilisateur et l'intégrité des données.
            Apprenez à isoler les menaces dès les premières secondes.
          </p>
        </div>
        <div className="p-8 bg-[#111] border border-gray-800 rounded-2xl group hover:border-gray-700 transition-colors">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Cpu className="text-orange-500" /> Optimisation Hardware
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Diagnostiquez les composants critiques et maintenez le parc informatique à son niveau de performance maximal.
          </p>
        </div>
      </div>
    </div>
  );
}
