
import React from 'react';
import { PIANO_KEYS } from '../constants';
import type { PianoKeyType, Feedback } from '../types';

interface PianoProps {
  onKeyPlay: (note: string) => void;
  noteToHighlight: string | null;
  feedback: Feedback;
}

const whiteKeys = PIANO_KEYS.filter(key => key.type === 'white');
const blackKeys = PIANO_KEYS.filter(key => key.type === 'black');

export const Piano: React.FC<PianoProps> = ({ onKeyPlay, noteToHighlight, feedback }) => {
  const getKeyClasses = (type: PianoKeyType, note: string) => {
    const baseClasses = {
      white: 'h-40 sm:h-56 md:h-64 bg-white border-2 border-gray-300 rounded-b-lg shadow-md active:bg-gray-200 transition-all duration-100 flex-1 relative text-gray-600',
      black: 'h-24 sm:h-32 md:h-40 w-[8%] bg-gray-800 border-2 border-black rounded-b-md shadow-lg active:bg-gray-700 transition-all duration-100 absolute z-10 text-white',
    };

    let classes = baseClasses[type];

    if (note === noteToHighlight) {
      classes += ' ring-4 ring-offset-2 ring-offset-gray-900 ring-cyan-500';
    } else if (feedback === 'incorrect') {
       classes += ' ring-4 ring-offset-2 ring-offset-gray-900 ring-red-500';
    }

    return classes;
  };

  const handleInteraction = (note: string) => (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    onKeyPlay(note);
  };

  return (
    <div className="w-full max-w-4xl mx-auto select-none">
      <div className="relative flex w-full">
        {whiteKeys.map(({ note }) => (
          <button
            key={note}
            className={getKeyClasses('white', note)}
            onMouseDown={handleInteraction(note)}
            onTouchStart={handleInteraction(note)}
          >
             <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-semibold">{note}</span>
          </button>
        ))}
        {blackKeys.map(({ note, left }) => (
          <button
            key={note}
            className={getKeyClasses('black', note)}
            style={{ left }}
            onMouseDown={handleInteraction(note)}
            onTouchStart={handleInteraction(note)}
          >
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-semibold">{note}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
