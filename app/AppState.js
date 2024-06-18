import { Player } from "./models/Player.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  players = [

    new Player('Leonardo'),
    new Player('Donatello'),
    new Player('Michelangelo'),
    new Player('Raphael'),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())