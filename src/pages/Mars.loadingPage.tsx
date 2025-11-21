import Nav from "../Nav/Nav"
import CommunLayout from "../components/Layout/CommunLayout"
import Data from '../data.json'
const MarsloadingPage = () => {
  return (
    <div>
      <Nav/>
      <CommunLayout data={Data[3]} />
      </div>
  )
}

export default MarsloadingPage