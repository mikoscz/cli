import { PropsWithChildren, FC } from "react";
import styles from "./Button.module.sass";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button: FC<PropsWithChildren<Props>> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.wrapper}>
      {children}
    </button>
  );
};
