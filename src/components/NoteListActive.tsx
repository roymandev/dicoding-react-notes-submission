import { useAtomValue, useSetAtom } from 'jotai';
import { RiAddFill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import { atomNotesActive, atomNotesAdd } from '../stores/noteStore';
import BaseButton from './BaseButton';
import NoteListItems from './NoteListItems';

interface NoteListActiveProps {
  isOpen: boolean;
}

function NoteListActive({ isOpen }: NoteListActiveProps) {
  const notes = useAtomValue(atomNotesActive);
  const addNoteHanlder = useSetAtom(atomNotesAdd);

  return (
    <section
      className={twMerge(
        'overflow-hidden flex-1 flex flex-col',
        !isOpen && 'hidden',
      )}
    >
      <div className="flex items-center font-medium border-b border-slate-700">
        <h2 className="py-2 px-3 text-xl">Notes</h2>
        <span className="px-3 text-slate-400 bg-slate-900/80 rounded">
          {notes.length}
        </span>
        <BaseButton className="p-2 mr-1 ml-auto" onClick={addNoteHanlder}>
          <RiAddFill className="w-5 h-5" />
        </BaseButton>
      </div>
      <NoteListItems notes={notes} />
    </section>
  );
}

export default NoteListActive;
