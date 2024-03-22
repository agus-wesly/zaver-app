import { Outlet } from 'react-router-dom'

export function Component() {
  return (
    <div className="px-4 min-h-screen">
      <Outlet />
    </div>
  )
}
