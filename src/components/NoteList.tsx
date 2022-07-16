import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import NoteListActive from './NoteListActive';
import NoteListArchived from './NoteListArchived';
import NoteListSearch from './NoteListSearch';

interface NoteListProps {
  className?: string;
}

function NoteList({ className }: NoteListProps) {
  const [openArchive, setOpenArchive] = useState(false);

  return (
    <aside
      className={twMerge(
        className,
        'flex flex-col h-[400px] sm:h-auto divide-y divide-slate-700',
      )}
    >
      <NoteListSearch />

      <NoteListActive isOpen={!openArchive} />

      <NoteListArchived
        isOpen={openArchive}
        onToggle={() => setOpenArchive(!openArchive)}
      />
    </aside>
  );
}

export default NoteList;
