import { Post } from "@/components/post";

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
