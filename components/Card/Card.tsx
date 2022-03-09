import { FC, useCallback } from "react";
import CardType from "../../types/card";
import { Button, Card } from "react-bootstrap";
import styles from "./Card.module.css";

type Props = { card: CardType; onDeleteCard: (id: string) => void };

const MontessoriCard: FC<Props> = ({ card, onDeleteCard }) => {
  return (
    <div className={styles.card}>
      <Card>
        <Card.Img variant="top" src={card.imageUrl} />
        <Card.Body>
          <Card.Text>
            <b>English</b> - {card.name}
          </Card.Text>
          <Card.Text>
            <b>Italian</b> - {card.translations["it-IT"]}
          </Card.Text>
          <Card.Text>
            <b>German</b> - {card.translations["de-DE"]}
          </Card.Text>
          <div className={styles.buttons}>
            <Button variant="primary">Edit</Button>
            <Button variant="danger" onClick={() => onDeleteCard(card._id)}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MontessoriCard;
