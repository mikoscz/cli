import { Secret } from "../Secret/Secret";
import style from "./SecretList.module.sass";

export interface ISecret {
  id: string;
  key: string;
  value: string;
  isReadOnly: boolean;
  isSensitive: boolean;
}

export interface SecretListProps {
  secrets: ISecret[];
}

export const SecretList = ({ secrets }: SecretListProps) => {
  return (
    <>
      <div className={style.headers}>
        <p>Key</p>
        <p>Value</p>
        <p>Read-only</p>
      </div>
      <div className={style.wrapper}>
        {secrets.map((secret) => {
          return (
            <Secret
              key={secret.id}
              secret={secret}

              // valueChangeHandler={valueChangeHandler}
              // sensitiveChangeHandler={sensitiveChangeHandler}
            />
          );
        })}
      </div>
    </>
  );
};
