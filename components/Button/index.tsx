import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type PropsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
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
