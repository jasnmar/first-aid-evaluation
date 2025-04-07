import "./LongTextInput.css"


function LongTextInput( props ) {
  return (
    <>
      <label className="longtextinput--label" for={props.title}>{props.title}</label>
      <textarea id={props.title} className="longtextinput--textarea" name={props.title} ></textarea>
    </>
  )
}

export default LongTextInput