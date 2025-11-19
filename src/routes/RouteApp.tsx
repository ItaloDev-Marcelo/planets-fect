import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  {RoutesList} from './Routes'
const RouteApp = () => {
  return (
    <BrowserRouter>
       <Routes>
          {
            RoutesList.map(({path, element}, index) => (
              <Route key={index} path={path} element={element} />
            ))
          }
       </Routes>
    </BrowserRouter>
  )
}

export default RouteApp