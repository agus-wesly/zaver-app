import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Bookmark,
  MessageCircleMore,
  PencilIcon,
  Pin,
  ThumbsUp,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const TOPIC = [
  'All',
  'Benefits',
  'Deals',
  'IncreaseEarnings',
  'Tips',
  'Questions',
  'Bicycle',
  'Motorbike',
  'E-bike',
] as const

export function Component() {
  const activeTopic = 'All'

  return (
    <div className="w-full flex flex-col gap-3 h-full">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-semibold">Hub</h1>

        <Link to="bookmark">
          <Bookmark
            fill="hsl(17.01 96.17% 40.98%)"
            className="text-transparent"
          />
        </Link>
      </div>

      <ul className="flex gap-3 items-center w-full overflow-x-auto py-2 overflow-y-hidden">
        {TOPIC.map((item) => (
          <li key={item}>
            <Button
              variant={'secondary'}
              className={cn('h-min p-2 rounded-full font-medium', {
                'bg-ternary text-ternary-foreground': activeTopic === item,
              })}
            >
              #{item}
            </Button>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-4 h-full overflow-y-scroll pb-4">
        <HubCard />
        <HubCard />
        <HubCard />
        <HubCard />
        <HubCard />
        <HubCard />
        <HubCard />
      </div>

      <Link
        to={'create'}
        className="rounded-full bg-primary flex items-center justify-center text-background p-0 fixed bottom-24 right-4 size-14 shadow-sm"
      >
        <PencilIcon />
      </Link>
    </div>
  )
}

function HubCard() {
  const tags = ['Benefits', 'IncreaseEarnings']
  const thumbnail =
    'https://storage.googleapis.com/zaver-prod/1705919953670-Competition (1).png'
  const authorProfile =
    'https://storage.googleapis.com/zaver-prod/1702535438887-4553ced7-9710-4b82-be23-1af4d834d653.jpeg'

  return (
    <article className="border rounded-xl p-3 flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="flex gap-3 flex-1 items-center">
          <img
            src={authorProfile}
            className="size-8 object-cover rounded-full"
          />

          <div className="flex flex-col gap-1">
            <p className="text-sm">Zaver</p>

            <p className="text-xs text-muted-foreground">
              23 Feb 2024 • Metro Manila
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <button>
            <Pin fill="#000" className="size-4" />
          </button>
          <button>
            <Bookmark className="text-muted-foreground size-4" />
          </button>
        </div>
      </div>

      {thumbnail ? (
        <img src={thumbnail} className="w-full h-[250px] object-cover" />
      ) : null}

      <p className="line-clamp-3 text-sm text-neutral-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda
        odio vero veritatis earum voluptates totam quas voluptatibus aliquid
        architecto?
      </p>

      <div className="flex justify-between">
        <div className="flex gap-6">
          <div className="flex gap-2 items-center text-muted-foreground">
            <button>
              <ThumbsUp className="size-5" />
            </button>
            <p className="text-xs">2</p>
          </div>

          <div className="flex gap-2 items-center text-muted-foreground">
            <button>
              <MessageCircleMore className="size-5" />
            </button>
            <p>0</p>
          </div>
        </div>

        {tags.map((tag) => (
          <Button
            variant={'secondary'}
            className={cn('h-min p-1 text-xs rounded-full font-medium')}
          >
            #{tag}
          </Button>
        ))}
      </div>
    </article>
  )
}
