import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link } from 'react-router-dom'

export function Component() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="/zavier.svg" className="w-[343px]" />

      <Tabs defaultValue="mobile" className="w-full my-10">
        <TabsList className="w-full gap-2 bg-transparent">
          <TabsTrigger value="mobile" className="flex-1 w-full">
            Mobile
          </TabsTrigger>
          <TabsTrigger value="email" className="flex-1 w-full">
            Email
          </TabsTrigger>
        </TabsList>
        <TabsContent value="mobile">
          <MobileSignIn />
        </TabsContent>
        <TabsContent value="email">
          <EmailSignIn />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function MobileSignIn() {
  return (
    <form>
      <fieldset className="flex flex-col gap-6 my-5">
        <div className="flex">
          <button className="border px-4 rounded-lg rounded-tr-none rounded-br-none">
            <span className="flex items-center gap-2">
              <span className="text-3xl">🇮🇩</span>
              <span> +62</span>
            </span>
          </button>

          <Input placeholder="Phone number" className="py-6" />
        </div>
        <Input type="password" placeholder="Password" />

        <Link className="font-semibold" to="/">
          Forgot your password ?
        </Link>

        <div className="flex flex-col gap-3">
          <Button className="py-6">Continue</Button>
          <Button className="py-6 flex items-center gap-5" variant="outline">
            <img src="/google-logo.png" className="size-4" />
            Continue With Google
          </Button>
        </div>

        <p className="text-center mt-5 text-lg font-semibold text-muted-foreground">
          No account yet ?{' '}
          <Link className="text-primary" to="/register">
            Signup
          </Link>
        </p>
      </fieldset>
    </form>
  )
}

function EmailSignIn() {
  return (
    <form>
      <fieldset className="flex flex-col gap-6 my-5">
        <Input placeholder="Phone number" className="py-6" />
        <Input type="password" placeholder="Password" />

        <Link className="font-semibold" to="/">
          Forgot your password ?
        </Link>

        <div className="flex flex-col gap-3">
          <Button className="py-6">Continue</Button>
          <Button className="py-6 flex items-center gap-5" variant="outline">
            <img src="/google-logo.png" className="size-4" />
            Continue With Google
          </Button>
        </div>

        <p className="text-center mt-5 text-lg font-semibold text-muted-foreground">
          No account yet ?{' '}
          <Link className="text-primary" to="/register">
            Signup
          </Link>
        </p>
      </fieldset>
    </form>
  )
}
