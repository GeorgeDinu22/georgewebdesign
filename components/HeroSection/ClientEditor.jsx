"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
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

/* transformă tokenii actuali în caractere individuale, ca în varianta veche */

const expandTokensToChars = (tokens) => {
  const expanded = [];

  tokens.forEach((token, index) => {
    if (token.t === "newline") {
      expanded.push({
        type: "newline",
        id: `newline-${index}`,
      });
      return;
    }

    if (token.t === "space") {
      expanded.push({
        type: "char",
        value: "\u00A0",
        className: null,
        id: `space-${index}`,
      });
      return;
    }

    if (token.t === "ln") {
      expanded.push({
        type: "block",
        value: token.v,
        className: styles.ln,
        id: `ln-${index}`,
      });
      return;
    }

    const classMap = {
      kw: styles.kw,
      fn: styles.fn,
      tag: styles.tag,
      prop: styles.prop,
      str: styles.str,
      p: styles.punc,
    };

    const className = classMap[token.t] || null;
    const text = String(token.v ?? "");

    text.split("").forEach((char, charIndex) => {
      expanded.push({
        type: "char",
        value: char === " " ? "\u00A0" : char,
        className,
        id: `${token.t}-${index}-${charIndex}`,
      });
    });
  });

  return expanded;
};

/* TYPEWRITER */

const TypewriterCode = ({ fileKey }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const editorRef = useRef(null);
  const hasPlayedRef = useRef(false);

  const parsedTokens = useMemo(() => {
    const baseTokens = TOKENS[fileKey] || [];
    return expandTokensToChars(baseTokens);
  }, [fileKey]);

  useEffect(() => {
    setCurrentIndex(0);
    setIsTyping(true);
  }, [fileKey]);

useEffect(() => {
  if (parsedTokens.length === 0) return;

  let animationFrameId;
  let lastTime = performance.now();

  const isFirstPlay = !hasPlayedRef.current;
  const startDelay = isFirstPlay ? 1250 : 0;

  // aici modifici viteza dacă vrei mai lent / mai rapid
  const minSpeed = window.innerWidth < 768 ? 12 : 20;
  let interval = Math.random() * 22 + minSpeed;

  const animate = (time) => {
    const elapsed = time - lastTime;

    if (elapsed < startDelay) {
      animationFrameId = requestAnimationFrame(animate);
      return;
    }

    if (elapsed >= startDelay + interval) {
      setCurrentIndex((prev) => {
        let nextIndex = prev + 1;

        while (
          nextIndex < parsedTokens.length &&
          (parsedTokens[nextIndex].type === "newline" ||
            parsedTokens[nextIndex].type === "block")
        ) {
          nextIndex++;
        }

        if (nextIndex >= parsedTokens.length) {
          setIsTyping(false);
        }

        return nextIndex;
      });

      lastTime = time;
      interval = Math.random() * 22 + minSpeed;
    }

    if (currentIndex < parsedTokens.length) {
      animationFrameId = requestAnimationFrame(animate);
    }
  };

  animationFrameId = requestAnimationFrame(animate);
  hasPlayedRef.current = true;

  return () => cancelAnimationFrame(animationFrameId);
}, [parsedTokens, currentIndex]);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.scrollTo({
        top: editorRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const visibleTokens = useMemo(
    () => parsedTokens.slice(0, currentIndex),
    [parsedTokens, currentIndex]
  );

  const renderContent = () => {
    const lines = [];
    let currentLine = [];

    visibleTokens.forEach((token, i) => {
      if (token.type === "newline") {
        if (currentLine.length > 0) {
          lines.push(
            <div key={`line-${i}`} className={styles.line}>
              {currentLine}
            </div>
          );
        }
        currentLine = [];
        return;
      }

      currentLine.push(
        <span key={token.id} className={token.className}>
          {token.value}
        </span>
      );
    });

    if (currentLine.length > 0) {
      if (isTyping) {
        currentLine.push(
          <span key="cursor" className={styles.cursor} />
        );
      }

      lines.push(
        <div key="last-line" className={styles.line}>
          {currentLine}
        </div>
      );
    }

    return lines;
  };

  return (
    <div
      className={`${styles.editor} ${isTyping ? styles.hiddingScroll : ""}`}
      ref={editorRef}
    >
      {renderContent()}
    </div>
  );
};

export default function ClientEditor({ activeFile }) {
  return <TypewriterCode fileKey={activeFile} />;
}