'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    const { name, value, label } = metric;
    const roundedValue = Math.round(value * 100) / 100;

    // Clasificăm metricele pentru o consolă organizată
    switch (name) {
      // 1. Core Web Vitals (Experiența Utilizatorului)
      case 'FCP': // Prima pată de culoare
      case 'LCP': // Cel mai mare element vizibil
      case 'CLS': // Stabilitatea vizuală (Layout Shift)
      case 'FID': // Prima reacție la click (Direct legat de TBT)
      case 'INP': // Interactivitate pe parcursul vizitei (Succesorul FID)
      case 'TTFB': // Viteza serverului
        console.log(`📊 [Web Vital] ${name}:`, roundedValue, label === 'web-vital' ? '(Core)' : '');
        break;

      // 2. Metrice specifice Next.js (Critice pentru TBT)
      case 'Next.js-hydration':
        // Timpul necesar React să facă pagina interactivă. 
        // Dacă e > 500ms, TBT va fi uriaș.
        console.info(`🔧 [Next.js] Hydration Time: ${roundedValue}ms`);
        if (value > 500) console.warn('⚠️ Hidratare lentă! Prea multe Client Components sau DOM prea mare.');
        break;

      case 'Next.js-route-change-to-render':
        // Timpul de la click pe link până la începerea randării noii pagini
        console.info(`🚀 [Next.js] Route Change to Render: ${roundedValue}ms`);
        break;

      case 'Next.js-render':
        // Cât a durat efectiv randarea paginii după schimbarea rutei
        console.info(`🎨 [Next.js] Render Time: ${roundedValue}ms`);
        break;

      default:
        console.log(`📈 [Metric] ${name}:`, roundedValue);
    }

    // Alertă specială pentru TBT / Blocaje
    if ((name === 'INP' || name === 'FID' || name === 'Next.js-hydration') && value > 300) {
      console.error(`🚨 ALERTĂ PERFORMANȚĂ: ${name} ridicat (${roundedValue}ms) - Aceasta cauzează Freezing/TBT.`);
    }
  })

  return null
}