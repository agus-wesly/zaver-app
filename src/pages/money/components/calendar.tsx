import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Calendar } from '@/components/ui/calendar'

import { CalendarIcon } from 'lucide-react'
import { DateRange, DayClickEventHandler } from 'react-day-picker'
import { Dispatch } from 'react'
import { endOfWeek, format, startOfWeek } from 'date-fns'
import { initialRangeValue } from '../constant'
import { Button } from '@/components/ui/button'

export function CalendarWeekly({
  range,
  setRange,
}: {
  range: DateRange | undefined
  setRange: Dispatch<React.SetStateAction<DateRange | undefined>>
}) {
  let formattedFromDate = ''
  let formattedToDate = ''

  if (range?.from && range.to) {
    formattedFromDate = format(range.from!, 'd MMM')
    formattedToDate = format(range.to!, 'd MMM')
  }

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    if (modifiers.selected) {
      setRange(initialRangeValue)
    }
    const beginningDate = startOfWeek(day)
    const endDate = endOfWeek(day)

    setRange({
      from: beginningDate,
      to: endDate,
    })
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-[125px]" variant={'outline'}>
          {range ? (
            <span>
              {formattedFromDate} - {formattedToDate}
            </span>
          ) : (
            <CalendarIcon className="size-4" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          mode="range"
          initialFocus
          selected={range}
          onDayClick={handleDayClick}
        />
      </PopoverContent>
    </Popover>
  )
}

export function CalendarDaily({
  date,
  setDate,
}: {
  date: Date | undefined
  setDate: Dispatch<React.SetStateAction<Date | undefined>>
}) {
  let formattedDate
  if (date) {
    formattedDate = format(date, 'd MMM')
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-[125px]" variant={'outline'}>
          {date ? (
            <span>{formattedDate}</span>
          ) : (
            <CalendarIcon className="size-4" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          mode="single"
          initialFocus
          selected={date}
          onSelect={setDate}
        />
      </PopoverContent>
    </Popover>
  )
}
