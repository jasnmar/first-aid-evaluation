import "./Vital.css"
import TimeInput from "../TimeInput/TimeInput"
import LevelOfResponsiveness from "../LevelOfResponsiveness/LevelOfResponsiveness"
import ShortInput from "../ShortInput/ShortInput"
import { lorUpdater } from "../componentUtils/updater"

function Vital(props) {
  const id = props.id
  let vitalData = {}

  function lorCall(e) {
    vitalData = lorUpdater(e, vitalData)
  }

  function updateItem(e){
    const updateElem = e.target.id
    const updatVal = e.target.value
    vitalData={...vitalData, [updateElem]: updatVal}
    console.log({...vitalData, [updateElem]: updatVal})
  }

  

  return (
    <>
      <div className="section-container">
      <TimeInput 
            type="time" 
            id={id} 
            title="Date" 
            updater={updateItem} 
            name="time" />
      </div>
      <LevelOfResponsiveness updater={lorCall} id={id} />
      <div className="section-container">
        <ShortInput 
          type="number" 
          name="breath" 
          title="Breath Rate" 
          id={id+"breath"} 
          placeholder="12-20"
          updater={updateItem} />
        <ShortInput 
          type="number" 
          name="heart" 
          title="Heart Rate" 
          id={id+"heart"} 
          placeholder="50-100"
          updater={updateItem} />
        <ShortInput 
          type="text" 
          name="skin" 
          title="Skin (color, temp, moisture)" 
          id={id+"skin"} 
          placeholder="normal, warm, dry"
          updater={updateItem} />
        <ShortInput 
          type="text" 
          name="eyes" 
          title="Pupils (size, reactive)" 
          id={id+"eyes"} 
          placeholder="equal and reactive"
          updater={updateItem} />
        <ShortInput 
          type="text" 
          name="circulation" 
          title="Circulation (wrists, feet, capillary refill)" 
          id={id+"circulation"} 
          placeholder="Strong pulse, good refill"
          updater={updateItem} />
        <ShortInput 
          type="text" 
          name="sensation" 
          title="Sensation (feeling in different parts of the body)" 
          id={id+"sensation"} 
          placeholder="reacts to touch on both legs and arms"
          updater={updateItem} />
        <ShortInput 
          type="text" 
          name="motion" 
          title="Movement" 
          id={id+"motion"} 
          placeholder="Is able to move freely"
          updater={updateItem} />
      </div>
      
    </>
  )
}

export default Vital