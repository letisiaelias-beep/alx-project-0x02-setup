import React from "react";
import { type ButtonProps } from "@/interfaces";

export default function Button({ label, size, shape, onClick }: ButtonProps) {
  // Classes based on size
  const sizeClasses: Record<string, string> = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-600 transition`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
