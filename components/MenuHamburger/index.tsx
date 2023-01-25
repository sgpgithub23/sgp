import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import { ItemsMenu } from "../../utils/items-menu";
import styles from "./MenuHamburger.module.scss";

export default function MenuHamburger() {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <>
      <div
        className={`
        ${
          isShow
            ? classNames(styles.hamburger, styles.active)
            : styles.hamburger
        } `}
        // className={styles.hamburger}
        onClick={() => setIsShow(!isShow)}
      >
        <span className={classNames(styles.line, styles.line1)}></span>
        <span className={classNames(styles.line, styles.line2)}></span>
        <span className={classNames(styles.line, styles.line3)}></span>
      </div>
      {isShow && (
        <div className={styles.itemsMenuHamburger}>
          <ul>
            {ItemsMenu.map(({ title, url, className:classItems }, index: number) => (
              <li key={index} className={classNames(styles[classItems!])}>
                <Link href={url}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
