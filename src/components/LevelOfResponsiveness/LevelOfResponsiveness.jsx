

function LevelOfResponsiveness(props) {

  const id = props.id
  return (
    <>
      <fieldset>
        <legend>Responsiveness</legend>
        <div>
          <input type="radio" id={id+"-none"} name="responsiveness" value="none"></input>
          <label className="radio-label" for={id+"-none"}>Unresponsive</label>
        </div>
        <div>
          <input type="radio" id={id+"-pain"} name="responsiveness" value="pain"></input>
          <label className="radio-label" for={id+"-pain"}>Pain Only</label>
        </div>
        <div>
          <input type="radio" id={id+"-verbal"} name="responsiveness" value="verbal"></input>
          <label className="radio-label" for={id+"-verbal"}>Verbal</label>
        </div>
        <div>
          <input type="radio" id={id+"-alert"} name="responsiveness" value="alert"></input>
          <label className="radio-label" for={id+"-alert"}>Alert</label>
        </div>
      </fieldset>
      <div className="section-container justify-left">
        <label className="label-check">
          <input type="checkbox" name="name">
          </input>
          Name
        </label>
        <label className="label-check">
          <input type="checkbox" name="location">
          </input>
          Location
        </label>
        <label className="label-check">
          <input type="checkbox" name="date">
          </input>
          Date
        </label>
        <label className="label-check">
          <input type="checkbox" name="happening">
          </input>
          What Happened
        </label>
      </div>
    
    </>
  )
}

export default LevelOfResponsiveness