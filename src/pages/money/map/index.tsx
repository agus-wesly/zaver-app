import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useLocation, useNavigate } from 'react-router-dom'

import { ROUTE_NAVIGATION_LIST } from '../constant'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CalendarIcon } from 'lucide-react'

export function Component() {
  const navigate = useNavigate()
  const location = useLocation()
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <>
      <div className="flex justify-between">
        <Select
          value={location.pathname}
          onValueChange={(val) => navigate(val)}
        >
          <SelectTrigger className="w-fit gap-4 px-4 font-medium">
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

        <Popover>
          <PopoverTrigger asChild>
            <Button variant={'outline'}>
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="center">
            <Calendar mode="single" initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex-1 h-full overflow-y-scroll">
        <div>Content</div>
      </div>
    </>
  )
}
