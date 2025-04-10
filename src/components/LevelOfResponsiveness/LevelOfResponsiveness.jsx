import RadioChoice from "../RadioChoice/RadioChoice"
import { v4 as uuidv4 } from 'uuid';


function LevelOfResponsiveness(props) {

  const id = props.id
  const updater = props.updater
  
  // console.log("options", props.options)
  const responsivenessChoices = 
    {choice:"Responsivness",
      options:[...props.options.options]
    }
  // console.log("responsivenessChoices: ", responsivenessChoices)
  const knowIsShownIndex = props.options.options.findIndex(option => option.id === "alert" )
  const knowIsShown = props.options.options[knowIsShownIndex].checked
  // console.log("knowIsShown: ", knowIsShown)
  const checkBoxes = props.options.checks.map(check => {
    return (
      <label key={uuidv4()} className="label-check">
        <input 
          data-item={check.id} 
          data-group={id} 
          onChange={updater} 
          type="checkbox" 
          name={check.id}
          checked={check.checked}>
        </input>
        {check.value}
      </label>
    )
  })

  return (
    <>
      <RadioChoice 
        legend="Responsiveness" 
        name={"responsiveness"} 
        item={id}
        options={responsivenessChoices}
        updater={updater} 
      />
      <div id={id+'-check'} className={"check-container " + (knowIsShown ? "" : "hidden")}>
        <p className="check-label" >Do they know</p>
        {checkBoxes}
        {/* <label className="label-check">
          <input 
            data-item="name" 
            data-group={id} 
            onClick={updater} 
            type="checkbox" 
            name="name">
          </input>
          Name
        </label>
        <label className="label-check">
          <input 
            data-item="location" 
            data-group={id} 
            onClick={updater} 
            type="checkbox" 
            name="location">
          </input>
          Location
        </label>
        <label className="label-check">
          <input 
            data-item="date" 
            data-group={id} 
            onClick={updater} 
            type="checkbox" 
            name="date">
          </input>
          Date
        </label>
        <label className="label-check">
          <input 
            data-item="happening" 
            data-group={id} 
            onClick={updater} 
            type="checkbox" 
            name="happening">
          </input>
          What Happened
        </label> */}
      </div>
    </>
  )
}

export default LevelOfResponsiveness