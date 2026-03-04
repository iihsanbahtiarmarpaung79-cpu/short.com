import { BookOpen, Clock, Target, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const modules = [
  {
    title: "Algoritma Shorts",
    desc: "Pahami bagaimana sistem rekomendasi YouTube bekerja untuk video vertikal.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600",
    lessons: 4
  },
  {
    title: "Teknik Hook 3 Detik",
    desc: "Cara menghentikan scroll penonton di 3 detik pertama yang krusial.",
    icon: <Target className="w-6 h-6" />,
    color: "bg-red-50 text-red-600",
    lessons: 6
  },
  {
    title: "Editing Mobile",
    desc: "Tutorial CapCut & VN untuk hasil editing profesional hanya dari HP.",
    icon: <Clock className="w-6 h-6" />,
    color: "bg-purple-50 text-purple-600",
    lessons: 8
  },
  {
    title: "Riset Niche & Keyword",
    desc: "Temukan topik yang sedang tren dan memiliki persaingan rendah.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "bg-emerald-50 text-emerald-600",
    lessons: 5
  }
];

export default function LearningModules() {
  return (
    <section id="belajar" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Kurikulum Terstruktur</h2>
            <p className="text-zinc-600">Dari pemula hingga ahli. Kami menyusun materi yang paling relevan dengan kondisi YouTube saat ini.</p>
          </div>
          <button className="text-red-600 font-bold flex items-center gap-2 hover:underline">
            Lihat Semua Materi
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all group"
            >
              <div className={`w-12 h-12 rounded-2xl ${m.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {m.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{m.title}</h3>
              <p className="text-zinc-600 text-sm mb-6 leading-relaxed">{m.desc}</p>
              <div className="flex items-center justify-between pt-6 border-t border-zinc-100">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{m.lessons} Materi</span>
                <button className="text-zinc-900 font-bold text-sm">Mulai</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
