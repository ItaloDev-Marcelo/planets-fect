import { createLazyFileRoute } from '@tanstack/react-router'
import { planentInfo } from '../shared/constants/Planets'
import CommunLayout from '../components/Layout/CommunLayout'

export const Route = createLazyFileRoute('/Jupiter')({
  component: RouteComponent,
})

function RouteComponent() {
    const {Jupiter} = planentInfo
  return  <CommunLayout data={Jupiter} />
}
