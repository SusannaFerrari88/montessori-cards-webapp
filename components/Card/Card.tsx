import { FC, useCallback } from "react";
import CardType from "../../types/card";
import { Button, Card } from "react-bootstrap";
import styles from "./Card.module.css";

type Props = { card: CardType };

const MontessoriCard: FC<Props> = ({ card }) => {
  const onDeleteCard = useCallback(() => {
    fetch(`http://localhost:5000/api/cards/${card._id}`, {
      method: "DELETE",
    }).then((response) => console.log(response));
  }, []);

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
            <Button variant="danger" onClick={onDeleteCard}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MontessoriCard;
