import { useState } from "react";
import { createBoard } from "./utils/createBoard";

function App() {
  const [board, setBoard] = useState(() => createBoard());

  console.log(board);

  return <div className="">Four Game</div>;
}

export default App;
