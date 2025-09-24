import React from "react";
import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold text-green-600">Welcome to the Home Page</h1>
        <p className="mt-4 text-lg">This is where we will display our content.</p>
      </main>
    </div>
  );
}
