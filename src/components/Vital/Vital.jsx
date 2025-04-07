import "./Vital.css"
import TimeInput from "../TimeInput/TimeInput";
import LevelOfResponsiveness from "../LevelOfResponsiveness/LevelOfResponsiveness";

function Vital(props) {
  const id = props.id
  return (
    <>
    <div className="section-container">
      <TimeInput id={"vital-time-"+id} title="Time" name="time" />
    </div>
    <LevelOfResponsiveness id={id} />
    <div className="section-container">
      <label className="label-horizontal">
        Breath Rate:
        <input id={"breath"+id} className="text-input" type="number" name={"breath"+id}></input>
      </label>
      <label className="label-horizontal">
        Heart Rate:
        <input id={"heart"+id} className="text-input" type="number"></input>
      </label>
      <label className="label-horizontal">
        Skin:
        <input className="text-input" type="text"></input>
      </label>
      <label className="label-horizontal">
        Pupils:
        <input className="text-input" type="text"></input>
      </label>
      <label className="label-horizontal">
        Circulation:
        <input className="text-input" type="text"></input>
      </label>
      <label className="label-horizontal">
        Sensation:
        <input className="text-input" type="text"></input>
      </label>
      <label className="label-horizontal">
        Motion:
        <input className="text-input" type="text"></input>
      </label>
    </div>
      
    </>
  )
}

export default Vital