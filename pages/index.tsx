import { useState } from 'react';
import { LatLngTuple } from 'leaflet';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

import { PlaceProps } from '@interfaces/interfaces';
import Map from '@components/Map';
import Search from '@components/Search';

interface HomeProps {
  places?: PlaceProps[];
}

export const getServerSideProps: GetStaticProps = async () => {
  // Fetch all the cities on page load.
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/places`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const places = await res.json();

  return {
    props: {
      places: places.data,
    },
  };
};

const Home: NextPage<HomeProps> = ({ places }) => {
  const [position, setPosition] = useState<LatLngTuple>([50.6337, 5.56759]);
  const [showAll, setShowAll] = useState<boolean>(true);
  const [borders, setBorders] = useState<LatLngTuple[]>([]);

  const handlePlaceSelect = (place: PlaceProps) => {
    console.log(place);

    setPosition(place.center);
    setBorders(place.borders);
    setShowAll(false);
  };

  return (
    <div className='min-h-screen text-white'>
      <Map
        position={position}
        places={places}
        onPlaceSelect={handlePlaceSelect}
        showAll={showAll}
        borders={borders}
      />
      <Search />
    </div>
  );
};

export default Home;
