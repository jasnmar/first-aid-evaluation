import "./Secondary.css"
import Dots from "../Dots/Dots"
import LongTextInput from "../LongTextInput/LongTextInput"
import LevelOfResponsiveness from "../LevelOfResponsiveness/LevelOfResponsiveness"

function Secondary() {

  return (
    <>
      <section>
        <h2>Secondary Assesment</h2>
        <LevelOfResponsiveness id="secondary" />
        <div className="section-container justify-left">
          <div className="text-area-container">
            <LongTextInput title="Complaint" />
          </div>
          <div className="text-area-container">
            <LongTextInput title="Signs and Symptoms" />
          </div>
          <div className="text-area-container">
            <LongTextInput title="Allergies" />
          </div>
          <div className="text-area-container">
            <LongTextInput title="Medications" />
          </div>
          <div className="text-area-container">
            <LongTextInput title="Medial History" />
          </div>
          <div className="text-area-container">
            <LongTextInput title="Last Intake" />
          </div>
          <div className="text-area-container">
            <LongTextInput title="Last Output" />
          </div>
          <div className="text-area-container">
            <LongTextInput title="Events leading to incident" />
          </div>
          <div>
            <h3>Hands on physical examination results</h3>
            <div className="body-part">
              <h4>Head</h4>
              <Dots />
            </div>
            <div className="body-part">
              <h4>Chest</h4>
              <Dots />
            </div>
            <div className="body-part">
              <h4>Abdommen</h4>
              <Dots />
            </div>
            <div className="body-part">
              <h4>Pelvis</h4>
              <Dots />
            </div>
            <div className="body-part">
              <h4>Legs / Arms</h4>
              <Dots />
            </div>
            <div className="body-part">
              <h4>Back</h4>
              <Dots />
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Secondary

