"use client";

import { useEffect, useState } from "react";

export default function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    );
  }, []);

  return isTouch;
}