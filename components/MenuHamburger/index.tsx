import { Menu } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import { ItemsMenu } from "../../utils/items-menu";
import styles from "./MenuHamburger.module.scss";

export default function MenuHamburger() {

  return (
    <>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button
              as="div"
              className={
                open
                  ? classNames(styles.hamburger, styles.active)
                  : styles.hamburger
              }
            >
              <span className={classNames(styles.line, styles.line1)}></span>
              <span className={classNames(styles.line, styles.line2)}></span>
              <span className={classNames(styles.line, styles.line3)}></span>
            </Menu.Button>
            {open && (
              <div className={styles.itemsMenuHamburger}>
                <Menu.Item as="ul">
                  {ItemsMenu.map(
                    ({ title, url, className: classItems }, index: number) => (
                      <Menu.Item
                        as="li"
                        key={index}
                        className={classNames(styles[classItems!])}
                      >
                        <Link href={url}>{title}</Link>
                      </Menu.Item>
                    )
                  )}
                </Menu.Item>
              </div>
            )}
          </>
        )}
      </Menu>
    </>
  )
}
