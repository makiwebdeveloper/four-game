import { useState } from "react";
import styles from "./App.module.scss";
import { Board, Header } from "./components";
import { createBoard } from "./utils/createBoard";

function App() {
  const [board, setBoard] = useState(() => createBoard());

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <Header />
        <Board board={board} />
        <div className={styles.footer}></div>
      </div>
    </div>
  );
}

export default App;
