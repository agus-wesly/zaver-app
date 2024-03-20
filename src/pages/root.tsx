import { AlertTriangle, Loader } from 'lucide-react'
import { Link, Outlet, ScrollRestoration } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import useRefreshToken from '@/features/auth/use-refresh-token'
import { useAuth } from '@/features/auth/use-auth'
import { Navbar } from '@/layout/require-auth'

function RootLayout() {
  const [isLoadingApp, setIsLoadingApp] = useState(false)
  const { refresh } = useRefreshToken()
  const user = useAuth((state) => state.user)

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh()
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoadingApp(false)
      }
    }
    !user ? verifyRefreshToken() : setIsLoadingApp(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {isLoadingApp ? (
        <LoadingAppComponent />
      ) : (
        <main className="max-w-[425px] flex flex-col mx-auto pt-5 h-screen">
          <Outlet />
        </main>
      )}

      <ScrollRestoration
        getKey={(location) => {
          return location.pathname
        }}
      />
    </>
  )
}

function LoadingAppComponent() {
  return (
    <div className="min-h-[80vh] md:min-h-screen container flex items-center justify-center">
      <Loader className="w-8 h-8 animate-spin text-primary" />
    </div>
  )
}

export default RootLayout

export function ErrorBoundary() {
  return (
    <main className="max-w-[425px] flex flex-col mx-auto py-5 h-full min-h-screen">
      <div className="container flex-1 flex justify-center pt-36 ">
        <div className="flex flex-col items-center">
          <AlertTriangle className="text-neutral-800 size-16" />
          <h1 className="text-xl md:text-3xl font-semibold text-foreground mt-2">
            Oopsss....
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Application error! Please try again later
          </p>

          <Link
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'mt-5 rounded-full',
            )}
            to={'/'}
          >
            Back to home
          </Link>
        </div>
      </div>

      <Navbar />
    </main>
  )
}
