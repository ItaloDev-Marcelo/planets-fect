import { createLazyFileRoute } from '@tanstack/react-router'
import { planentInfo } from '../shared/constants/Planets'
import CommunLayout from '../components/Layout/CommunLayout'

export const Route = createLazyFileRoute('/Saturn')({
  component: RouteComponent,
})

function RouteComponent() {
     const {Saturn} = planentInfo
      return <CommunLayout data={Saturn} />
}
