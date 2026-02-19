
import React, { useRef, useEffect, useState } from 'react';
import { TimelineEvent } from '../types';
import { Search, FileText, Fingerprint, Paperclip, AlertCircle, ExternalLink, Link as LinkIcon } from 'lucide-react';

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  total: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative flex flex-col md:flex-row items-center justify-center md:min-h-[300px] transition-all duration-1000 ease-out py-8
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
    >
      {/* Desktop Layout */}
      <div className={`hidden md:flex w-full items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="w-1/2 px-8 flex flex-col items-center">
          <div className={`group relative w-full max-w-xl p-6 bg-[#161619] border border-stone-800 rounded-sm shadow-2xl transition-all duration-500 hover:border-amber-900/50 hover:shadow-amber-950/30 
            ${isLeft ? 'mr-auto' : 'ml-auto'}
          `}>
            {/* Folder tab effect */}
            <div className="absolute -top-[1px] left-8 w-24 h-4 bg-[#161619] border-t border-l border-r border-stone-800 -translate-y-full rounded-t-lg flex items-center justify-center">
              <span className="text-[8px] font-typewriter text-stone-600 uppercase tracking-tighter font-bold">FECHA: {event.year}</span>
            </div>

            {/* Content */}
            <div className="flex gap-5 items-start">
              <div className="flex-shrink-0 mt-1">
                 <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center text-stone-500 group-hover:text-amber-500 transition-colors group-hover:border-amber-900/40">
                   {index % 3 === 0 ? <FileText size={22} /> : index % 3 === 1 ? <Fingerprint size={22} /> : <AlertCircle size={22} />}
                 </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-typewriter text-amber-500 font-bold text-xl drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">{event.year}</span>
                  <Paperclip size={18} className="text-stone-700 rotate-12" />
                </div>
                
                <h4 className="font-serif-elegant text-stone-100 text-lg mb-2 leading-tight group-hover:text-white transition-colors">{event.title}</h4>
                <p className="font-typewriter text-xs text-stone-400 mb-2 font-bold uppercase tracking-wider">— {event.author}</p>
                
                {/* Reference Box */}
                <div className="bg-black/40 p-3 border-l-2 border-stone-800 mb-4 group-hover:border-amber-900/40">
                  <p className="font-typewriter text-[11px] text-stone-500 leading-relaxed italic">
                    {event.reference}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-4">
                    {event.url && (
                      <a href={event.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-amber-600 hover:text-amber-400 transition-colors font-typewriter text-[10px] uppercase font-bold tracking-tighter">
                        <LinkIcon size={12} /> Ver documento
                      </a>
                    )}
                    {event.doi && (
                      <a href={event.doi} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-stone-500 hover:text-amber-500 transition-colors font-typewriter text-[10px] uppercase font-bold tracking-tighter">
                        <ExternalLink size={12} /> DOI Link
                      </a>
                    )}
                  </div>
                </div>

                {/* Role Section */}
                <div className="mt-4 pt-4 border-t border-stone-800/50 relative overflow-hidden">
                   <div className="flex items-center gap-2 mb-2 text-stone-500 font-typewriter text-[10px] uppercase tracking-[0.2em] group-hover:text-amber-500 transition-colors">
                     <Search size={12} /> Rol en el proyecto
                   </div>
                   <div className="font-typewriter text-sm text-stone-400 group-hover:text-stone-200 transition-colors bg-stone-900/30 p-3 rounded border border-transparent group-hover:border-stone-800/50 leading-relaxed">
                      {event.role}
                   </div>
                   
                   {/* Detective Flashlight Effect on Hover */}
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Marker */}
        <div className="relative z-40 w-10 flex justify-center">
          <div className="w-5 h-5 bg-stone-900 border-2 border-stone-700 rounded-full flex items-center justify-center shadow-lg transition-all group-hover:border-amber-600 group-hover:scale-125">
            <div className="w-2 h-2 bg-stone-700 rounded-full group-hover:bg-amber-600"></div>
          </div>
        </div>

        <div className="w-1/2"></div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full px-4 mb-8">
        <div className="relative p-6 bg-[#161619] border border-stone-800 rounded-sm shadow-xl">
          <div className="flex flex-col gap-3">
            <span className="font-typewriter text-amber-500 font-bold text-lg">{event.year}</span>
            <h4 className="font-serif-elegant text-stone-100 text-lg leading-tight">{event.title}</h4>
            <p className="font-typewriter text-xs text-stone-400 italic">— {event.author}</p>
            
            <div className="bg-black/50 p-2 rounded border border-stone-800/50">
               <p className="font-typewriter text-[10px] text-stone-500 italic mb-2">{event.reference}</p>
               <div className="flex gap-4">
                  {event.url && <a href={event.url} target="_blank" className="text-amber-600 font-typewriter text-[10px] font-bold uppercase">Link</a>}
                  {event.doi && <a href={event.doi} target="_blank" className="text-stone-500 font-typewriter text-[10px] font-bold uppercase">DOI</a>}
               </div>
            </div>

            <div className="pt-4 border-t border-stone-800">
              <span className="font-typewriter text-[10px] uppercase text-amber-600 mb-1 block tracking-wider">Rol en el Proyecto:</span>
              <p className="font-typewriter text-sm text-stone-300 leading-relaxed">{event.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
