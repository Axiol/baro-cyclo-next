import { useState } from 'react';
import { LatLngTuple } from 'leaflet';
import type { NextPage } from 'next';

import Map from '@components/Map';

const Home: NextPage = () => {
  const [position, setPosition] = useState<LatLngTuple>([50.6337, 5.56759]);

  return (
    <div className='min-h-screen text-white'>
      <Map position={position} />
    </div>
  );
};

export default Home;
