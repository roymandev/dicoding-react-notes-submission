import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { getInitialData } from '../utils/data';
import { Note } from '../utils/types';

// State
export const atomNotes = atomWithStorage('notes', getInitialData());

export const atomNotesSelected = atomWithStorage<Note | null>('notesSelectedIndex', null);

// Actions
export const atomNotesDeleteSelected = atom(null, (get, set) => {
  const notes = get(atomNotes);
  set(
    atomNotes,
    notes.filter((note) => note.id !== get(atomNotesSelected)?.id),
  );
  set(atomNotesSelected, null);
});
