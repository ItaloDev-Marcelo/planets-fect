import { createLazyFileRoute } from '@tanstack/react-router'
import { planentInfo } from '../shared/constants/Planets'
import CommunLayout from '../components/Layout/CommunLayout'

export const Route = createLazyFileRoute('/Venus')({
  component: RouteComponent,
})

function RouteComponent() {
     const {Venus} = planentInfo
      return <CommunLayout data={Venus} />
}
