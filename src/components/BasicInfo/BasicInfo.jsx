import "./BasicInfo.css"
import ShortInput from "../ShortInput/ShortInput";
import TimeInput from "../TimeInput/TimeInput";


function BasicInfo() {
  let basicData = {}
  
  function updateItem(e){
    const updateElem = e.target.id
    const updatVal = e.target.value
    basicData={...basicData, [updateElem]: updatVal}
    console.log(basicData)
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
          updater={updateItem} />
        <ShortInput 
          type="number" 
          name="age" 
          title="Age" 
          id="age" 
          placeholder="33"
          updater={updateItem} />
        <TimeInput 
          type="date" 
          id="incidentdate" 
          title="Date" 
          updater={updateItem} 
          name="time" />
        <TimeInput 
          type="time" 
          id="incidenttime" 
          title="Time" 
          updater={updateItem} 
          name="time" />
      </div>
    </section>
  );
}

export default BasicInfo;
