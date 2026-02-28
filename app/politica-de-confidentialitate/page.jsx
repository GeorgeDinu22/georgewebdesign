import styles from "./styles.module.css";

export const metadata = {
  title: "Politica de Confidențialitate | George Web Design",
  description:
    "Informații despre prelucrarea datelor personale, formularul de contact și analytics (Umami).",
};

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
}

export default function PoliticaConfidentialitate() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <span className={styles.badge}>Legal</span>
        <h1>Politica de Confidențialitate</h1>
        <p className={styles.subtitle}>
          Află cum sunt colectate, utilizate și protejate datele tale.
        </p>
        <p className={styles.updated}>
          Ultima actualizare: 27 Februarie 2026
        </p>
      </div>

      <div className={styles.card}>
        <Section title="1. Cine este operatorul de date">
          <p>
            Operatorul datelor este <strong>George Web Design</strong>.
          </p>
          <ul>
            <li>Email: contact@georgewebdesign.ro</li>
            <li>Telefon: 0733 782 872</li>
          </ul>
        </Section>

        <Section title="2. Ce date colectăm">
          <p><strong>Prin formularul de contact:</strong></p>
          <ul>
            <li>Nume</li>
            <li>Email</li>
            <li>Telefon (opțional)</li>
            <li>Mesajul transmis</li>
          </ul>

          <p><strong>Date tehnice:</strong></p>
          <p>
            Adresă IP, tip browser, pagini accesate — strict pentru
            funcționare și securitate.
          </p>

          <p><strong>Analytics (Umami):</strong></p>
          <p>
            Folosim Umami pentru statistici agregate despre trafic
            (pagini vizitate, dispozitiv, locație generală).
            Nu folosim tracking invaziv și nu vindem date personale.
          </p>
        </Section>

        <Section title="3. Scopul prelucrării">
          <ul>
            <li>Răspuns la solicitări prin formular</li>
            <li>Îmbunătățirea experienței pe site</li>
            <li>Securitate și prevenirea abuzurilor</li>
          </ul>
        </Section>

        <Section title="4. Furnizori terți">
          <ul>
            <li>Hosting: Vercel</li>
            <li>Analytics: Umami</li>
            <li>Servicii email (pentru livrarea mesajelor)</li>
          </ul>
        </Section>

        <Section title="5. Drepturile tale">
          <ul>
            <li>Drept de acces</li>
            <li>Drept de rectificare</li>
            <li>Drept de ștergere</li>
            <li>Drept de opoziție</li>
            <li>Drept de retragere a consimțământului</li>
          </ul>
          <p>
            Pentru exercitarea drepturilor, scrie la:
            <strong> contact@georgewebdesign.ro</strong>
          </p>
        </Section>

        <Section title="6. Securitatea datelor">
          <p>
            Implementăm măsuri tehnice și organizatorice pentru protejarea
            datelor împotriva accesului neautorizat sau utilizării abuzive.
          </p>
        </Section>

        <Section title="7. Modificări ale politicii">
          <p>
            Putem actualiza această politică periodic.
            Orice modificare va fi afișată pe această pagină.
          </p>
        </Section>
      </div>

      <div className={styles.bottomCta}>
        <p>Ai întrebări legate de confidențialitate?</p>
        <a href="mailto:contact@georgewebdesign.ro" className={styles.button}>
          Trimite un email
        </a>
      </div>
    </main>
  );
}