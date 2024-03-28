import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'

import { useNavigate } from 'react-router-dom'
import { ROUTE_NAVIGATION_LIST } from '../constant'
import { ArrowRight, ListFilter } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

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

        <FilterDateModal />
      </div>

      <div className="flex-1 px-6 overflow-auto h-full w-full mt-8 flex flex-col items-center justify-center gap-3">
        <h2 className="text-xl font-bold text-neutral-600">
          No data available yet.
        </h2>

        <p className="text-center text-muted-foreground">
          Connect your delivery apps or log income manually to see smart
          insights.
        </p>

        <Button className="bg-[#f5d8cd] text-primary font-semibold shadow-none hover:bg-[#f5d8cd] ">
          Connect Apps
        </Button>
      </div>
    </>
  )
}

const FILTER_RANGE = [
  {
    value: null,
    text: 'All Time',
  },
  {
    value: 'd',
    text: 'Day',
  },
  {
    value: 'w',
    text: 'Week',
  },
  {
    value: 'm',
    text: 'Month',
  },
  {
    value: 'y',
    text: 'Year',
  },
] as const

function FilterDateModal() {
  const [selectedRange, setSelectedRange] = useState<
    null | 'd' | 'w' | 'm' | 'y'
  >(null)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative">
          <ListFilter className="size-5" />

          {selectedRange ? (
            <span className="absolute bg-red-500 rounded-full flex justify-center items-center text-[14px] w-5 h-5 text-destructive-foreground -top-3 -right-2 pb-1">
              {selectedRange}
            </span>
          ) : null}
        </button>
      </DialogTrigger>
      <DialogContent className="w-[90%] max-w-[400px] rounded-lg">
        <DialogHeader>
          <DialogTitle>Select date range</DialogTitle>
        </DialogHeader>

        <div className="flex justify-between gap-1">
          {FILTER_RANGE.map((item) => (
            <Button
              onClick={() => setSelectedRange(item.value)}
              className={cn('w-fit p-2 rounded-full font-medium', {
                'bg-accent text-primary': item.value === selectedRange,
              })}
              key={item.value}
              variant="secondary"
            >
              {item.text}
            </Button>
          ))}
        </div>

        <fieldset
          disabled={!selectedRange}
          className="flex justify-between items-center gap-1 disabled:cursor-not-allowed"
        >
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex-1 border py-2 rounded text-primary text-sm font-semibold disabled:cursor-not-allowed disabled:text-muted-foreground">
                2024-03-20
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                disabled={(date) =>
                  date > new Date() || date < new Date('1900-01-01')
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <ArrowRight className="size-4" />

          <Popover>
            <PopoverTrigger asChild>
              <button className="flex-1 border py-2 rounded text-primary text-sm font-semibold disabled:cursor-not-allowed disabled:text-muted-foreground">
                2024-03-20
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                disabled={(date) =>
                  date > new Date() || date < new Date('1900-01-01')
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </fieldset>

        <div className="flex flex-col w-full gap-2">
          <Button className="py-6 font-semibold">Select Date</Button>
          <Button className="py-6 font-semibold" variant="secondary">
            Clear filter
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
