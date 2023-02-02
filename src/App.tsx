import { useState } from "react";
import styles from "./App.module.scss";
import { Board, Header } from "./components";
import { PLAYERS } from "./types";
import { createBoard } from "./utils/createBoard";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<PLAYERS>(
    PLAYERS.PLAYER_ONE
  );
  const [board, setBoard] = useState(() => createBoard());
  const [selectedColumnId, setSelectedColumnId] = useState(0);

  const moveHandler = (triedItem: number) => {
    if (triedItem < 0) return;

    const selectedColumn = board[selectedColumnId];

    if (!selectedColumn.items[triedItem].player) {
      selectedColumn.items[triedItem].player = currentPlayer;
      setBoard((board) =>
        board.map((col) => (col.id === selectedColumnId ? selectedColumn : col))
      );
      setCurrentPlayer((player) =>
        player === PLAYERS.PLAYER_ONE ? PLAYERS.PLAYER_TWO : PLAYERS.PLAYER_ONE
      );
      // checkWin(board, selectedColumnId, triedItem, currentPlayer);
    } else {
      moveHandler(triedItem - 1);
    }
  };

  const restart = () => {
    setBoard(() => createBoard());
    setCurrentPlayer(PLAYERS.PLAYER_ONE);
    setSelectedColumnId(0);
  };

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <Header restart={restart} />
        <Board
          selectedColumnId={selectedColumnId}
          setSelectedColumnId={setSelectedColumnId}
          board={board}
          moveHandler={moveHandler}
        />
        <div className={styles.footer}></div>
      </div>
    </div>
  );
}

export default App;
