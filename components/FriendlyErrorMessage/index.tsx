import React from "react";
import styles from "./FriendlyErrorMessage.module.scss";

type FriendlyErrorMessageProps = {
  messages: string[];
};

export default function FriendlyErrorMessage({
  messages,
}: FriendlyErrorMessageProps) {
  return (
    <>
      {messages.length > 0 && (
        <fieldset className={styles.errorStructure}>
          <legend> Ocorreu um erro: </legend>
          {messages.map((error) => (
            <>
              <p style={{ marginBottom: "10px" }}> {error}</p>
            </>
          ))}
        </fieldset>
      )}
    </>
  );
}
