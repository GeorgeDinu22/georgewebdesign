"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";

/* TOKENS */

const TOKENS = {

  "afacerea.jsx": [
    { t: "ln", v: "1" },
    { t: "kw", v: "export" },
    { t: "space" },
    { t: "kw", v: "default" },
    { t: "space" },
    { t: "kw", v: "function" },
    { t: "space" },
    { t: "fn", v: "AfacereaTa" },
    { t: "p", v: "()" },
    { t: "space" },
    { t: "p", v: "{" },

    { t: "newline" },

    { t: "ln", v: "2" },
    { t: "p", v: "//" },
    { t: "space" },
    { t: "str", v: "Prima impresie decide dacă vinzi sau pierzi" },

    { t: "newline" },

    { t: "ln", v: "3" },
    { t: "kw", v: "return" },
    { t: "space" },
    { t: "p", v: "(" },

    { t: "newline" },

    { t: "ln", v: "4" },
    { t: "p", v: "<" },
    { t: "tag", v: "Hero" },
    { t: "space" },
    { t: "prop", v: "mesaj" },
    { t: "p", v: "=" },
    { t: "str", v: '"Website-uri care transformă trafic în clienți"' },

    { t: "newline" },

    { t: "ln", v: "5" },
    { t: "prop", v: "oferta" },
    { t: "p", v: "=" },
    { t: "str", v: '"Design strategic + performanță  reală = vânzări constante"' },
    { t: "p", v: "/>" },

    { t: "newline" },

    { t: "ln", v: "6" },
    { t: "p", v: ");" },

    { t: "newline" },

    { t: "ln", v: "7" },
    { t: "p", v: "}" },
  ],


  "strategie.js": [
    { t: "ln", v: "1" },
    { t: "kw", v: "const" },
    { t: "space" },
    { t: "fn", v: "cresteVanzari" },
    { t: "space" },
    { t: "p", v: "=" },
    { t: "space" },
    { t: "p", v: "(" },
    { t: "prop", v: "client" },
    { t: "p", v: ")" },
    { t: "space" },
    { t: "kw", v: "=>" },
    { t: "space" },
    { t: "p", v: "{" },

    { t: "newline" },

    { t: "ln", v: "2" },
    { t: "kw", v: "if" },
    { t: "space" },
    { t: "p", v: "(" },
    { t: "prop", v: "client" },
    { t: "p", v: ".esteIncantat)" },
    { t: "space" },
    { t: "p", v: "{" },

    { t: "newline" },

    { t: "ln", v: "3" },
    { t: "kw", v: "return" },
    { t: "space" },
    { t: "prop", v: "profit" },
    { t: "space" },
    { t: "p", v: "*" },
    { t: "space" },
    { t: "str", v: "10" },
    { t: "p", v: ";" },

    { t: "space" },
    { t: "p", v: "// recomandări + loialitate + creștere organică" },

    { t: "newline" },

    { t: "ln", v: "4" },
    { t: "p", v: "}" },

    { t: "newline" },

    { t: "ln", v: "5" },
    { t: "p", v: "}" },
  ],


  "brand.css": [
    { t: "ln", v: "1" },
    { t: "tag", v: ".identitate-vizuala" },
    { t: "space" },
    { t: "p", v: "{" },

    { t: "newline" },

    { t: "ln", v: "2" },
    { t: "prop", v: "incredere" },
    { t: "p", v: ":" },
    { t: "space" },
    { t: "str", v: "construită prin rezultate" },
    { t: "p", v: ";" },

    { t: "newline" },

    { t: "ln", v: "3" },
    { t: "prop", v: "calitate" },
    { t: "p", v: ":" },
    { t: "space" },
    { t: "str", v: "atenție obsesivă la detalii" },
    { t: "p", v: ";" },

    { t: "newline" },

    { t: "ln", v: "4" },
    { t: "prop", v: "impact" },
    { t: "p", v: ":" },
    { t: "space" },
    { t: "str", v: "memorabil din prima secundă" },
    { t: "p", v: ";" },

    { t: "newline" },

    { t: "ln", v: "5" },
    { t: "p", v: "}" },
  ],

};


/* TYPEWRITER */

const TypewriterCode = ({ fileKey }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const editorRef = useRef(null);

  const parsedTokens = TOKENS[fileKey] || [];

  useEffect(() => {
    setCurrentIndex(0);
  }, [fileKey]);

useEffect(() => {

  if (currentIndex >= parsedTokens.length) return;

  let raf;
  let lastTime = performance.now();

  const animate = (time) => {

    const speed = 55; // viteza typing

    if (time - lastTime >= speed) {

      setCurrentIndex((prev) => prev + 1);

      lastTime = time;
    }

    raf = requestAnimationFrame(animate);
  };

  raf = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(raf);

}, [currentIndex, parsedTokens]);

  useEffect(() => {

    if (editorRef.current) {
      editorRef.current.scrollTop = editorRef.current.scrollHeight;
    }

  }, [currentIndex]);

  const visibleTokens = parsedTokens.slice(0, currentIndex);

  const renderContent = () => {

    const lines = [];
    let currentLine = [];

    visibleTokens.forEach((token, i) => {

      if (token.t === "newline") {

        lines.push(
          <div key={i} className={styles.line}>
            {currentLine}
          </div>
        );

        currentLine = [];
        return;

      }

      if (token.t === "space") {

        currentLine.push(<span key={i}>{"\u00A0"}</span>);
        return;

      }

      const classMap = {
        ln: styles.ln,
        kw: styles.kw,
        fn: styles.fn,
        tag: styles.tag,
        prop: styles.prop,
        str: styles.str,
        p: styles.punc,
      };

      currentLine.push(
        <span key={i} className={classMap[token.t]}>
          {token.v}
        </span>
      );

    });

    if (currentLine.length > 0) {

      lines.push(
        <div key="last" className={styles.line}>
          {currentLine}
        </div>
      );

    }

    return lines;

  };

  return (
    <div className={styles.editor} ref={editorRef}>
      {renderContent()}
    </div>
  );
};

export default function ClientEditor({ activeFile }) {

  return (
    <TypewriterCode fileKey={activeFile}/>
  );

}