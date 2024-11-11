import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Note } from './models/jotnotes.js'
class ObservableAppState extends EventEmitter {
  // top npjepfojepoje
  notes = [
    new Note({
      title: `ron`,
      createdDate: `06/12/2024`,
      body: "Ron saw two big ol bucks run into his feild "
    }),
    new Note({
      title: `debbie`,
      createdDate: `01/08/2024`,
      body: "debbie was up late one night on a good one when she saw something fly through the sky what seemed to be her ex-husband dale with that hussy darline on a dang ol magic carpet"
    }),
    new Note({
      title: `jackie`,
      createdDate: `07/024/2023`,
      body: "this ol boy was taking out the garbage one day and he sees ron and debbie hunting arrow heads in the middle of the day with flashlights"
    }),
  ]


  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())