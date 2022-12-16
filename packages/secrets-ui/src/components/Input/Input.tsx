import { ChangeEventHandler } from "react";

import style from "./Input.module.sass";
import { ReactComponent as CopyIcon } from "../../assets/icons/copy.svg";

export interface InputProps {
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: "text" | "password";
  readOnly?: boolean;
  copyable?: boolean;
  onCopy?: (text: string) => void;
}

export const Input = ({ value, type = "text", onChange, readOnly = false, copyable, onCopy }: InputProps) => {
  const handleCopy = () => {
    onCopy?.(value);
  }

  return (
    <div className={style.wrapper}>
      <input type={type} readOnly={readOnly} value={value} onChange={onChange} className={style.input} />
      {copyable &&
        <CopyIcon className={style.rightIcon} onClick={handleCopy} />
      }
    </div>
  );
};
