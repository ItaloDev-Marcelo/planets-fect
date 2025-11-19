import EarthloadingPage from '../pages/Earth.loadingPage'
import MercuryloadingPage from '../pages/Mercury.loadingPage'
import VenusloadingPage from '../pages/Venus.loadingPage'
import MarsloadingPage from '../pages/Mars.loadingPage'
import JupiterloadingPage from '../pages/Jupiter.loadingPage'
import SaturnloadingPage from '../pages/Saturn.loadingPage'
import UranusloadingPage from '../pages/Uranus.loadingPage'
import NeptuneloadingPage from '../pages/Neptune.loadingPage'

export const RoutesList = [
    {
        path: '/Mercury',
        element: <MercuryloadingPage />,
    },
    {
        path: '/Venus',
        element: <VenusloadingPage />,
    },
     {
        path: '/',
        element: <EarthloadingPage />,
    },
    {
        path: '/Mars',
        element: <MarsloadingPage />,
    },
    {
        path: '/Jupiter',
        element: <JupiterloadingPage />,
    },
    {
        path: '/Saturn',
        element: <SaturnloadingPage />,
    },
    {
        path: '/Uranus',
        element: <UranusloadingPage />,
    },
    {
        path: '/Neptune',
        element: <NeptuneloadingPage />
    }
]