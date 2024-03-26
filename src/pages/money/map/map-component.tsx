import { Map, APIProvider, Marker } from '@vis.gl/react-google-maps'
import airBnbStyle from './map-style'

const API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY

export function MapComponent() {
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        defaultZoom={12}
        defaultCenter={{ lat: -6.914744, lng: 107.60981 }}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        styles={airBnbStyle}
        mapId={'styled1'}
      >
        <Marker position={{ lat: -6.914744, lng: 107.60981 }} />
      </Map>
      <MyComponent />
    </APIProvider>
  )
}

function MyComponent() {
  return <></>
}
