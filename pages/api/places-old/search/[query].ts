import type { NextApiRequest, NextApiResponse } from 'next'

import clientPromise from '@libs/mongodb'

const places = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise
  const db = client.db('baro-cyclo')

  switch (req.method) {
    case 'GET':
      const { query } = req.query
      const places = await db
        .collection('places')
        .aggregate([
          {
            $search: {
              index: 'places_name',
              autocomplete: {
                query: `${query}`,
                path: 'name',
                fuzzy: {
                  maxEdits: 2,
                  prefixLength: 3,
                },
              },
            },
          },
          {
            $limit: 5,
          },
          {
            $project: {
              _id: 1,
              name: 1,
            },
          },
        ])
        .toArray()

      res.json({ status: 200, places: places })
      break
  }
}

export default places
