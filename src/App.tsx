import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { Board, Header } from "./components";
import { PLAYERS } from "./types";
import { checkWin } from "./utils/checkWin";
import { createBoard } from "./utils/createBoard";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<PLAYERS>(
    PLAYERS.PLAYER_ONE
  );
  const [board, setBoard] = useState(() => createBoard());
  const [selectedColumnId, setSelectedColumnId] = useState(0);
  const [winner, setWinner] = useState<null | PLAYERS>(null);

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
      setWinner(checkWin(board, selectedColumnId, triedItem, currentPlayer));
    } else {
      moveHandler(triedItem - 1);
    }
  };

  const restart = () => {
    setBoard(() => createBoard());
    setCurrentPlayer(PLAYERS.PLAYER_ONE);
    setSelectedColumnId(0);
    setWinner(null);
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
          winner={winner}
        />
        <div className={styles.footer}></div>
      </div>
    </div>
  );
}

export default App;
