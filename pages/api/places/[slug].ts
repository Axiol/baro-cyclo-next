import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const place = async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient()

  switch (req.method) {
    case 'GET':
      const { slug } = req.query

      const place = await prisma.place.findFirst({
        where: {
          name: {
            equals: slug as string,
          },
        },
      })

      if (!place) {
        res.status(404).json({
          code: 'NOT-FOUND',
          message: 'No link found',
        })

        return
      }

      place.center = JSON.parse(place.center)
      place.borders = JSON.parse(place.borders)

      res.json({ status: 200, place: place })
      break
  }
}

export default place
