import Card from '@components/Card'

const layoutPlace = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className='absolute bottom-2.5 left-2.5 max-w-xs z-10 text-primary-content'>
      {children}
    </Card>
  )
}

export default layoutPlace
