import TimeInput from "../TimeInput/TimeInput";
import "./BasicInfo.css"

function BasicInfo() {
  return (
    <section>
      <h2>Basic Patient Information</h2>
        <div className="section-container">
        <label className="label-horizontal">Name: 
          <input className="text-input" name="pname" type="text"></input>
        </label>
        <br></br>
        <label className="label-horizontal">Age: 
          <input className="text-input" name="age" type="number"></input>
        </label>
        <br></br>
        <label className="label-horizontal">Date: 
          <input className="text-input" name="date" type="date"></input> 
        </label>
        <br></br>
        <TimeInput id="incident-time" title="Time" name="time" />
      </div>
    </section>
  );
}

export default BasicInfo;
