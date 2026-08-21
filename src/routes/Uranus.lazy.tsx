import { createLazyFileRoute } from '@tanstack/react-router'
import { planentInfo } from '../shared/constants/Planets'
import CommunLayout from '../components/Layout/CommunLayout'

export const Route = createLazyFileRoute('/Uranus')({
  component: RouteComponent,
})

function RouteComponent() {
    const {Uranus} = planentInfo
     return <CommunLayout data={Uranus} />
}
