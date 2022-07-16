import { useAtomValue, useSetAtom } from 'jotai';
import { RiArchiveFill, RiArchiveLine, RiDeleteBin2Line } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import {
  atomNotesDeleteSelected,
  atomNotesSelected,
  atomNotesSelectedToggleArchive,
} from '../stores/noteStore';
import { showFormattedDate } from '../utils/data';
import BaseButton from './BaseButton';

function NoteEditorHead() {
  const selectedNote = useAtomValue(atomNotesSelected);
  const selectedNoteToggleArchive = useSetAtom(atomNotesSelectedToggleArchive);

  const deleteNote = useSetAtom(atomNotesDeleteSelected);

  return (
    <div className="flex gap-1 items-center p-1 border-b border-slate-700">
      <p className="px-2">
        Created: {selectedNote && showFormattedDate(selectedNote.createdAt)}
      </p>
      <BaseButton
        className={twMerge(
          'p-2 ml-auto',
          selectedNote?.archived && 'text-emerald-500',
        )}
        onClick={selectedNoteToggleArchive}
      >
        {selectedNote?.archived ? (
          <RiArchiveFill className="w-5 h-5" />
        ) : (
          <RiArchiveLine className="w-5 h-5" />
        )}
      </BaseButton>
      <BaseButton
        className="p-2 text-rose-500/60 hover:text-rose-500"
        onClick={deleteNote}
      >
        <RiDeleteBin2Line className="w-5 h-5" />
      </BaseButton>
    </div>
  );
}

export default NoteEditorHead;
