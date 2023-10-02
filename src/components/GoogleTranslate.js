import { useState } from "react";
import axios from "axios";
import "../styles/GoogleTranslate.css";

export default function GoogleTranslate() {
  const [sentence, setSentence] = useState("");
  const [translate, setTranslate] = useState("");

  function handleSubmit(e) {
    const options = {
      method: "POST",
      url: "https://microsoft-translator-text.p.rapidapi.com/translate",
      params: {
        "to[0]": "fr",
        "api-version": "3.0",
        profanityAction: "NoAction",
        textType: "plain",
      },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "a290f8d3d7msh8b8f1306044ca0cp1e3e70jsn2066f472fc51",
        "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
      },
      data: [
        {
          Text: sentence,
        },
      ],
    };

    axios(options)
      .then((res) => {
        setTranslate(res.data[0].translations[0].text);
      })
      .catch((err) => {
        console.log("error: ", err);
      });

    e.preventDefault();
  }

  return (
    <>
      <p className="api-title">Translate API</p>
      <form onSubmit={handleSubmit}>
        <label className="api-input">Enter a sentence</label>
        <input
          type="text"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
        />
        <div className="translate-result">{translate}</div>

        <button className="api-button">Translate!</button>
      </form>
    </>
  );
}
