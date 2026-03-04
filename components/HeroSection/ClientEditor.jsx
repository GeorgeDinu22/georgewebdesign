"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import styles from "./styles.module.css";

const TOKENS = {
  "afacerea.jsx": [
    { t: "ln", v: "1" }, { t: "kw", v: "export" }, { t: "space" }, { t: "kw", v: "default" }, { t: "space" }, { t: "kw", v: "function" }, { t: "space" }, { t: "fn", v: "AfacereaTa" }, { t: "p", v: "()" }, { t: "space" }, { t: "p", v: "{" },
    { t: "newline" },
    { t: "ln", v: "2" }, { t: "p", v: "//" }, { t: "space" }, { t: "str", v: "Prima impresie decide dacă vinzi sau pierzi" },
    { t: "newline" },
    { t: "ln", v: "3" }, { t: "kw", v: "return" }, { t: "space" }, { t: "p", v: "(" },
    { t: "newline" },
    { t: "ln", v: "4" }, { t: "p", v: "<" }, { t: "tag", v: "Hero" }, { t: "space" }, { t: "prop", v: "mesaj" }, { t: "p", v: "=" }, { t: "str", v: '"Website-uri care transformă trafic în clienți"' },
    { t: "newline" },
    { t: "ln", v: "5" }, { t: "prop", v: "oferta" }, { t: "p", v: "=" }, { t: "str", v: '"Design strategic + performanță  reală = vânzări constante"' }, { t: "p", v: "/>" },
    { t: "newline" },
    { t: "ln", v: "6" }, { t: "p", v: ");" },
    { t: "newline" },
    { t: "ln", v: "7" }, { t: "p", v: "}" },
  ],
  "strategie.js": [
    { t: "ln", v: "1" }, { t: "kw", v: "const" }, { t: "space" }, { t: "fn", v: "cresteVanzari" }, { t: "space" }, { t: "p", v: "=" }, { t: "space" }, { t: "p", v: "(" }, { t: "prop", v: "client" }, { t: "p", v: ")" }, { t: "space" }, { t: "kw", v: "=>" }, { t: "space" }, { t: "p", v: "{" },
    { t: "newline" },
    { t: "ln", v: "2" }, { t: "kw", v: "if" }, { t: "space" }, { t: "p", v: "(" }, { t: "prop", v: "client" }, { t: "p", v: ".esteIncantat)" }, { t: "space" }, { t: "p", v: "{" },
    { t: "newline" },
    { t: "ln", v: "3" }, { t: "kw", v: "return" }, { t: "space" }, { t: "prop", v: "profit" }, { t: "space" }, { t: "p", v: "*" }, { t: "space" }, { t: "str", v: "10" }, { t: "p", v: ";" },
    { t: "newline" },
    { t: "ln", v: "4" }, { t: "p", v: "}" },
    { t: "newline" },
    { t: "ln", v: "5" }, { t: "p", v: "}" },
  ],
  "brand.css": [
    { t: "ln", v: "1" }, { t: "tag", v: ".identitate-vizuala" }, { t: "space" }, { t: "p", v: "{" },
    { t: "newline" },
    { t: "ln", v: "2" }, { t: "prop", v: "incredere" }, { t: "p", v: ":" }, { t: "space" }, { t: "str", v: "construită prin rezultate" }, { t: "p", v: ";" },
    { t: "newline" },
    { t: "ln", v: "3" }, { t: "prop", v: "calitate" }, { t: "p", v: ":" }, { t: "space" }, { t: "str", v: "atenție obsesivă la detalii" }, { t: "p", v: ";" },
    { t: "newline" },
    { t: "ln", v: "4" }, { t: "prop", v: "impact" }, { t: "p", v: ":" }, { t: "space" }, { t: "str", v: "memorabil din prima secundă" }, { t: "p", v: ";" },
    { t: "newline" },
    { t: "ln", v: "5" }, { t: "p", v: "}" },
  ],
};

const TypewriterCode = ({ fileKey }) => {
  const [visibleChars, setVisibleChars] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const editorRef = useRef(null);
  
  const tokens = TOKENS[fileKey] || [];

  // Optimizare: Calculăm lungimea totală o singură dată pe fișier
  const totalChars = useMemo(() => {
    return tokens.reduce((acc, token) => {
      if (token.t === "newline" || token.t === "space") return acc + 1;
      return acc + (token.v ? String(token.v).length : 0);
    }, 0);
  }, [fileKey]);

  useEffect(() => {
    setVisibleChars(0);
    setIsTyping(true);
  }, [fileKey]);

  useEffect(() => {
    if (visibleChars >= totalChars) {
      setIsTyping(false);
      return;
    }

    // Variabilă pentru viteză: Mobile-ul are nevoie de mai multă "milă" la CPU
    const speed = window.innerWidth < 768 ? 15 : 25;
    const timeout = setTimeout(() => {
      // Functional update pentru a evita re-crearea effect-ului inutil
      setVisibleChars(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [visibleChars, totalChars]);

  // Scroll smooth doar când se adaugă o linie nouă (performanță mai bună decât la fiecare caracter)
  useEffect(() => {
    if (editorRef.current) {
        editorRef.current.scrollTop = editorRef.current.scrollHeight;
    }
  }, [visibleChars]);

  const renderedContent = useMemo(() => {
    const lines = [];
    let currentLine = [];
    let charCounter = 0;

    const classMap = {
      ln: styles.ln, kw: styles.kw, fn: styles.fn,
      tag: styles.tag, prop: styles.prop, str: styles.str,
      punc: styles.punc, p: styles.punc
    };

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (charCounter >= visibleChars) break;

      if (token.t === "newline") {
        lines.push(<div key={`l-${i}`} className={styles.line}>{currentLine}</div>);
        currentLine = [];
        charCounter++;
        continue;
      }

      if (token.t === "space") {
        currentLine.push(<span key={`s-${i}`}>{"\u00A0"}</span>);
        charCounter++;
        continue;
      }

      const text = String(token.v);
      const remaining = visibleChars - charCounter;
      
      if (remaining > 0) {
        currentLine.push(
          <span key={`t-${i}`} className={classMap[token.t] || styles.punc}>
            {text.substring(0, remaining)}
          </span>
        );
      }
      charCounter += text.length;
    }

    if (currentLine.length > 0) {
      lines.push(
        <div key="last" className={styles.line}>
          {currentLine}
          {isTyping && <span className={styles.cursor} />}
        </div>
      );
    }
    return lines;
  }, [visibleChars, tokens, isTyping]);

  return (
    <div className={styles.editor} ref={editorRef}>
      {renderedContent}
    </div>
  );
};

export default function ClientEditor({ activeFile }) {
  return <TypewriterCode fileKey={activeFile} />;
}