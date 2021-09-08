import { ProxyState } from "../AppState";


function _drawJobs() {
  let template = '';
  ProxyState.jobs.forEach(jobs => template += jobs.CardTemplate)
  document.getElementById('listings').innerHTML = template
}

export class JobsController{
  constructor() {
  ProxyState.on('houes',_drawJobs)
  }
  addHouses() {
    event.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target;

    const jobData = {
      type: form.type.value
      
    }
  }
}