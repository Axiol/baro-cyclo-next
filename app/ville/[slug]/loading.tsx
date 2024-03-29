import Skeleton from '@components/Skeleton'
import Link from 'next/link'

const loadingPlace = () => {
  return (
    <>
      <div className='flex justify-between mb-4 items-center'>
        <div className='w-full flex items-center'>
          <Skeleton type='sumTitle' className='w-full mb-0.5' />
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
    </>
  )
}

export default loadingPlace
