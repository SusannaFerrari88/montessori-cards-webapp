import type { GetServerSideProps, NextPage } from "next";
import MontessoriCard from "../../components/Card/Card";
import type Card from "../../types/card";
import styles from "../../styles/Home.module.css";
import CardGrid from "../../components/CardGrid/CardGrid";

type Props = { cards: Card[] };

const DisplayAllCardsPage: NextPage<Props> = ({ cards }) => {
  return (
    <div className={styles.container}>
      <h1>My Montessori cards</h1>
      <CardGrid cards={cards} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch(`http://localhost:5000/api/cards/`);
  const responseBody = await res.json();
  let cards: Card[] = [];
  if (responseBody.success) {
    cards = responseBody.data as Card[];
  }

  // Pass data to the page via props
  return { props: { cards } };
};

export default DisplayAllCardsPage;
