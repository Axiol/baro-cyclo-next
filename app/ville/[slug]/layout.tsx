import Card from '@components/Card'
import Link from 'next/link'

const layoutPlace = ({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) => {
  console.log(decodeURI(params.slug))
  return (
    <Card className='absolute bottom-2.5 left-2.5 max-w-xs z-10 text-primary-content'>
      {children}

      <Link
        href={`/avis/${decodeURI(params.slug)}`}
        className='btn btn-secondary mt-3'
      >
        Donnez votre avis
      </Link>
    </Card>
  )
}

export default layoutPlace
