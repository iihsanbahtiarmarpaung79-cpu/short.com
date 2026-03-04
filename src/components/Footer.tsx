import { motion } from 'motion/react';
import { Youtube, Instagram, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-600 p-1.5 rounded-lg">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-900">ShortsMaster</span>
            </div>
            <p className="text-zinc-600 max-w-sm mb-8">
              Membantu kreator Indonesia menguasai platform video pendek dengan edukasi berbasis data dan teknologi AI.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-red-600 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Produk</h4>
            <ul className="space-y-4 text-sm text-zinc-600">
              <li><a href="#" className="hover:text-red-600">Learning Center</a></li>
              <li><a href="#" className="hover:text-red-600">AI Script Generator</a></li>
              <li><a href="#" className="hover:text-red-600">Niche Research</a></li>
              <li><a href="#" className="hover:text-red-600">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Perusahaan</h4>
            <ul className="space-y-4 text-sm text-zinc-600">
              <li><a href="#" className="hover:text-red-600">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-red-600">Karir</a></li>
              <li><a href="#" className="hover:text-red-600">Kontak</a></li>
              <li><a href="#" className="hover:text-red-600">Kebijakan Privasi</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
          <p>© 2024 ShortsMaster. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Made with ❤️ for Creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
