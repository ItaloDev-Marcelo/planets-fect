
import Button from '../components/Button'
import type { buttonProps } from '../types/buttons.type'
const ButtonSelect = ({name,valor,handleTabClick,title,selectTab}:buttonProps) => {
   switch(name) {
      case  'Mercury': 
        return <Button handleTabClick={handleTabClick}  color='bg-gray' valor={valor} title={title} selectTab={selectTab} />
      break  
      case  'Venus':
        return <Button handleTabClick={handleTabClick}  color='bg-sunset-orange' valor={valor} title={title} selectTab={selectTab} />
      break  
      case  'Earth':
        return <Button handleTabClick={handleTabClick}  color='bg-azure' valor={valor} title={title} selectTab={selectTab} />
      break  
      case  'Mars':
        return <Button handleTabClick={handleTabClick}  color='bg-red' valor={valor} title={title} selectTab={selectTab} />
      break  
      case  'Jupiter':
        return <Button handleTabClick={handleTabClick}  color='bg-sunset-orange' valor={valor} title={title} selectTab={selectTab} />
      break  
      case  'Saturn':
        return <Button handleTabClick={handleTabClick}  color='bg-sunset-orange' valor={valor} title={title} selectTab={selectTab} />
      break  
      case  'Uranus':
        return <Button handleTabClick={handleTabClick}  color='bg-blue-300' valor={valor} title={title} selectTab={selectTab} />
      break  
      case  'Neptune':
        return <Button handleTabClick={handleTabClick}  color='bg-ocean-blue' valor={valor} title={title} selectTab={selectTab} />
      break  
      default:
        return <Button handleTabClick={handleTabClick}  color='bg-azure' valor={valor} title={title} selectTab={selectTab} />
      break  
   }
}

export default ButtonSelect