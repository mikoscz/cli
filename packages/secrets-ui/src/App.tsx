import { Button } from "./components/Button";
import styles from "./styles/App.module.sass";

function App() {
  return (
    <>
      <div className={styles.main}>Testing CSS Modules</div>
      <Button>Hello</Button>
    </>
  );
}

export default App;
