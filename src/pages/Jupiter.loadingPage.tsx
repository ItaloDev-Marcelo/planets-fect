import Nav from "../Nav/Nav"
import CommunLayout from "../components/Layout/CommunLayout"
import Data from '../data.json'
const JupiterloadingPage = () => {
  return (
    <div>
      <Nav/>
      <CommunLayout data={Data[4]} />
      </div>
  )
}

export default JupiterloadingPage