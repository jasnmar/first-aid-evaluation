import { v4 as uuidv4 } from 'uuid';


function RadioChoice(props) {
  const choices = props.options.options
  console.log(props)
  let radioList
  if(choices) {
    radioList = choices.map(choice => {
      return (
        <div key={uuidv4()}>
          <input type="radio" id={props.name+choice.id} data-group={props.item} data-item={choice.id} name={props.name} value={choice.value}></input>
          <label className="radio-label" htmlFor={props.name+choice.id}>{choice.value}</label>
        </div>
      )
    })
  }

  return (
    <>
      <div className='radio-container'>
        <fieldset onChange={props.updater}>
            <legend>{props.legend}</legend>
              {radioList ? radioList : null}
          </fieldset>
      </div>
    </>
  )
}

export default RadioChoice