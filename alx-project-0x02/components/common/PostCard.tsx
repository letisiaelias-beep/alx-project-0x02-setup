import React from "react";
import { PostProps } from "@/interfaces";

interface PostCardProps {
  title: string;
  content: string;
  userId: number;
}

const PostCard: React.FC<PostCardProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{content}</p>
      <small className="text-gray-500">By user {userId}</small>
    </div>
  );
};

export default PostCard;
