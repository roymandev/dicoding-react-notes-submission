import { SiVite, SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si';

interface TechProps {
  Icon: React.ElementType;
  children: string;
  href: string;
}

function Tech({ Icon, children, href }: TechProps) {
  return (
    <a
      className="flex gap-3 items-center py-3 px-6 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-xl shadow transition-colors"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon className="w-6 h-6" />
      {children}
    </a>
  );
}

function App() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen text-center text-gray-300 bg-gray-900">
      <p className="text-5xl ">Hello, This is</p>
      <h1 className="text-8xl font-bold text-white">React TS Starter</h1>
      <div className="flex flex-wrap gap-3 justify-center max-w-3xl text-2xl">
        <Tech href="https://vitejs.dev/" Icon={SiVite}>
          Vite
        </Tech>
        <Tech href="https://reactjs.org/" Icon={SiReact}>
          React
        </Tech>
        <Tech href="https://www.typescriptlang.org/" Icon={SiTypescript}>
          Typescript
        </Tech>
        <Tech href="https://tailwindcss.com/" Icon={SiTailwindcss}>
          Tailwindcss
        </Tech>
      </div>
    </div>
  );
}

export default App;
