import { MonthsGrid } from "@/components/months-grid";
import { getMonthsWithDays } from "./data";

export default function Home() {
  const dates = getMonthsWithDays();

  return (
    <div className="pb-10">
      <h2 className="text-center text-2xl mb-2">A year in the life</h2>
      <header className="flex items-center gap-x-2">
        <img
          src="/icon.jpeg"
          className="rounded-full h-10 aspect-square"
          alt=""
        />
        <div>
          <h1 className="text-xl">Josue A.</h1>
          <h1>@josuerhea</h1>
        </div>
      </header>

      <MonthsGrid dates={dates} />
    </div>
  );
}
