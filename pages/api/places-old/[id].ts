import type { NextApiRequest, NextApiResponse } from 'next'

import clientPromise from '@libs/mongodb'

const place = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise
  const db = client.db('baro-cyclo')

  switch (req.method) {
    case 'GET':
      const { id } = req.query
      const place = await db.collection('places').findOne({ name: id })

      res.json({ status: 200, place: place })
      break
  }
}

export default place
