import { Search } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { OppurtunityCard } from '@/components/shared/oppurtunity-card'

export function Component() {
  return (
    <div className="px-4 h-screen overflow-y-auto flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold">Oppurtunities</p>

        <button>
          <Search />
        </button>
      </div>

      <Tabs defaultValue="all" className="w-full ">
        <TabsList className="bg-background">
          <TabsTrigger className="data-[state=active]:text-primary" value="all">
            All
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-primary"
            value="deals"
          >
            Deals
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-primary"
            value="benefits"
          >
            Benefits
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-primary"
            value="increased-earnings"
          >
            Increased Earnings
          </TabsTrigger>
        </TabsList>
        <TabContentOppurtunites value="all" />
        <TabContentOppurtunites value="deals" />
        <TabContentOppurtunites value="benefits" />
        <TabContentOppurtunites value="increased-earnings" />
      </Tabs>
    </div>
  )
}

function TabContentOppurtunites({ value }: { value: string }) {
  return (
    <TabsContent value={value} asChild>
      <div className="flex flex-col gap-2 py-2">
        <OppurtunityCard className="border rounded-lg" />
        <OppurtunityCard className="border rounded-lg" />
      </div>
    </TabsContent>
  )
}
