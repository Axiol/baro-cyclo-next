import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { calculateAverage } from './average/[id]'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'

const review = async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient()
  const session = await getServerSession(req, res, authOptions)
  console.log(session)

  switch (req.method) {
    case 'POST':
      if (!session) {
        res.status(401).json({
          code: 'UNAUTHORIZED',
          message: 'Unauthorized user',
        })

        return
      }

      const body = req.body
      if (!body.placeId || !body.score) {
        res.status(400).json({
          code: 'MISSING-BODY',
          message: 'Missing parameters',
        })

        return
      }

      const review = await prisma.review
        .create({
          data: {
            placeId: body.placeId,
            score: body.score,
            // @ts-ignore
            userId: session?.user?.uid,
          },
        })
        .catch(async (e) => {
          console.error(e)
          res.status(500).json({
            code: 'INTERNAL-ERROR',
            message: 'Something went wrong when saving the data',
          })
          return
        })

      await calculateAverage(body.placeId)

      res.json({ status: 200, data: review })
      break
  }
}

export default review
