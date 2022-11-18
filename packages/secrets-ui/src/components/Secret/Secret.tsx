import { PropsWithChildren, FC, ChangeEvent, useState } from "react";
import { Input } from "../Input/Input";
import { ISecret } from "../SecretList";
import styles from "./Secret.module.sass";

type Props = {
  secret: ISecret;
  valueChangeHandler?: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
  sensitiveChangeHandler?: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
};

export const Secret: FC<Props> = ({ secret, valueChangeHandler, sensitiveChangeHandler }) => {
  const [secretData, setSecretData] = useState(secret);

  const { key, value, id, isReadOnly, isSensitive } = secretData;

  const changeTextField = (event: ChangeEvent<HTMLInputElement>, keyName: string) => {
    setSecretData({
      ...secretData,
      [keyName]: event.target.value,
    });
  };

  return (
    <div className={styles.main}>
      <Input readOnly={isReadOnly} value={key} onChange={(e) => changeTextField(e, "key")} />
      <Input
        readOnly={isReadOnly}
        type={isSensitive ? "password" : "text"}
        value={value}
        onChange={(e) => changeTextField(e, "value")}
      />
      <label htmlFor={`isReadOnly_${id}`}>
        <input id={`isReadOnly_${id}`} type={"checkbox"} readOnly checked={isReadOnly} />
        Read only?
      </label>
    </div>
  );
};
