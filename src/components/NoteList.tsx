import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { RiAddFill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import { atomNotes, atomNotesAdd, atomNotesSelected } from '../stores/noteStore';
import BaseButton from './BaseButton';

interface NoteListProps {
  className?: string;
}

function NoteList({ className }: NoteListProps) {
  const notes = useAtomValue(atomNotes);
  const [selectedNote, setSelectedNote] = useAtom(atomNotesSelected);
  const addNote = useSetAtom(atomNotesAdd);

  return (
    <aside className={twMerge(className, 'flex flex-col')}>
      <section>
        <div className="flex items-center border-b border-slate-700">
          <h2 className="py-2 px-3 text-xl font-medium">Notes</h2>
          <BaseButton className="p-2 mr-1 ml-auto" onClick={addNote}>
            <RiAddFill className="w-5 h-5" />
          </BaseButton>
        </div>
        <ul className="flex flex-col gap-1 p-1 text-slate-400">
          {notes.map((note) => (
            <li key={note.id}>
              <BaseButton
                className={twMerge(
                  'py-1 px-2 w-full text-left',
                  selectedNote?.id === note.id && 'bg-slate-700 text-slate-300',
                )}
                onClick={() => setSelectedNote(note)}
              >
                {note.title || 'Untitled'}
              </BaseButton>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

export default NoteList;
