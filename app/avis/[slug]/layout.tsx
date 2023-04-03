import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../../pages/api/auth/[...nextauth]'

import Card from '@components/Card'
import Login from '@components/Login'

const layoutReview = async ({
  children,
}: {
  children: React.ReactNode
  params: { slug: string }
}) => {
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <div className='absolute inset-0 z-20 flex justify-center items-center'>
      <Card className='max-w-2xl z-10 text-primary-content overflow-y-scroll'>
        {!session && <Login />}
        {session && children}
      </Card>
    </div>
  )
}

export default layoutReview
