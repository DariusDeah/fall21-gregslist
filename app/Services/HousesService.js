import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";


class HousesServices {
  addHouse(houseData) {
    console.log('fffrdfff');
    const testHouse = new House(houseData)
    ProxyState.houses = [...ProxyState.houses,testHouse]
  }
}

export const housesServices = new HousesServices();