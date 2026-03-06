import styles from "./styles.module.css";
import Link from "next/link";

export const metadata = {
  title: "Politica de Confidențialitate | George Web Design",
  description:
    "Politica de confidențialitate George Web Design. Află cum sunt colectate, utilizate și protejate datele tale personale conform GDPR.",
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
          Află cum sunt colectate, utilizate și protejate datele tale personale.
        </p>
        <p className={styles.updated}>
          Ultima actualizare: 27 Februarie 2026
        </p>
        <Link href="/" className={styles.backButton}>
           Înapoi la site
        </Link>
      </div>

      <div className={styles.card}>
        <Section title="1. Operatorul de date">
          <p>
            Această politică descrie modul în care <strong>George Web Design</strong> colectează
            și utilizează datele cu caracter personal prin intermediul website-ului
            <strong> https://www.georgeweb-design.ro</strong>.
          </p>
          <ul>
            <li>Email: office@georgeweb-design.ro</li>
            <li>Telefon: 0733 782 872</li>
          </ul>
        </Section>

        <Section title="2. Ce date colectăm">
          <p>
            <strong>Date colectate prin formularul de contact pentru a putea răspunde solicitării:</strong>
          </p>
          <ul>
            <li>Nume</li>
            <li>Email</li>
            <li>Telefon </li>
            <li>Denumire Afacere (opțional)</li>
            <li>Mesajul transmis</li>
          </ul>

          <p><strong>Date tehnice colectate automat:</strong></p>
          <ul>
            <li>Adresă IP</li>
            <li>Tip browser</li>
            <li>Pagini vizitate</li>
            <li>Informații despre dispozitiv</li>
          </ul>
          <p>
            Aceste date sunt utilizate exclusiv pentru funcționarea site-ului și
            pentru securitate.
          </p>
        </Section>

        <Section title="3. Analytics">
          <p>
            Website-ul utilizează <strong>Umami Analytics</strong> pentru a analiza
            modul în care este utilizat site-ul.
          </p>
          <p>
            Umami colectează statistici agregate precum pagini vizitate,
            tip dispozitiv sau locație aproximativă. Nu sunt utilizate metode
            de tracking invaziv și nu sunt colectate date personale pentru profilare.
          </p>
        </Section>

        <Section title="4. Scopul prelucrării datelor">
          <ul>
            <li>Răspuns la solicitările trimise prin formularul de contact</li>
            <li>Îmbunătățirea experienței pe website</li>
            <li>Securitate și prevenirea abuzurilor</li>
          </ul>
        </Section>

        <Section title="5. Temeiul legal al prelucrării">
          <p>Prelucrarea datelor se bazează pe:</p>
          <ul>
            <li>Consimțământul utilizatorului (formular de contact)</li>
            <li>Interesul legitim pentru funcționarea și securitatea website-ului</li>
          </ul>
        </Section>

        <Section title="6. Furnizori terți">
          <p>Pentru funcționarea site-ului utilizăm servicii externe:</p>
          <ul>
            <li>Hosting: Vercel</li>
            <li>Analytics: Umami</li>
            <li>MailerSend pentru livrarea emailurilor</li>
          </ul>
          <p>
            Acești furnizori pot procesa date în numele nostru în conformitate
            cu legislația privind protecția datelor.
          </p>
        </Section>

        <Section title="7. Perioada de stocare">
          <p>
            Datele transmise prin formularul de contact sunt păstrate doar atât
            timp cât este necesar pentru a răspunde solicitării și pentru
            comunicarea cu utilizatorul.
          </p>
        </Section>

        <Section title="8. Drepturile tale">
          <p>Conform GDPR, ai următoarele drepturi:</p>
          <ul>
            <li>Dreptul de acces la date</li>
            <li>Dreptul de rectificare</li>
            <li>Dreptul de ștergere</li>
            <li>Dreptul de restricționare a prelucrării</li>
            <li>Dreptul de opoziție</li>
            <li>Dreptul la portabilitatea datelor</li>
            <li>Dreptul de retragere a consimțământului</li>
          </ul>
          <p>
            Pentru exercitarea acestor drepturi ne poți contacta la:
            <strong> office@georgeweb-design.ro</strong>
          </p>
        </Section>

        <Section title="9. Autoritatea de supraveghere">
          <p>
            Dacă consideri că drepturile tale privind protecția datelor au fost
            încălcate, poți depune o plângere la:
          </p>
          <p>
            Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
          </p>
          <p>https://www.dataprotection.ro</p>
        </Section>

        <Section title="10. Securitatea datelor">
          <p>
            Implementăm măsuri tehnice și organizatorice pentru a proteja
            datele împotriva accesului neautorizat, modificării sau divulgării.
          </p>
        </Section>

        <Section title="11. Modificări ale politicii">
          <p>
            Această politică poate fi actualizată periodic. Orice modificare va
            fi publicată pe această pagină.
          </p>
        </Section>
      </div>

      <div className={styles.bottomCta}>
        <p>Ai întrebări legate de confidențialitate?</p>
        <a href="mailto:office@georgeweb-design.ro" className={styles.button}>
          Trimite un email
        </a>
      </div>
    </main>
  );
}