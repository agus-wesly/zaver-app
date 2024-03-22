import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'

import { Button } from '@/components/ui/button'
import { useLocation, useNavigate } from 'react-router-dom'
import { Camera, Plus, X } from 'lucide-react'

import { ROUTE_NAVIGATION_LIST } from '../constant'
import { useState } from 'react'

export function Component() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  function toggleDrawer() {
    setIsOpenDrawer((prev) => !prev)
  }

  return (
    <>
      <div className="flex justify-between items-center px-4">
        <Select
          value={location.pathname}
          onValueChange={(val) => navigate(val)}
        >
          <SelectTrigger className="w-fit">
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

        <Button onClick={toggleDrawer} variant="ghost">
          <Plus />
        </Button>
      </div>

      <div className="flex-1 px-6 overflow-auto h-full w-full mt-8 flex flex-col items-center justify-center gap-3">
        <h2 className="text-lg font-bold text-neutral-600">
          Ready to get financially smarter ?
        </h2>

        <p className="text-center text-sm text-muted-foreground">
          Track your expenses to receive personalized money-saving strategies
          and discover the best deals for you
        </p>

        <Button
          onClick={toggleDrawer}
          className="bg-[#f5d8cd] text-primary font-semibold shadow-none"
        >
          Log expense
        </Button>
      </div>

      <DrawerExpenses open={isOpenDrawer} setOpen={setIsOpenDrawer} />
    </>
  )
}

function DrawerExpenses({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (val: boolean) => void
}) {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="p-4">
        <DrawerHeader className="text-center">
          <DrawerTitle>Log Expenses</DrawerTitle>

          <DrawerClose asChild>
            <button className="absolute right-0 top-0 p-3">
              <X className="size-5" />
            </button>
          </DrawerClose>
        </DrawerHeader>

        <Button
          className="gap-4 text-secondary-foreground"
          variant={'secondary'}
        >
          <Camera />
          Scan expense receipt
        </Button>
      </DrawerContent>
    </Drawer>
  )
}
