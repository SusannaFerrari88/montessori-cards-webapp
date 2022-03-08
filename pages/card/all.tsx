import type { GetServerSideProps, NextPage } from "next";
import MontessoriCard from "../../components/Card/Card";
import type Card from "../../types/card";

type Props = { cards: Card[] };

const DisplayAllCardsPage: NextPage<Props> = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => (
        <MontessoriCard card={card} />
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // const res = await fetch(`https://.../data`);
  // const cards = (await res.json()) as Card[];
  const cards = [
    {
      name: "Apple",
      imageUrl:
        "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130",
      translations: { "it-IT": "Mela", "de-DE": "Apfel" },
    },
  ];

  // Pass data to the page via props
  return { props: { cards } };
};

export default DisplayAllCardsPage;
