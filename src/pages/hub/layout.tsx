import { Outlet } from 'react-router-dom'

export function Component() {
  return (
    <div className="px-4 h-screen overflow-y-auto">
      <Outlet />
    </div>
  )
}
