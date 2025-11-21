import Nav from "../Nav/Nav"
import CommunLayout from "../components/Layout/CommunLayout"
import Data from '../data.json'
const EarthloadingPage = () => {

  return (
    <div>
      <Nav/>
      <CommunLayout data={Data[2]} />
      </div>
  )
}

export default EarthloadingPage