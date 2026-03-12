"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./styles.module.css";

const TOKENS = {
  "afacerea.jsx": [
    { t: "ln", v: "1" }, { t: "kw", v: "export" }, { t: "space" }, { t: "kw", v: "default" }, { t: "space" }, { t: "kw", v: "function" }, { t: "space" }, { t: "fn", v: "AfacereaTa" }, { t: "p", v: "()" }, { t: "space" }, { t: "p", v: "{" }, { t: "newline" },
    { t: "ln", v: "2" }, { t: "p", v: "//" }, { t: "space" }, { t: "str", v: "Prima impresie decide dacă vinzi sau pierzi" }, { t: "newline" },
    { t: "ln", v: "3" }, { t: "kw", v: "return" }, { t: "space" }, { t: "p", v: "(" }, { t: "newline" },
    { t: "ln", v: "4" }, { t: "p", v: "<" }, { t: "tag", v: "Hero" }, { t: "space" }, { t: "prop", v: "mesaj" }, { t: "p", v: "=" }, { t: "str", v: '"Website-uri care transformă trafic în clienți"' }, { t: "newline" },
    { t: "ln", v: "5" }, { t: "prop", v: "oferta" }, { t: "p", v: "=" }, { t: "str", v: '"Design strategic + performanță  reală = vânzări constante"' }, { t: "p", v: "/>" }, { t: "newline" },
    { t: "ln", v: "6" }, { t: "p", v: ");" }, { t: "newline" },
    { t: "ln", v: "7" }, { t: "p", v: "}" },
  ],
  "strategie.js": [
    { t: "ln", v: "1" }, { t: "kw", v: "const" }, { t: "space" }, { t: "fn", v: "cresteVanzari" }, { t: "space" }, { t: "p", v: "=" }, { t: "space" }, { t: "p", v: "(" }, { t: "prop", v: "client" }, { t: "p", v: ")" }, { t: "space" }, { t: "kw", v: "=>" }, { t: "space" }, { t: "p", v: "{" }, { t: "newline" },
    { t: "ln", v: "2" }, { t: "kw", v: "if" }, { t: "space" }, { t: "p", v: "(" }, { t: "prop", v: "client" }, { t: "p", v: ".esteIncantat)" }, { t: "space" }, { t: "p", v: "{" }, { t: "newline" },
    { t: "ln", v: "3" }, { t: "kw", v: "return" }, { t: "space" }, { t: "prop", v: "profit" }, { t: "space" }, { t: "p", v: "*" }, { t: "space" }, { t: "str", v: "10" }, { t: "p", v: ";" }, { t: "space" }, { t: "p", v: "// recomandări + loialitate + creștere organică" }, { t: "newline" },
    { t: "ln", v: "4" }, { t: "p", v: "}" }, { t: "newline" },
    { t: "ln", v: "5" }, { t: "p", v: "}" },
  ],
  "brand.css": [
    { t: "ln", v: "1" }, { t: "tag", v: ".identitate-vizuala" }, { t: "space" }, { t: "p", v: "{" }, { t: "newline" },
    { t: "ln", v: "2" }, { t: "prop", v: "incredere" }, { t: "p", v: ":" }, { t: "space" }, { t: "str", v: "construită prin rezultate" }, { t: "p", v: ";" }, { t: "newline" },
    { t: "ln", v: "3" }, { t: "prop", v: "calitate" }, { t: "p", v: ":" }, { t: "space" }, { t: "str", v: "atenție obsesivă la detalii" }, { t: "p", v: ";" }, { t: "newline" },
    { t: "ln", v: "4" }, { t: "prop", v: "impact" }, { t: "p", v: ":" }, { t: "space" }, { t: "str", v: "memorabil din prima secundă" }, { t: "p", v: ";" }, { t: "newline" },
    { t: "ln", v: "5" }, { t: "p", v: "}" },
  ],
};

const TypewriterCode = ({ fileKey }) => {
  const [visibleChars, setVisibleChars] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  
  const editorRef = useRef(null);
  const hasPlayedRef = useRef(false);
  const charsRef = useRef(0); // Folosit pentru a citi starea sincron în animație fără re-render

  // 1. Procesăm array-ul masiv într-o structură eficientă o singură dată
  const processedData = useMemo(() => {
    let charCount = 0;
    const lines = [];
    let currentLine = [];
    
    const baseTokens = TOKENS[fileKey] || [];

    baseTokens.forEach((token, index) => {
      if (token.t === "newline") {
        lines.push({ id: `nl-${index}`, tokens: currentLine, endChar: charCount });
        currentLine = [];
        charCount++; // Considerăm newline ca un tick de timp
        return;
      }

      let text = token.v || "";
      if (token.t === "space") text = "\u00A0";

      const classMap = {
        kw: styles.kw, fn: styles.fn, tag: styles.tag, prop: styles.prop,
        str: styles.str, p: styles.punc, ln: styles.ln,
      };

      currentLine.push({
        id: `tok-${index}`,
        text,
        className: classMap[token.t] || null,
        start: charCount,
        end: charCount + text.length,
      });

      charCount += text.length;
    });

    if (currentLine.length > 0) {
      lines.push({ id: `nl-end`, tokens: currentLine, endChar: charCount });
    }

    return { lines, totalChars: charCount };
  }, [fileKey]);

  // 2. Resetăm valorile când se schimbă tab-ul
  useEffect(() => {
    setVisibleChars(0);
    charsRef.current = 0;
    setCurrentLineIndex(0);
    setIsTyping(true);
  }, [fileKey]);

  useEffect(() => {
    if (processedData.totalChars === 0) return;

    let animationFrameId;
    let lastTime = performance.now();
    const isFirstPlay = !hasPlayedRef.current;
    const startDelay = isFirstPlay ? 1400 : 0;
    
    let delayCompleted = !isFirstPlay; 
    
    const minSpeed = window.innerWidth < 768 ? 12 : 20;
    let interval = Math.random() * 22 + minSpeed;

    const animate = (time) => {
      const elapsed = time - lastTime;

      if (!delayCompleted) {
        if (elapsed < startDelay) {
          animationFrameId = requestAnimationFrame(animate);
          return;
        } else {
          delayCompleted = true;
          lastTime = time;
          animationFrameId = requestAnimationFrame(animate);
          return;
        }
      }

      if (elapsed >= interval) {
        charsRef.current += 1;
        
        setVisibleChars(charsRef.current); 

        if (charsRef.current >= processedData.totalChars) {
          setIsTyping(false);
        }

        lastTime = time;
        interval = Math.random() * 22 + minSpeed;
      }

      if (charsRef.current < processedData.totalChars) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    hasPlayedRef.current = true;

    return () => cancelAnimationFrame(animationFrameId);
  }, [processedData.totalChars]);

  useEffect(() => {
    const activeLine = processedData.lines.findIndex(l => visibleChars <= l.endChar);
    
    if (activeLine !== currentLineIndex && activeLine !== -1) {
      setCurrentLineIndex(activeLine);
      if (editorRef.current) {
        editorRef.current.scrollTo({ top: 99999, behavior: "auto" }); 
      }
    }
  }, [visibleChars, processedData.lines, currentLineIndex]);

  const renderContent = () => {
    return processedData.lines.map((line) => {
      if (line.tokens.length > 0 && line.tokens[0].start > visibleChars) return null;

      let isCursorOnThisLine = visibleChars === line.endChar;

      const renderedTokens = line.tokens.map((tok) => {
        if (tok.start > visibleChars) return null;

        if (tok.end <= visibleChars) {
          return <span key={tok.id} className={tok.className}>{tok.text}</span>;
        }

        const visibleLength = visibleChars - tok.start;
        isCursorOnThisLine = true; 
        return (
          <span key={tok.id} className={tok.className}>
            {tok.text.substring(0, visibleLength)}
          </span>
        );
      });

      return (
        <div key={line.id} className={styles.line}>
          {renderedTokens}
          {isCursorOnThisLine && isTyping && <span className={styles.cursor} />}
        </div>
      );
    });
  };

  return (
    <div
      className={`${styles.editor} ${isTyping ? styles.hiddingScroll : ""}`}
      ref={editorRef}
    >
      {renderContent()}
      {!isTyping && <span className={styles.cursor} style={{opacity: 0}} />}
    </div>
  );
};

export default function ClientEditor({ activeFile }) {
  return <TypewriterCode fileKey={activeFile} />;
}