
import './App.css'
import BasicInfo from './components/BasicInfo/BasicInfo'
import Primary from './components/Primary/Primary'
import Secondary from './components/Secondary/Secondary'
import Vitals from './components/Vitals/Vitals'

function App() {

  return (
    <>
      <h2>First Aid Information</h2>
      <BasicInfo />
      <Primary />
      <Secondary />
      <Vitals />
    </>
  )
}

export default App
