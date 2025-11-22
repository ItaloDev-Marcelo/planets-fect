
import NavegationTab from '../components/navegationTab'
import type { ButtonSelectProps } from '../types/button.select'

const ButtonSelect = ({name,handleTabClick,selectTab}:ButtonSelectProps) => {
   switch(name) {
      case  'Mercury': 
        return <NavegationTab handleTabClick={handleTabClick}  color='gray'  selectTab={selectTab} />
      break  
      case  'Venus':
        return <NavegationTab handleTabClick={handleTabClick}  color='sunset-orange'   selectTab={selectTab} />
      break  
      case  'Earth':
        return <NavegationTab handleTabClick={handleTabClick}  color='azure'  selectTab={selectTab} />
      break  
      case  'Mars':
        return <NavegationTab handleTabClick={handleTabClick}  color='red'  selectTab={selectTab} />
      break  
      case  'Jupiter':
        return <NavegationTab handleTabClick={handleTabClick}  color='sunset-orange'  selectTab={selectTab} />
      break  
      case  'Saturn':
        return <NavegationTab handleTabClick={handleTabClick}  color='sunset-orange'   selectTab={selectTab} />
      break  
      case  'Uranus':
        return <NavegationTab handleTabClick={handleTabClick}  color='blue-300'   selectTab={selectTab} />
      break  
      case  'Neptune':
        return <NavegationTab handleTabClick={handleTabClick}  color='ocean-blue'   selectTab={selectTab} />
      break  
      default:
        return <NavegationTab handleTabClick={handleTabClick}  color='azure'   selectTab={selectTab} />
      break  
   }
}

export default ButtonSelect