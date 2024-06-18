import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";

export class PlayersController {

  constructor() {
    console.log('Hello World');
    this.drawPlayers()
  }

  minusScore(playerName) {
    console.log('Subtracto de facto!');

    playersService.minusScore(playerName)
    this.drawPlayers()
  }

  plusScore(playerName) {
    console.log('Adding that padding!');

    playersService.plusScore(playerName)
    this.drawPlayers()
  }

  drawPlayers() {
    const playerCardsElement = document.getElementById('playerCards')

    let innerHTMLString = ``
    const players = AppState.players

    players.forEach((player) => innerHTMLString += /*html*/`<div class="col-12">
              <div class="d-flex align-items-center justify-content-center py-3">
                <h4 class="me-auto text-capitalize"><i class="mdi mdi-account-circle fs-3"></i> ${player.name}</h4>
                <button class="btn btn-dark fs-5" onclick="app.PlayersController.minusScore('${player.name}')"><i
                    class="mdi mdi-minus-circle-outline p-0"></i></button>
                <h4 class="fs-3">${player.score}</h4>
                <button class="btn btn-dark fs-5" onclick="app.PlayersController.plusScore('${player.name}')"><i
                    class="mdi mdi-plus-circle-outline p-0"></i></button>
              </div>
            </div>`)
    playerCardsElement.innerHTML = innerHTMLString
  }

  createNewPLayer() {
    event.preventDefault()

  }
}
