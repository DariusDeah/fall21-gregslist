export function getJobFormTemplate() {
  return /*html*/`
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.JobsController.addJobs()"
  id="jobs-form">
  <div class="form-group">
    <label for="type" class="">Job type:</label>
    <select name="type" id="jobtype" required class="form-control">
      <option disabled selected value="">Please Choose your Job Type</option> 
      <option>Health</option>
      <option>Restaurant</option>
      <option>Sales</option>
      <option>Tech</option>
      <option>Other</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="wage" class="">Price:</label>
    <input type="number" class="form-control" name="wage" id="wage" min="0" max="9999999">
    
    <div class="form-group">
    <select name="wageRate" id="wagerate" required
class="form-control">
    </select>
    </div>
  </div>
  <div class="form-group">
    <label for="positions" class="">
      <span >poditions:</span>
      <input id="positions"  class="ms-2 form-control" type="text"></input>
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