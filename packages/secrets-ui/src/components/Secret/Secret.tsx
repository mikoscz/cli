import { PropsWithChildren, FC, ChangeEvent } from "react";
import { Input } from "../Input/Input";
import { ISecret } from "../SecretList";
import styles from "./Secret.module.sass";

type Props = {
  secret: ISecret;
  valueChangeHandler?: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
  sensitiveChangeHandler?: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
};

export const Secret: FC<Props> = ({
  secret,
  valueChangeHandler,
  sensitiveChangeHandler,
}) => {

  const {key, value, id, isReadOnly, isSensitive} = secret;

  // const changeKey = (event: ChangeEvent<HTMLInputElement>) => {

  // }

  return (
    <div className={styles.main}>
      <Input readOnly={true} value={key} />
      <Input readOnly={isReadOnly} type={isSensitive ? "password" : "text"} value={value} />
      <label htmlFor={`isReadOnly_${id}`}>
        <input id={`isReadOnly_${id}`} type={"checkbox"} readOnly checked={isReadOnly} />
        Read only?
      </label>
    </div>
  );
};
