import Summary from '@components/Summary'

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

  return <Summary name={place.name} />
}

export default Place
