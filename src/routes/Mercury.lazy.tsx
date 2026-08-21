import { createLazyFileRoute } from '@tanstack/react-router'
import { planentInfo } from '../shared/constants/Planets'
import CommunLayout from '../components/Layout/CommunLayout'

export const Route = createLazyFileRoute('/Mercury')({
  component: RouteComponent,
})

function RouteComponent() {
     const {Mercury} = planentInfo
      return <CommunLayout data={Mercury} />
}
