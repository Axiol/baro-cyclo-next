'use client'

import { useState } from 'react'

import RangeSelector from '@components/RangeSelector'

const Review = ({ params }: { params: { slug: string } }) => {
  const [page, setPage] = useState(1)

  const prevPage = () => {
    const prev = page - 1
    if (prev > 0) {
      setPage(prev)
    }
  }

  const nextPage = () => {
    const next = page + 1
    if (next < 6) {
      setPage(next)
    }
  }

  return (
    <>
      <p className='text-center font-bold text-2xl mb-4'>
        Laissez votre avis pour {decodeURI(params.slug)}
      </p>

      {page === 1 && (
        <div className='flex flex-col space-y-6'>
          <p className='font-bold text-xl -mb-1.5'>Général</p>
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
        </div>
      )}

      {page === 2 && (
        <div className='flex flex-col space-y-6'>
          <p className='font-bold text-xl -mb-1.5'>Confort</p>
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
        </div>
      )}

      {page === 3 && (
        <div className='flex flex-col space-y-6'>
          <p className='font-bold text-xl -mb-1.5'>Sécurité</p>
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
        </div>
      )}

      {page === 4 && (
        <div className='flex flex-col space-y-6'>
          <p className='font-bold text-xl -mb-1.5'>Services</p>
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
        </div>
      )}

      {page === 5 && (
        <div className='flex flex-col space-y-6'>
          <p className='font-bold text-xl -mb-1.5'>Efforts</p>
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
          <RangeSelector label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi' />
        </div>
      )}

      <div className='flex justify-between mt-7'>
        <button
          disabled={page === 1}
          onClick={prevPage}
          className='btn btn-outline btn-primary'
        >
          Précédent
        </button>
        <button
          disabled={page === 5}
          onClick={nextPage}
          className='btn btn-secondary'
        >
          Suivant
        </button>
      </div>
    </>
  )
}

export default Review
