import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import { Bike, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function Component() {
  return (
    <div className="px-4 pt-5 h-screen overflow-y-auto flex flex-col gap-6">
      <div className="flex justify-between items-center gap-2">
        <div className="flex gap-4 items-center w-full overflow-x-hidden">
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex-none">
                <img
                  className="size-[70px] object-contain"
                  src="https://beta.zaver.app/api/v1/public/user.png "
                />
              </button>
            </DialogTrigger>
            <DialogContent>Tes</DialogContent>
          </Dialog>

          <div className="flex flex-col gap-1 w-[70%]">
            <p className="text-2xl font-bold">Bruce Wayne</p>

            <p className="text-xs text-muted-foreground pr-2 truncate max-w-full">
              brucewaynetest123@gmail.comm
            </p>

            <p className="text-xs flex gap-2 items-center">
              <Bike className="size-4" />
              <span>E-bike</span>
            </p>
          </div>
        </div>

        <Button className="bg-[#f5d8cd] text-primary font-semibold shadow-none hover:bg-[#f5d8cd]">
          Edit
        </Button>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-semibold">Connected Apps</p>
        <p className="text-muted-foreground text-sm">
          Select which app to suggest insight for
        </p>

        <Link
          to={'/providers'}
          className="my-7 flex gap-3 self-center text-primary font-semibold"
        >
          <Plus />

          <span>Connect Apps</span>
        </Link>

        <button className="self-start text-primary text-sm font-medium">
          Sign Out
        </button>
      </div>
    </div>
  )
}
