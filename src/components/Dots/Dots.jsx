import "./Dots.css"
import { v4 as uuidv4 } from 'uuid';


function Dots(props) {

  // console.log('props.options: ', props.allOptions)
  let allElements = []
  
  if(props.allOptions) {
    allElements = props.allOptions.map((element) => {
      return (
        <div key={uuidv4()} className="body-part">
          <p>{element.data}</p>
          {checkBoxes(element.checks, element.bodypart)}
          <label className="label-check">
          </label>
        </div>
      )
    })
  }

  function checkBoxes(list, group) {
    // console.log('list: ', list)
    const checkList = list.map((item) => {
      // console.log('item: ', item)
      return (
        <div key={uuidv4()}>
          <label className="label-check">
            <input data-group={group} onChange={props.updater} type="checkbox" checked={item.checked} name={item.id}></input>
            {item.value}
          </label>
        </div>
      )
    })
    return checkList
  }


  return (
    <>
      <div>{allElements}</div>
    </>
  )
}

export default Dots