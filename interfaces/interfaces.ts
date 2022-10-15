import { LatLngTuple } from 'leaflet';

export interface PlaceProps {
  _id: string;
  name: string;
  center: LatLngTuple;
  borders: LatLngTuple[];
}
