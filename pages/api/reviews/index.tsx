import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const places = async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient()

  switch (req.method) {
    case 'POST':
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
            score: JSON.stringify(body.score),
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

      res.json({ status: 200, data: review })
      break
  }
}

export default places