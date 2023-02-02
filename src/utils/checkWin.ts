import { IColumn, PLAYERS } from "../types";

export const checkWin = (
  board: IColumn[],
  selectedColumnId: number,
  triedItem: number,
  player: PLAYERS
) => {
  if (
    // По вертикали
    (board[selectedColumnId]?.items[triedItem]?.player === player &&
      board[selectedColumnId]?.items[triedItem + 1]?.player === player &&
      board[selectedColumnId]?.items[triedItem + 2]?.player === player &&
      board[selectedColumnId]?.items[triedItem + 3]?.player === player) ||
    // По диагонали налево
    (board[selectedColumnId]?.items[triedItem]?.player === player &&
      board[selectedColumnId - 1]?.items[triedItem + 1]?.player === player &&
      board[selectedColumnId - 2]?.items[triedItem + 2]?.player === player &&
      board[selectedColumnId - 3]?.items[triedItem + 3]?.player === player) ||
    (board[selectedColumnId + 1]?.items[triedItem - 1]?.player === player &&
      board[selectedColumnId]?.items[triedItem]?.player === player &&
      board[selectedColumnId - 1]?.items[triedItem + 1]?.player === player &&
      board[selectedColumnId - 2]?.items[triedItem + 2]?.player === player) ||
    (board[selectedColumnId + 2]?.items[triedItem - 2]?.player === player &&
      board[selectedColumnId + 1]?.items[triedItem - 1]?.player === player &&
      board[selectedColumnId]?.items[triedItem]?.player === player &&
      board[selectedColumnId - 1]?.items[triedItem + 1]?.player === player) ||
    (board[selectedColumnId + 3]?.items[triedItem - 3]?.player === player &&
      board[selectedColumnId + 2]?.items[triedItem - 2]?.player === player &&
      board[selectedColumnId + 1]?.items[triedItem - 1]?.player === player &&
      board[selectedColumnId]?.items[triedItem]?.player === player) ||
    // По диагонали направо
    (board[selectedColumnId]?.items[triedItem]?.player === player &&
      board[selectedColumnId + 1]?.items[triedItem + 1]?.player === player &&
      board[selectedColumnId + 2]?.items[triedItem + 2]?.player === player &&
      board[selectedColumnId + 3]?.items[triedItem + 3]?.player === player) ||
    (board[selectedColumnId - 1]?.items[triedItem - 1]?.player === player &&
      board[selectedColumnId]?.items[triedItem]?.player === player &&
      board[selectedColumnId + 1]?.items[triedItem + 1]?.player === player &&
      board[selectedColumnId + 2]?.items[triedItem + 2]?.player === player) ||
    (board[selectedColumnId - 2]?.items[triedItem - 2]?.player === player &&
      board[selectedColumnId - 1]?.items[triedItem - 1]?.player === player &&
      board[selectedColumnId]?.items[triedItem]?.player === player &&
      board[selectedColumnId + 1]?.items[triedItem + 1]?.player === player) ||
    (board[selectedColumnId - 3]?.items[triedItem - 3]?.player === player &&
      board[selectedColumnId - 2]?.items[triedItem - 2]?.player === player &&
      board[selectedColumnId - 1]?.items[triedItem - 1]?.player === player &&
      board[selectedColumnId]?.items[triedItem]?.player === player) ||
    // По горизонтали
    (board[selectedColumnId]?.items[triedItem]?.player === player &&
      board[selectedColumnId + 1]?.items[triedItem]?.player === player &&
      board[selectedColumnId + 2]?.items[triedItem]?.player === player &&
      board[selectedColumnId + 3]?.items[triedItem]?.player === player) ||
    (board[selectedColumnId - 1]?.items[triedItem]?.player === player &&
      board[selectedColumnId]?.items[triedItem]?.player === player &&
      board[selectedColumnId + 1]?.items[triedItem]?.player === player &&
      board[selectedColumnId + 2]?.items[triedItem]?.player === player) ||
    (board[selectedColumnId - 2]?.items[triedItem]?.player === player &&
      board[selectedColumnId - 1]?.items[triedItem]?.player === player &&
      board[selectedColumnId]?.items[triedItem]?.player === player &&
      board[selectedColumnId + 1]?.items[triedItem]?.player === player) ||
    (board[selectedColumnId - 3]?.items[triedItem]?.player === player &&
      board[selectedColumnId - 2]?.items[triedItem]?.player === player &&
      board[selectedColumnId - 1]?.items[triedItem]?.player === player &&
      board[selectedColumnId]?.items[triedItem]?.player === player)
  ) {
    return player;
  }

  return null;
};
