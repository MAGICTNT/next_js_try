/* eslint-disable react/jsx-key */

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home({ posts, date }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCount(n => n + 1), 1000)
    return () => {
      clearInterval(timer)
    }
}, [])

  return (
    <>
      <Head>
        <title>test site</title>
      </Head>
      <h1>date : { date }</h1>
      <h1>count : { count }</h1>
      <ul>
        {posts.map(post => <li>
          <Link href={`/blog/${post.id}`}>
          <a>
          <h3>{post.id} - { post.title } </h3>
          </a>
          </Link>
        </li>)}
      </ul>
    </>
  )
}

export async function getStaticProps() {
      const posts =await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
        .then(r => r.json())
  return {   // je retourne un objet qui contien props et dans c'est props on renvoi les articles
    props: {
      posts,
      date: (new Date()).toString()
    },
    revalidate: 5,
  }
}

