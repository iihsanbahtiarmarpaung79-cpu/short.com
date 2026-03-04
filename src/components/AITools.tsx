import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, Loader2, Copy, Check, FileText } from 'lucide-react';
import { generateShortsIdeas, generateScript } from '../services/gemini';
import Markdown from 'react-markdown';

export default function AITools() {
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [ideas, setIdeas] = useState<any[]>([]);
  const [selectedIdea, setSelectedIdea] = useState<any>(null);
  const [script, setScript] = useState('');
  const [scriptLoading, setScriptLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerateIdeas = async () => {
    if (!niche) return;
    setLoading(true);
    try {
      const result = await generateShortsIdeas(niche);
      setIdeas(result);
      setSelectedIdea(null);
      setScript('');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateScript = async (idea: any) => {
    setSelectedIdea(idea);
    setScriptLoading(true);
    try {
      const result = await generateScript(`Judul: ${idea.title}, Hook: ${idea.hook}, Isi: ${idea.content}`);
      setScript(result || '');
    } catch (error) {
      console.error(error);
    } finally {
      setScriptLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(script);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-tools" className="py-24 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4 flex items-center justify-center gap-3">
            <Sparkles className="text-amber-500" />
            Shorts AI Assistant
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Gunakan kekuatan AI untuk riset ide dan pembuatan skrip dalam hitungan detik.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input & Ideas */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-200">
              <label className="block text-sm font-bold text-zinc-700 mb-2 uppercase tracking-wider">
                Apa Niche Channel Kamu?
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="Contoh: Memasak, Gaming, Edukasi AI..."
                  className="flex-1 px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                />
                <button
                  onClick={handleGenerateIdeas}
                  disabled={loading || !niche}
                  className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 disabled:opacity-50 transition-all flex items-center gap-2"
                >
                  {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Send className="w-5 h-5" />}
                  Cari Ide
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {ideas.map((idea, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-6 rounded-3xl border transition-all cursor-pointer group ${
                    selectedIdea === idea 
                      ? 'bg-red-50 border-red-200' 
                      : 'bg-white border-zinc-200 hover:border-red-200'
                  }`}
                  onClick={() => handleGenerateScript(idea)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-zinc-900 group-hover:text-red-600 transition-colors">
                      {idea.title}
                    </h3>
                    <div className="bg-zinc-100 px-2 py-1 rounded text-[10px] font-bold uppercase text-zinc-500">
                      Ide #{idx + 1}
                    </div>
                  </div>
                  <p className="text-sm text-zinc-600 mb-4">{idea.content}</p>
                  <div className="flex items-center gap-4">
                    <div className="text-xs font-medium text-zinc-400">
                      Hook: <span className="text-zinc-700 italic">"{idea.hook}"</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Script Output */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="bg-zinc-900 rounded-3xl p-8 min-h-[500px] text-zinc-300 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-amber-500 to-red-500" />
                
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-red-500" />
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Skrip Generator</span>
                  </div>
                  {script && (
                    <button 
                      onClick={copyToClipboard}
                      className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white"
                    >
                      {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                    </button>
                  )}
                </div>

                <AnimatePresence mode="wait">
                  {scriptLoading ? (
                    <motion.div 
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center h-[300px] space-y-4"
                    >
                      <Loader2 className="w-10 h-10 text-red-500 animate-spin" />
                      <p className="text-zinc-500 font-medium animate-pulse">Menyusun skrip viral...</p>
                    </motion.div>
                  ) : script ? (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="prose prose-invert prose-sm max-w-none"
                    >
                      <Markdown>{script}</Markdown>
                    </motion.div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-[300px] text-center space-y-4 opacity-30">
                      <Sparkles className="w-16 h-16" />
                      <p className="max-w-[200px]">Pilih ide di sebelah kiri untuk membuat skrip otomatis.</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
