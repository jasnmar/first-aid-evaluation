import "./Vitals.css"
import { useState, useEffect } from "react"
import Vital from "../Vital/Vital"

function Vitals() {
  const vitalCountFromData = localStorage.getItem('vitalCount')
  let vitalCount = 1
  if(vitalCountFromData) {
    vitalCount = JSON.parse(vitalCountFromData)
  }

  const [numberOfVitals, setNumberOfVitals] = useState(vitalCount)
  
  const vitalElements = []
  for (let i = 0; i < numberOfVitals; i++) {
    vitalElements.push(<Vital key={i} id={i} />)
  }

  useEffect(() => {
    localStorage.setItem('vitalCount', JSON.stringify(numberOfVitals))
  }, [numberOfVitals])
  
  function addVital(e){
    e.preventDefault()
    setNumberOfVitals(prevVitalCount => prevVitalCount + 1)
  }

  return (
    <>
      <section>
        <div className="vital--title">
          <h2>Vitals</h2>
          <button onClick={addVital}>+</button>
        </div>
        {vitalElements}
      </section>
    </>
  )
}

export default Vitals