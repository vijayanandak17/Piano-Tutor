
import React, { useState, useCallback, useEffect } from 'react';
import { Piano } from './components/Piano';
import { LessonDisplay } from './components/LessonDisplay';
import { usePianoSounds } from './hooks/usePianoSounds';
// Fix: The 'Lesson' type is defined in 'types.ts', not 'constants.ts'.
import { LESSONS } from './constants';
import type { Feedback, Lesson } from './types';

const App: React.FC = () => {
  const [activeLessonIndex, setActiveLessonIndex] = useState<number>(0);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const [feedback, setFeedback] = useState<Feedback>('idle');
  const [isLessonComplete, setIsLessonComplete] = useState(false);
  const { playNote } = usePianoSounds();

  const activeLesson = LESSONS[activeLessonIndex];
  const noteToPlay = activeLesson ? activeLesson.sequence[currentNoteIndex] : null;

  const handleKeyPlay = useCallback((note: string) => {
    playNote(note);

    if (!activeLesson || !noteToPlay || isLessonComplete) return;

    if (note === noteToPlay) {
      setFeedback('correct');
      
      setTimeout(() => {
        if (currentNoteIndex === activeLesson.sequence.length - 1) {
          setIsLessonComplete(true);
        } else {
          setCurrentNoteIndex(prev => prev + 1);
        }
        setFeedback('idle');
      }, 300);
    } else {
      setFeedback('incorrect');
      setTimeout(() => {
        setFeedback('idle');
      }, 500);
    }
  }, [playNote, activeLesson, noteToPlay, isLessonComplete, currentNoteIndex]);

  const resetLesson = useCallback(() => {
    setCurrentNoteIndex(0);
    setIsLessonComplete(false);
    setFeedback('idle');
  }, []);

  const selectLesson = (index: number) => {
    setActiveLessonIndex(index);
    resetLesson();
  };

  useEffect(() => {
    resetLesson();
  }, [activeLessonIndex, resetLesson]);

  const MusicNoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-cyan-400">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col font-sans selection:bg-cyan-500 selection:text-cyan-900">
      <header className="p-4 border-b border-gray-700 shadow-lg bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MusicNoteIcon />
            <h1 className="text-2xl font-bold tracking-wider">Piano Tutor</h1>
          </div>
          <div className="relative">
            <select
              onChange={(e) => selectLesson(Number(e.target.value))}
              value={activeLessonIndex}
              className="bg-gray-700 border border-gray-600 rounded-md py-2 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
            >
              {LESSONS.map((lesson, index) => (
                <option key={index} value={index}>
                  {lesson.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center p-4 container mx-auto text-center pb-80 md:pb-96">
        {activeLesson && (
          <LessonDisplay 
            lesson={activeLesson} 
            currentNoteIndex={currentNoteIndex} 
            isComplete={isLessonComplete}
            onReset={resetLesson}
          />
        )}
      </main>
      
      <footer className="fixed bottom-0 left-0 right-0 z-10 p-2 sm:p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
        <Piano onKeyPlay={handleKeyPlay} noteToHighlight={isLessonComplete ? null : noteToPlay} feedback={feedback}/>
      </footer>
    </div>
  );
};

export default App;