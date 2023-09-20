import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ItemsMenu } from "../../utils/items-menu";
import classNames from "classnames";
import MenuHamburger from "../MenuHamburger";
import styles from "./Navbar.module.scss";
import { Menu } from "@headlessui/react";

export default function Navbar() {
  const { asPath, push } = useRouter();

  return (
    <header className={styles.header}>
      <Image
        role="button"
        onClick={() => push("/")}
        className={classNames(styles.logoNavbar, "imgOnHover")}
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
              if (url === "/solucoes-inovadoras") {
                return (
                  <Menu
                    as="li"
                    key={url}
                    className={classNames(styles[className!])}
                  >
                    {({ open }) => (
                      <>
                        <Menu.Button as="div">
                          <span>{title}</span>
                        </Menu.Button>
                        {open && (
                          <>
                            <Menu.Items
                              as="div"
                              className={styles.itemsMenuSolucoes}
                              key={index}
                            >
                              <Menu.Item>
                                <Link href={"/solucoes-inovadoras"}>
                                  Orientações SGP
                                </Link>
                              </Menu.Item>
                              <Menu.Item>
                                <Link href={"/solucoes-inovadoras/#inloco"}>
                                  Assessoria <em>in Loco</em>
                                </Link>
                              </Menu.Item>
                              <Menu.Item>
                                <Link href={"/solucoes-inovadoras/assessoria"}>
                                  Assessoria Hora Certa
                                </Link>
                              </Menu.Item>
                              <Menu.Item>
                                <Link
                                  href={
                                    "/solucoes-inovadoras/#assessoria-empresas-privadas"
                                  }
                                >
                                  Assessoria para Empresas Privadas
                                </Link>
                              </Menu.Item>
                              <Menu.Item>
                                <Link
                                  href={
                                    "/solucoes-inovadoras/#projeto-regulamentacao"
                                  }
                                >
                                  Implantação de Leis
                                </Link>
                              </Menu.Item>
                            </Menu.Items>
                          </>
                        )}
                      </>
                    )}
                  </Menu>
                );
              } else {
                return (
                  <li
                    role="button"
                    // onClick={() => push(url)}
                    className={classNames(styles.itemsMenu, styles[className!])}
                    key={index}
                  >
                    <Link
                      href={url}
                      style={
                        asPath === url
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
