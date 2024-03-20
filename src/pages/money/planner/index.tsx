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

import { Button } from '@/components/ui/button'
import { ROUTE_NAVIGATION_LIST } from '../constant'
import { useNavigate } from 'react-router-dom'
import { CalendarIcon, RotateCw } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'

export function Component() {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex justify-between items-center px-4">
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

      <div className="flex-1 bg-muted overflow-auto h-full w-full mt-8">
        <div className="flex flex-col gap-2 bg-background px-4">
          <p className="text-xs text-muted-foreground">Potential earnings</p>

          <div className="text-3xl bg-muted p-4 rounded-xl">
            <p className="font-bold text-neutral-700">Rp 0,000.00</p>
          </div>

          <div className="w-full overflow-x-auto snap-x snap-always flex gap-6 py-2">
            <DateListItem />
            <DateListItem />
            <DateListItem active />
            <DateListItem />
            <DateListItem />
            <DateListItem />
            <DateListItem />
            <DateListItem />
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Today's target</p>

            <div className="flex justify-between py-3 gap-4">
              <div className="bg-muted flex flex-col p-2 rounded-xl text-muted-foreground flex-1">
                <p className="font-bold">0.00</p>

                <p className="text-[10px]">Hours worked</p>
              </div>

              <div className="bg-muted flex flex-col p-2 rounded-xl text-muted-foreground flex-1">
                <p className="font-bold">0</p>

                <p className="text-[10px]">Orders to deliver</p>
              </div>

              <div className="bg-muted flex flex-col p-2 rounded-xl text-muted-foreground flex-1">
                <p className="font-bold">Rp. 0.00</p>

                <p className="text-[10px]">To earn</p>
              </div>
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          className="flex gap-2 text-primary font-semibold text-base text-center mx-auto h-fit my-5 hover:bg-primary"
        >
          <RotateCw className="size-4" />
          Show new plan
        </Button>
      </div>
    </>
  )
}

function DateListItem({ active = false }: { active?: boolean }) {
  return (
    <button
      className={cn(
        'flex flex-col gap-1 font-semibold text-muted-foreground px-3 pb-2 snap-center opacity-70',
        {
          'border-b-2 border-b-primary text-primary font-extrabold': active,
        },
      )}
    >
      <span>Fri</span>
      <span>22</span>
    </button>
  )
}
