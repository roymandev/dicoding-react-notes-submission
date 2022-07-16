import { useAtomValue } from 'jotai';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import { atomNotesArchived } from '../stores/noteStore';
import BaseButton from './BaseButton';
import NoteListItems from './NoteListItems';

interface NoteListArchivedProps {
  isOpen: boolean;
  onToggle: () => void;
}

function NoteListArchived({ isOpen, onToggle }: NoteListArchivedProps) {
  const notes = useAtomValue(atomNotesArchived);

  return (
    <section
      className={twMerge(
        'overflow-hidden mt-auto',
        isOpen ? 'h-full' : 'h-[45px]',
      )}
    >
      <div
        className={twMerge(
          'flex items-center w-full rounded-none border-slate-700 font-medium',
          isOpen && 'border-b',
        )}
      >
        <h2 className="py-2 px-3 text-xl">Archived Notes</h2>
        <span className="px-3 text-slate-400 bg-slate-900/80 rounded">
          {notes.length}
        </span>
        <BaseButton className="p-2 mr-1 ml-auto" onClick={() => onToggle()}>
          {isOpen ? (
            <RiArrowDownSLine className="w-5 h-5" />
          ) : (
            <RiArrowUpSLine className="w-5 h-5" />
          )}
        </BaseButton>
      </div>
      <NoteListItems notes={notes} />
    </section>
  );
}

export default NoteListArchived;
