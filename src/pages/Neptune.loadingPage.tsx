import Nav from "../Nav/Nav"
import CommunLayout from "../components/Layout/CommunLayout"
import Data from '../data.json'
const NeptuneloadingPage = () => {
  return (
    <div>
      <Nav/>
      <CommunLayout data={Data[7]} />
      </div>
  )
}

export default NeptuneloadingPage