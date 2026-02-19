
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-stone-800 bg-black/80 backdrop-blur-md">
      {/* Crime Scene Tape Decoration */}
      <div className="h-1.5 w-full flex overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div 
            key={i} 
            className={`h-full flex-shrink-0 w-32 ${i % 2 === 0 ? 'bg-amber-500' : 'bg-black'} flex items-center justify-center`}
          >
            <span className="text-[8px] font-bold text-black font-typewriter rotate-[-5deg]">
              {i % 2 === 0 ? 'CRIME SCENE' : ''}
            </span>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-600 rounded-sm flex items-center justify-center text-black font-bold border-2 border-black rotate-3 shadow-lg">
            B
          </div>
          <div className="flex flex-col">
            <span className="font-serif-elegant text-lg text-stone-100 leading-tight">Benford Noir</span>
            <span className="font-typewriter text-[10px] uppercase text-stone-500 tracking-widest font-bold">Investigación Forense</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
