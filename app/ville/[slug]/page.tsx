import Link from 'next/link'

const getPlace = async (name: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/places/${name}`,
    {
      cache: 'no-store',
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  return data.place
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  return { title: `${decodeURI(params.slug)} - Baro-Cyclo` }
}

const Place = async ({ params }: { params: { slug: string } }) => {
  const place = await getPlace(params.slug)

  console.log(place)

  return (
    <>
      <div className='flex justify-between mb-4 items-center'>
        <div className='flex items-center'>
          <h2 className='text-xl font-extrabold'>{place.name}</h2>
          <span className='inline-block ml-1'>
            - {place.reviewAverage.reviews} avis
          </span>
        </div>
        <Link
          href={'/'}
          className='text-neutral hover:text-neutral-focus focus:text-neutral-focus'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='28'
            height='28'
            fill='currentColor'
            className='bi bi-x'
            viewBox='0 0 16 16'
          >
            <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
          </svg>
        </Link>
      </div>
      <h3 className='text-l font-extrabold'>Général</h3>
      <progress
        className='progress progress-info w-full mb-2'
        value={place.reviewAverage.averageGeneral}
        max='10'
      ></progress>

      <h3 className='text-l font-extrabold'>Confort</h3>
      <progress
        className='progress progress-info w-full mb-2'
        value={place.reviewAverage.averageComfort}
        max='10'
      ></progress>

      <h3 className='text-l font-extrabold'>Sécurité</h3>
      <progress
        className='progress progress-info w-full mb-2'
        value={place.reviewAverage.averageSecurity}
        max='10'
      ></progress>

      <h3 className='text-l font-extrabold'>Services</h3>
      <progress
        className='progress progress-info w-full mb-2'
        value={place.reviewAverage.averageServices}
        max='10'
      ></progress>

      <h3 className='text-l font-extrabold'>Efforts</h3>
      <progress
        className='progress progress-info w-full mb-2'
        value={place.reviewAverage.averageEfforts}
        max='10'
      ></progress>
    </>
  )
}

export default Place
