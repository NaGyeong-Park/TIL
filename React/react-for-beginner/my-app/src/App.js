import Button from "./Button";
import "./style.css";
import React from "react";
import styles from "./App.module.css";
function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>welcome</h1>
      <Button text={"hi"} />
    </div>
  );
}

export default App;
