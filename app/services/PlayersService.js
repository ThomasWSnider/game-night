import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

class PlayersService {

  plusScore(playerName) {
    const players = AppState.players

    const getPlayer = players.find((player) => player.name == playerName)

    getPlayer.score++

    console.log('Addendum front endium', getPlayer.name, getPlayer.score);
  }

  minusScore(playerName) {
    const players = AppState.players

    const getPlayer = players.find((player) => player.name == playerName)

    if (getPlayer.score > 0) {
      getPlayer.score--
      console.log('Reductio ad Absurdum!', getPlayer.name, getPlayer.score);
    }
  }


  createNewPlayer(playerName) {
    const player = new Player(playerName)
    console.log('new player', playerName);
    const players = AppState.players

  }
}

export const playersService = new PlayersService