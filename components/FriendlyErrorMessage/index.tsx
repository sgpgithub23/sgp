import React from "react";
import styles from "./FriendlyErrorMessage.module.scss";

type FriendlyErrorMessageProps = {
  messages?: string[];
  commommsg?: boolean;
};

export default function FriendlyErrorMessage({
  messages,
  commommsg,
}: FriendlyErrorMessageProps) {
  return (
    <>
      {messages && messages.length > 0 && !commommsg ? (
        <fieldset className={styles.errorStructure}>
          <legend> Ocorreu um erro </legend>
          {messages &&
            messages.map((error) => (
              <>
                <p style={{ marginBottom: "10px" }}> {error}</p>
              </>
            ))}
        </fieldset>
      ) : (
        <fieldset className={styles.errorStructure}>
          <legend> Ocorreu um erro </legend>
          <p style={{ marginBottom: "10px" }}>
            {" "}
            Estamos trabalhando para corrigi-lo o mais rápido possível.
          </p>
        </fieldset>
      )}
    </>
  );
}
