import React from "react";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${figtree.className}`}>
      <h2>Welcome to the Home Page</h2>
    </div>
  );
}
