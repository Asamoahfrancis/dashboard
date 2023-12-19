"use client";
import React from "react";
import { signOut } from "next-auth/react";
const Signout = () => {
  return (
    <p
      onClick={() => {
        signOut();
      }}
    >
      Sign out
    </p>
  );
};

export default Signout;
