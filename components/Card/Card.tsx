import { FC } from "react";
import CardType from "../../types/card";
import { Button, Card } from "react-bootstrap";

type Props = { card: CardType };

const MontessoriCard: FC<Props> = ({ card }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={card.imageUrl} />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
  );
};

export default MontessoriCard;
