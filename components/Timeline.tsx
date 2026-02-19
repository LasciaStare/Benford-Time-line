
import React from 'react';
import { TimelineEvent, Era } from '../types';
import TimelineItem from './TimelineItem';

interface TimelineProps {
  data: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  // Group by era
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.era]) acc[item.era] = [];
    acc[item.era].push(item);
    return acc;
  }, {} as Record<Era, TimelineEvent[]>);

  const eras = Object.keys(groupedData) as Era[];

  return (
    <div className="relative py-12">
      {/* Central Thread */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-stone-800 hidden md:block transform -translate-x-1/2">
        <div className="sticky top-1/2 w-3 h-3 bg-red-600 border-2 border-black rounded-full -left-1 transform -translate-x-[2px] shadow-[0_0_15px_rgba(220,38,38,0.8)] z-30"></div>
      </div>

      {eras.map((era, eraIndex) => (
        <div key={era} className="mb-20">
          {/* Era Header */}
          <div className="relative z-20 flex justify-center mb-16">
            <div className="bg-[#121214] border-2 border-amber-900/50 px-8 py-3 rounded-sm shadow-2xl transform rotate-[-1deg]">
              <h3 className="font-serif-elegant text-xl md:text-2xl text-amber-200 text-center uppercase tracking-wide">
                {era}
              </h3>
              <div className="h-0.5 w-12 bg-red-600 mx-auto mt-2"></div>
            </div>
          </div>

          <div className="space-y-12 md:space-y-0 relative">
            {groupedData[era].map((event, index) => (
              <TimelineItem 
                key={event.id} 
                event={event} 
                index={index} 
                total={groupedData[era].length} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
