import { PropsWithChildren, FC, ChangeEvent } from "react";
import { Input } from "../Input/Input";
import styles from "./Secret.module.sass";

type Props = {
  id: number;
  keyValue: string;
  value: string;
  isReadOnly: boolean;
  isSensitive: boolean;
  valueChangeHandler: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
  sensitiveChangeHandler: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
};

export const Secret: FC<Props> = ({
  id,
  keyValue,
  value,
  isReadOnly,
  isSensitive,
  valueChangeHandler,
  sensitiveChangeHandler,
}) => {
  return (
    <div className={styles.main}>
      <Input readOnly={true} value={keyValue} />
      <Input
        readOnly={isReadOnly}
        type={isSensitive ? "password" : "text"}
        value={value}
        onChange={(e) => {
          valueChangeHandler(e, id);
        }}
      />
      <label htmlFor={`isReadOnly_${id}`}>
        <input id={`isReadOnly_${id}`} type={"checkbox"} checked={isReadOnly} />
        Read only?
      </label>

      <label htmlFor={`isSensitive_${id}`}>
        <input
          id={`isSensitive_${id}`}
          onChange={(e) => {
            sensitiveChangeHandler(e, id);
          }}
          type={"checkbox"}
          checked={isSensitive}
        />
        Is Sensitive?
      </label>
    </div>
  );
};
