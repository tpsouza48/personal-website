"use client";

import { useEffect, useState } from "react";

export function useKeyboard() {
  const [keys, setKeys] = useState({
    up: false,
    down: false,
    enter: false,
    space: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Enter") {
        console.log("Enter pressionado");
      }

      if (e.code === "Space") {
        console.log("Espaço pressionado");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return keys;
}