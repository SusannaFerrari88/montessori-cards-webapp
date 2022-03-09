import { useCallback, useState } from "react";
import type { NextPage } from "next";
import { Alert, Button, Form, Image } from "react-bootstrap";
import styles from "../../styles/CreatePage.module.css";
import { Translations } from "../../types/card";
import Link from "next/link";
import { BASE_API_URL } from "../../config/constants";

const CreateCardPage: NextPage = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const [translations, setTranslations] = useState({} as Translations);
  const [showAlert, setShowAlert] = useState(false);

  const onGenerateImage = useCallback(() => {
    fetch(`${BASE_API_URL}/images?name=${name}&index=${imageIndex}`)
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
      setShowAlert(false);
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
    fetch(`${BASE_API_URL}/cards/`, {
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
    setName("");
    setImageUrl("");
    setTranslations({});
    setShowAlert(true);
  }, [name, imageUrl, translations]);
  return (
    <div className={styles.container}>
      <Link href="/">
        <Button variant="outline-primary">Back to home</Button>
      </Link>
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
          <Image src={(imageUrl.length && imageUrl) || "/placeholder.png"} />
          <Button
            className={styles.searchImage}
            onClick={onGenerateImage}
            disabled={name.length <= 0}
          >
            Search Image
          </Button>
        </Form.Group>
        <h2>Translations</h2>
        {/* Make this Form Group dynamic */}
        <Form.Group className="mb-3" controlId="create.name">
          <Form.Label>Italian</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            onChange={onTranslationChange("it-IT")}
            value={translations["it-IT"] || ""}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="create.name">
          <Form.Label>German</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            onChange={onTranslationChange("de-DE")}
            value={translations["de-DE"] || ""}
          />
        </Form.Group>
        <div className={styles.createButton}>
          <Button
            onClick={onCreateCard}
            disabled={name.length == 0 || Object.keys(translations).length == 0}
          >
            Create a card
          </Button>
          {showAlert && (
            <Alert variant="success" className={styles.alert}>
              Card created!
            </Alert>
          )}
        </div>
      </Form>
    </div>
  );
};

export default CreateCardPage;
