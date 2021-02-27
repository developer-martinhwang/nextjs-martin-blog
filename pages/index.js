// next.js
import Head from 'next/head';
import Link from 'next/link';
// main styles
import styles from '../styles/Home.module.css';
// layouts/Footer.js
import Footer from '../src/layouts/Footer';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Martin's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Martin's Blog</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/modules/module">
            <a className={styles.card}>
              <h3>Modules</h3>
              <p>Story Card</p>
              <p>Accordion Card</p>
            </a>
          </Link>
          <Link href="auths/login">
            <a className={styles.card}>
              <h3>Auth &rarr;</h3>
              <p>Login</p>
            </a>
          </Link>


        </div>
      </main>
      <Footer borderTop="10px solid #303436" 
              marginTop="4em" />
    </div>
  )
}
