import Card from '@components/Card'

const layoutPlace = ({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) => {
  console.log(decodeURI(params.slug))
  return (
    <div className='absolute inset-0 z-10 flex justify-center items-center'>
      <Card className='max-w-2xl z-10 text-primary-content'>{children}</Card>
    </div>
  )
}

export default layoutPlace