import { FC } from "react";
import { IColumn } from "../../types";
import styles from "./Board.module.scss";

interface Props {
  board: IColumn[];
}

const Board: FC<Props> = ({ board }) => {
  const selectedColumnId = 2;

  return (
    <div className="w-[290px] sm:w-[430px]">
      <div className={styles.markLine}>
        {board.map((column) => (
          <div className={styles.markWrapper}>
            {column.id === selectedColumnId && <div className={styles.mark} />}
          </div>
        ))}
      </div>
      <div className={styles.board}>
        {board.map((column) => (
          <div key={column.id} className={styles.column}>
            {column.items.map((item) => (
              <div key={item.id} className={`${styles.cell}`} />
            ))}
          </div>
        ))}
      </div>
      <button className={styles.moveBtn}>Make a move</button>
    </div>
  );
};

export default Board;
