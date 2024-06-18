
import { PlayersController } from "./controllers/PlayersController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [PlayersController],
    view: ``
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])