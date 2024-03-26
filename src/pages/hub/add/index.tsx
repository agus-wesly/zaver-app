import { Button } from '@/components/ui/button'
import { ArrowLeft, MapPin, Plus, Tag, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { cn } from '@/lib/utils'

const TAGS = [
  'Benefits',
  'Deals',
  'IncreaseEarnings',
  'Tips',
  'Questions',
  'Bicycle',
  'MotorBike',
  'E-Bike',
]

export function Component() {
  const navigate = useNavigate()

  return (
    <div className="px-4 h-screen overflow-y-auto">
      <div className="flex justify-between items-center w-[60%]">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="size-5" />
        </button>

        <p className="text-lg font-semibold">New Post</p>
      </div>

      <form className="flex flex-col gap-4 py-4 h-full">
        <Button
          type="button"
          variant={'outline'}
          className="self-start size-16 p-0 rounded-xl shadow-none hover:text-foreground"
        >
          <Plus className="size-8" />
        </Button>

        <textarea
          placeholder="What Do You Want To Talk About ?"
          className="border rounded-lg min-h-[251px] resize-none p-4"
        ></textarea>

        <button type="button" className="flex gap-4 items-center self-start">
          <MapPin className="size-5 text-muted-foreground" />

          <span className="text-neutral-800 text-sm">Add Location</span>
        </button>

        <DrawerTags />

        <Button className="py-6 font-bold mt-auto mb-6">Post</Button>
      </form>
    </div>
  )
}

function DrawerTags() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button type="button" className="flex gap-4 items-center self-start">
          <Tag className="size-5 text-muted-foreground" />

          <span className="text-neutral-800 text-sm">Add Tags</span>
        </button>
      </DrawerTrigger>
      <DrawerContent className="p-2 py-4">
        <DrawerHeader className="text-center">
          <DrawerTitle>Manage Tags</DrawerTitle>

          <DrawerClose asChild>
            <button className="absolute right-0 top-0 p-3">
              <X className="size-5" />
            </button>
          </DrawerClose>
        </DrawerHeader>

        <div className="flex flex-wrap gap-3">
          {TAGS.map((tag) => (
            <Button
              key={tag}
              variant="secondary"
              className={cn('rounded-full', {
                'bg-ternary text-ternary-foreground hover:bg-ternary':
                  tag === 'Deals',
              })}
            >
              #{tag}
            </Button>
          ))}
        </div>

        <div className="flex justify-between gap-8 pt-5">
          <Button
            className="flex-1 py-6 hover:text-inherit"
            variant={'outline'}
          >
            Clear All
          </Button>
          <Button className="flex-1 py-6">Apply</Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
