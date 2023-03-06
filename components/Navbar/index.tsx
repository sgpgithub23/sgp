import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ItemsMenu, MenuOutros } from "../../utils/items-menu";
import classNames from "classnames";
import MenuHamburger from "../MenuHamburger";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const { pathname, push } = useRouter();
  const [isShow, setIsShow] = useState<boolean>(false);

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
        style={{ width: "auto", height: "auto" }}
        alt="Logo da SGP"
      />
      <div className={styles.menuEnavbar}>
        <nav className={styles.navbar}>
          <ul className={styles.listNavbar}>
            {ItemsMenu.map(({ title, url, className }, index: number) => {
              if (title === "Outros") {
                return (
                  <>
                    <li
                      onClick={() => setIsShow(!isShow)}
                      className={classNames(
                        styles.itemsMenu,
                        styles[className!]
                      )}
                      key={index}
                    >
                      <span>{title}</span>
                    </li>
                    {isShow && (
                      <div className={styles.itemsOutros}>
                        <ul>
                          {MenuOutros.map(
                            ({ title, url, className, disabled }) => (
                              <li className={styles[className!]}>
                                <Link href={url}>{title}</Link>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </>
                );
              } else {
                return (
                  <li
                    role="button"
                    onClick={() => push(`/${url}`)}
                    className={classNames(styles.itemsMenu, styles[className!])}
                    key={index}
                  >
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
                );
              }
            })}
          </ul>
        </nav>
        <MenuHamburger />
      </div>
    </header>
  );
}
