import { useState } from 'react'
import { LatLngTuple } from 'leaflet'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'

import { PlaceProps } from '@interfaces/interfaces'
import Map from '@components/Map'
import Search from '@components/Search'
import Summary from '@components/Summary'
import { Place } from '@prisma/client'

interface HomeProps {
  places?: Place[]
}

export const getServerSideProps: GetStaticProps = async () => {
  // Fetch all the cities on page load.
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/places`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const places = await res.json()

  return {
    props: {
      places: places.data,
    },
  }
}

const Home: NextPage<HomeProps> = ({ places }) => {
  const [showAll, setShowAll] = useState<boolean>(true)
  const [place, setPlace] = useState<PlaceProps>()

  const handlePlaceSelect = (place: PlaceProps) => {
    setPlace(place)
    setShowAll(false)
  }

  const handleSearchSelect = async (place: PlaceProps) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/places/${place.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const apiPlace = await res.json()

    handlePlaceSelect(apiPlace.place)
  }

  const handleSummaryClose = () => {
    setPlace(undefined)
    setShowAll(true)
  }

  return (
    <div className='min-h-screen text-white'>
      <Map
        position={place?.center}
        borders={place?.borders}
        places={places}
        showAll={showAll}
      />
      <Search onPlaceSelect={handleSearchSelect} />
      {!showAll && <Summary name={place?.name} />}
    </div>
  )
}

export default Home
