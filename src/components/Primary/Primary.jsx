import "./Primary.css"
import { useState, useEffect } from 'react'
import RadioChoice from "../RadioChoice/RadioChoice"

function Primary() {

  const primaryOptions = [
    {choice: "airway", 
      options: [
        {id:"clear", value: "Clear", checked:false}, 
        {id:"obstructed", value: "Obstructed", checked:false}]}, 
    {choice: "breathing", 
      options: [
        {id:"normal", value: "Normal", checked:false}, 
        {id:"shallow", value: "Shallow", checked:false}, 
        {id:"none", value: "None", checked:false}]},
    {choice: "circulation", 
      options: [
        {id:"none", value: "None", checked:false}, 
        {id:"minor", value: "Minor", checked:false}, 
        {id:"severe", value: "Severe", checked:false}]},
    {choice: "disability", 
      options:[
        {id:"none", value: "None", checked:false}, 
        {id:"yes", value: "Yes", checked:false}, 
        {id:"unsure", value: "Unsure", checked:false}]},
    {choice: "environmental", 
      options:[
        {id:"none", value:"None", checked:false}, 
        {id:"yes", value: "Yes", checked:false}, 
        {id:"unsure", value: "Unsure", checked:false}
      ]
    }
  ]
 
  const primaryDataFromStorage = localStorage.getItem('primaryData')
  let dataFromStorage
  if(primaryDataFromStorage?.length > 0) {
    dataFromStorage = JSON.parse(primaryDataFromStorage)
  }
  else {
    dataFromStorage = primaryOptions
  }

  const [primaryData, setPrimaryData] = useState(dataFromStorage)

  function updateRadioData(choice, checkedItem){
    const foundIndex = primaryOptions.findIndex((item) => {
      return item.choice === choice 
    })
    const optionsArray = primaryOptions[foundIndex].options
    const newOptions = optionsArray.map((option) => {
      if(option.id === checkedItem) {
        option.checked = true
      }
      else {
        option.checked = false
      }
      return option
    })
    let newArray = []
    setPrimaryData((privData) => {
      newArray = privData.map(item => {
        if(item.choice === choice) {
          item.options = newOptions
        }
        return item
      })
      return newArray
    })
    return newArray
  }

  function updateItem(e){
    const updateElem = e.target.name
    const updateVal = e.target.dataset.item
    updateRadioData(updateElem, updateVal)
  }

  useEffect(() => {
    localStorage.setItem('primaryData', JSON.stringify(primaryData))
  },[primaryData])

  return (
    <>
      <section> 
        <h2>Primary Assesment</h2>
        <div className="section-container">
          <RadioChoice 
            legend="Airway" 
            name="airway" 
            options={primaryData[0]}
            updater={updateItem} 
            // selected={airway} 
          />
          <RadioChoice 
            legend="Breathing" 
            name="breathing" 
            options={primaryData[1]}
            updater={updateItem} 
          />
          <RadioChoice 
            legend="Circulation (Bleeding)" 
            name="circulation" 
            options={primaryData[2]}
            updater={updateItem} 
          />
          <RadioChoice 
            legend="Disability (Spine)" 
            name="disability" 
            options={primaryData[3]}
            updater={updateItem} 
          />
          <RadioChoice 
            legend="Environmental" 
            name="environmental" 
            options={primaryData[4]}
            updater={updateItem} 
          />
        </div>
      </section>
    </>
  )
}

export default Primary

