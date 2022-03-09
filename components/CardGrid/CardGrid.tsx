import { useCallback, useState } from "react";
import { BASE_API_URL } from "../../config/constants";
import Card from "../../types/card";
import MontessoriCard from "../Card/Card";
import styles from "./CardGrid.module.css";

type Props = { cards: Card[] };

const CardGrid: React.FC<Props> = ({ cards }) => {
  const [activeCards, setActiveCards] = useState(cards);

  const onDeleteCard = useCallback((id) => {
    fetch(`${BASE_API_URL}/cards/${id}`, {
      method: "DELETE",
    }).then((response) => {
      console.log(response);
      setActiveCards(activeCards.filter((card) => card._id != id));
    });
  }, []);

  return (
    <div className={styles.container}>
      {activeCards.map((card, index) => (
        <MontessoriCard key={index} card={card} onDeleteCard={onDeleteCard} />
      ))}
    </div>
  );
};

export default CardGrid;
