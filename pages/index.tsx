import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <button className='btn btn-primary'>Button</button>
    </>
  );
};

export default Home;
