import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Review } from '@prisma/client'

export const calculateAverage = async (id: string) => {
  const prisma = new PrismaClient()

  const reviews = await prisma.review.findMany({
    where: {
      placeId: {
        equals: id as string,
      },
    },
  })
  const reviewAverage = {
    reviews: reviews.length,
    average: 0,
    averageGeneral: 0,
    averageComfort: 0,
    averageSecurity: 0,
    averageServices: 0,
    averageEfforts: 0,
  }

  reviews.forEach((review: Review) => {
    let averageGeneral = 0
    // @ts-ignore
    for (const [, value] of Object.entries(review.score?.general)) {
      averageGeneral += value as number
    }
    reviewAverage.averageGeneral +=
      // @ts-ignore
      averageGeneral / Object.keys(review.score?.general).length

    let averageComfort = 0
    // @ts-ignore
    for (const [, value] of Object.entries(review.score?.comfort)) {
      averageComfort += value as number
    }
    reviewAverage.averageComfort +=
      // @ts-ignore
      averageComfort / Object.keys(review.score?.comfort).length

    let averageSecurity = 0
    // @ts-ignore
    for (const [, value] of Object.entries(review.score?.security)) {
      averageSecurity += value as number
    }
    reviewAverage.averageSecurity +=
      // @ts-ignore
      averageSecurity / Object.keys(review.score?.security).length

    let averageServices = 0
    // @ts-ignore
    for (const [, value] of Object.entries(review.score?.services)) {
      averageServices += value as number
    }
    reviewAverage.averageServices +=
      // @ts-ignore
      averageServices / Object.keys(review.score?.services).length

    let averageEfforts = 0
    // @ts-ignore
    for (const [, value] of Object.entries(review.score?.efforts)) {
      averageEfforts += value as number
    }
    reviewAverage.averageEfforts +=
      // @ts-ignore
      averageEfforts / Object.keys(review.score?.efforts).length
  })

  reviewAverage.averageGeneral = reviewAverage.averageGeneral / reviews.length
  reviewAverage.averageComfort = reviewAverage.averageComfort / reviews.length
  reviewAverage.averageSecurity = reviewAverage.averageSecurity / reviews.length
  reviewAverage.averageServices = reviewAverage.averageServices / reviews.length
  reviewAverage.averageEfforts = reviewAverage.averageEfforts / reviews.length

  reviewAverage.average =
    (reviewAverage.averageGeneral +
      reviewAverage.averageComfort +
      reviewAverage.averageSecurity +
      reviewAverage.averageServices +
      reviewAverage.averageEfforts) /
    5

  await prisma.place.update({
    where: {
      id: id as string,
    },
    data: {
      reviewAverage: reviewAverage,
    },
  })

  return reviewAverage
}

const averageReviews = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      const { id } = req.query

      const reviewAverage = await calculateAverage(id as string)

      res.json({ status: 200, data: reviewAverage })
      break
  }
}

export default averageReviews
