import "./Secondary.css"
import { useState, useEffect } from "react"
import Dots from "../Dots/Dots"
import LongTextInput from "../LongTextInput/LongTextInput"
import LevelOfResponsiveness from "../LevelOfResponsiveness/LevelOfResponsiveness"
import { lorObjectUpdater } from "../componentUtils/updater"
import { responsiveData as responsiveDataTemplate } from "../componentUtils/responsiveness"

function Secondary() {
  const secondaryDataFromStorage = localStorage.getItem('secondaryData')
  const responsiveDataFromStorage = localStorage.getItem('responsiveData')
  const dotsDataFromStorage = localStorage.getItem('dotsData')
  
  console.log('responsiveDataTemplate: ', responsiveDataTemplate)
  const defaultData = {
    responsivness: {
      ...responsiveDataTemplate
    }, textInputs: [
    {complaint: ""},
    {signs: ""},
    {allergies: ""},
    {medications: ""},
    {history: ""},
    {intake: ""},
    {output: ""},
    {events: ""}
    ],
    dots: [
    {bodypart: "head", data:"Head",
      checks: [
      {id: "deformity", value: "Deformity", checked: false},
      {id: "open", value: "Open Injury", checked: false},
      {id: "tenerness", value: "Tenderness", checked: false},
      {id: "swelling", value: "Swelling", checked: false}  
      ]
    },
    {bodypart: "chest", data:"Chest",
      checks: [
      {id: "deformity", value: "Deformity", checked: false},
      {id: "open", value: "Open Injury", checked: false},
      {id: "tenerness", value: "Tenderness", checked: false},
      {id: "swelling", value: "Swelling", checked: false}  
    ]},
    {bodypart: "abdomen", data:"Abdomen",
      checks: [
      {id: "deformity", value: "Deformity", checked: false},
      {id: "open", value: "Open Injury", checked: false},
      {id: "tenderness", value: "Tenderness", checked: false},
      {id: "swelling", value: "Swelling", checked: false}  
    ], value:"Abdomen"},
    {bodypart: "pelvis", data:"Pelvis",
      checks: [
      {id: "deformity", value: "Deformity", checked: false},
      {id: "open", value: "Open Injury", checked: false},
      {id: "tenderness", value: "Tenderness", checked: false},
      {id: "swelling", value: "Swelling", checked: false}  
    ]},
    {bodypart: "legs", data:"Legs / Arms",
      checks: [
      {id: "deformity", value: "Deformity", checked: false},
      {id: "open", value: "Open Injury", checked: false},
      {id: "tenderness", value: "Tenderness", checked: false},
      {id: "swelling", value: "Swelling", checked: false}  
    ]},
    {bodypart: "back", data:"Back",
      checks:  [
      {id: "deformity", value: "Deformity", checked: false},
      {id: "open", value: "Open Injury", checked: false},
      {id: "tenderness", value: "Tenderness", checked: false},
      {id: "swelling", value: "Swelling", checked: false}  
    ]}
  ]}

  let responsiveDataCheck = {}
  if(responsiveDataFromStorage?.length > 0) {
    responsiveDataCheck = JSON.parse(responsiveDataFromStorage)
    } else {
    responsiveDataCheck = defaultData.responsivness
  }

  let dotsDataCheck = {}
  if(dotsDataFromStorage?.length > 0) {
    dotsDataCheck = JSON.parse(dotsDataFromStorage)
  } else {
    dotsDataCheck = defaultData.dots
  }
  

  let dataFromStorage = {}
  if(secondaryDataFromStorage?.length > 0) {
    dataFromStorage = JSON.parse(secondaryDataFromStorage)
  } else {
    dataFromStorage = defaultData.textInputs
  }

  const [secondaryData, setSecondaryData] = useState(dataFromStorage)
  const [responsiveData, setResponsiveData] = useState(responsiveDataCheck)
  const [dotsData, setDotsData] = useState(dotsDataCheck)
  

  useEffect(() => {
    localStorage.setItem('secondaryData', JSON.stringify(secondaryData))
    }, [secondaryData])

  useEffect(() => {
    localStorage.setItem('responsiveData', JSON.stringify(responsiveData))
  }, [responsiveData])

  useEffect(() => {
    // console.log('dotsData: ', dotsData)
    localStorage.setItem('dotsData', JSON.stringify(dotsData))
  }, [dotsData])
  

  function lorCall(e) {
    const newResponsiveData = lorObjectUpdater(e, responsiveData)
    // console.log('newResponsiveData: ', newResponsiveData )
    setResponsiveData(() => {return {...newResponsiveData}})
    }

  // function lorCall2(e) {
  //   const newSecondaryData = lorObjectUpdater(e, secondaryData)
  //   // console.log('newSecondaryData: ', newSecondaryData )
  //   setSecondaryData(() => {return {...newSecondaryData}})
  // }

  function textAreaUpdate(e) {
    const updateElem = e.target.id
    const updatVal = e.target.value
    // console.log(updateElem, updatVal)
    // console.log("secondaryData:", secondaryData)
    // secondData = { ...secondData, [updateElem]: updatVal }
    setSecondaryData((prevData) => {
      return { ...prevData, [updateElem]: updatVal }
    })
    // console.log(JSON.stringify(secondData))
    // console.log(secondData)
    // localStorage.setItem('secondData', JSON.stringify(secondData));
  }

  function dotsUpdater(e) {
    const updateElem = e.target.name
    const updatVal = e.target.checked
    const group = e.target.dataset.group
    // console.log('updateElem: ', updateElem)
    // console.log('updatVal: ', updatVal)
    // console.log('group: ', group)
    
    const partsIndex = dotsData.findIndex((dotObject) => {
      return dotObject.bodypart === group
    })
    const newdotObject = { ...dotsData[partsIndex] }
    const newChecks = newdotObject.checks.map((check) => {
      if(check.id === updateElem) {
        check.checked = updatVal
      }
      return check
    }) 
    newdotObject.checks = newChecks
    const newDots = [...dotsData]
    newDots[partsIndex] = newdotObject
    // console.log('newChecks: ', newChecks)
    // console.log('newdotObject: ', newdotObject)
    // console.log('newDots: ', newDots)
    setDotsData(() => {
      return [ ...newDots ]
    })
  }

  return (
    <>
      <section>
        <h2>Secondary Assesment</h2>
        <div className="section-container">
          
          <LevelOfResponsiveness options={responsiveData} updater={lorCall} id="secondary" />
          
          <div className="longtextinput-container">
            <div className="text-area-container">
              <LongTextInput updater={textAreaUpdate} item="complaint" title="Complaint" />
            </div>
            <div className="text-area-container">
              <LongTextInput updater={textAreaUpdate} item="signs" title="Signs and Symptoms" />
            </div>
            <div className="text-area-container">
              <LongTextInput updater={textAreaUpdate} item="allergies" title="Allergies" />
            </div>
            <div className="text-area-container">
              <LongTextInput updater={textAreaUpdate} item="medications" title="Medications" />
            </div>
            <div className="text-area-container">
              <LongTextInput updater={textAreaUpdate} item="history" title="Medial History" />
            </div>
            <div className="text-area-container">
              <LongTextInput updater={textAreaUpdate} item="intake" title="Last Intake" />
            </div>
            <div className="text-area-container">
              <LongTextInput updater={textAreaUpdate} item="output" title="Last Output" />
            </div>
            <div className="text-area-container">
              <LongTextInput updater={textAreaUpdate} item="events" title="Events leading to incident" />
            </div>
          </div>
          <div className="physicalexamination-container">
            <h3>Hands on physical examination</h3>
            <Dots allOptions={dotsData} updater={dotsUpdater} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Secondary
