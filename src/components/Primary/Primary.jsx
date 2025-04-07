import "./Primary.css"

function Primary() {
  return (
    <>
      <section> 
        <h2>Primary Assesment</h2>
        <fieldset>
          <legend>Airway</legend>
          <div>
            <input type="radio" id="clear" name="airway" value="clear"></input>
            <label className="radio-label" for="clear">Clear</label>
          </div>
          <div>
            <input type="radio" id="obstructed" name="airway" value="obstructed"></input>
            <label className="radio-label" for="obstructed">Obstructed</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Breathing</legend>
          <div>
            <input type="radio" id="breathing-normal" name="breathing" value="yes"></input>
            <label className="radio-label" for="breathing-normal">Normal</label>
          </div>
          <div>
            <input type="radio" id="breathing-shallow" name="breathing" value="shallow"></input>
            <label className="radio-label" for="breathing-shallow">Shallow</label>
          </div>
          <div>
            <input type="radio" id="breathing-no" name="breathing" value="none"></input>
            <label className="radio-label" for="breathing-no">No</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Circulation (Bleeding)</legend>
          <div>
            <input type="radio" id="circulation-none" name="circulation" value="none"></input>
            <label className="radio-label" for="circulation-none">None</label>
          </div>
          <div>
            <input type="radio" id="circulation-minor" name="circulation" value="minor"></input>
            <label className="radio-label" for="circulation-minor">Minor</label>
          </div>
          <div>
            <input type="radio" id="circulation-severe" name="circulation" value="severe"></input>
            <label className="radio-label" for="circulation-severe">Severe</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Disability (Spinal Injury)</legend>
          <div>
            <input type="radio" id="spinal-no" name="spinal" value="none"></input>
            <label className="radio-label" for="spinal-no">No</label>
          </div>
          <div>
            <input type="radio" id="spinal-yes" name="spinal" value="yes"></input>
            <label className="radio-label" for="spinal-yes">Yes</label>
          </div>
          <div>
            <input type="radio" id="spinal-unsure" name="spinal" value="unsure"></input>
            <label className="radio-label" for="spinal-unsure">Unsure</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Environmental Concerns</legend>
          <div>
            <input type="radio" id="environmental-no" name="environmental" value="none"></input>
            <label className="radio-label" for="environmental-no">No</label>
          </div>
          <div>
            <input type="radio" id="environmental-yes" name="environmental" value="yes"></input>
            <label className="radio-label" for="environmental-yes">Yes</label>
          </div>
          <div>
            <input type="radio" id="environmental-unsure" name="environmental" value="unsure"></input>
            <label className="radio-label" for="environmental-unsure">Unsure</label>
          </div>
        </fieldset>
        </section>
    </>
  )
}

export default Primary

