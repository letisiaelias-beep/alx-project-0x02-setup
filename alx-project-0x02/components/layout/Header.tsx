import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 p-4 text-white flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
