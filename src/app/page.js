import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Image
        className={styles.logo}
        src="/tomzefk-logo.gif"
        alt="Next.js logo"
        width={512}
        height={512}
        priority
      />
      <footer className={styles.footer}>
        <p className={styles.text}>Front-end Developer</p>
        <pre>Building websites with Next.js</pre>
      </footer>
    </main>
  );
}
