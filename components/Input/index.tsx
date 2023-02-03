import React, { HTMLInputTypeAttribute, useEffect } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";
import styles from "./Input.module.scss";
import InputMask from 'react-input-mask';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type TextProps = InputProps & {
  label: string
  as?: "textarea" | "file"
  register?: UseFormRegisterReturn<string>
  error?: string
  mask?: string 
}

export default function Input({ name, register, label, mask,  ...props }: TextProps) {
  return (
    <div className={styles.main}>
      <label htmlFor={name} >
        {label}
      </label>
      {props.as === "textarea" ? (
        <>
          <textarea {...register} ></textarea>
          {props.error ? 
            <ErrorMessage error={props.error} /> : <></>}
        </>
      ) : props.as === "file" ?
        <div className={styles.fileType}>
          <input type="file" name={name} id="file" accept=""/>
          <label htmlFor={name}>
            Clique aqui para escolher o arquivo
          </label>
        </div>
      : mask ? (
        <>
        {/* @ts-ignore */}
          <InputMask type={props.type} {...register} mask={mask} {...props}/>
          {props.error ? 
            <ErrorMessage error={props.error} /> : <></>}
        </>
      ) : (
        <>
          <input type={props.type} {...register} {...props} />
          {props.error ? 
            <ErrorMessage error={props.error} /> : <></>}
        </>
      )}
    </div>
  );
}
