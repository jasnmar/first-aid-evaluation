import RadioChoice from "../RadioChoice/RadioChoice"


function LevelOfResponsiveness(props) {

  const id = props.id
  const updater = props.updater
  
  
  const responsivenessChoices = 
    {choice:"Responsivness", 
      options:[
        {id: "alert", value: "Alert", checked: false}, 
        {id: "verbal", value: "Verbal", checked: false}, 
        {id: "pain", value: "Pain Only", checked: false}, 
        {id: "none", value: "Unresponsive", checked: false}
      ]
    }

  return (
    <>
      <RadioChoice 
        legend="Responsiveness" 
        name={"responsiveness"} 
        item={id}
        options={responsivenessChoices}
        updater={updater} 
      />
      <div id={id+'-check'} className="check-container hidden">
        <p className="check-label" >Do they know</p>
        <label className="label-check">
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
        </label>
      </div>
    </>
  )
}

export default LevelOfResponsiveness