import { cn } from "@/utils/cn";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MediaProps {
  media: {
    url: string;
    type: string;
    id: string;
  };
  index: number;
}

export function Media({ media, index }: MediaProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className={cn(
          `w-full h-full flex items-center justify-center`,
          index === 2 ? "col-span-2 rotate-3 -translate-y-8 translate-x-4" : "",
          index === 0 ? "-rotate-12 translate-y-8" : "",
          index === 1 ? "rotate-12 translate-y-2" : ""
        )}
        onClick={() => setOpen(true)}
      >
        <motion.img
          className={cn(
            "w-full object-cover h-full max-w-44 rounded-2xl",
            index === 0 ? "aspect-[4/5]" : "aspect-square max-h-44",
            index === 2 ? "z-20" : "z-10"
          )}
          whileTap={{ scale: 1.05 }}
          src={media.url}
          layoutId={`image-${media.id}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => {
              setOpen(false);
            }}
            className={cn(
              "fixed inset-0 flex z-30 items-center justify-center bg-black/50"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              onClick={(e) => e.stopPropagation()}
              key={index}
              className={cn("w-2/6 object-cover h-2/6 rounded-2xl bg-white")}
              src={media.url}
              layoutId={`image-${media.id}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}