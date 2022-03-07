import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Montessori cards Webapp</title>
        <meta
          name="description"
          content="An app for displaying montessori cards"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Montessori cards</h1>

        <p className={styles.description}>
          Available actions:
          <ul>
            <li>
              <Link href="/card/create">Create a card</Link>
            </li>
            <li>
              <Link href="/card/all">Display all cards</Link>
            </li>
            <li>
              <Link href="/card/by-category">Display cards by category</Link>
            </li>
          </ul>
        </p>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Susanna Ferrari
        </a>
      </footer>
    </div>
  );
};

export default Home;
