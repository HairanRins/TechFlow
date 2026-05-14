import { MAINTENANCE } from '../constants';

export default function Maintenance() {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-800 pb-6">
        <h2 className="text-3xl font-bold text-white mb-2">Maintenance Préventive</h2>
        <p className="text-gray-500">Mieux vaut prévenir que guérir.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MAINTENANCE.map((tip) => (
          <div key={tip.id} className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden flex flex-col">
            <div className="p-6 bg-[#1a1a1a] border-b border-gray-800 flex justify-between items-center">
              <h3 className="font-bold text-white uppercase tracking-tight">{tip.title}</h3>
              <span className="text-[10px] font-mono bg-orange-500 text-black px-2 py-0.5 rounded font-bold uppercase transition-all">
                {tip.frequency}
              </span>
            </div>
            <div className="p-6 space-y-4 flex-1">
              <ul className="space-y-3">
                {tip.tasks.map((task, tid) => (
                  <li key={tid} className="flex items-start gap-3 group">
                    <div className="w-5 h-5 rounded border border-gray-700 flex items-center justify-center mt-0.5 group-hover:border-orange-500 transition-colors">
                      <div className="w-2 h-2 rounded-sm bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
