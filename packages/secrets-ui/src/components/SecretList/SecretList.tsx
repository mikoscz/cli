import { Secret } from "../Secret/Secret";
import style from "./SecretList.module.sass";

export interface Secret {
  id: number;
  key: string;
  value: string;
  isReadOnly: boolean;
  isSensitive: boolean;
}

export interface SecretListProps {
  secrets: Secret[]
}

export const SecretList = ({secrets}: SecretListProps) => {
  return (
    <div className={style.wrapper}>
      {secrets.map(({ id, key, value, isReadOnly, isSensitive }) => {
        return (
          <Secret
            key={id}
            id={id}
            keyValue={key}
            value={value}
            isReadOnly={isReadOnly}
            isSensitive={isSensitive}
            // valueChangeHandler={valueChangeHandler}
            // sensitiveChangeHandler={sensitiveChangeHandler}
          />
        );
      })}
    </div>
  )
};
