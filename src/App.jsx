
import './App.css'
import BasicInfo from './components/BasicInfo/BasicInfo'
import Primary from './components/Primary/Primary'
import Secondary from './components/Secondary/Secondary'
import Vitals from './components/Vitals/Vitals'

function App() {

  return (
    <>
      <h1>Situation Documentation</h1>
      <BasicInfo />
      <Primary />
      <Secondary />
      <Vitals />
    </>
  )
}

export default App
