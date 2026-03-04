import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY is not defined. AI features will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

const ai = getAI();

export async function generateShortsIdeas(niche: string) {
  if (!ai) throw new Error("AI is not initialized");
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Berikan 5 ide YouTube Shorts yang viral untuk niche: ${niche}. 
    Berikan dalam format JSON dengan struktur: 
    [{ "title": "...", "hook": "...", "content": "...", "cta": "..." }]`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            hook: { type: Type.STRING, description: "Kalimat pembuka yang menarik" },
            content: { type: Type.STRING, description: "Ringkasan isi video" },
            cta: { type: Type.STRING, description: "Call to action di akhir" }
          },
          required: ["title", "hook", "content", "cta"]
        }
      }
    }
  });
  return JSON.parse(response.text || "[]");
}

export async function generateScript(idea: string) {
  if (!ai) throw new Error("AI is not initialized");
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Buat skrip YouTube Shorts (durasi < 60 detik) berdasarkan ide ini: "${idea}". 
    Gunakan format Markdown. Sertakan instruksi visual (apa yang harus ditampilkan di layar) dan narasi.`,
  });
  return response.text;
}
