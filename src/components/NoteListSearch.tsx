import { useSetAtom } from 'jotai';
import { atomNotesSearch } from '../stores/noteStore';

function NoteListSearch() {
  const setSearch = useSetAtom(atomNotesSearch);

  return (
    <div className="p-1">
      <input
        className="py-1 px-2 w-full h-9 bg-slate-900/40 rounded border border-slate-700 focus:border-slate-500 outline-none"
        type="text"
        placeholder="Search notes"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default NoteListSearch;
