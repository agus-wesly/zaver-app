import { Button } from '@/components/ui/button'
import { ArrowLeft, CircleHelp, Database, Shield, X } from 'lucide-react'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Link, useNavigate } from 'react-router-dom'

export function Component() {
  const navigate = useNavigate()

  return (
    <div className="px-4 pt-5 h-screen overflow-y-auto flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>

        <p className="font-semibold">Connect Apps</p>

        <Link to={'/privacy-policy'}>
          <CircleHelp />
        </Link>
      </div>

      <ul className="flex flex-col gap-2">
        <ConnectAppCard />
        <ConnectAppCard />
        <ConnectAppCard />
        <ConnectAppCard />

        <h3 className="font-semibold">Comming Soon</h3>
        <ConnectAppCard commingSoon />
        <ConnectAppCard commingSoon />
        <ConnectAppCard commingSoon />
        <ConnectAppCard commingSoon />
      </ul>
    </div>
  )
}

function ConnectAppCard({ commingSoon = false }: { commingSoon?: boolean }) {
  return (
    <>
      <li className="flex justify-between items-center bg-muted p-2 py-3 rounded-xl">
        <div className="flex gap-2 items-center">
          <img
            className="size-9 flex-none"
            src="https://zaver.app/assets/Uber-81cc51c6.svg"
          />
          <p className="font-medium">Uber</p>
        </div>

        {commingSoon ? (
          <p className="text-muted-foreground font-bold text-sm">
            Comming Soon
          </p>
        ) : (
          <>
            <Drawer snapPoints={['666px', 1]}>
              <DrawerTrigger asChild>
                <Button className="h-fit py-1 px-3 font-semibold">
                  Connect
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-w-[425px] mx-auto px-3">
                <DrawerHeader className="m-0 text-center flex justify-center relative border-b">
                  <DrawerTitle>Connect Uber</DrawerTitle>

                  <DrawerClose asChild>
                    <button className="absolute right-6">
                      <X className="size-5" />
                    </button>
                  </DrawerClose>
                </DrawerHeader>

                <div className="flex flex-col gap-10 py-3 items-center">
                  <div className="flex items-center gap-6">
                    <img
                      src="https://zaver.app/assets/logo-zaver-secondary-6721b03f.svg"
                      className="size-12"
                    />

                    <p>+</p>

                    <img
                      className="size-12 flex-none"
                      src="https://zaver.app/assets/Uber-81cc51c6.svg"
                    />
                  </div>

                  <p className="text-sm text-center font-semibold">
                    Connect your Uber account to <br /> Zaver.app
                  </p>

                  <ul className="flex flex-col gap-4 self-start">
                    <li className="flex gap-3 items-center">
                      <Database className="size-5" />

                      <div className="space-y-1">
                        <p className="text-sm font-medium text-neutral-900">
                          You own your data
                        </p>
                        <p className="text-xs text-muted-foreground">
                          You can disconnect your data anytime
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-3 items-center">
                      <Shield className="size-5" />

                      <div className="space-y-1">
                        <p className="text-sm font-medium text-neutral-900">
                          Secure Connections
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Your data is transferred in an encrypted manner. Your
                          data is secured.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <Button className="">Continue</Button>

                <div className="my-5 text-xs text-center space-y-1">
                  <p className="text-primary font-bold">
                    Secure and trusted access by GoNsave
                  </p>
                  <p className="font-medium">
                    By clicking Continue you agree to Gonsave's Privacy Policy.
                  </p>
                </div>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </li>
    </>
  )
}
