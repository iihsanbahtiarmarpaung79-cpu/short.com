import { motion } from 'motion/react';
import { Play, Sparkles, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
            <TrendingUp className="w-3 h-3" />
            Kuasai Algoritma 2024
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
            Bangun Channel <span className="text-red-600">Shorts</span> <br />
            Impianmu Dalam Hitungan Hari.
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-10">
            Pelajari cara membuat konten vertikal yang memikat, meningkatkan retensi, 
            dan mendapatkan jutaan penonton dengan bantuan kecerdasan buatan.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200 flex items-center justify-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Mulai Belajar Gratis
            </button>
            <button className="w-full sm:w-auto bg-white border-2 border-zinc-200 text-zinc-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Coba AI Generator
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto opacity-40">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[9/16] bg-zinc-100 rounded-3xl border border-zinc-200 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/shorts-${i}/400/700`} 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
