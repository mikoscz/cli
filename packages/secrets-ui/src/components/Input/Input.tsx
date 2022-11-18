import { ChangeEvent } from "react";

import style from "./Input.module.sass";

export interface InputProps {
  value: string;
  onChange?: (newValue: string) => void;
  type?: "text" | "password";
}

export const Input = ({ value, type = "text", onChange }: InputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={style.wrapper}>
      <input
      type={type}
      value={value}
      onChange={handleChange}
      className={style.input}
      />
    </div>
  );
};
