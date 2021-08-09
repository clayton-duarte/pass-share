import faunadb from 'faunadb'

const FAUNA_SECRET_KEY = process.env.FAUNA_SECRET_KEY

const db = new faunadb.Client({
  secret: FAUNA_SECRET_KEY,
  // Lambda config
  keepAlive: false,
})

const q = faunadb.query

export { FAUNA_SECRET_KEY, db, q }
