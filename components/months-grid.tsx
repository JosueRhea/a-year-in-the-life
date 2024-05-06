"use client";

import { MonthWithDays } from "@/app/data";
import { motion } from "framer-motion";
import { Month } from "./month";

interface Props {
  dates: MonthWithDays[];
}

export const MonthsGrid = ({ dates }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      {dates.map((date, idx) => (
        <motion.div
          key={date.month}
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: idx * 0.1,
              duration: 0.5,
            },
          }}
        >
          <Month date={date} />
        </motion.div>
      ))}
    </div>
  );
};
