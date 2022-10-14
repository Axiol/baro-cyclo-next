import { useEffect } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polygon,
  useMap,
} from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

import 'leaflet/dist/leaflet.css';

interface MapProps {
  position: LatLngTuple;
  places:
    | {
        _id: string;
        name: string;
        center: LatLngTuple;
        borders: LatLngTuple[];
      }[]
    | undefined;
}

const Map: React.FC<MapProps> = ({ position, places }) => {
  const UseMapComponent = () => {
    const map = useMap();

    useEffect(() => {
      map.setView(position, 12, {
        animate: true,
      });
    });

    return null;
  };

  const purpleOptions = { color: 'purple' };

  return (
    <MapContainer
      className='absolute inset-0 z-0'
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
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

      {places &&
        places.map((place) => {
          return (
            <Polygon
              key={place._id}
              pathOptions={purpleOptions}
              positions={place.borders}
              eventHandlers={{
                click: () => {
                  // console.log(place.name);
                },
              }}
            />
          );
        })}
    </MapContainer>
  );
};

export default Map;
