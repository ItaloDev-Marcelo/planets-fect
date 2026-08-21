import { createLazyFileRoute } from '@tanstack/react-router'
import { planentInfo } from '../shared/constants/Planets'
import CommunLayout from '../components/Layout/CommunLayout'

export const Route = createLazyFileRoute('/Mars')({
  component: RouteComponent,
})

function RouteComponent() {
    const {Mars} = planentInfo
    return <CommunLayout data={Mars} />
}
