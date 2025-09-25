import React from "react";
import Header from "../components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Card One" content="This is the first card content." />
        <Card title="Card Two" content="This is the second card content." />
        <Card title="Card Three" content="This is the third card content." />
      </main>
    </div>
  );
}
