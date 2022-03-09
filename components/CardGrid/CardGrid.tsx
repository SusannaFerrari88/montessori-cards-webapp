import Card from "../../types/card";
import MontessoriCard from "../Card/Card";
import styles from "./CardGrid.module.css";

type Props = { cards: Card[] };

const CardGrid: React.FC<Props> = ({ cards }) => {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <MontessoriCard card={card} />
      ))}
    </div>
  );
};

export default CardGrid;
