import Task1 from "./components/task1/Task1";
import Task2 from "./components/task2/Task2";
import Task3 from "./components/task3/Task3";
import Task4 from "./components/task4/Task4";
import ErrorBoundary from "./components/task4/ErrorBoundary";
import Task5 from "./components/task5/Task5";
import Task6 from "./components/task6/Task6";
import Task7 from "./components/task7/Task7";
import Task8 from "./components/task8/Task8";

export default function App() {
  return (
    <ErrorBoundary>
      <header className="bg-neutral-950 text-white h-18 mb-8">
        <div className="max-w-7xl mx-auto h-full flex items-center">
          <h1 className="font-bold text-lg">React Advanced Tasks</h1>
        </div>
      </header>
      <main className="flex flex-col max-w-7xl mx-auto space-y-8">
        <Task1 />
        <Task2 />
        <Task3 />
        <Task4 />
        <Task5 />
        <Task6 />
        <Task7 />
        <Task8 />
      </main>
    </ErrorBoundary>
  );
}
