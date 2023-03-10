import type { NextApiRequest, NextApiResponse } from 'next'

import clientPromise from '@libs/mongodb'

const places = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise
  const db = client.db('baro-cyclo')

  switch (req.method) {
    case 'GET':
      const places = await db.collection('places').find().toArray()
      res.json({ status: 200, data: places })
      break
  }
}

export default places
