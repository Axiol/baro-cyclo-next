import { ChangeEvent, useState } from 'react'
import RangeSelector from '@components/RangeSelector'
import { ReviewScore } from '@interfaces/interfaces'
import { Place } from '@prisma/client'
import { signOut } from 'next-auth/react'

interface ReviewFormProps {
  place: Place
  onSave: (id: string, values: ReviewScore) => void
}

const ReviewForm = ({ place, onSave }: ReviewFormProps) => {
  const [page, setPage] = useState(1)
  const [values, setValues] = useState<ReviewScore>({
    general: {
      moving: 0,
      network: 0,
      conflict_pedestrian: 0,
      conflict_motor: 0,
    },
    comfort: {
      comfort: 0,
      maintained: 0,
      signage: 0,
      road_work: 0,
    },
    security: {
      security: 0,
      big_roads: 0,
      small_roads: 0,
      connections: 0,
      thefts: 0,
    },
    services: {
      parking: 0,
      public_transport: 0,
      renting: 0,
      shops: 0,
    },
    efforts: {
      efforts: 0,
      communication: 0,
      burgomaster: 0,
      cars_tickets: 0,
    },
  })

  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    let newValues = { ...values }
    const target = e.target.name.split('.')
    // @ts-ignore
    newValues[target[0]][target[1]] = e.target.value
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
        Laissez votre avis pour {place.name}
      </p>

      <button onClick={() => signOut()}>Se connecter avec GitHub</button>

      {page === 1 && (
        <div className='flex flex-col space-y-6'>
          <p className='font-bold text-xl -mb-1.5'>Général</p>
          <RangeSelector
            name='general.moving'
            value={values.general.moving}
            onChange={updateValue}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            name='general.network'
            value={values.general.network}
            onChange={updateValue}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            name='general.conflict_pedestrian'
            value={values.general.conflict_pedestrian}
            onChange={updateValue}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            name='general.conflict_motor'
            value={values.general.conflict_motor}
            onChange={updateValue}
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
            name='comfort.comfort'
            value={values.comfort.comfort}
            onChange={updateValue}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            name='comfort.maintained'
            value={values.comfort.maintained}
            onChange={updateValue}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            name='comfort.signage'
            value={values.comfort.signage}
            onChange={updateValue}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            name='comfort.road_work'
            value={values.comfort.road_work}
            onChange={updateValue}
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
            name='security.security'
            value={values.security.security}
            onChange={updateValue}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            name='security.big_roads'
            value={values.security.big_roads}
            onChange={updateValue}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            name='security.small_roads'
            value={values.security.small_roads}
            onChange={updateValue}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            name='security.connections'
            value={values.security.connections}
            onChange={updateValue}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            name='security.thefts'
            value={values.security.thefts}
            onChange={updateValue}
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
            name='services.parking'
            value={values.services.parking}
            onChange={updateValue}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            name='services.public_transport'
            value={values.services.public_transport}
            onChange={updateValue}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            name='services.renting'
            value={values.services.renting}
            onChange={updateValue}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            name='services.shops'
            value={values.services.shops}
            onChange={updateValue}
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
            name='efforts.efforts'
            value={values.efforts.efforts}
            onChange={updateValue}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            name='efforts.communication'
            value={values.efforts.communication}
            onChange={updateValue}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            name='efforts.burgomaster'
            value={values.efforts.burgomaster}
            onChange={updateValue}
            minLabel='min'
            maxLabel='max'
            label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sem, ultricies lacinia ex non, blandit fringilla nisi'
          />
          <RangeSelector
            name='efforts.cars_tickets'
            value={values.efforts.cars_tickets}
            onChange={updateValue}
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
          <button
            disabled={page !== 5}
            onClick={() => onSave(place.id, values)}
            className='btn btn-secondary'
          >
            Sauvegarder
          </button>
        )}
      </div>
    </>
  )
}

export default ReviewForm
