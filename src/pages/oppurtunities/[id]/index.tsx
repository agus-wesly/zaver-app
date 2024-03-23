import { Button } from '@/components/ui/button'
import { ArrowLeft, Share2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function Component() {
  const navigate = useNavigate()

  return (
    <>
      <div className="px-4 h-screen overflow-y-auto flex flex-col gap-4 pb-6">
        <header className="flex justify-between items-center sticky top-0 bg-white pb-3">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>
          <p className="text-sm font-semibold">
            Cashzine - Earn money from reward
          </p>

          <button>
            <Share2 />
          </button>
        </header>

        <img
          className="w-full object-cover"
          src="https://storage.googleapis.com/zaver-prod/opportunities-banners/1708645650781-Cashzine.png"
        />

        <div className="text-neutral-800 space-y-3">
          <h2 className="border-black border-b-2 border-dashed text-xl font-semibold pb-3">
            Earn cash while you wait with Cashzine
          </h2>

          <p className="text-xs">
            Read novels you love, play quick games and{' '}
            <strong> convert your rewards into real cash</strong> through Paypal
            or GCash
          </p>
        </div>

        <ul>
          <li>
            <strong>Earn cash rewards</strong> just for reading novels you enjoy
          </li>
          <li>
            <strong>Quick and easy to use</strong> - start earning in minutes
          </li>
          <li>
            <strong>Play fun-mini games</strong> during breaks to boost your
            earnings.
          </li>
        </ul>

        <p className="font-semibold text-xs mt-2">
          Don't wait ! Download Cashzine today and start earning extra cash you
          deliver
        </p>
      </div>

      <div className="border border-t flex justify-between p-2 rounded gap-6 items-center">
        <div className="space-y-1">
          <p className="text-xs text-primary font-medium">The oppurtunity</p>

          <div className="py-1 px-3 w-fit bg-muted rounded-full text-xs font-medium">
            💰 Increase Earnings
          </div>
        </div>

        <Button className="flex-1 py-5 font-semibold">Cashzine</Button>
      </div>
    </>
  )
}
