import Nav from "../Nav/Nav"
import CommunLayout from "../components/Layout/CommunLayout"
import Data from '../data.json'
const MercuryloadingPage = () => {
  return (
    <div>
      <Nav/>
     <CommunLayout data={Data[0]} />
      </div>
  )
}

export default MercuryloadingPage