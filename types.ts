
export type PianoKeyType = 'white' | 'black';

export interface PianoKey {
  note: string;
  type: PianoKeyType;
  left?: string; // Optional for black key positioning
}

export interface Lesson {
  title: string;
  sequence: string[];
}

export type Feedback = 'idle' | 'correct' | 'incorrect';
