"use client"

import { useEffect } from "react";
import { initScrollAnimations } from '../lib/scrollAnimation';

export default function ScrollInit() {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return null;
}