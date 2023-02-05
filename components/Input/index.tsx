import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";
import styles from "./Input.module.scss";
import InputMask from 'react-input-mask';
import classNames from "classnames";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type TextProps = InputProps & {
  label: string
  as?: "textarea" | "file"
  register?: UseFormRegisterReturn<string>
  error?: string | any
  mask?: string 
  withIcon?: boolean
}

export default function Input({ name, register, label, mask,  ...props }: TextProps) {

  const [inputFileName, setInputFileName] = useState<string>()

  return (
    <div className={styles.main}>
      <label htmlFor={name} >
        {label}
      </label>
      {props.as === "textarea" ? (
        <>
          <textarea {...register} placeholder={props.placeholder} ></textarea>
          {props.error ? 
            <ErrorMessage error={props.error} /> : <></>}
        </>
      ) : props.as === "file" ?
        <div className={styles.fileType}>
          <input type="file" {...props} name={name} id="file" accept="text/plain, application/pdf, application/msword" onChange={(e) => {
            console.log('e', e)
            setInputFileName(e.target.value.split("\\")[2])
          } }/>
          <label htmlFor="file">
            {!inputFileName ? "Clique aqui para escolher o arquivo" : inputFileName}
          </label>
          {props.error ? 
            <ErrorMessage error={props.error} /> : <></>}
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
          <input type={props.type} className={ classNames({
              [styles.withIcon]: props.withIcon
            })}  
          {...register} {...props} />
          {props.error ? 
            <ErrorMessage error={props.error} /> : <></>}
        </>
      )}
    </div>
  );
}
