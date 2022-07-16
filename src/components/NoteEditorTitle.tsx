import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { atomNotesSelected, atomNotesSetSelected } from '../stores/noteStore';
import AutoResizeTextarea from './AutoResizeTextarea';

function NoteEditorTitle() {
  const selectedNote = useAtomValue(atomNotesSelected);
  const setSelectedNote = useSetAtom(atomNotesSetSelected);
  const [titleLength, setTitleLength] = useState(0);
  const [editTitle, setEditTitle] = useState(false);

  useEffect(
    () => setTitleLength(selectedNote?.title.length || 0),
    [selectedNote],
  );

  const onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e,
  ) => {
    const newTitle = e.target.value;
    if (selectedNote && newTitle.length <= 50) {
      setTitleLength(newTitle.length);
      setSelectedNote({ ...selectedNote, title: newTitle });
    }
  };

  return (
    <div className="flex items-center pr-4">
      <AutoResizeTextarea
        parentClass="flex-1 text-2xl min-h-[56px]"
        className="py-3 px-4 placeholder:text-slate-500 bg-transparent outline-none transition-colors"
        placeholder="Title"
        value={selectedNote?.title || ''}
        onChange={onChangeHandler}
        onFocus={() => setEditTitle(true)}
        onBlur={() => setEditTitle(false)}
      />
      <span
        className={twMerge(
          'transition-opacity',
          !editTitle && 'opacity-0',
          titleLength === 50 && 'text-rose-500',
        )}
      >
        {titleLength}/50
      </span>
    </div>
  );
}

export default NoteEditorTitle;
