import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useLocation, useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react'

import { ROUTE_NAVIGATION_LIST } from '../constant'

export function Component() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <div className="flex justify-between">
        <Select
          value={location.pathname}
          onValueChange={(val) => navigate(val)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Money Map" />
          </SelectTrigger>
          <SelectContent>
            {ROUTE_NAVIGATION_LIST.map((itm) => (
              <SelectItem key={itm.url} value={itm.url}>
                <p>{itm.title}</p>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button variant="ghost">
          <Plus />
        </Button>
      </div>

      <div className="flex-1 h-full overflow-y-scroll">
        <div>Content</div>
      </div>
    </>
  )
}
