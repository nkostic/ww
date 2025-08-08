import { ChangeEvent, useState } from "react";

import ChildComponent from "./components/ChildComponent";

import styles from "./styles.module.scss";

type ExampleComponentProps = {
  title: string;
  initialValue?: string;
  onSubmit?: (value: string) => void;
};

export default function ExampleComponent({
  title,
  initialValue = "",
  onSubmit
}: ExampleComponentProps) {
  const [inputValue, setInputValue] = useState<string>(initialValue);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const processedTitle = formatTitle(title);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{processedTitle}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
      {isSubmitted && <ChildComponent message="Form submitted successfully!" />}
    </div>
  );

  function formatTitle(rawTitle: string) {
    return rawTitle.trim().toUpperCase();
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
    onSubmit?.(inputValue);
  }
}
