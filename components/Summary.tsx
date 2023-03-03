import Link from 'next/link'

import Card from '@components/Card'
import Skeleton from '@components/Skeleton'

interface SummaryProps {
  name?: string
}

const Summary: React.FC<SummaryProps> = ({ name }) => {
  return (
    <>
      <Card className='absolute bottom-2.5 left-2.5 max-w-xs z-10 text-primary-content'>
        <div className='flex justify-between mb-4 items-center'>
          <div className='flex items-center'>
            <h2 className='text-xl font-extrabold'>{name}</h2>
            <span className='inline-block ml-1'>- 3 avis</span>
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
          value='35'
          max='100'
        ></progress>

        <h3 className='text-l font-extrabold'>Confort</h3>
        <progress
          className='progress progress-info w-full mb-2'
          value='60'
          max='100'
        ></progress>

        <h3 className='text-l font-extrabold'>Sécurité</h3>
        <progress
          className='progress progress-info w-full mb-2'
          value='55'
          max='100'
        ></progress>

        <h3 className='text-l font-extrabold'>Services</h3>
        <progress
          className='progress progress-info w-full mb-2'
          value='20'
          max='100'
        ></progress>

        <h3 className='text-l font-extrabold'>Efforts</h3>
        <progress
          className='progress progress-info w-full mb-2'
          value='15'
          max='100'
        ></progress>
      </Card>

      <Card className='absolute bottom-2.5 left-96 max-w-xs z-10 text-primary-content'>
        <div className='flex justify-between mb-4 items-center'>
          <div className='w-full flex items-center'>
            <Skeleton type='sumTitle' className='w-full mb-1.5' />
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
        <Skeleton type='sumSub' className='mb-2' />
        <Skeleton type='progress' className='mb-3' />

        <Skeleton type='sumSub' className='mb-2' />
        <Skeleton type='progress' className='mb-3' />

        <Skeleton type='sumSub' className='mb-2' />
        <Skeleton type='progress' className='mb-3' />

        <Skeleton type='sumSub' className='mb-2' />
        <Skeleton type='progress' className='mb-3' />

        <Skeleton type='sumSub' className='mb-2' />
        <Skeleton type='progress' className='mb-3' />
      </Card>
    </>
  )
}

export default Summary
