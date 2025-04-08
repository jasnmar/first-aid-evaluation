

function ShortInput(props) {
  return (
    <>
    <div className="input-container">
      <label htmlFor={props.id}>{props.title}:</label>
      <input placeholder={props.placeholder} className="text-input" type={props.type} name={props.name} id={props.id} onChange={props.updater}></input>
    </div>
    </>
  )
}

export default ShortInput