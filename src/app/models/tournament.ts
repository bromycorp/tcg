import { Player } from "./player";

export class Tournament {
    name: string | null;
    playerNumber: number;
    players: Player[]
  
    constructor(name: string | null, playerNumber: number, players: Player[]) {
      this.name = name;
      this.playerNumber = playerNumber;
      this.players = players;
    }
  }