

import { ChangeEvent } from 'react';

import style from './Input.module.sass';

export interface InputProps {
  value: string;
  onChange: (newValue: string) => void;
}

export const Input = ({
  value,
  onChange
}: InputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return <div className={style.wrapper}>
    <input
      value={value}
      onChange={handleChange}
    />
  </div>
};
