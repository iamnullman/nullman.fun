import { useState, useEffect } from "react";
import Image from "next/image";
import constants from "../lib/constants";

export default function Hero() {
  return (
    <div id="hero">
      
      <h1 className="text-5xl font-semibold text-white">
        <span className="text-primary font-bold">Hi,</span> I’m NullMan 👋
      </h1>
      <p className="mt-4 text-md text-gray-200">Hello! I am nullman a back-end developer and an entrepreneur. I not know much about myself, but I think I would like to learn about myself. </p>
    </div>
  );
}
