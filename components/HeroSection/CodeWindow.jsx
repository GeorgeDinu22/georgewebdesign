'use client';

import styles from './styles.module.css';
import dynamic from 'next/dynamic';
import { ChevronDown } from 'lucide-react';

// Aceasta este macheta 1:1 care se randează imediat, fără a aștepta JS-ul
const EditorSkeleton = () => (
  <>

    <div className={styles.windowBody}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarItem}>
          src
          <ChevronDown size={14} />
        </div>
        <div className={styles.sidebarItemActive}>afacerea.jsx</div>
        <div className={styles.sidebarItem}>strategie.js</div>
        <div className={styles.sidebarItem}>brand.css</div>
      </div>

      <div className={styles.editor}>
        {/* Un rând gol cu cursorul, fix cum arată înainte să înceapă tastarea */}
        <div className={styles.line}>
          <span className={styles.cursor} />
        </div>
      </div>
    </div>
  </>
);

// Importăm interactivitatea, afișând macheta cât timp se descarcă JS-ul
const ClientEditor = dynamic(() => import('./ClientEditor'), {
  loading: () => <EditorSkeleton />,
  ssr: false 
});

export default function CodeWindow() {
  return (
    <div className={styles.codeWindow}>
            <div className={styles.windowHeader}>
      <div className={styles.dots}>
        <span className={styles.dotRed}></span>
        <span className={styles.dotYellow}></span>
        <span className={styles.dotGreen}></span>
      </div>
      
    </div>
      <ClientEditor />
    </div>
  );
}