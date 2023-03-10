import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const places = async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient()

  switch (req.method) {
    case 'GET':
      const places = await prisma.place.findMany()

      for (let i = 0; i < places.length; i++) {
        places[i].center = JSON.parse(places[i].center)
        places[i].borders = JSON.parse(places[i].borders)
      }

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
            center: JSON.stringify(body.center),
            borders: JSON.stringify(body.borders),
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
