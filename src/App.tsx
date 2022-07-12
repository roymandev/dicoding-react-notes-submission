import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import TheHeader from './components/TheHeader';

function App() {
  return (
    <>
      <TheHeader />
      <main className="flex mx-auto max-w-5xl min-h-[700px] bg-slate-800 rounded divide-x divide-slate-700 shadow">
        <NoteList className="w-1/3" />
        <NoteEditor className="w-2/3" />
      </main>
    </>
  );
}

export default App;
