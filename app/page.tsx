"use client";
import React from "react";
import { Figtree } from "next/font/google";
import {useSession} from "next-auth/react";

const figtree = Figtree({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  console.log("Session data:", session);
  return (
    <div className={`${figtree.className}`}>
      <h2>Welcome to the Home Page</h2>
    </div>
  );
}
