'use client'

import { useEffect } from 'react'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polygon,
  useMap,
} from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import { useRouter } from 'next/navigation'

import { PlaceProps } from '@interfaces/interfaces'

import 'leaflet/dist/leaflet.css'

interface MapProps {
  position?: LatLngTuple
  places?: PlaceProps[]
  onPlaceSelect?: (place: PlaceProps) => void
  showAll?: boolean
  borders?: LatLngTuple[]
  children?: React.ReactNode
}

const Map = ({
  position,
  places,
  onPlaceSelect,
  showAll = true,
  borders = [],
  children,
}: MapProps) => {
  const router = useRouter()

  const UseMapComponent = () => {
    const map = useMap()

    useEffect(() => {
      map.setView(position ? position : [50.6337, 5.56759], position ? 12 : 9, {
        animate: true,
      })
    })

    return null
  }

  const purpleOptions = { color: 'purple' }

  return (
    <>
      <MapContainer className='absolute inset-0 z-0' scrollWheelZoom={false}>
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          maxZoom={18}
          id='mapbox/dark-v10'
          tileSize={512}
          zoomOffset={-1}
          accessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
          url='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
        />
        <UseMapComponent />
        {showAll &&
          places &&
          places.map((place) => {
            return (
              <Polygon
                key={place._id}
                pathOptions={purpleOptions}
                positions={place.borders}
                eventHandlers={{
                  click: () => router.push(`/ville/${place.name}`),
                }}
              />
            )
          })}
        ((!showAll && borders) && (
        <Polygon pathOptions={purpleOptions} positions={borders} />
        ))
      </MapContainer>
      {children}
    </>
  )
}

export default Map
