"use client"

import dynamic from "next/dynamic";

const Proiecte = dynamic(() => import("./Proiecte"), {
    loading: () => <div style={{height:"100vh"}}></div>,
    ssr: false,
});

export default function ProiecteWrapper() {
  return <Proiecte />;
}