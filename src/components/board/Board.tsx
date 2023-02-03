import classNames from "classnames";
import { FC } from "react";
import { IColumn, PLAYERS } from "../../types";
import styles from "./Board.module.scss";

interface Props {
  board: IColumn[];
  selectedColumnId: number;
  setSelectedColumnId: (value: number) => void;
  moveHandler: (triedItem: number) => void;
  winner: null | PLAYERS;
}

const Board: FC<Props> = ({
  board,
  setSelectedColumnId,
  selectedColumnId,
  moveHandler,
  winner,
}) => {
  return (
    <div className="w-[290px] sm:w-[430px]">
      <div className={styles.markLine}>
        {board.map((column) => (
          <div key={column.id} className={styles.markWrapper}>
            {!winner && column.id === selectedColumnId && (
              <div className={styles.mark} />
            )}
          </div>
        ))}
      </div>
      <div className={styles.board}>
        {board.map((column) => (
          <div
            key={column.id}
            className={styles.column}
            onClick={() => setSelectedColumnId(column.id)}
          >
            {column.items.map((item) => (
              <div
                key={item.id}
                className={`${styles.cell} ${classNames(
                  { "bg-violet-600": item.player === null },
                  { "bg-red-400": item.player === PLAYERS.PLAYER_ONE },
                  { "bg-orange-400": item.player === PLAYERS.PLAYER_TWO }
                )}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
      {winner ? (
        <div className={styles.winner}>
          <div
            className={`${styles.winnerCell} ${classNames(
              { "bg-red-400": winner === PLAYERS.PLAYER_ONE },
              { "bg-orange-400": winner === PLAYERS.PLAYER_TWO }
            )}`}
          ></div>
          {winner} WIN
        </div>
      ) : (
        <button
          className={styles.moveBtn}
          onClick={() =>
            moveHandler(board[0].items[board[0].items.length - 1].id)
          }
        >
          Make a move
        </button>
      )}
    </div>
  );
};

export default Board;
