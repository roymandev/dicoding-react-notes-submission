import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import TheFooter from './components/TheFooter';
import TheHeader from './components/TheHeader';

function App() {
  return (
    <>
      <TheHeader />
      <main className="flex flex-col-reverse mx-auto max-w-5xl bg-slate-800 rounded divide-slate-700 shadow sm:flex-row sm:h-[700px] sm:divide-x">
        <NoteList className="sm:w-1/3" />
        <NoteEditor className="sm:w-2/3" />
      </main>
      <TheFooter />
    </>
  );
}

export default App;
