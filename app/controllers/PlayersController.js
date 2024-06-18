import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";

export class PlayersController {

  constructor() {
    console.log('Hello World');
    this.drawPlayers()
    this.toggleForm()
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

    players.forEach((player) => innerHTMLString += player.playerCardHTMLTemplate)
    playerCardsElement.innerHTML = innerHTMLString
  }

  createNewPlayer() {
    event.preventDefault()
    const form = event.target
    // @ts-ignore
    const nameFromForm = form.playerName.value
    playersService.createNewPlayer(nameFromForm)

    this.drawPlayers()
    this.toggleForm()
  }

  toggleForm() {
    const formElement = document.getElementById('playerForm')
    const btnElement = document.getElementById('formToggle')
    if (formElement.style.display === "none") {
      formElement.style.display = "inline-flex";
      btnElement.style.display = "none"
    } else {
      formElement.style.display = "none"
      btnElement.style.display = "block"
    }
  }
}
