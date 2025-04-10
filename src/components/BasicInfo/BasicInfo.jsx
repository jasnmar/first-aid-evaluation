import "./BasicInfo.css"
import { useState } from 'react'

import ShortInput from "../ShortInput/ShortInput";
import TimeInput from "../TimeInput/TimeInput";


function BasicInfo() {
  const dataFromStorage = localStorage.getItem('basicData')
  let basicData = {}
  if (dataFromStorage) {
    basicData = JSON.parse(dataFromStorage)
  }
  const patientnameFromStorage = basicData.patientname ? basicData.patientname : ""
  const ageFromStorage = basicData.age ? basicData.age : ""
  const incidentdateFromStorage = basicData.incidentdate ? basicData.incidentdate : ""
  const incidenttimeFromStorage = basicData.incidenttime ? basicData.incidenttime : ""
  

  const [patientname, setPatientName] = useState(patientnameFromStorage)
  const [age, setAge] = useState(ageFromStorage)
  const [incidentdate, setIncidentDate] = useState(incidentdateFromStorage)
  const [incidenttime, setIncidentTime] = useState(incidenttimeFromStorage)
  
  
  function updateItem(e){
    const updateElem = e.target.id
    switch(updateElem) {
      case "patientname":
          setPatientName(e.target.value)
          break
      case "age":
          setAge(e.target.value)
          break
        case "incidentdate":
          setIncidentDate(e.target.value)
          break
        case "incidenttime":
          setIncidentTime(e.target.value)
          break
        default:
          console.error("Unknown element updating")
    }
    const updatVal = e.target.value
    basicData={...basicData, [updateElem]: updatVal}
    localStorage.setItem('basicData', JSON.stringify(basicData));
  }

  return (
    <section>
      <h2>Basic Information</h2>
      <div className="section-container">
        <ShortInput 
          type="text" 
          name="patientname" 
          title="Name" 
          id="patientname" 
          placeholder="Jane Doe"
          updater={updateItem}
          value={patientname} />
        <ShortInput 
          type="number" 
          name="age" 
          title="Age" 
          id="age" 
          placeholder="33"
          updater={updateItem}
          value={age} />
        <TimeInput 
          type="date" 
          id="incidentdate" 
          title="Date" 
          updater={updateItem} 
          name="time"
          value={incidentdate} />
        <TimeInput 
          type="time" 
          id="incidenttime" 
          title="Time" 
          updater={updateItem} 
          name="time"
          value={incidenttime} />
      </div>
    </section>
  );
}

export default BasicInfo;
