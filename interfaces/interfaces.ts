import { LatLngTuple } from 'leaflet'

export interface PlaceProps {
  id: string
  name: string
  center: LatLngTuple
  borders: LatLngTuple[]
}
