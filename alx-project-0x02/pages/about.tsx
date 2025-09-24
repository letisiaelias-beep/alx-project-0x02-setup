import React from "react";
import Header from "../components/layout/Header";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold text-purple-600">About This Project</h1>
        <p className="mt-4 text-lg">This page tells you more about what we are building.</p>
      </main>
    </div>
  );
}
