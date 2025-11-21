import Nav from "../Nav/Nav"
import CommunLayout from "../components/Layout/CommunLayout"
import Data from '../data.json'
const UranusloadingPage = () => {
  return (
    <div>
        <Nav/>
        <CommunLayout data={Data[6]} />
      </div>
  )
}

export default UranusloadingPage