'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import styles from './styles.module.css';
import { ChevronDown } from 'lucide-react';

const FILES = {
  'afacerea.jsx': {
    name: 'afacerea.jsx',
    type: 'component',
    content: (
      <>
        <div className={styles.line}>
          <span className={styles.ln}>1</span>
          <span className={styles.kw}>export</span>{' '}
          <span className={styles.kw}>default</span>{' '}
          <span className={styles.kw}>function</span>{' '}
          <span className={styles.fn}>AfacereaTa</span>
          <span className={styles.punc}>()</span>{' '}
          <span className={styles.punc}>{'{'}</span>
        </div>

        <div className={styles.line}>
          <span className={styles.ln}>2</span>
          <span className={styles.punc}>{'  //'}</span>{' '}
          <span className={styles.str}>
            Prima impresie decide dacă vinzi sau pierzi
          </span>
        </div>

        <div className={styles.line}>
          <span className={styles.ln}>3</span>
          <span className={styles.kw}>  return</span>{' '}
          <span className={styles.punc}>(</span>
        </div>

        <div className={styles.line}>
          <span className={styles.ln}>4</span>
          <span className={styles.punc}>    {'<'}</span>
          <span className={styles.tag}>Hero</span>{' '}
          <span className={styles.prop}>mesaj</span>
          <span className={styles.punc}>=</span>
          <span className={styles.str}>
            "Website-uri care transformă trafic în clienți"
          </span>
        </div>

        <div className={styles.line}>
          <span className={styles.ln}>5</span>
          <span className={styles.punc}>      </span>
          <span className={styles.prop}>oferta</span>
          <span className={styles.punc}>=</span>
          <span className={styles.str}>
            "Design strategic + performanță  reală = vânzări constante"
          </span>{' '}
          <span className={styles.punc}>{'/>'}</span>
        </div>

        <div className={styles.line}>
          <span className={styles.ln}>6</span>
          <span className={styles.punc}>  );</span>
        </div>

        <div className={styles.line}>
          <span className={styles.ln}>7</span>
          <span className={styles.punc}>{'}'}</span>
        </div>
      </>
    )
  },

  'strategie.js': {
    name: 'strategie.js',
    type: 'logic',
    content: (
      <>
        <div className={styles.line}>
          <span className={styles.ln}>1</span>
          <span className={styles.kw}>const</span>{' '}
          <span className={styles.fn}>cresteVanzari</span>{' '}
          <span className={styles.punc}>=</span>{' '}
          <span className={styles.punc}>(</span>
          <span className={styles.prop}>client</span>
          <span className={styles.punc}>)</span>{' '}
          <span className={styles.kw}>{'=>'}</span>{' '}
          <span className={styles.punc}>{'{'}</span>
        </div>

        <div className={styles.line}>
          <span className={styles.ln}>2</span>
          <span className={styles.kw}>  if</span>{' '}
          <span className={styles.punc}>(</span>
          <span className={styles.prop}>client</span>.esteIncantat
          <span className={styles.punc}>)</span>{' '}
          <span className={styles.punc}>{'{'}</span>
        </div>

        <div className={styles.line}>
          <span className={styles.ln}>3</span>
          <span className={styles.kw}>    return</span>{' '}
          <span className={styles.prop}>profit</span>{' '}
          <span className={styles.punc}>*</span>{' '}
          <span className={styles.str}>10</span>;
          <span className={styles.punc}>
            {'  // recomandări + loialitate + creștere organică'}
          </span>
        </div>

        <div className={styles.line}>
          <span className={styles.ln}>4</span>
          <span className={styles.punc}>  {'}'}</span>
        </div>
      </>
    )
  },

  'brand.css': {
    name: 'brand.css',
    type: 'style',
    content: (
      <>
        <div className={styles.line}>
          <span className={styles.ln}>1</span>
          <span className={styles.tag}>.identitate-vizuala</span>{' '}
          <span className={styles.punc}>{'{'}</span>
        </div>

        <div className={styles.line}>
          <span className={styles.ln}>2</span>
          <span className={styles.prop}>  incredere</span>:{' '}
          <span className={styles.str}>construită prin rezultate</span>;
        </div>

        <div className={styles.line}>
          <span className={styles.ln}>3</span>
          <span className={styles.prop}>  calitate</span>:{' '}
          <span className={styles.str}>atenție obsesivă la detalii</span>;
        </div>

        <div className={styles.line}>
          <span className={styles.ln}>4</span>
          <span className={styles.prop}>  impact</span>:{' '}
          <span className={styles.str}>memorabil din prima secundă</span>;
        </div>

        <div className={styles.line}>
          <span className={styles.ln}>5</span>
          <span className={styles.punc}>{'}'}</span>
        </div>
      </>
    )
  }
};
// Funcție helper pentru a transforma JSX-ul complex într-un array liniar de caractere
const parseContent = (content) => {
  const tokens = [];
  
  React.Children.forEach(content.props.children, (line, lineIndex) => {
    // 1. Adăugăm token pentru linie nouă
    tokens.push({ type: 'newline', id: `line-${lineIndex}` });

    React.Children.forEach(line.props.children, (child, childIndex) => {
      // Ignorăm null/false
      if (!child && child !== 0) return;

      // 2. CAZUL 1: String simplu (poate fi spațiu ' ' sau text)
      if (typeof child === 'string') {
        child.split('').forEach((char, i) => {
          tokens.push({ 
            type: 'char', 
            // Folosim Non-Breaking Space pentru siguranță, deși white-space: pre din CSS ar trebui să ajute
            value: char === ' ' ? '\u00A0' : char, 
            className: null, 
            id: `l${lineIndex}-c${childIndex}-${i}` 
          });
        });
      } 
      // 3. CAZUL 2: Numărul liniei (bloc indivizibil)
      else if (child.props && child.props.className === styles.ln) {
        tokens.push({ 
            type: 'block', 
            value: child.props.children, 
            className: styles.ln, 
            id: `ln-${lineIndex}` 
        });
      } 
      // 4. CAZUL 3: Elemente cu clase (ex: kw, fn, str)
      else {
        const text = child.props.children;
        const className = child.props.className;
        
        // Dacă e un string în interiorul tag-ului
        if (typeof text === 'string') {
          text.split('').forEach((char, i) => {
            tokens.push({ 
                type: 'char', 
                value: char === ' ' ? '\u00A0' : char, 
                className: className, 
                id: `l${lineIndex}-s${childIndex}-${i}` 
            });
          });
        }
        // Dacă elementul conține alte elemente (ex: <span ...>{'{'}</span>)
        else if (text) {
             tokens.push({ 
                type: 'char', 
                value: text, 
                className: className, 
                id: `l${lineIndex}-s${childIndex}-obj` 
            });
        }
      }
    });
  });

  return tokens;
};

const TypewriterCode = ({ content, isAppLoad }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canStartTyping, setCanStartTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const editorRef = useRef(null);

  // 1. Parsăm conținutul o singură dată când se schimbă tab-ul
  const parsedTokens = useMemo(() => parseContent(content), [content]);

  // 2. Controlul Delay-ului inițial
  useEffect(() => {
    setCurrentIndex(0);
    setCanStartTyping(false);
    setIsTyping(true); // Ascundem scrollbar-ul preventiv

    const delay = isAppLoad ? 1750 : 0;
    const startTimeout = setTimeout(() => {
      setCanStartTyping(true);
    }, delay);

    return () => clearTimeout(startTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  // 3. Logica de Tastare (Character by Character)
  useEffect(() => {
    if (!canStartTyping) return;

    let timeoutId;

    if (currentIndex < parsedTokens.length) {
      setIsTyping(true);
      
      // VITEZA DE TASTARE:
      // Pentru letter-by-letter, vrem ceva rapid (10-30ms) dar variabil
      // Caracterele speciale sau spațiile pot fi mai rapide
      const currentToken = parsedTokens[currentIndex];
      let speed = Math.floor(Math.random() * 20) + 15; 
      
      // Dacă e linie nouă sau bloc (număr linie), trecem instant sau foarte repede
      if (currentToken.type === 'newline' || currentToken.type === 'block') {
          speed = 0; 
      }

      timeoutId = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, speed);

    } else {
      setIsTyping(false); // Afișăm scrollbar-ul la final
    }

    return () => clearTimeout(timeoutId);
  }, [currentIndex, parsedTokens, canStartTyping]);

  // 4. Auto-Scroll
  useEffect(() => {
    if (editorRef.current) {
        editorRef.current.scrollTo({
            top: editorRef.current.scrollHeight,
            behavior: 'smooth'
        });
    }
  }, [currentIndex]);

  // 5. Randarea: Reconstruim liniile din token-urile vizibile
  const renderVisibleContent = () => {
    const visibleTokens = parsedTokens.slice(0, currentIndex);
    const lines = [];
    let currentLineChildren = [];
    
    visibleTokens.forEach((token, idx) => {
        if (token.type === 'newline') {
            // Dacă am adunat ceva în linia anterioară, o salvăm
            if (idx > 0) { // Ignorăm primul newline de start
                 lines.push(
                    <div key={`line-${lines.length}`} className={styles.line}>
                        {currentLineChildren}
                    </div>
                 );
            }
            currentLineChildren = [];
        } else if (token.type === 'block') {
            // Numărul liniei
            currentLineChildren.push(
                <span key={token.id} className={token.className}>{token.value}</span>
            );
        } else {
            // Caracter individual
            currentLineChildren.push(
                <span key={token.id} className={token.className}>{token.value}</span>
            );
        }
    });

    // Adăugăm ultima linie curentă (care este în curs de scriere)
    if (currentLineChildren.length > 0 || lines.length < parsedTokens.filter(t => t.type === 'newline').length) {
         // Adăugăm cursorul la finalul liniei curente
         if (isTyping && canStartTyping) {
             currentLineChildren.push(<span key="cursor" className={styles.cursor} />);
         }
         
         lines.push(
            <div key={`line-last`} className={styles.line}>
                {currentLineChildren}
            </div>
         );
    }

    return lines;
  };

  return (
    <div 
        className={`${styles.editor} ${isTyping ? styles.hiddingScroll : ''}`} 
        ref={editorRef}
    >
      {renderVisibleContent()}
    </div>
  );
};

export default function InteractiveCodeWindow() {
  const [activeFile, setActiveFile] = useState('afacerea.jsx');
  const [isAppLoad, setIsAppLoad] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setIsAppLoad(false);
      }, 2000);
      return () => clearTimeout(timer);
  }, []);

  const getTabClass = (fileName) =>
    activeFile === fileName ? styles.tabActive : styles.tab;

  const getSidebarClass = (fileName) =>
    activeFile === fileName
      ? styles.sidebarItemActive
      : styles.sidebarItem;

  const fileKeys = Object.keys(FILES);

  return (
    <div className={styles.codeWindow} aria-hidden="true">
      <div className={styles.windowHeader}>
        <div className={styles.dots}>
          <span className={styles.dotRed}></span>
          <span className={styles.dotYellow}></span>
          <span className={styles.dotGreen}></span>
        </div>

        <div className={styles.tabs}>
          {fileKeys.map((file) => (
            <button
              key={file}
              onClick={() => setActiveFile(file)}
              className={getTabClass(file)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {FILES[file].name}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.windowBody}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarItem}>
            src
            <ChevronDown size={14}/>
          </div>

          {fileKeys.map((file) => (
            <div
              key={file}
              className={getSidebarClass(file)}
              onClick={() => setActiveFile(file)}
              style={{ cursor: 'pointer' }}
            >
              {FILES[file].name}
            </div>
          ))}
        </div>

        <TypewriterCode 
            content={FILES[activeFile]?.content} 
            isAppLoad={isAppLoad} 
        />
        
      </div>
    </div>
  );
}