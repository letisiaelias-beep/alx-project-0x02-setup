import React from "react";
import Button from "@/components/common/Button";

export default function AboutPage() {
  const handleClick = () => {
    alert("Welcome to the About page!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        This is the About page for our Next.js project. We are building reusable
        components to keep our code clean and organized.
      </p>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
}

export interface ButtonProps {
  label: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}
