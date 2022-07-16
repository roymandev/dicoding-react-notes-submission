import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import NoteListActive from './NoteListActive';
import NoteListArchived from './NoteListArchived';

interface NoteListProps {
  className?: string;
}

function NoteList({ className }: NoteListProps) {
  const [openArchive, setOpenArchive] = useState(false);

  return (
    <aside className={twMerge(className, 'flex flex-col h-[400px] sm:h-auto')}>
      <NoteListActive isOpen={!openArchive} />

      <NoteListArchived
        isOpen={openArchive}
        onToggle={() => setOpenArchive(!openArchive)}
      />
    </aside>
  );
}

export default NoteList;
