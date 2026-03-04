import { Clock, Globe, MapPin, Info } from 'lucide-react';
import { motion } from 'motion/react';

const schedules = [
  {
    region: "Lokal (Indonesia - WIB)",
    icon: <MapPin className="w-5 h-5 text-red-500" />,
    times: [
      { label: "Pagi", time: "07:00 - 09:00", note: "Waktu berangkat kerja/sekolah" },
      { label: "Siang", time: "12:00 - 13:00", note: "Jam istirahat makan siang" },
      { label: "Sore", time: "16:00 - 18:00", note: "Waktu pulang & santai sore" },
      { label: "Malam", time: "19:00 - 21:00", note: "Prime time (Paling Ramai)" }
    ]
  },
  {
    region: "Luar Negeri (Global / USA - EST)",
    icon: <Globe className="w-5 h-5 text-blue-500" />,
    times: [
      { label: "Pagi (EST)", time: "08:00 - 10:00", note: "Mulai aktivitas di Amerika" },
      { label: "Siang (EST)", time: "12:00 - 14:00", note: "Istirahat siang global" },
      { label: "Malam (EST)", time: "19:00 - 22:00", note: "Waktu santai malam hari" },
      { label: "Weekend", time: "09:00 - 11:00", note: "Sabtu & Minggu pagi" }
    ]
  }
];

export default function UploadSchedule() {
  return (
    <section id="tips" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Jadwal Upload Terbaik</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Algoritma Shorts sangat bergantung pada interaksi awal. Pastikan Anda upload saat audiens target Anda sedang aktif.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {schedules.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-white rounded-xl shadow-sm border border-zinc-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900">{item.region}</h3>
              </div>

              <div className="space-y-4">
                {item.times.map((t, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-zinc-100 group hover:border-red-200 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:text-red-500 transition-colors">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-zinc-900">{t.label}</p>
                        <p className="text-xs text-zinc-500">{t.note}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-zinc-900 text-white text-sm font-mono rounded-lg">
                        {t.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 p-6 rounded-3xl bg-amber-50 border border-amber-100 flex items-start gap-4"
        >
          <Info className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-amber-900 mb-1">Tips Pro: Konsistensi & Analitik</h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              Jadwal di atas adalah panduan umum. Selalu cek tab <strong>"Analytics"</strong> di YouTube Studio Anda untuk melihat kapan audiens spesifik Anda paling aktif. Konsistensi (misal: 1-2 Shorts per hari) jauh lebih penting daripada jam upload yang sempurna.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
