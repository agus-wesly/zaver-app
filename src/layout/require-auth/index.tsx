import {
  CircleUser,
  Gauge,
  MessageCircle,
  ShoppingBag,
  Users,
} from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RequireAuthLayout() {
  return (
    <>
      <Outlet />

      <Navbar />
    </>
  )
}

// <main className="flex flex-col items-center justify-center flex-1 bg-red-200">
//  <Outlet />
// </main>

export function Navbar() {
  return (
    <nav className="sticky bottom-0 flex justify-between items-center px-3 bg-background">
      <NavLink
        className={({ isActive }) =>
          `text-xs flex flex-col items-center gap-2 mt-2 ${isActive ? 'text-foreground' : 'text-muted-foreground opacity-70'}`
        }
        to="/money"
      >
        <Gauge />
        <p>My money</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `text-xs flex flex-col items-center gap-2 mt-2 ${isActive ? 'text-foreground' : 'text-muted-foreground opacity-70'}`
        }
        to="/hub"
      >
        <Users />
        <p>Hub</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `text-xs flex flex-col items-center gap-2 mt-2 ${isActive ? 'text-foreground' : 'text-muted-foreground opacity-70'}`
        }
        to="/chat"
      >
        <div className="rounded-full bg-[#33b09b] p-2">
          <MessageCircle className="text-background" />
        </div>
        <p>Chat</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `text-xs flex flex-col items-center gap-2 mt-2 ${isActive ? 'text-foreground' : 'text-muted-foreground opacity-70'}`
        }
        to="/oppurtunities"
      >
        <ShoppingBag />
        <p>Oppurtunities</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `text-xs flex flex-col items-center gap-2 mt-2 ${isActive ? 'text-foreground' : 'text-muted-foreground opacity-70'}`
        }
        to="/profile"
      >
        <CircleUser />
        <p>You</p>
      </NavLink>
    </nav>
  )
}
