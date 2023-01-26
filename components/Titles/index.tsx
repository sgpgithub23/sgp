import React from 'react'
import styles from "./Titles.module.scss";

function DarkBlue(props: any) {
  return (
    <h2 className={styles.darkblue}>{props.children}</h2>
  )
}

export const Title = {
    DarkBlue: DarkBlue
}
