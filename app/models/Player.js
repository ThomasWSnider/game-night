export class Player {
  name = ''
  score = 0

  constructor(playerName) {
    this.name = playerName
  }

  get playerCardHTMLTemplate() {
    return /*html*/`<div class="col-12">
    <div class="d-flex align-items-center justify-content-center py-3">
      <h4 class="me-auto text-capitalize"><i class="mdi mdi-account-circle fs-3"></i> ${this.name}</h4>
      <button class="btn btn-dark fs-5" onclick="app.PlayersController.minusScore('${this.name}')"><i
          class="mdi mdi-minus-circle-outline p-0"></i></button>
      <h4 class="fs-3">${this.score}</h4>
      <button class="btn btn-dark fs-5" onclick="app.PlayersController.plusScore('${this.name}')"><i
          class="mdi mdi-plus-circle-outline p-0"></i></button>
    </div>
  </div>`
  }
}