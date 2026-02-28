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

const parseContent = (content) => {
  const tokens = [];
  
  React.Children.forEach(content.props.children, (line, lineIndex) => {
    tokens.push({ type: 'newline', id: `line-${lineIndex}` });
    React.Children.forEach(line.props.children, (child, childIndex) => {
      if (!child && child !== 0) return;
      if (typeof child === 'string') {
        child.split('').forEach((char, i) => {
          tokens.push({ 
            type: 'char', 
            value: char === ' ' ? '\u00A0' : char, 
            className: null, 
            id: `l${lineIndex}-c${childIndex}-${i}` 
          });
        });
      } else if (child.props && child.props.className === styles.ln) {
        tokens.push({ 
            type: 'block', 
            value: child.props.children, 
            className: styles.ln, 
            id: `ln-${lineIndex}` 
        });
      } else {
        const text = child.props.children;
        const className = child.props.className;
        if (typeof text === 'string') {
          text.split('').forEach((char, i) => {
            tokens.push({ 
                type: 'char', 
                value: char === ' ' ? '\u00A0' : char, 
                className: className, 
                id: `l${lineIndex}-s${childIndex}-${i}` 
            });
          });
        } else if (text) {
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
  const [isTyping, setIsTyping] = useState(false);
  const editorRef = useRef(null);

  const parsedTokens = useMemo(() => parseContent(content), [content]);

  // 1. Inițializare (cu animație activă pe toate device-urile)
  useEffect(() => {
      setCurrentIndex(0);
      setIsTyping(true); // Ascundem scrollbar cât timp scriem

      // Delay inițial doar la prima încărcare a aplicației
      if (isAppLoad) {
          const delay = 200;
          const timer = setTimeout(() => {
             // Animația va începe după ce acest timer expiră,
             // gestionat de următorul useEffect
          }, delay);
          return () => clearTimeout(timer);
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  // 2. Logica de Tastare Optimizată cu requestAnimationFrame
  useEffect(() => {
    if (currentIndex >= parsedTokens.length) {
        setIsTyping(false); // Afișăm scrollbar la final
        return;
    }

    let animationFrameId;
    let lastTime = performance.now();
    
    // Viteză: 15-35ms pe desktop, un pic mai rapid pe mobil pentru UX
    const minSpeed = window.innerWidth < 768 ? 10 : 15;
    let interval = Math.floor(Math.random() * 20) + minSpeed;

    const animate = (time) => {
        if (time - lastTime >= interval) {
            setCurrentIndex((prev) => {
                // Sărim peste newline/block instant pentru performanță
                let nextIndex = prev + 1;
                while (
                    nextIndex < parsedTokens.length && 
                    (parsedTokens[nextIndex].type === 'newline' || parsedTokens[nextIndex].type === 'block')
                ) {
                    nextIndex++;
                }
                return nextIndex;
            });
            lastTime = time;
            interval = Math.floor(Math.random() * 20) + minSpeed;
        }
        animationFrameId = requestAnimationFrame(animate);
    };

    // Delay-ul inițial de 1750ms se aplică doar dacă suntem la început și e prima încărcare
    const startDelay = (isAppLoad && currentIndex === 0) ? 1750 : 0;
    
    const delayTimer = setTimeout(() => {
        animationFrameId = requestAnimationFrame(animate);
    }, startDelay);

    return () => {
        cancelAnimationFrame(animationFrameId);
        clearTimeout(delayTimer);
    };
  }, [currentIndex, parsedTokens, isAppLoad]);

  // 3. Auto-Scroll (Activ pe toate device-urile)
  useEffect(() => {
    if (isTyping && editorRef.current) {
        editorRef.current.scrollTo({
            top: editorRef.current.scrollHeight,
            behavior: 'smooth' 
        });
    }
  }, [currentIndex, isTyping]);

  // 4. Randare Memoizată
  const visibleTokens = useMemo(() => parsedTokens.slice(0, currentIndex), [parsedTokens, currentIndex]);

  const renderContent = () => {
    const lines = [];
    let currentLineChildren = [];
    
    visibleTokens.forEach((token, idx) => {
        if (token.type === 'newline') {
            if (idx > 0) {
                 lines.push(
                    <div key={`line-${lines.length}`} className={styles.line}>
                        {currentLineChildren}
                    </div>
                 );
            }
            currentLineChildren = [];
        } else {
             currentLineChildren.push(
                <span key={token.id} className={token.className}>{token.value}</span>
            );
        }
    });

    if (currentLineChildren.length > 0 || lines.length < parsedTokens.filter(t => t.type === 'newline').length) {
         if (isTyping) {
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
      {renderContent()}
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
    <div className={styles.codeWindow}>
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