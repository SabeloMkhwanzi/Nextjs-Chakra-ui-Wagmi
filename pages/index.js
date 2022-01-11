import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navbar } from "../component";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js & Chakra-Ui Template</title>
        <meta name="description" content="Web3.0 Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://nextjs.org">Next.js, TypeScript & Chakra-Ui!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing the Template
        </p>

        {/* <WalletModel /> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
