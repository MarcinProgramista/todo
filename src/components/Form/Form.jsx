/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../Button/Button";
import styes from "./Form.module.css";

export function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        //console.log(inputValue);

        onFormSubmit(inputValue);
      }}
      className={styes.form}
    >
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className={styes.input}
        type="text"
      />
      <Button>Dodaj</Button>
    </form>
  );
}
