type Card = {
  _id: string;
  name: string;
  imageUrl: string;
  translations: { [language: string]: string };
};

export default Card;
