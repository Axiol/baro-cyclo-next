import type { NextApiRequest, NextApiResponse } from 'next'

import clientPromise from '@libs/mongodb'

const places = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise
  const db = client.db('baro-cyclo')

  switch (req.method) {
    case 'POST':
      const places = await // res.json({ status: 200, data: places })
      db.collection('reviews').insertOne({})
  }
}

export default places
