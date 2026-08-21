import { createLazyFileRoute } from '@tanstack/react-router'
import { planentInfo } from '../shared/constants/Planets'
import CommunLayout from '../components/Layout/CommunLayout'

export const Route = createLazyFileRoute('/Neptune')({
  component: RouteComponent,
})

function RouteComponent() {
     const {Neptune} = planentInfo
      return <CommunLayout data={Neptune} />
}
