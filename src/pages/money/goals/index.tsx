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

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { ROUTE_NAVIGATION_LIST } from '../constant'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { CalendarIcon, ChevronRight } from 'lucide-react'
import { OppurtunityCard } from '@/components/shared/oppurtunity-card'

export function Component() {
  const navigate = useNavigate()
  const location = useLocation()
  // const [date, setDate] = useState<Date | undefined>(new Date())

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

      <div className="flex-1 overflow-auto h-full w-full mt-8">
        <Tabs defaultValue="weekly" className="h-full">
          <TabsList className="w-full bg-background flex justify-between sticky top-0 z-[2]">
            <TabsTrigger className="flex-1 bg-background" value="weekly">
              Weekly
            </TabsTrigger>
            <TabsTrigger className="flex-1 bg-background" value="daily">
              Daily
            </TabsTrigger>
          </TabsList>
          <TabsContent value="weekly">
            <GoalsSection />
          </TabsContent>
          <TabsContent value="daily">
            <GoalsSection />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

function GoalsSection() {
  return (
    <div className="bg-muted p-4 h-full">
      <div className="flex flex-col items-center bg-background shadow-sm py-10 px-4 rounded gap-6 text-muted-foreground">
        <h3 className="text-xl font-bold">No data available yet</h3>
        <p className="text-center">
          Connect your delivery apps or log income manually to see smart
          insights.
        </p>

        <Button>Connect Apps</Button>
      </div>

      <div>
        <div className="flex justify-between my-4 text-sm ">
          <p className="font-medium">Oppurtunities</p>

          <Link to="/oppurtunities" className="text-primary font-medium">
            View All
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <OppurtunityCard />
          <OppurtunityCard />
          <OppurtunityCard />
          <OppurtunityCard />

          <article className="bg-[#2e3964] flex justify-between text-background items-center text-xs p-3 gap-4">
            <div className="flex gap-2 items-center">
              <img src="/diamond.svg" alt="diamond" className="size-8" />

              <p className="font-medium">
                Get the best deals and rewards in oppurtunities page{' '}
              </p>
            </div>

            <Button className="bg-background text-foreground text-xs h-fit hover:bg-background">
              View
            </Button>
          </article>
        </div>
      </div>
    </div>
  )
}
