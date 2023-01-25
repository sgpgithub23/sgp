import classNames from "classnames";
import React from "react";
import styles from "./Button.module.scss";

type PropsButton = {
    title: string
    color: "blue" | "orange"
}

export default function Button({color, title}: PropsButton) {

    let isColorOrange: boolean = color === "orange"

  return (
    <button className={classNames(
        styles.button, 
        {
            [styles.buttonColorOrange]: isColorOrange,
            [styles.buttonColorBlue]: !isColorOrange,
        }
    )}>{title}</button>
  );
}
