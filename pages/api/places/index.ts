import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const places = async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient()

  switch (req.method) {
    case 'GET':
      const places = await prisma.place.findMany()

      res.json({ status: 200, data: places })
      break

    case 'POST':
      const body = req.body
      if (!body.name || !body.center || !body.borders) {
        res.status(400).json({
          code: 'MISSING-BODY',
          message: 'Missing parameters',
        })

        return
      }

      const place = await prisma.place
        .create({
          data: {
            name: body.name,
            geoData: {
              center: body.center,
              borders: body.borders,
            },
            reviewAverage: {
              reviews: 0,
              average: 0,
              averageGeneral: 0,
              averageComfort: 0,
              averageSecurity: 0,
              averageServices: 0,
              averageEfforts: 0,
            },
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

      res.json({ status: 200, data: place })
      break
  }
}

export default places
