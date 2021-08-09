import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { gql } from '@apollo/client'

import { FAUNA_SECRET_KEY } from '../lib/config'

const query = gql`
  query GetAllCredentials {
    allCredentials {
      data {
        service
        email
        password
        thumb
      }
    }
  }
`

export async function getServerSideProps() {
  try {
    const { data } = await axios.post(
      'https://graphql.fauna.com/graphql',
      query,
      {
        headers: { Authorization: `Bearer ${FAUNA_SECRET_KEY}` },
      }
    )

    console.log(data)

    return {
      props: {
        data,
      },
    }
  } catch (err) {
    return {
      props: {
        error: `JSON.stringify(err)`,
      },
    }
  }
}

export default function Home({ data, error }) {
  console.log(data)
  return <p>see console</p>
  // return <code>{JSON.stringify(data ?? error, null, 2)}</code>
}
