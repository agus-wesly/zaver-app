import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function OppurtunityCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'bg-background flex justify-between items-center relative p-3 rounded gap-4',
        className,
      )}
    >
      <img
        src="https://storage.googleapis.com/zaver-prod/opportunities-logos/1708645650784-Cashzine logo.png"
        className="size-14 flex-none"
      />

      <div className="w-full flex flex-col">
        <p className="text-primary font-medium text-sm line-clamp-1">
          Cashzine - Earn money reward
        </p>
        <p className="text-xs font-medium text-muted-foreground line-clamp-1 w-full">
          Earn cash while you wait with Cashzine!
        </p>

        <div className="mt-3 py-1 px-3 w-fit bg-muted rounded-full text-xs font-medium">
          💰 Increase Earnings
        </div>
      </div>

      <ChevronRight className="text-muted-foreground size-5 flex-none" />

      <Link
        className="absolute inset-0 w-full h-full"
        to={`/oppurtunities/2`}
      />
    </div>
  )
}
