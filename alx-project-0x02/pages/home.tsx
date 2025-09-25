import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: "Card One", content: "This is the first card content." },
    { title: "Card Two", content: "This is the second card content." },
  ]);

  const addPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div>
      <Header />
      <main className="p-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          Add New Post
        </button>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={addPost}
        />
      </main>
    </div>
  );
}
