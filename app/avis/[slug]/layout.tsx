import Card from '@components/Card'

const layoutReview = ({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) => {
  return (
    <div className='absolute inset-0 z-20 flex justify-center items-center'>
      <Card className='max-w-2xl z-10 text-primary-content overflow-y-scroll'>
        {children}
      </Card>
    </div>
  )
}

export default layoutReview
