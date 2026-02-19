
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, User, Bot, Loader2 } from 'lucide-react';

// This is a decorative component to show "Senior Engineer" skills with Gemini API
const DetectiveChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Actúa como un detective de auditoría forense experto en la Ley de Benford. 
                   Responde de forma concisa y con estilo noir. Pregunta: ${userMsg}`,
        config: {
            systemInstruction: "Tu nombre es Agente Benford. Hablas como un detective de cine negro. Eres experto en fraude de datos."
        }
      });
      
      setMessages(prev => [...prev, { role: 'bot', text: response.text || 'El rastro se ha enfriado... intenta de nuevo.' }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Maldición, la conexión con la central está caída. (Error de API)' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <div className="relative group">
         {/* Floating Button */}
         <button 
           className="w-14 h-14 bg-amber-600 text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform peer"
         >
           <MessageSquare size={24} />
         </button>

         {/* Chat Window */}
         <div className="absolute bottom-16 right-0 w-80 bg-[#0f0f12] border border-stone-800 rounded-lg shadow-2xl invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden flex flex-col">
            <div className="bg-amber-600/10 p-4 border-b border-stone-800 flex items-center justify-between">
               <span className="font-typewriter text-xs font-bold text-amber-500 uppercase">Consultar al Agente</span>
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            
            <div className="h-64 overflow-y-auto p-4 space-y-4 font-typewriter text-xs">
               {messages.length === 0 && (
                 <p className="text-stone-500 italic">"Los números no mienten, pero la gente sí. ¿Qué quieres saber sobre el fraude?"</p>
               )}
               {messages.map((m, i) => (
                 <div key={i} className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : ''}`}>
                    {m.role === 'bot' && <Bot size={14} className="text-amber-500 mt-1" />}
                    <div className={`p-2 rounded max-w-[80%] ${m.role === 'user' ? 'bg-stone-800 text-stone-200' : 'bg-amber-900/20 text-stone-300'}`}>
                       {m.text}
                    </div>
                    {m.role === 'user' && <User size={14} className="text-stone-500 mt-1" />}
                 </div>
               ))}
               {loading && <div className="flex justify-center"><Loader2 size={16} className="animate-spin text-amber-500" /></div>}
            </div>

            <div className="p-3 border-t border-stone-800 flex gap-2">
               <input 
                 type="text" 
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                 placeholder="Escribe una pista..."
                 className="flex-1 bg-stone-900 border border-stone-800 rounded px-3 py-1 text-xs text-stone-200 focus:outline-none focus:border-amber-600 font-typewriter"
               />
               <button onClick={handleAsk} className="p-2 bg-amber-600 rounded text-black hover:bg-amber-500">
                 <Send size={14} />
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DetectiveChat;
