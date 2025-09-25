import React, { useEffect, useState } from "react";
import { PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";
import Link from "next/link";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = (await res.json()) as PostProps[];
        setPosts(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };
// inside header JSX
// <Link href="/posts">
//   <a className="px-4 py-2 hover:underline">Posts</a>
// </Link>
</Link>

    fetchPosts();
  }, []);

  if (isLoading) {
    return <div className="p-6">Loading posts...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
}

