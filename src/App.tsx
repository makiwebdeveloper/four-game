import { useState } from "react";
import { createBoard } from "./utils/createBoard";

function App() {
  const [board, setBoard] = useState(() => createBoard());
  const [selectedColumnId, setSelectedColumnId] = useState(1);

  return (
    <div className="w-screen h-screen center">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          {board.map((column) => (
            <div key={column.id} className="w-8 h-8 center">
              {column.id === selectedColumnId && (
                <div className="figure w-6 h-8 bg-red-600" />
              )}
            </div>
          ))}
        </div>
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
                  className="w-8 h-8 border center rounded-full"
                >
                  {item.id}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
