import { ArrowLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Bookmark, MessageCircleMore, Pin, ThumbsUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Component() {
  const navigate = useNavigate()

  const tags = ['Benefits', 'IncreaseEarnings']
  const thumbnail =
    'https://storage.googleapis.com/zaver-prod/1705919953670-Competition (1).png'
  const authorProfile =
    'https://storage.googleapis.com/zaver-prod/1702535438887-4553ced7-9710-4b82-be23-1af4d834d653.jpeg'

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex justify-between items-center w-[55%]">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="size-5" />
        </button>

        <p className="text-lg font-semibold">Post</p>
      </div>

      <article className="rounded-xl p-3 flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex gap-3 flex-1 items-center relative z-[3]">
            <img
              src={authorProfile}
              className="size-8 object-cover rounded-full cursor-pointer"
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

        <p className="text-sm text-neutral-700 justify-evenly">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          assumenda odio vero veritatis earum voluptates totam quas voluptatibus
          aliquid architecto? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Optio assumenda odio vero veritatis earum voluptates totam quas
          voluptatibus aliquid architecto? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Optio assumenda odio vero veritatis
          earum voluptates totam quas voluptatibus aliquid architecto?
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

      <ul className="flex flex-col gap-2 pb-3">
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </ul>
    </div>
  )
}

function CommentCard() {
  return (
    <li className="w-full p-3 bg-muted rounded-xl flex justify-between text-sm gap-3 text-muted-foreground">
      <img
        src="https://beta.zaver.app/api/v1/public/user.png"
        className="size-8 object-cover"
      />

      <div className="flex flex-col gap-1">
        <p>Dev New Guinea Freshwater Crocodile</p>

        <p className="text-foreground font-medium">Salamat Zaver</p>
      </div>

      <p>23 Feb 2024</p>

      <button>
        <ChevronRight />
      </button>
    </li>
  )
}
