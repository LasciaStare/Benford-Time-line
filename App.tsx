
import React, { useState, useEffect } from 'react';
import { TIMELINE_DATA } from './constants';
import { Era } from './types';
import Timeline from './components/Timeline';
import Header from './components/Header';
import { ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  useEffect(() => {
    // Reveal animation on load logic if needed
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#0a0a0c] selection:bg-amber-900 selection:text-white">
      {/* Texture Overlays */}
      <div className="fixed inset-0 pointer-events-none grainy-bg z-50"></div>
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10"></div>
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] z-10"></div>

      <Header />

      <main className="max-w-7xl mx-auto px-4 pb-32 pt-20 relative z-20">
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-900/30 border border-red-500/30 text-red-500 font-typewriter text-xs uppercase tracking-[0.2em] mb-4">
            <ShieldCheck size={14} />
            Acceso Restringido: Nivel Forense
          </div>
          <h2 className="text-4xl md:text-6xl font-serif-elegant text-amber-500 mb-6 drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]">
            Expediente: La Ley de Benford
          </h2>
          <p className="max-w-2xl text-stone-400 font-typewriter italic text-sm md:text-base leading-relaxed">
            "En la naturaleza, los números no mienten por azar. Pero cuando la mano humana intenta esconder una huella, el primer dígito siempre la delata."
          </p>
        </div>

        <Timeline data={TIMELINE_DATA} />
      </main>

      <footer className="relative z-20 border-t border-stone-800 bg-black/80 py-12 px-4 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-60">
          <div className="font-typewriter text-xs text-stone-500 text-center md:text-left">
            © 2025 PROYECTO DE CIENCIA DE DATOS - UNINORTE
            <br />
            ESTADO DEL ARTE: ACTUALIZADO FEB 2025
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
