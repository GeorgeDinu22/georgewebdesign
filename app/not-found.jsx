import Image from "next/image"
import Link from "next/link"
import styles from "./notFound.module.css"

export default function NotFound() {
  return (
    <div className={styles.container}>
      
      <Image
        width={620}
        height={620}
        alt="Not found Image - George Web Design"
        src="/notFound.webp"
        className={styles.image}
      />

      <p className={styles.text}>
        Se pare că te-ai rătăcit pe această pagină. Nicio problemă.
        Dacă ai nevoie de un website modern, sunt aici să te ajut să îl construim.
      </p>

      <Link href="/" className={styles.button}>
        Înapoi la homepage
      </Link>

    </div>
  )
}