import { useState } from 'react';
import { LatLngTuple } from 'leaflet';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

import Map from '@components/Map';
import Search from '@components/Search';

interface HomeProps {
  places?: {
    _id: string;
    name: string;
    center: LatLngTuple;
    borders: LatLngTuple[];
  }[];
}

export const getServerSideProps: GetStaticProps = async () => {
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

  return (
    <div className='min-h-screen text-white'>
      <Map position={position} places={places} />
      <Search />
    </div>
  );
};

export default Home;
