import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ItemsMenu } from "../../utils/items-menu";
import classNames from "classnames";
import MenuHamburger from "../MenuHamburger";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const { pathname, push } = useRouter();

  return (
    <header className={styles.header}>
      <Image
        role="button"
        onClick={() => push("/quem-somos")}
        className={styles.logoNavbar}
        src={"/logo.svg"}
        priority
        width={100}
        height={50}
        style={{width: "auto", height: "auto"}}
        alt="Logo da SGP"
      />
      <div className={styles.menuEnavbar}>
        <nav className={styles.navbar}>
          <ul className={styles.listNavbar}>
            {ItemsMenu.map(({ title, url, className }, index: number) => {
              return (
                <li className={classNames(styles.itemsMenu, styles[className!])} key={index}>
                <Link
                  href={url}
                  style={
                    pathname === url
                      ? { color: "white", fontWeight: "bold" }
                      : { color: "white" }
                  }
                >
                  {title}
                </Link>
              </li>
              )})}

          </ul>
        </nav>
        <MenuHamburger />
      </div>
    </header>
  );
}
