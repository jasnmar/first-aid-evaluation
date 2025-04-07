

function TimeInput(props) {
  return (
    <>
      <label className="label-horizontal">{props.title}: 
          <input id={props.id} className="text-input" name={props.name} type="time"></input>
        </label>
    </>
  )
}

export default TimeInput