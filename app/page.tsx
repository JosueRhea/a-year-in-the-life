"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { HeartSolid } from "@/icons/heart";
import { cn } from "@/utils/cn";
import { Fragment, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

const posts = [
  {
    username: "Lia Marie",
    avatar: "https://via.placeholder.com/150",
    media: [
      {
        url: "https://plus.unsplash.com/premium_photo-1701094772334-07af1a16bd42?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
        type: "image",
        id: "1",
      },
      {
        url: "https://images.unsplash.com/photo-1714733710199-ce4532b6a3b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
        type: "image",
        id: "2",
      },
      {
        url: "https://images.unsplash.com/photo-1714880776087-f8c0430817a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
        type: "image",
        id: "3",
      },
    ],
    likes: 10,
    comments: [
      {
        username: "janedoe",
        comment: "nice pic!",
      },
      {
        username: "johndoe",
        comment: "thanks!",
      },
    ],
    category: "nature",
    timestamp: "2021-01-01T12:00:00",
    id: "1",
  },
];

export default function Home() {
  return (
    <div className="w-full px-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

interface PostProps {
  post: {
    username: string;
    avatar: string;
    media: {
      url: string;
      type: string;
      id: string;
    }[];
    likes: number;
    comments: {
      username: string;
      comment: string;
    }[];
    category: string;
    timestamp: string;
  };
}

function Post({ post }: PostProps) {
  return (
    <div className="w-full bg-white rounded-2xl py-4">
      <div className="flex gap-x-2 px-4 items-center">
        <Avatar>
          <AvatarImage src={post.avatar} />
          <AvatarFallback>{post.username[0]}</AvatarFallback>
        </Avatar>
        <div className="w-full">
          <div className="flex justify-between w-full">
            <h3 className="font-semibold">{post.username}</h3>
            <p className="text-zinc-500">now</p>
          </div>
          <p className="text-zinc-500">
            Added {post.media.length} photos to{" "}
            <strong className="text-zinc-900">{post.category}</strong>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full px-4 mt-4 gap-2">
        {post.media.map((media, index) => {
          return <Media key={media.id} media={media} index={index} />;
        })}
      </div>
      <div className="flex px-4 gap-x-2 items-center">
        <HeartSolid className="w-8 h-8 text-red-500" />
        <p className="text-zinc-500">and {post.likes} others liked this post</p>
      </div>
    </div>
  );
}

interface MediaProps {
  media: {
    url: string;
    type: string;
    id: string;
  };
  index: number;
}

function Media({ media, index }: MediaProps) {
  const [open, setOpen] = useState(false);
  return (
    <LayoutGroup>
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
    </LayoutGroup>
  );
}
