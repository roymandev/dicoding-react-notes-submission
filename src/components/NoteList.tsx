import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useState } from 'react';
import { RiAddFill, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import { atomNotesActive, atomNotesAdd, atomNotesArchived, atomNotesSelected } from '../stores/noteStore';
import BaseButton from './BaseButton';

interface NoteListProps {
  className?: string;
}

function NoteList({ className }: NoteListProps) {
  const notes = useAtomValue(atomNotesActive);
  const archivedNote = useAtomValue(atomNotesArchived);
  const [selectedNote, setSelectedNote] = useAtom(atomNotesSelected);
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
        <ul className="flex flex-col gap-1 p-1 text-slate-400">
          {archivedNote.map((note) => (
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
