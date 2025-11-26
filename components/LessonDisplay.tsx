
import React from 'react';
// Fix: The 'Lesson' type is defined in '../types.ts', not '../constants.ts'.
import type { Lesson } from '../types';

interface LessonDisplayProps {
  lesson: Lesson;
  currentNoteIndex: number;
  isComplete: boolean;
  onReset: () => void;
}

export const LessonDisplay: React.FC<LessonDisplayProps> = ({ lesson, currentNoteIndex, isComplete, onReset }) => {
  if (isComplete) {
    return (
      <div className="flex flex-col items-center gap-4 p-8 bg-gray-800/50 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-green-400">Lesson Complete!</h2>
        <p className="text-xl">You played "{lesson.title}" perfectly.</p>
        <button 
          onClick={onReset}
          className="mt-4 px-6 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-md font-bold transition-transform transform hover:scale-105"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-wide">{lesson.title}</h2>
      <p className="text-lg md:text-xl text-gray-300">
        Follow the highlighted keys to play the melody.
      </p>
      <div className="text-sm text-gray-400">
        Progress: Note {currentNoteIndex + 1} of {lesson.sequence.length}
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-4 p-4 bg-gray-800 rounded-lg max-w-full overflow-x-auto">
        {lesson.sequence.map((note, index) => (
          <span 
            key={index}
            className={`px-3 py-1 rounded-md font-mono transition-all duration-200 ${
              index === currentNoteIndex
                ? 'bg-cyan-500 text-gray-900 font-bold scale-110'
                : 'bg-gray-700 text-gray-300'
            }`}
          >
            {note}
          </span>
        ))}
      </div>
    </div>
  );
};