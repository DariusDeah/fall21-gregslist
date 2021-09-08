import { generateId } from "../Utils/generateId.js"



export class House{
  constructor(houseData) {
    this.id = houseData.id || generateId()
    this.price = houseData.price;
    this.homeStyle = houseData.homeStyle;
    this.year = houseData.year;
    this.rooms = houseData.rooms
    this.description = houseData.description;
    this.img = houseData.img
  }

  get CardTemplate() {
    return /*html*/`
  <div class="card">
  <img src="${this.img}" alt="">
  <div class="card-body">
   <h5 class="d-flex justify-content-between">
  <span>${this.rooms}rooms ${this.homeStyle}style</span> 
  <span>$${this.price}price</span>
  </h5>
  <h6>${this.year}year</h6>
  <p>${this.description}</p>
  
  </div>
  </div>
  `}
}

