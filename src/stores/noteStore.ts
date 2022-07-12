import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { getInitialData } from '../utils/data';
import { Note } from '../utils/types';

// State
export const atomNotes = atomWithStorage('notes', getInitialData());

export const atomNotesSelected = atomWithStorage<Note | null>('notesSelectedIndex', null);

// Setter
export const atomNotesSetSelected = atom(null, (get, set, updated: Note) => {
  set(atomNotesSelected, updated);
  set(
    atomNotes,
    get(atomNotes).map((note) => (note.id === updated.id ? updated : note)),
  );
});

// Actions
export const atomNotesDeleteSelected = atom(null, (get, set) => {
  set(
    atomNotes,
    get(atomNotes).filter((note) => note.id !== get(atomNotesSelected)?.id),
  );
  set(atomNotesSelected, get(atomNotes)[0] ?? null);
});

export const atomNotesSelectedToggleArchive = atom(null, (get, set) => {
  const selectedNote = get(atomNotesSelected);
  if (selectedNote) set(atomNotesSetSelected, { ...selectedNote, archived: !selectedNote.archived });
});

export const atomNotesAdd = atom(null, (get, set) => {
  const createdDate = Date.now();
  const newNote = { id: createdDate, createdAt: new Date().toISOString(), title: '', body: '', archived: false };

  set(atomNotes, [newNote, ...get(atomNotes)]);
  set(atomNotesSelected, newNote);
});
