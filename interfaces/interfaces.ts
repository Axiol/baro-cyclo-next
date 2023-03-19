import { LatLngTuple } from 'leaflet'

export interface PlaceProps {
  id: string
  name: string
  center: LatLngTuple
  borders: LatLngTuple[]
}

export interface ReviewScore {
  general: {
    moving: number
    network: number
    conflict_pedestrian: number
    conflict_motor: number
  }
  comfort: {
    comfort: number
    maintained: number
    signage: number
    road_work: number
  }
  security: {
    security: number
    big_roads: number
    small_roads: number
    connections: number
    thefts: number
  }
  services: {
    parking: number
    public_transport: number
    renting: number
    shops: number
  }
  efforts: {
    efforts: number
    communication: number
    burgomaster: number
    cars_tickets: number
  }
}
