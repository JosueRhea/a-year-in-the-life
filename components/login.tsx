import { Post } from "./post";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const post = {
  username: "liamariew",
  avatar:
    "https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  media: [
    {
      url: "https://images.unsplash.com/photo-1714714681670-2be9fa4b8c48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
      type: "image",
      id: "1",
    },
    {
      url: "https://images.unsplash.com/photo-1611902001324-cd4600eac5cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
      type: "image",
      id: "2",
    },
    {
      url: "https://images.unsplash.com/photo-1601068079031-bea9bc3b39ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
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
  category: "travel",
  timestamp: "2021-01-01T12:00:00",
  id: "1",
};

export const Login = () => {
  return (
    <div className="w-full relative">
      <Post post={post} />
      <div className="h-56 flex items-center flex-col gap-y-2 bg-gradient-to-t justify-end from-zinc-100 from-10% -translate-y-56 to-transparent to-100%">
        <h2 className="font-bold text-2xl">A beautiful link in bio</h2>
        <div className="flex items-center gap-x-2">
          <Input placeholder="@josuerhea" />
          <Button>Claim it!</Button>
        </div>
      </div>
    </div>
  );
};
