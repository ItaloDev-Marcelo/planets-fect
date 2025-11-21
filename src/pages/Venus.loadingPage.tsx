import Nav from "../Nav/Nav"
import CommunLayout from "../components/Layout/CommunLayout"
import Data from '../data.json'
const VenusloadingPage = () => {
  return (
    <div>
      <Nav/>
      <CommunLayout data={Data[1]} />
      </div>
  )
}

export default VenusloadingPage