import type { GetServerSideProps, NextPage } from "next";
import MontessoriCard from "../../components/Card/Card";
import type Card from "../../types/card";

type Props = { cards: Card[] };

const DisplayAllCardsPage: NextPage<Props> = ({ cards }) => {
  return (
    <div>
      <h1>My Montessori cards</h1>
      {cards.map((card) => (
        <MontessoriCard card={card} />
      ))}
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
