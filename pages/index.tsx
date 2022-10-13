import type { NextPage } from 'next';

import Map from '@components/Map';

const Home: NextPage = () => {
  return (
    <div className='min-h-screen text-white'>
      <Map />
    </div>
  );
};

export default Home;
