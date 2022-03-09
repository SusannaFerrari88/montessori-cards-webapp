import type { GetServerSideProps, NextPage } from "next";
import type Card from "../../types/card";
import styles from "../../styles/Home.module.css";
import CardGrid from "../../components/CardGrid/CardGrid";
import Link from "next/link";
import { Button } from "react-bootstrap";

const BASE_API_URL = "http://localhost:5000/api";

type Props = { cards: Card[] };

const DisplayAllCardsPage: NextPage<Props> = ({ cards }) => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Button variant="outline-primary">Back to home</Button>
      </Link>
      <h1>My Montessori cards</h1>
      <CardGrid cards={cards} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch(`${BASE_API_URL}/cards/`);
  const responseBody = await res.json();
  let cards: Card[] = [];
  if (responseBody.success) {
    cards = responseBody.data as Card[];
  }
  return { props: { cards } };
};

export default DisplayAllCardsPage;
