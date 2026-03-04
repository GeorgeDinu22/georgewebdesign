"use client"

import dynamic from "next/dynamic";

const HartaClient = dynamic(() => import("./HartaEu"), {
  ssr: false,
  loading: () => (
    <div style={{
      height: "375px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#000"
    }}>
      <p style={{ color: "#696969" }}>Se încarcă harta...</p>
    </div>
  )
});

export default function HartaWrapper() {
  return <HartaClient />;
}