import "./Vital.css"
import { useState, useEffect } from "react"
import TimeInput from "../TimeInput/TimeInput"
import LevelOfResponsiveness from "../LevelOfResponsiveness/LevelOfResponsiveness"
import ShortInput from "../ShortInput/ShortInput"
import { lorObjectUpdater } from "../componentUtils/updater"
import { responsiveData as responsiveDataTemplate } from "../componentUtils/responsiveness"

function Vital(props) {
  //Each time Vital is called it is required to have and id as part of props
  const vitalId = props.id

  let responsiveDataCheck = {}
  const responsiveDataFromStorage = localStorage.getItem(vitalId+"responsiveData")
  if(responsiveDataFromStorage?.length > 0) {
    responsiveDataCheck = JSON.parse(responsiveDataFromStorage)
  } else {
    responsiveDataCheck = responsiveDataTemplate
  }

  const vitalDataTemplate = {
    time: "",
    breath: "",
    heart: "",
    skin: "",
    eyes: "",
    circulation: "",
    sensation: "",
    motion: ""
  }
  
  let vitalDataCheck = {}
  const vitalDataFromStorage = localStorage.getItem(vitalId+"vitalData")
  if(vitalDataFromStorage?.length > 0) {
    vitalDataCheck = JSON.parse(vitalDataFromStorage)
  } else {
    vitalDataCheck = vitalDataTemplate
  }

  const [responsiveData, setResponsiveData] = useState(responsiveDataCheck)
  const [vitalData, setVitalData] = useState(vitalDataCheck)
  
  useEffect(() => {
    localStorage.setItem(vitalId+"responsiveData", JSON.stringify(responsiveData))
  }, [responsiveData, vitalId])

  useEffect(() => {
    localStorage.setItem(vitalId+"vitalData", JSON.stringify(vitalData))
  }, [vitalData, vitalId])

  function lorCall(e) {
    const newResponsiveData = lorObjectUpdater(e, responsiveData)
    // console.log('newResponsiveData: ', newResponsiveData )
    setResponsiveData(() => {return {...newResponsiveData}})
    }

  function updateItem(e){
    const updateElem = e.target.name
    const updatVal = e.target.value
    // console.log(updateElem, updatVal)
    setVitalData((prevData) => {
      return {...prevData, [updateElem]: updatVal}})
  }

  return (
    <>
    <h3>Vital</h3>
      <div className="section-container vital-container">
        <TimeInput
          type="time"
          id={vitalId}
          title="Time"
          updater={updateItem}
          name="time"
          value={vitalData.time}
        />
      <LevelOfResponsiveness
        options={responsiveData}
        updater={lorCall}
        id={vitalId}
      />
      <div className="section-container">
        <ShortInput
          type="number"
          name="breath"
          title="Breath Rate"
          id={vitalId + "breath"}
          placeholder="12-20"
          updater={updateItem}
          value={vitalData.breath}
        />
        <ShortInput
          type="number"
          name="heart"
          title="Heart Rate"
          id={vitalId + "heart"}
          placeholder="50-100"
          updater={updateItem}
          value={vitalData.heart}
        />
        <ShortInput
          type="text"
          name="skin"
          title="Skin (color, temp, moisture)"
          id={vitalId + "skin"}
          placeholder="normal, warm, dry"
          updater={updateItem}
          value={vitalData.skin}
        />
        <ShortInput
          type="text"
          name="eyes"
          title="Pupils (size, reactive)"
          id={vitalId + "eyes"}
          placeholder="equal and reactive"
          updater={updateItem}
          value={vitalData.eyes}
        />
        <ShortInput
          type="text"
          name="circulation"
          title="Circulation (wrists, feet, capillary refill)"
          id={vitalId + "circulation"}
          placeholder="Strong pulse, good refill"
          updater={updateItem}
          value={vitalData.circulation}
        />
        <ShortInput
          type="text"
          name="sensation"
          title="Sensation (feeling in different parts of the body)"
          id={vitalId + "sensation"}
          placeholder="reacts to touch on both legs and arms"
          updater={updateItem}
          value={vitalData.sensation}
        />
        <ShortInput
          type="text"
          name="motion"
          title="Movement"
          id={vitalId + "motion"}
          placeholder="Is able to move freely"
          updater={updateItem}
          value={vitalData.motion}
        />
        </div>
      </div>
    </>
  )
}

export default Vital