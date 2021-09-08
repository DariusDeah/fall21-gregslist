import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"
import { housesServices } from '../Services/HousesService.js'
import{getHouseFormTemplate} from "../forms/houseform.js"

function _drawHouses() {
  let template = ''
  ProxyState.houses.forEach(house => template += house.CardTemplate)
  document.getElementById('listings').innerHTML = template
}

  export class HousesController {
    constructor() {
      ProxyState.on('houses', _drawHouses)
   
    }

    addHouse() {
      event.preventDefault()
      /**
       * @type {HTMLFormElement}
       */
      // @ts-ignore
      const form = event.target
      // TODO get data from form

      const houseData = {
        homeStyle: form.homeStyle.value,
        price: form.price.value,
        rooms: form.rooms.value,
        year: form.year.value,
        description: form.description.value,
        img: form.img.value
      }
      try {
        housesServices.addHouse(houseData)
      } catch (e) {
        console.error(e)
      }
    }
    showHouses() {
      _drawHouses()
      document.getElementById('controls').innerHTML = `
    <button class="btn btn-success" onclick="app.housesController.toggleHouseForm()">Add House</button>
  `
      document.getElementById('forms').innerHTML = getHouseFormTemplate()
    }

    toggleHouseForm() {
      document.getElementById('houses-form').classList.toggle('visually-hidden')
    }
  }