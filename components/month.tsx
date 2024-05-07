import { MonthWithDays, events } from "@/app/data";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useState } from "react";

interface Props {
  date: MonthWithDays;
}

interface DayProps {
  day: string;
  month: string;
  idx: number;
}

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
    },
  }),
  hidden: { opacity: 0, scale: 0 },
};

const eventDetail = {
  opened: {
    scale: 1,
    borderRadius: "0",
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    scale: 0,
    borderRadius: "100%",
    transition: {
      duration: 0.22,
    },
  },
  exit: {
    scale: 0,
    borderRadius: "50%",
    transition: {
      duration: 0.2,
    },
  },
};

function Day({ day, month, idx }: DayProps) {
  const [isOpened, setIsOpened] = useState(false);
  const event = events.find(
    (event) => event.month === month && event.day === day
  );

  if (event == null) {
    return (
      <motion.li
        className="rounded-lg h-8 w-full bg-zinc-700/40"
        initial="hidden"
        animate="visible"
        custom={idx}
        variants={variants}
      ></motion.li>
    );
  }

  return (
    <>
      <TooltipProvider delayDuration={0} key={day}>
        <Tooltip>
          <TooltipTrigger>
            <motion.li
              className={cn(
                "rounded-lg h-8 w-full",
                event != null ? "" : "bg-zinc-700/40"
              )}
              style={{
                backgroundColor: event != null ? event.color : "",
              }}
              initial="hidden"
              animate={"visible"}
              custom={idx}
              variants={variants}
              onClick={() => setIsOpened(true)}
            ></motion.li>
          </TooltipTrigger>
          <TooltipContent>{event != null ? event.tooltip : ""}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <AnimatePresence mode="wait">
        {isOpened && (
          <motion.div
            style={{
              backgroundColor: event.color,
            }}
            initial={"closed"}
            animate={"opened"}
            exit={"exit"}
            variants={eventDetail}
            className="absolute top-0 left-0 right-0 p-4 bottom-0 z-50"
          >
            <button
              className="bg-white rounded-xl rotate-2 text-zinc-900 px-4"
              onClick={() => {
                setIsOpened(false);
              }}
            >
              close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Month({ date }: Props) {
  return (
    <div className="bg-zinc-900 text-zinc-50 p-4 relative overflow-hidden rounded-xl shadow-lg shadow-zinc-700/50">
      <h2>{date.month}</h2>
      <ul className="grid grid-cols-7 gap-2 mt-2">
        {date.days.map((day, idx) => (
          <Day key={day} day={day} month={date.month} idx={idx} />
        ))}
      </ul>
    </div>
  );
}
