import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type PropsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string
    color: "blue" | "orange" | "darkBlue" | "grey"
}

export default function Button({color, title}: PropsButton) {

  

  return (
    <button className={classNames(
        styles.button, 
        {
            [styles.buttonColorOrange]: color === "orange",
            [styles.buttonColorBlue]:  color === "blue",
            [styles.buttonColorDarkBlue]:  color === "darkBlue",
            [styles.buttonColorGrey]:  color === "grey",
        }
    )}>{title}</button>
  );
}
