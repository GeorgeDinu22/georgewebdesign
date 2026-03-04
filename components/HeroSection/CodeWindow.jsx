"use client";

import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const ClientEditor = dynamic(() => import("./ClientEditor"), {
  ssr: false,
});

export default function CodeWindow() {

  const [activeFile, setActiveFile] = useState("afacerea.jsx");

  const getSidebarClass = (file) =>
    activeFile === file ? styles.sidebarItemActive : styles.sidebarItem;

  return (
    <div className={styles.codeWindow}>

      <div className={styles.windowHeader}>
        <div className={styles.dots}>
          <span className={styles.dotRed}></span>
          <span className={styles.dotYellow}></span>
          <span className={styles.dotGreen}></span>
        </div>
      </div>

      <div className={styles.windowBody}>

        <div className={styles.sidebar}>
          <div className={styles.sidebarItem}>
            src <ChevronDown size={14}/>
          </div>

          <div
            className={getSidebarClass("afacerea.jsx")}
            onClick={() => setActiveFile("afacerea.jsx")}
            style={{ cursor: "pointer" }}
          >
            afacerea.jsx
          </div>

          <div
            className={getSidebarClass("strategie.js")}
            onClick={() => setActiveFile("strategie.js")}
            style={{ cursor: "pointer" }}
          >
            strategie.js
          </div>

          <div
            className={getSidebarClass("brand.css")}
            onClick={() => setActiveFile("brand.css")}
            style={{ cursor: "pointer" }}
          >
            brand.css
          </div>
        </div>

        <ClientEditor activeFile={activeFile} />

      </div>
    </div>
  );
}