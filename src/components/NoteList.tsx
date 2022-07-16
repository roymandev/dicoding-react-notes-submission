import { useAtomValue, useSetAtom } from 'jotai';
import { useState } from 'react';
import { RiAddFill, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import { atomNotesActive, atomNotesAdd, atomNotesArchived } from '../stores/noteStore';
import BaseButton from './BaseButton';
import NoteListItems from './NoteListItems';

interface NoteListProps {
  className?: string;
}

function NoteList({ className }: NoteListProps) {
  const notes = useAtomValue(atomNotesActive);
  const archivedNote = useAtomValue(atomNotesArchived);
  const addNote = useSetAtom(atomNotesAdd);
  const [openArchive, setOpenArchive] = useState(false);

  return (
    <aside className={twMerge(className, 'flex flex-col')}>
      <section className={openArchive ? 'h-0 overflow-hidden' : undefined}>
        <div className="flex items-center border-b border-slate-700">
          <h2 className="py-2 px-3 text-xl font-medium">Notes</h2>
          <BaseButton className="p-2 mr-1 ml-auto" onClick={addNote}>
            <RiAddFill className="w-5 h-5" />
          </BaseButton>
        </div>
        <NoteListItems notes={notes} />
      </section>

      <section className={twMerge('overflow-hidden mt-auto transition-all', openArchive ? 'flex-1' : 'h-[45px]')}>
        <div
          className={twMerge(
            'flex items-center w-full rounded-none border-slate-700',
            openArchive ? 'border-b' : 'border-t',
          )}
        >
          <h2 className="py-2 px-3 text-xl font-medium">Archived Notes</h2>
          <BaseButton className="p-2 mr-1 ml-auto" onClick={() => setOpenArchive(!openArchive)}>
            {openArchive ? <RiArrowDownSLine className="w-5 h-5" /> : <RiArrowUpSLine className="w-5 h-5" />}
          </BaseButton>
        </div>
        <NoteListItems notes={archivedNote} />
      </section>
    </aside>
  );
}

export default NoteList;
