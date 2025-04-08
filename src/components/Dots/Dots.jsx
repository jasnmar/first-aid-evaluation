import "./Dots.css"

function Dots(props) {

  return (
  <>
  <div>
    <label className="label-check">
      <input data-group={props.id} onClick={props.updater} type="checkbox" name="deformity"></input>
      Deformity
    </label>
    <label className="label-check">
      <input data-group={props.id} onClick={props.updater} type="checkbox" name="openinjury"></input>
      Open Injury
    </label>
    <label className="label-check">
      <input data-group={props.id} onClick={props.updater} type="checkbox" name="tenderness"></input>
      Tenderness
    </label>
    <label className="label-check">
      <input data-group={props.id} onClick={props.updater} type="checkbox" name="swelling"></input>
      Swelling
    </label>
  </div>
  </>
  )
}

export default Dots