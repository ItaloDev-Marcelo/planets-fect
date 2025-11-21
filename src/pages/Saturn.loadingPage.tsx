import Nav from "../Nav/Nav"
import CommunLayout from "../components/Layout/CommunLayout"
import Data from '../data.json'
const SaturnloadingPage = () => {
  return (
    <div>
      <Nav/>
      <CommunLayout data={Data[5]} />
      </div>
  )
}

export default SaturnloadingPage