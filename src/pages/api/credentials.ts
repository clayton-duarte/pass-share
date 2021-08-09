import { db, q } from '../../lib/config'

export default async function handler(req, res) {
  const credentials = await db.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('credentials'))),
      q.Lambda('X', q.Get(q.Var('X')))
    )
  )
  res.status(200).json({ credentials })
}
