import "./Secondary.css"
import Dots from "../Dots/Dots"
import LongTextInput from "../LongTextInput/LongTextInput"
import LevelOfResponsiveness from "../LevelOfResponsiveness/LevelOfResponsiveness"
import { lorUpdater } from "../componentUtils/updater"

function Secondary() {
  let secondData = {}

  function lorCall(e) {
    secondData = lorUpdater(e, secondData)
    localStorage.setItem('secondData', JSON.stringify(secondData));
  }

  function textAreaUpdate(e) {
    const updateElem = e.target.id
    const updatVal = e.target.value
    secondData = { ...secondData, [updateElem]: updatVal }
    console.log(secondData)
    localStorage.setItem('secondData', JSON.stringify(secondData));
  }

  function dotsUpdater(e) {
    const updateElem = e.target.name
    const updatVal = e.target.checked
    const group = e.target.dataset.group + "-"
    secondData = { ...secondData, [group+updateElem]: updatVal }
    console.log(secondData)
    localStorage.setItem('secondData', JSON.stringify(secondData));
  }

  return (
    <>
      <section>
        <h2>Secondary Assesment</h2>
        <div className="section-container">
          <LevelOfResponsiveness updater={lorCall} id="secondary" />
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
            <div className="body-part">
              <p>Head</p>
              <Dots updater={dotsUpdater}id="head"/>
            </div>
            <div className="body-part">
              <p>Chest</p>
              <Dots updater={dotsUpdater}id="chest"/>
            </div>
            <div className="body-part">
              <p>Abdommen</p>
              <Dots updater={dotsUpdater}id="abdomen"/>
            </div>
            <div className="body-part">
              <p>Pelvis</p>
              <Dots updater={dotsUpdater}id="pelvis" />
            </div>
            <div className="body-part">
              <p>Legs / Arms</p>
              <Dots updater={dotsUpdater}id="legs" />
            </div>
            <div className="body-part">
              <p>Back</p>
              <Dots updater={dotsUpdater}id="back" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Secondary
