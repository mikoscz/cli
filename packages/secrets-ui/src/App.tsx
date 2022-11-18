import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input/Input";
import { Secret } from "./components/Secret";
import { SecretList } from "./components/SecretList";
import styles from "./styles/App.module.sass";
import Logo from "./assets/logo.svg"


let DEFAULT_DATA = [
  { id: "1", isSensitive: true, key: "SOME_KEY", value: "SOME_VALUE", isReadOnly: false },
  { id: "2", isSensitive: false, key: "SOME_KEY_1", value: "1298371-aldkhasdf-asklfjh", isReadOnly: false },
  { id: "3", isSensitive: true, key: "SOME_KEY_2", value: "Hello there", isReadOnly: true },
  { id: "4", isSensitive: false, key: "SOME_KEY_3", value: "Brah brah", isReadOnly: false },
];

function App() {
  const [secrets, setSecrets] = useState(DEFAULT_DATA);

  // const valueChangeHandler = (e: ChangeEvent<HTMLInputElement>, id: number) => {
  //   const newValue = e.target.value;
  //   setSecrets((oldSecrets) => {
  //     const oldSecretsCopy = [...oldSecrets];
  //     let changedSecret = oldSecretsCopy.find((s) => s.id === id);
  //     console.log(changedSecret);
  //     if (!changedSecret) return oldSecrets;
  //     changedSecret.value = newValue;

  //     return oldSecretsCopy;
  //   });
  // };

  // const sensitiveChangeHandler = (e: ChangeEvent<HTMLInputElement>, id: number) => {
  //   const newValue = e.target.checked;
  //   setSecrets((oldSecrets) => {
  //     const oldSecretsCopy = [...oldSecrets];
  //     let changedSecret = oldSecretsCopy.find((s) => s.id === id);
  //     if (!changedSecret) return oldSecrets;
  //     changedSecret.isSensitive = newValue;

  //     return oldSecretsCopy;
  //   });
  // };

  const addSecret = () => {
    setSecrets(secrets => [...secrets, {
      id: "",
      key: "",
      value: "",
      isReadOnly: false,
      isSensitive: false,
    }]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.logoWraper}>
      <img src={Logo} className={styles.logo}/>
      <h1 className={styles.logoText}>Selleo/Dashboard</h1>
      </div>
      <div className={styles.header}>
        <div className={styles.repo}>
          <span>selleo/dashboard</span> &gt; dev
        </div>
        <Button
          onClick={addSecret}
        >
          Add
        </Button>
      </div>
      <SecretList secrets={secrets}/>
    </div>
  );
}

export default App;
