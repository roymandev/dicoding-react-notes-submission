import { atom } from 'jotai';
import { getInitialData } from '../utils/data';
import { Note } from '../utils/types';

// State
export const atomNotesAll = atom(getInitialData());
export const atomNotesSelected = atom<Note | null>(null);

// Getter
export const atomNotesActive = atom((get) => get(atomNotesAll).filter((note) => !note.archived));
export const atomNotesArchived = atom((get) => get(atomNotesAll).filter((note) => note.archived));

// Setter
export const atomNotesSetSelected = atom(null, (get, set, updated: Note) => {
  set(atomNotesSelected, updated);
  set(
    atomNotesAll,
    get(atomNotesAll).map((note) => (note.id === updated.id ? updated : note)),
  );
});

// Actions
export const atomNotesDeleteSelected = atom(null, (get, set) => {
  const selectedNote = get(atomNotesSelected);
  if (selectedNote) {
    set(
      atomNotesAll,
      get(atomNotesAll).filter((note) => note.id !== selectedNote.id),
    );
    set(atomNotesSelected, get(selectedNote.archived ? atomNotesArchived : atomNotesActive)[0] ?? null);
  }
});

export const atomNotesSelectedToggleArchive = atom(null, (get, set) => {
  const selectedNote = get(atomNotesSelected);
  if (selectedNote) set(atomNotesSetSelected, { ...selectedNote, archived: !selectedNote.archived });
});

export const atomNotesAdd = atom(null, (get, set) => {
  const createdDate = Date.now();
  const newNote = { id: createdDate, createdAt: new Date().toISOString(), title: '', body: '', archived: false };

  set(atomNotesAll, [newNote, ...get(atomNotesAll)]);
  set(atomNotesSelected, newNote);
});
