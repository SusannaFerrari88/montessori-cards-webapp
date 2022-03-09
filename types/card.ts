type Card = {
  _id: string;
  name: string;
  imageUrl: string;
  translations: Translations;
};

export type Translations = { [language: string]: string };

export default Card;
