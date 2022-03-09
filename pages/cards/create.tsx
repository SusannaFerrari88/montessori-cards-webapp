import { useCallback, useState } from "react";
import type { NextPage } from "next";
import { Button, Form, Image } from "react-bootstrap";
import styles from "../../styles/Home.module.css";

const baseUrl = "http://localhost:5000/api";

const CreateCardPage: NextPage = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const [translations, setTranslations] = useState({});

  const onGenerateImage = useCallback(() => {
    fetch(`${baseUrl}/images?name=${name}&index=${imageIndex}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((imageUrl) => setImageUrl(imageUrl));
    setImageIndex(imageIndex + 1);
  }, [name, imageIndex, setImageIndex, setImageUrl]);

  const onNameChange = useCallback(
    (e) => {
      setName(e.target.value);
      setImageIndex(0);
    },
    [setName]
  );

  const onTranslationChange = (language: string) =>
    useCallback(
      (e) => {
        const translation = e.target.value;
        setTranslations({
          ...translations,
          [language]: translation,
        });
      },
      [translations, setTranslations]
    );

  const onCreateCard = useCallback(() => {
    fetch(`${baseUrl}/cards/`, {
      method: "PUT",
      body: JSON.stringify({
        name,
        imageUrl,
        translations,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        }
        throw response;
      })
      .then((response) => console.log(response));
  }, [name, imageUrl, translations]);
  return (
    <div className={styles.container}>
      <h1>Create a new card</h1>
      <Form>
        <Form.Group className="mb-3" controlId="create.name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            value={name}
            onChange={onNameChange}
          />
        </Form.Group>
        <Form.Group>
          <Image src={imageUrl} />
          <Button onClick={onGenerateImage} disabled={name.length <= 0}>
            Search Image
          </Button>
        </Form.Group>
        <h2>Translations</h2>
        <Form.Group className="mb-3" controlId="create.name">
          <Form.Label>Italian</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            onChange={onTranslationChange("it-IT")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="create.name">
          <Form.Label>German</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            onChange={onTranslationChange("de-DE")}
          />
        </Form.Group>
      </Form>
      <Button
        onClick={onCreateCard}
        disabled={name.length == 0 || Object.keys(translations).length == 0}
      >
        Create a card
      </Button>
    </div>
  );
};

export default CreateCardPage;
