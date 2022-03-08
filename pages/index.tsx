import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Button, ButtonGroup } from "react-bootstrap";
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Montessori cards</h1>
        <p></p>
        <ButtonGroup vertical>
          <Link href="/card/create">
            <Button>Create a new card </Button>
          </Link>
          <Link href="/card/all">
            <Button>Display all cards </Button>
          </Link>
          <Button>Print cards</Button>
        </ButtonGroup>
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
