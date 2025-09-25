import Header from "@/components/layout/Header";
import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Button from "@/components/common/Button";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: "Card One", content: "This is the first card content." },
    { title: "Card Two", content: "This is the second card content." },
  ]);

  // Function to add a new post
  const addPost = (title: string, content: string) => {
    setPosts((prevPosts) => [...prevPosts, { title, content }]);
  };

  return (
    <div>
      {/* Header at the top */}
      <Header />

      {/* Main content area */}
      <main className="p-6">
        {/* Button to open the modal */}
        <Button
          label="Add New Post"
          onClick={() => setIsModalOpen(true)}
          className="mb-4 bg-green-600"
        />

        {/* Grid of post cards */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        {/* Modal for creating new post */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={addPost}
        />
      </main>
    </div>
  );
}
