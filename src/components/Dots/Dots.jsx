import "./Dots.css"

function Dots() {

  return (
  <>
    <label className="label-check">
      <input type="checkbox" name="deformity"></input>
      Deformity
    </label>
    <label className="label-check">
      <input type="checkbox" name="openinjury"></input>
      Open Injury
    </label>
    <label className="label-check">
      <input type="checkbox" name="tenderness"></input>
      Tenderness
    </label>
    <label className="label-check">
      <input type="checkbox" name="swelling"></input>
      Swelling
    </label>
  </>
  )
}

export default Dots