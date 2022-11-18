import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input/Input";
import styles from "./styles/App.module.sass";

const DEFAULT_DATA = [
  { isSensitive: true, key: "SOME_KEY", value: "SOME_VALUE", isReadOnly: false },
  { isSensitive: false, key: "SOME_KEY_1", value: "1298371-aldkhasdf-asklfjh", isReadOnly: false },
  { isSensitive: true, key: "SOME_KEY_2", value: "Hello there", isReadOnly: true },
  { isSensitive: false, key: "SOME_KEY_3", value: "Brah brah", isReadOnly: false },
];

function App() {
  const [secrets, setSecrets] = useState(DEFAULT_DATA);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.repo}>
          <span>selleo/dashboard</span> &gt; dev
        </div>
        <Button
          onClick={() => {
            alert("add");
          }}
        >
          Add
        </Button>
      </div>
      <div>
        {secrets.map(({ key, value, isReadOnly, isSensitive }) => {
          return (
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <Input value={key} />
              <Input type={isSensitive ? "password" : "text"} value={value} />
              <div>
                <input type={"checkbox"} checked={isReadOnly} />
                Read only?
              </div>
              <div>
                <input type={"checkbox"} checked={isSensitive} />
                Is Sensitive?
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
