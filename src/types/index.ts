export enum PLAYERS {
  PLAYER_ONE = "player 1",
  PLAYER_TWO = "player 2",
}

export interface IItem {
  id: number;
  player: null | PLAYERS;
}

export interface IColumn {
  id: number;
  items: IItem[];
}
