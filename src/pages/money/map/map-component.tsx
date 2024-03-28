import { Map, APIProvider, AdvancedMarker } from '@vis.gl/react-google-maps'
import airBnbStyle from './map-style'
import { ComponentProps, useMemo, useState } from 'react'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type MapMarkerProps = ComponentProps<typeof AdvancedMarker>

const API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY

const POINTS = [
  { id: 'A', lat: 1.292, lng: 103.861, price: 13111000 },
  { id: 'B', lat: 1.29027, lng: 103.852, price: 13000000 },
]

export function MapComponent() {
  const [selectedPointId, setSelectedPointId] = useState<null | string>(null)

  function onPointSelected(id: string) {
    setSelectedPointId(id)
  }

  const selectedPoint = useMemo(
    () => ({ ...POINTS.find((p) => p.id === selectedPointId) }),
    [selectedPointId],
  )

  return (
    <>
      <APIProvider apiKey={API_KEY}>
        <Map
          defaultZoom={14}
          defaultCenter={{ lat: 1.29027, lng: 103.851959 }}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          styles={airBnbStyle}
          mapId={'styled1'}
          clickableIcons={false}
        >
          {POINTS.map((point) => (
            <MapMarker
              key={point.id}
              onClick={() => onPointSelected('A')}
              position={{ lat: point.lat, lng: point.lng }}
            >
              {point.price}
            </MapMarker>
          ))}
        </Map>{' '}
        <MyComponent />
      </APIProvider>

      <Drawer
        open={!!selectedPointId}
        onOpenChange={(e) => {
          if (!e) setSelectedPointId(null)
        }}
      >
        <DrawerContent className="max-w-[425px] mx-auto px-3">
          <DrawerHeader>
            <DrawerTitle>Location detail</DrawerTitle>
            <DrawerDescription>Price : {selectedPoint.price}</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button className="py-5">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

function MyComponent() {
  return <></>
}

function MapMarker({ children, className, ...props }: MapMarkerProps) {
  return (
    <AdvancedMarker
      className={cn(
        'rounded-full shadow-2xl border py-2 px-3 hover:scale-105 transition bg-white text-sm font-bold',
        className,
      )}
      {...props}
    >
      {children}
    </AdvancedMarker>
  )
}
