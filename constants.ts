
import type { PianoKey, Lesson } from './types';

export const NOTE_FREQUENCIES: { [key: string]: number } = {
  'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'E4': 329.63,
  'F4': 349.23, 'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'A4': 440.00,
  'A#4': 466.16, 'B4': 493.88, 'C5': 523.25, 'C#5': 554.37, 'D5': 587.33,
  'D#5': 622.25, 'E5': 659.25
};

export const PIANO_KEYS: PianoKey[] = [
  // Octave 4
  { note: 'C4', type: 'white' },
  { note: 'C#4', type: 'black', left: '6.2%' },
  { note: 'D4', type: 'white' },
  { note: 'D#4', type: 'black', left: '16.5%' },
  { note: 'E4', type: 'white' },
  { note: 'F4', type: 'white' },
  { note: 'F#4', type: 'black', left: '37.1%' },
  { note: 'G4', type: 'white' },
  { note: 'G#4', type: 'black', left: '47.5%' },
  { note: 'A4', type: 'white' },
  { note: 'A#4', type: 'black', left: '57.8%' },
  { note: 'B4', type: 'white' },
  // Octave 5
  { note: 'C5', type: 'white' },
  { note: 'C#5', type: 'black', left: '78.5%' },
  { note: 'D5', type: 'white' },
  { note: 'D#5', type: 'black', left: '88.8%' },
  { note: 'E5', type: 'white' },
];

export const LESSONS: Lesson[] = [
  {
    title: "C Major Scale",
    sequence: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
  },
  {
    title: "Twinkle Twinkle Little Star",
    sequence: ['C4', 'C4', 'G4', 'G4', 'A4', 'A4', 'G4', 'F4', 'F4', 'E4', 'E4', 'D4', 'D4', 'C4']
  },
  {
    title: "Mary Had a Little Lamb",
    sequence: ['E4', 'D4', 'C4', 'D4', 'E4', 'E4', 'E4', 'D4', 'D4', 'D4', 'E4', 'G4', 'G4']
  },
  {
    title: "Happy Birthday (in F)",
    sequence: ['C4', 'C4', 'D4', 'C4', 'F4', 'E4', 'C4', 'C4', 'D4', 'C4', 'G4', 'F4', 'C4', 'C4', 'C5', 'A4', 'F4', 'E4', 'D4', 'A#4', 'A#4', 'A4', 'F4', 'G4', 'F4']
  },
  {
    title: "Row, Row, Row Your Boat",
    sequence: ['C4', 'C4', 'C4', 'D4', 'E4', 'E4', 'D4', 'E4', 'F4', 'G4', 'C5', 'C5', 'C5', 'G4', 'G4', 'G4', 'E4', 'E4', 'E4', 'C4', 'C4', 'C4', 'G4', 'F4', 'E4', 'D4', 'C4']
  },
  {
    title: "Jingle Bells",
    sequence: ['E4', 'E4', 'E4', 'E4', 'E4', 'E4', 'E4', 'G4', 'C4', 'D4', 'E4', 'F4', 'F4', 'F4', 'F4', 'F4', 'E4', 'E4', 'E4', 'E4', 'D4', 'D4', 'E4', 'D4', 'G4']
  },
  {
    title: "Ode to Joy",
    sequence: ['E4', 'E4', 'F4', 'G4', 'G4', 'F4', 'E4', 'D4', 'C4', 'C4', 'D4', 'E4', 'E4', 'D4', 'D4', 'E4', 'E4', 'F4', 'G4', 'G4', 'F4', 'E4', 'D4', 'C4', 'C4', 'D4', 'E4', 'D4', 'C4', 'C4']
  },
  {
    title: "Frère Jacques (in F)",
    sequence: ['F4', 'G4', 'A4', 'F4', 'F4', 'G4', 'A4', 'F4', 'A4', 'A#4', 'C5', 'A4', 'A#4', 'C5', 'C5', 'D5', 'C5', 'A#4', 'A4', 'F4', 'C5', 'D5', 'C5', 'A#4', 'A4', 'F4', 'F4', 'C4', 'F4', 'F4', 'C4', 'F4']
  },
  {
    title: "London Bridge",
    sequence: ['G4', 'A4', 'G4', 'F4', 'E4', 'F4', 'G4', 'D4', 'E4', 'F4', 'E4', 'F4', 'G4', 'G4', 'A4', 'G4', 'F4', 'E4', 'F4', 'G4', 'D4', 'G4', 'E4', 'C4']
  },
  {
    title: "Old MacDonald Had a Farm",
    sequence: ['C5', 'C5', 'C5', 'G4', 'A4', 'A4', 'G4', 'E5', 'E5', 'D5', 'D5', 'C5', 'G4', 'C5', 'C5', 'C5', 'G4', 'C5', 'C5', 'C5', 'C5', 'C5', 'C5', 'C5', 'C5', 'C5', 'C5', 'C5', 'G4', 'A4', 'A4', 'G4', 'E5', 'E5', 'D5', 'D5', 'C5']
  },
  {
    title: "When the Saints Go Marching In",
    sequence: ['C4', 'E4', 'F4', 'G4', 'C4', 'E4', 'F4', 'G4', 'C4', 'E4', 'F4', 'G4', 'E4', 'C4', 'E4', 'D4', 'E4', 'E4', 'D4', 'C4', 'C4', 'E4', 'G4', 'G4', 'F4']
  },
  {
    title: "Brahms' Lullaby",
    sequence: ['E4', 'E4', 'G4', 'E4', 'E4', 'G4', 'E4', 'G4', 'C5', 'B4', 'A4', 'A4', 'G4', 'D4', 'E4', 'F4', 'D4', 'D4', 'E4', 'F4', 'D4', 'F4', 'B4', 'A4', 'G4', 'B4', 'C5']
  },
  {
    title: "Au Clair de la Lune",
    sequence: ['C4', 'C4', 'C4', 'D4', 'E4', 'D4', 'C4', 'E4', 'D4', 'D4', 'C4', 'C4', 'C4', 'C4', 'D4', 'E4', 'D4', 'C4', 'E4', 'D4', 'D4', 'C4']
  }
];
