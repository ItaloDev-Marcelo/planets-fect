import type { buttonProps } from '../components/Button'
import Button from '../components/Button'
const ButtonSelect = ({name,valor,handleTabClick,selectTab}:buttonProps) => {
   switch(name) {
      case  'Mercury':
        return <Button handleTabClick={handleTabClick}  color='bg-red-400' valor={valor} selectTab={selectTab} />
      break  
      case  'Venus':
        return <Button handleTabClick={handleTabClick}  color='bg-red-400' valor={valor} selectTab={selectTab} />
      break  
      case  'Earth':
        return <Button handleTabClick={handleTabClick}  color='bg-red-400' valor={valor} selectTab={selectTab} />
      break  
      case  'Mars':
        return <Button handleTabClick={handleTabClick}  color='bg-red-400' valor={valor} selectTab={selectTab} />
      break  
      case  'Jupiter':
        return <Button handleTabClick={handleTabClick}  color='bg-red-400' valor={valor} selectTab={selectTab} />
      break  
      case  'Saturn':
        return <Button handleTabClick={handleTabClick}  color='bg-red-400' valor={valor} selectTab={selectTab} />
      break  
      case  'Uranus':
        return <Button handleTabClick={handleTabClick}  color='bg-red-400' valor={valor} selectTab={selectTab} />
      break  
      case  'Neptune':
        return <Button handleTabClick={handleTabClick}  color='bg-red-400' valor={valor} selectTab={selectTab} />
      break  
      default:
        return <Button handleTabClick={handleTabClick}  color={'bg-gray-300'} valor={valor} selectTab={selectTab} />
      break  
   }
}

export default ButtonSelect