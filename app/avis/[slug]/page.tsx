'use client'

import { use } from 'react'

import ReviewForm from '@components/ReviewForm'
import { ReviewScore } from '@interfaces/interfaces'

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

const saveReview = async (id: string, score: ReviewScore) => {
  console.log(id, score)

  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      placeId: id,
      score: score,
    }),
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  console.log(data)
}

const Review = ({ params }: { params: { slug: string } }) => {
  // const session = await getServerSession(authOptions)
  // console.log(session)
  const place = use(getPlace(params.slug))

  return <ReviewForm place={place} onSave={saveReview} />
}

export default Review
