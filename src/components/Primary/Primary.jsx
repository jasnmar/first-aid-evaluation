import "./Primary.css"
//import { useState } from 'react'
import RadioChoice from "../RadioChoice/RadioChoice"

function Primary() {
  const primaryOptions = [
    {choice: "airway", 
      options: [
        {id:"clear", value: "Clear", checked:false}, 
        {id:"obstructed", value: "Obstructed", checked:false}]}, 
    {choice: "Breathing", 
      options: [
        {id:"normal", value: "Normal", checked:false}, 
        {id:"shallow", value: "Shallow", checked:false}, 
        {id:"none", value: "None", checked:false}]},
    {choice: "circulation", 
      options: [
        {id:"none", value: "None", checked:false}, 
        {id:"minor", value: "Minor", checked:false}, 
        {id:"severe", value: "Severe", checked:false}]},
    {choice: "Disability", 
      options:[
        {id:"none", value: "None", checked:false}, 
        {id:"yes", value: "Yes", checked:false}, 
        {id:"unsure", value: "Unsure", checked:false}]},
    {choice: "Environmental", 
      options:[
        {id:"none", value:"None", checked:false}, 
        {id:"yes", value: "Yes", checked:false}, 
        {id:"unsure", value: "Unsure", checked:false}
      ]
    }
  ]

  let primaryData = {}
  function updateItem(e){
    const updateElem = e.target.name
    const updatVal = e.target.dataset.item
    primaryData={...primaryData, [updateElem]: updatVal}
    console.log(primaryData)
    localStorage.setItem('primaryData', JSON.stringify(primaryData));
  }

  return (
    <>
      <section> 
        <h2>Primary Assesment</h2>
        <RadioChoice 
          legend="Airway" 
          name="airway" 
          options={primaryOptions[0]}
          updater={updateItem} />
        <RadioChoice 
          legend="Breathing" 
          name="breathing" 
          options={primaryOptions[1]}
          updater={updateItem} />
        <RadioChoice 
          legend="Circulation (Bleeding)" 
          name="circulation" 
          options={primaryOptions[2]}
          updater={updateItem} />
        <RadioChoice 
          legend="Disability (Spine)" 
          name="spinal" 
          options={primaryOptions[3]}
          updater={updateItem} />
        <RadioChoice 
          legend="Environmental" 
          name="environmental" 
          options={primaryOptions[4]}
          updater={updateItem} />
      </section>
    </>
  )
}

export default Primary

