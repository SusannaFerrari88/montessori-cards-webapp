# Montessori Card Generator WEBAPP

This is the FE service for the Montessori Card Generator APP.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

In order for this webapp to work locally, you need to also clone the [Montessori card API](https://github.com/SusannaFerrari88/montessori-cards-api) repo and run it locally as well (instructions in the repo's README).

Once the BE server is running on localhost:5000, you can find the webapp at:

[http://localhost:3000](http://localhost:3000)

Here you will see the main page where you will be able to select one of the three options:

- Create a new card
- View all existing cards
- Print cards (WIP)

When creating a new card, the [pexels API](https://www.pexels.com/api/documentation/#photos-search) is used to retrieve a picture that fits the description of the card.

The user can also view all existing cards and from that page edit or deleting cards.

The last functionality, print cards, is still WIP and it consists in generating a printable version of the existing Montessori cards (or a selection of these) in different formats:

- Card with image and all translations
- Card with image and only one translation
- Card with image and then a separate card with the translation

With all these different combinations it is possible to create fun games for your kids and toddlers.

Enjoy!!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
