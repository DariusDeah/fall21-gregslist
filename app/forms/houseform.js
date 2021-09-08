export function getHouseFormTemplate() {
  return /*html*/`
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.housesController.addHouse()"
  id="houses-form">
  <div class="form-group">
    <label for="style" class="">Home Style:</label>
    <select name="style" id="homeStyle" required class="form-control">
      <option disabled selected value="">Please Choose your Home Style</option> 
      <option>Family</option>
      <option>Villa</option>
      <option>Modern</option>
      <option>Cabin</option>
      <option>Other</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="price" class="">Price:</label>
    <input type="number" class="form-control" name="price" id="price" min="0" max="9999999">
  </div>
  <div class="form-group">
    <label for="rooms" class="">
      <span >rooms:</span>
      <input id="rooms"  class="ms-2 form-control" type="number"></input>
    </label>
  </div>
  <div class="form-group">
    <label for="year" class="">year:</label>
    <input type="year" class="form-control" name="year" id="year">
  </div>
  <div class="form-group">
    <label for="description" class="">description:</label>
    <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
  </div>
  <div class="form-group">
    <label for="img" class="img-fluid">img:</label>
    <input type="url" class="form-control" name="img" id="img" required>
  </div>
  <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
</form>
  `
}