import { v4 as uuidv4 } from 'uuid';


function RadioChoice(props) {
  const choices = props.options.options
  // console.log('choices: ', choices)
  let radioList
  if(choices) {
    radioList = choices.map(choice => {
      //console.log('choice.checked:', choice.checked)
      return (
        <div key={uuidv4()}>
          <input 
            type="radio" 
            id={props.name+choice.id} 
            data-group={props.item} 
            data-item={choice.id} 
            name={props.name} 
            value={choice.value}
            checked={choice.checked}
            onChange={props.updater}
          >
          </input>
          <label className="radio-label" htmlFor={props.name+choice.id}>{choice.value}</label>
        </div>
      )
    })
  }

  return (
    <>
      <div className='radio-container'>
        <fieldset>
            <legend>{props.legend}</legend>
              {radioList ? radioList : null}
          </fieldset>
      </div>
    </>
  )
}

export default RadioChoice