// next.js
import Head from 'next/head';
import Link from 'next/link';
// main styles
import styles from '../styles/Home.module.css';
// layouts/Footer.js
import Footer from '../layouts/Footer';
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

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/modules/module" className={styles.card}>
            <h3>Modules</h3>
            <p>Story Card</p>
            <p>Accordion Card</p>
          </a>

          <a href="auth/login" className={styles.card}>
            <h3>Auth &rarr;</h3>
            <p>Login</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <Footer borderTop="10px solid #303436" 
              marginTop="4em" />
    </div>
  )
}
