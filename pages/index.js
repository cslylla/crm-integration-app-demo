import Head from "next/head";
import Image from "next/image";
import ContactFrom from "../components/ContactForm";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>CRM Integration App Demo</title>
        <meta
          name="description"
          content="Showcasing CRM integration with Integration.app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={`${styles.page}`}>
        <main className={styles.main}>
          <div className={styles.ctas}>
            <h1>CRM Integration</h1>
            <ContactFrom />
          </div>
        </main>
        <footer className={styles.footer}>
          made by
          <a
            href="https://github.com/cslylla"
            target="_blank"
            rel="noopener noreferrer"
          >
            cslylla
          </a>
          <a
            href="https://integration.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/integration-app-logo.svg"
              alt="Integration App icon"
              width={16}
              height={16}
            />
            Try it →
          </a>
        </footer>
      </div>
    </>
  );
}
