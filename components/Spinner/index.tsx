import React, { useEffect, useState } from "react";
import style from "./Spinner.module.scss";

export default function Spinner() {
  return (
    <div className={style.spinner}>
      <span className={style["spinner-inner-1"]}></span>
      <span className={style["spinner-inner-2"]}></span>
      <span className={style["spinner-inner-3"]}></span>
    </div>
  );
}
