//
import Link from 'next/link'

export default function Post({ post }) {
    return (
    <>
            <main>
            <Link href="/">
            <a>revenir à l'accueil</a>
            </Link>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </main>
    </>
    )
}

// export async function getStaticProps({ params }) {
export async function getServerSideProps({ params }) { //pour une l'ogique coté serveur , il est unpeux plu long et besoin de node.js
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then(r => r.json())
  return {
    // je retourne un objet qui contien props et dans c'est props on renvoi les articles
    props: {
      post
    },
  };
}

// export async function getStaticPaths() {
//       const posts =await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
//         .then(r => r.json())
//   return {   // je retourne un objet qui contien props et dans c'est props on renvoi les articles
//     paths: posts.map(post => ({
//       params: {id: post.id.toString()}
//     })),
//     fallback: false,
//   }
// }