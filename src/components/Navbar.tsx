import React from 'react';
import { Youtube, BookOpen, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 p-1.5 rounded-lg">
              <Youtube className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900">ShortsMaster</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#belajar" className="text-sm font-medium text-zinc-600 hover:text-red-600 transition-colors">Belajar</a>
            <a href="#ai-tools" className="text-sm font-medium text-zinc-600 hover:text-red-600 transition-colors">AI Tools</a>
            <a href="#tips" className="text-sm font-medium text-zinc-600 hover:text-red-600 transition-colors">Tips Viral</a>
            <button className="bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
              Mulai Sekarang
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-zinc-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 py-4 px-4 space-y-4">
          <a href="#belajar" className="block text-sm font-medium text-zinc-600">Belajar</a>
          <a href="#ai-tools" className="block text-sm font-medium text-zinc-600">AI Tools</a>
          <a href="#tips" className="block text-sm font-medium text-zinc-600">Tips Viral</a>
          <button className="w-full bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-medium">
            Mulai Sekarang
          </button>
        </div>
      )}
    </nav>
  );
}
