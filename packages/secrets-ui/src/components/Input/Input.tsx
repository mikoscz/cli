import { ChangeEventHandler } from "react";

import style from "./Input.module.sass";

export interface InputProps {
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: "text" | "password";
  readOnly?: boolean;
}

export const Input = ({ value, type = "text", onChange, readOnly = false }: InputProps) => {
  return (
    <div className={style.wrapper}>
      <input type={type} readOnly={readOnly} value={value} onChange={onChange} className={style.input} />
    </div>
  );
};
