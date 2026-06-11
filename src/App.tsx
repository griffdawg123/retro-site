import { Outlet, useRouterState } from '@tanstack/react-router'
import Sidebar from './components/Sidebar'

export default function App() {
  const { location } = useRouterState()
  const isHome = location.pathname === '/'

  return (
    <>
      {!isHome && <Sidebar />}
      <main style={{ marginLeft: isHome ? 0 : '60px' }}>
        <Outlet />
      </main>
    </>
  )
}
