

function TimeInput(props) {
  return (
    <>
      <div className="input-container">
        <label htmlFor={props.id}>{props.title}:</label>
        <input className="text-input" onChange={props.updater} id={props.id} name={props.name} type={props.type}></input>
      </div>
    </>
  )
}

export default TimeInput