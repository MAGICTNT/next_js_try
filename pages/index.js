import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <><Head>
      <title>Blog next.js</title>
    </Head>
      <body className={styles.section}>
        <section className={styles.container}>
          <div>
            <h1>
              Bonjour je suis Maxime Javaux et ceci est mon premier test avec :
            </h1>
            <Link href="https://nextjs.org">
              <a className={styles.title}>next.js</a>
            </Link>
          </div>

          <div>
            <p className={styles.pHome}>
              Dans le futur cette page deviendra un blogue pour me faire la main
              sur ce framwork mais vous trouverai quelque petit projet sur mon
            </p>
            <Link href="https://github.com/MAGICTNT">
              <a className={styles.lien}>gitHub</a>
            </Link>
          </div>
        </section>
      </body></>
  );
}
