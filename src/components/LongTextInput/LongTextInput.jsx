import "./LongTextInput.css"


function LongTextInput( props ) {
  return (
    <>
      <label className="longtextinput--label" htmlFor={props.title}>{props.title}</label>
      <textarea id={props.item} onChange={props.updater} className="longtextinput--textarea" name={props.title} ></textarea>
    </>
  )
}

export default LongTextInput