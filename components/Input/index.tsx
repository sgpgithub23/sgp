import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";
import styles from "./Input.module.scss";
import InputMask from "react-input-mask";
import classNames from "classnames";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type TextProps = InputProps & {
  label?: string;
  as?: "textarea" | "file";
  register?: UseFormRegisterReturn<string>;
  error?: string | any;
  mask?: string;
  withicon?: boolean;
  icon?: any;
};

export default function Input({
  name,
  register,
  label,
  mask,
  ...props
}: TextProps) {
  return (
    <div className={styles.main}>
      {props.as === "textarea" ? (
        <>
          <label htmlFor={name}>{label}</label>
          <textarea
            {...register}
            id={name}
            placeholder={props.placeholder}
          ></textarea>
          {props.error ? <ErrorMessage error={props.error} /> : <></>}
        </>
      ) : props.as === "file" ? (
        <div className={styles.fileType}>
          <label htmlFor="file"> {label} 
          </label>
          <input
            type="file"
            {...props}
            name={name}
            id="file"
            style={{display: "none"}}
            accept="text/plain, application/pdf, application/msword"
            {...register}
            {...props}
          />
          {props.error ? <ErrorMessage error={props.error} /> : <></>}
        </div>
      ) : mask ? (
        <>
          <label className={styles.labelComum} htmlFor={name}>{label}</label>
          {/* @ts-ignore */}
          <InputMask type={props.type} {...register} mask={mask} {...props} />
          {props.error ? <ErrorMessage error={props.error} /> : <></>}
        </>
      ) : (
        <div className={classNames({
          [styles.inputIcon]: props.withicon === true
        })}>
          {props.icon}
          <label className={styles.labelComum} htmlFor={name}>{label}</label>
          <input
            type={props.type}
            className={classNames(styles.inputComum, {
              [styles.withicon]: props.withicon === true,
              [styles.inputComum]: props.withicon === false
            })}
            {...register}
            {...props}
          />
          {props.error ? <ErrorMessage error={props.error} /> : <></>}
        </div>
      )}
    </div>
  );
}
