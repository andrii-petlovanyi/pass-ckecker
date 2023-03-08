import { useState } from "react";
import { Indicator } from "./components/Indicator/Indicator";
import { Input } from "./components/Input/Input";

import styles from "./App.module.css";
import { CheckRules } from "./components/CheckRules/CheckRules";

function App() {
  const [error, setError] = useState<string>("");

  return (
    <main className={styles.main}>
      <section className={styles.pass_checker}>
        <h1 className={styles.pass_checker__title}>Password checker</h1>
        <Input setError={setError} />
        <Indicator error={error} />
        <CheckRules />
      </section>
    </main>
  );
}

export default App;
