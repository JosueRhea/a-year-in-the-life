import { MonthWithDays } from "@/app/data";
import { motion } from "framer-motion";

interface Props {
  date: MonthWithDays;
}

export function Month({ date }: Props) {
  return (
    <div className="bg-zinc-900 text-zinc-50 p-4 rounded-xl shadow-lg shadow-zinc-700/50">
      <h2>{date.month}</h2>
      <ul className="grid grid-cols-7 gap-2 mt-2">
        {date.days.map((day, idx) => (
          <motion.li
            className="bg-zinc-700/40 rounded-lg h-8 w-full"
            key={day}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                delay: idx * 0.05,
              },
            }}
          ></motion.li>
        ))}
      </ul>
    </div>
  );
}
