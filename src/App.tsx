import { useState } from "react";
import { createBoard } from "./utils/createBoard";
import classNames from "classnames";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<"red" | "orange">("red");
  const [board, setBoard] = useState(() => createBoard());
  const [selectedColumnId, setSelectedColumnId] = useState(1);

  const handlerClick = (triedItem: number) => {
    if (triedItem < 0) return;

    const selectedColumn = board[selectedColumnId];
    // debugger;
    if (!selectedColumn.items[triedItem].player) {
      selectedColumn.items[triedItem].player = currentPlayer;
      setBoard((board) =>
        board.map((col) => (col.id === selectedColumnId ? selectedColumn : col))
      );
      setCurrentPlayer((player) => (player === "red" ? "orange" : "red"));
    } else {
      handlerClick(triedItem - 1);
    }
  };

  return (
    <div className="w-screen h-screen center">
      <div className="flex flex-col gap-2">
        {/* SELECTED COLUMN FIGURE */}
        <div className="flex gap-2">
          {board.map((column) => (
            <div key={column.id} className="w-8 h-8 center">
              {column.id === selectedColumnId && (
                <div className="figure w-6 h-8 bg-red-600" />
              )}
            </div>
          ))}
        </div>
        {/* BOARD */}
        <div className="flex gap-2">
          {board.map((column) => (
            <div
              key={column.id}
              onClick={() => setSelectedColumnId(column.id)}
              className="flex flex-col gap-2 transition hover:bg-black hover:bg-opacity-10 rounded-full cursor-pointer"
            >
              {column.items.map((item) => (
                <div
                  key={item.id}
                  className={`w-8 h-8 border center rounded-full ${classNames(
                    { "bg-red-400": item.player === "red" },
                    { "bg-orange-400": item.player === "orange" }
                  )}`}
                ></div>
              ))}
            </div>
          ))}
        </div>
        {/* BUTTON */}
        <button
          onClick={() => handlerClick(5)}
          className="bg-orange-200 rounded-full px-4 py-2 transition hover:bg-orange-300"
        >
          Click
        </button>
      </div>
    </div>
  );
}

export default App;
