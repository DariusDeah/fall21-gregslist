export class Job{
  constructor(jobData) {
    this.type = jobData.type;
    this.position = jobData.position;
    this.wage = jobData.wage;
    this.wageRate = jobData.wageRate
    this.description = jobData.description;
    this.img = jobData.img;
  }

  get cardTemplate() {
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
        <img src="${this.img}" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span >${this.type} - ${this.position}</span>
            <span>$ ${this.wage}/
            ${this.wageRate}
            </span>
          </h5>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }
}