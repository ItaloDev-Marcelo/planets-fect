import { createFileRoute } from '@tanstack/react-router'
import { planentInfo } from '../shared/constants/Planets'
import CommunLayout from '../components/Layout/CommunLayout'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
    const {Earth} = planentInfo
    return <CommunLayout data={Earth} />
}
