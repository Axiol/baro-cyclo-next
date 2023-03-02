import Summary from '@components/Summary'

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  return { title: `${decodeURI(params.slug)} - Baro-Cyclo` }
}

const Place = async ({ params }: { params: { slug: string } }) => {
  console.log(decodeURI(params.slug))

  return <Summary name={'PLACE'} />
}

export default Place
