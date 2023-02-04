import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type PropsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string
    color: "blue" | "orange" | "darkBlue" | "grey"
}

export default function Button(props: PropsButton) {

  

  return (
    <button {...props} className={classNames(
        styles.button, 
        {
            [styles.buttonColorOrange]: props.color === "orange",
            [styles.buttonColorBlue]:  props.color === "blue",
            [styles.buttonColorDarkBlue]:  props.color === "darkBlue",
            [styles.buttonColorGrey]:  props.color === "grey",
        }
    )}>{props.title}</button>
  );
}
