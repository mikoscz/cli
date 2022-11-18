import { Button } from "./components/Button";
import { Input } from "./components/Input/Input";
import styles from "./styles/App.module.sass";

function App() {
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
    </div>
  );
}

export default App;
