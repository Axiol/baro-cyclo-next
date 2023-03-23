import type { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from '@prisma/client'

const places = async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient()

  switch (req.method) {
    case 'GET':
      const { query } = req.query
      const places = await prisma.place.findMany({
        take: 5,
        select: {
          name: true,
        },
        where: {
          name: {
            contains: query as string,
          },
        },
      })

      res.json({ status: 200, places: places })
      break
  }
}

export default places
