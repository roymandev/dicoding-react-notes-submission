import { useAtom } from 'jotai';
import { twMerge } from 'tailwind-merge';
import { atomNotesSelected } from '../stores/noteStore';
import { Note } from '../utils/types';
import BaseButton from './BaseButton';

interface NoteListItemsProps {
  notes: Note[];
}

function NoteListItems({ notes }: NoteListItemsProps) {
  const [selectedNote, setSelectedNote] = useAtom(atomNotesSelected);

  return (
    <ul className="flex overflow-y-auto flex-col flex-1 gap-1 p-1 text-slate-400">
      {notes.length ? (
        notes.map((note) => (
          <li key={note.id}>
            <BaseButton
              className={twMerge(
                'py-1 px-2 w-full text-left',
                selectedNote?.id === note.id && 'bg-slate-700 text-slate-300',
              )}
              onClick={() => setSelectedNote(note)}
            >
              {note.title || '(Untitled)'}
            </BaseButton>
          </li>
        ))
      ) : (
        <li className="px-1">No notes</li>
      )}
    </ul>
  );
}

export default NoteListItems;
