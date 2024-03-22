import { Outlet } from 'react-router-dom'

export default function RequireAuthLayout() {
  return <Outlet />
}

// <main className="flex flex-col items-center justify-center flex-1 bg-red-200">
//  <Outlet />
// </main>
