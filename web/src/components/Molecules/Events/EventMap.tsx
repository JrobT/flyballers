import { useMemo, useState } from 'react'

import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api'

import Header from 'src/components/Atoms/Typography/Header'

type Coordinate = {
  latitude: number
  longitude: number
}

interface MapProps {
  coordinates: Coordinate
  markerText: string
}

interface InfoWindowData {
  markerText: string
}

const Map = ({ coordinates, markerText }: MapProps) => {
  const containerStyle = {
    height: '400px',
  }

  const [infoWindowData, setInfoWindowData] = useState<InfoWindowData | null>(
    null
  )
  const [isOpen, setIsOpen] = useState(false)
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null)

  const center = useMemo(
    () => ({
      lat: coordinates.latitude,
      lng: coordinates.longitude,
    }),
    [coordinates.latitude, coordinates.longitude]
  )

  const onMapLoad = (map: google.maps.Map) => setMapRef(map)

  const handleMarkerClick = () => {
    if (mapRef) mapRef.panTo(center)
    setInfoWindowData({ markerText })
    setIsOpen(true)
  }

  return (
    <div className="w-full" style={{ height: '400px' }}>
      <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY}>
        <GoogleMap
          center={center}
          mapContainerStyle={containerStyle}
          onLoad={onMapLoad}
          zoom={10}
        >
          <Marker
            icon={'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
            onClick={() => handleMarkerClick()}
            position={{ lat: coordinates.latitude, lng: coordinates.longitude }}
          >
            {isOpen && (
              <InfoWindow onCloseClick={() => setIsOpen(false)}>
                <Header category="tertiary">{infoWindowData.markerText}</Header>
              </InfoWindow>
            )}
          </Marker>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map
