import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { useNavigate } from 'react-router-dom'
import { ROUTE_NAVIGATION_LIST, initialRangeValue } from '../constant'
import { CalendarDaily, CalendarWeekly } from '../components/calendar'
import { DateRange } from 'react-day-picker'
import { useState } from 'react'

export function Component() {
  const navigate = useNavigate()

  const [rangeSelectedDate, setRangeSelectedDate] = useState<
    DateRange | undefined
  >(initialRangeValue)
  const [singleSelectedDate, setSingleSelectedDate] = useState<
    Date | undefined
  >(new Date())

  const [mode, setMode] = useState('weekly')

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

        {mode === 'weekly' ? (
          <CalendarWeekly
            range={rangeSelectedDate}
            setRange={setRangeSelectedDate}
          />
        ) : (
          <CalendarDaily
            date={singleSelectedDate}
            setDate={setSingleSelectedDate}
          />
        )}
      </div>

      <div className="flex-1 overflow-auto h-full w-full mt-8">
        <Tabs value={mode} onValueChange={setMode} className="h-full">
          <TabsList className="w-full bg-background flex justify-between sticky top-0 z-[2]">
            <TabsTrigger className="flex-1 bg-background" value="weekly">
              Weekly
            </TabsTrigger>
            <TabsTrigger className="flex-1 bg-background" value="daily">
              Daily
            </TabsTrigger>
          </TabsList>
          <TabsContent value="weekly">
            <WeeklySection />
          </TabsContent>
          <TabsContent value="daily">
            <DailySection />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

function WeeklySection() {
  return (
    <div className="p-6 h-full flex flex-col gap-5 items-center">
      <div className="flex justify-between items-center w-full">
        <article className="flex flex-col gap-3">
          <p className="text-2xl font-bold text-neutral-700">Rp0.00</p>
          <p className="text-[10px] text-muted-foreground">
            Daily average earning
          </p>
        </article>

        <article className="flex flex-col gap-3">
          <p className="text-2xl font-bold text-neutral-700">Rp0.00</p>
          <p className="text-[10px] text-muted-foreground">Total income</p>
        </article>
      </div>

      <img src="/bar.svg" className="size-[300px]" />

      <p className="text-center text-sm font-medium text-neutral-700 my-3">
        Your data will be all set and ready to go when you check back by end of
        the week. ☺️
      </p>
    </div>
  )
}

function DailySection() {
  return (
    <div className="p-6 h-full flex flex-col gap-5 items-center">
      <div className="flex justify-between items-center w-full">
        <article className="flex flex-col gap-3">
          <p className="text-2xl font-bold text-neutral-700">Rp0.00</p>
          <p className="text-[10px] text-muted-foreground">
            Daily average earning
          </p>
        </article>

        <article className="flex flex-col gap-3">
          <p className="text-2xl font-bold text-neutral-700">Rp0.00</p>
          <p className="text-[10px] text-muted-foreground">Total income</p>
        </article>
      </div>

      <img src="/bar.svg" className="size-[300px]" />

      <p className="text-center text-sm font-medium text-neutral-700 my-3">
        Your data will be all set and ready to go when you check back by end of
        the week. ☺️
      </p>
    </div>
  )
}
