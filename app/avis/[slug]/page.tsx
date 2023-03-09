'use client'

import { useState } from 'react'

import RangeSelector from '@components/RangeSelector'

const Review = ({ params }: { params: { slug: string } }) => {
  const [page, setPage] = useState(1)
  const [values, setValues] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])

  const updateValue = (value: string, position: [number, number]) => {
    let newValues = [...values]
    newValues[position[0]][position[1]] = parseInt(value)
    setValues(newValues)
  }

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
          <RangeSelector
            value={values[0][0]}
            onChange={(v) => updateValue(v, [0, 0])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            value={values[0][1]}
            onChange={(v) => updateValue(v, [0, 1])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            value={values[0][2]}
            onChange={(v) => updateValue(v, [0, 2])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            value={values[0][3]}
            onChange={(v) => updateValue(v, [0, 3])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
        </div>
      )}

      {page === 2 && (
        <div className='flex flex-col space-y-6'>
          <p className='font-bold text-xl -mb-1.5'>Confort</p>
          <RangeSelector
            value={values[1][0]}
            onChange={(v) => updateValue(v, [1, 0])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            value={values[1][1]}
            onChange={(v) => updateValue(v, [1, 1])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            value={values[1][2]}
            onChange={(v) => updateValue(v, [1, 2])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            value={values[1][3]}
            onChange={(v) => updateValue(v, [1, 3])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
        </div>
      )}

      {page === 3 && (
        <div className='flex flex-col space-y-6'>
          <p className='font-bold text-xl -mb-1.5'>Sécurité</p>
          <RangeSelector
            value={values[2][0]}
            onChange={(v) => updateValue(v, [2, 0])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            value={values[2][1]}
            onChange={(v) => updateValue(v, [2, 1])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            value={values[2][2]}
            onChange={(v) => updateValue(v, [2, 2])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            value={values[2][3]}
            onChange={(v) => updateValue(v, [2, 3])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            value={values[2][4]}
            onChange={(v) => updateValue(v, [2, 4])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
        </div>
      )}

      {page === 4 && (
        <div className='flex flex-col space-y-6'>
          <p className='font-bold text-xl -mb-1.5'>Services</p>
          <RangeSelector
            value={values[3][0]}
            onChange={(v) => updateValue(v, [3, 0])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            value={values[3][1]}
            onChange={(v) => updateValue(v, [3, 1])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            value={values[3][2]}
            onChange={(v) => updateValue(v, [3, 2])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            value={values[3][3]}
            onChange={(v) => updateValue(v, [3, 3])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
        </div>
      )}

      {page === 5 && (
        <div className='flex flex-col space-y-6'>
          <p className='font-bold text-xl -mb-1.5'>Efforts</p>
          <RangeSelector
            value={values[4][0]}
            onChange={(v) => updateValue(v, [4, 0])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            value={values[4][1]}
            onChange={(v) => updateValue(v, [4, 1])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            value={values[4][2]}
            onChange={(v) => updateValue(v, [4, 2])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            value={values[4][3]}
            onChange={(v) => updateValue(v, [4, 3])}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
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
        {page < 5 && (
          <button
            disabled={page === 5}
            onClick={nextPage}
            className='btn btn-secondary'
          >
            Suivant
          </button>
        )}
        {page === 5 && (
          <button disabled={page !== 5} className='btn btn-secondary'>
            Sauvegarder
          </button>
        )}
      </div>
    </>
  )
}

export default Review
