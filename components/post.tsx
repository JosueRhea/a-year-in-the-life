'use client'
import { HeartSolid } from "@/icons/heart";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Media } from "./media";

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

export function Post({ post }: PostProps) {
  return (
    <div className="w-full bg-white rounded-2xl py-4">
      <div className="flex gap-x-2 px-4 items-center">
        <Avatar>
          <AvatarImage className="object-cover" src={post.avatar} />
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
