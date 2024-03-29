import { IColumn } from "../types";

export const createBoard = () => {
  const board: IColumn[] = [];

  for (let col = 0; col < 7; col++) {
    const newColumn: IColumn = { id: col, items: [] };
    for (let i = 0; i < 6; i++) {
      newColumn.items.push({ id: i, player: null });
    }
    board.push(newColumn);
  }

  return board;
};
