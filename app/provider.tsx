"use client";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import axios from "axios";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { data } = useSession();

  useEffect(() => {
    data?.user?.email && createNewUser();
  }, [data]);

  const createNewUser = async () => {
    const result = await axios.post("/api/user", {});
    console.log("User creation result:", result.data);
  };

  return <div>Provider</div>;
};

export default Provider;
