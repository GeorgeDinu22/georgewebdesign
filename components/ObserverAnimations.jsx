"use client";
import { useEffect } from "react";
import { initScrollAnimations } from "../lib/scrollAnimation";

export default function ScrollInit() {
  useEffect(() => {
    if (document.readyState === "complete") {
      initScrollAnimations();
    } else {
      window.addEventListener("load", initScrollAnimations);
      return () => window.removeEventListener("load", initScrollAnimations);
    }
  }, []);

  return null;
}