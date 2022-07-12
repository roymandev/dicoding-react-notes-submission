import { useAtomValue, useSetAtom } from 'jotai';
import { twMerge } from 'tailwind-merge';
import { atomNotesAdd, atomNotesSelected, atomNotesSetSelected } from '../stores/noteStore';
import BaseButton from './BaseButton';
import NoteEditorHead from './NoteEditorHead';
import NoteEditorTitle from './NoteEditorTitle';

interface NoteEditorProps {
  className?: string;
}

function NoteEditor({ className }: NoteEditorProps) {
  const selectedNote = useAtomValue(atomNotesSelected);
  const setSelectedNote = useSetAtom(atomNotesSetSelected);
  const addNote = useSetAtom(atomNotesAdd);

  return (
    <div className={twMerge(className, 'flex flex-col')}>
      {selectedNote ? (
        <>
          <NoteEditorHead />
          <NoteEditorTitle />

          <textarea
            placeholder="Content"
            className="flex-1 px-4 pb-3 placeholder:text-slate-500 bg-transparent outline-none transition-colors resize-none"
            spellCheck="false"
            value={selectedNote.body || ''}
            onChange={(e) => setSelectedNote({ ...selectedNote, body: e.target.value })}
          />
        </>
      ) : (
        <div className="m-auto space-y-5 text-3xl text-center">
          <p>Select notes or</p>
          <BaseButton variant="primary" className="py-2 px-5" onClick={addNote}>
            Add New Notes
          </BaseButton>
        </div>
      )}
    </div>
  );
}

export default NoteEditor;
