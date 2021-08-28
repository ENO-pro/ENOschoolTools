import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'


export default function Home() {
  const [ session, loading ] = useSession()

  return (
    <div className={styles.container}>
      <Head>
        <title>Page title</title>
        <meta name="description" content="descrive site here" />
        <link rel="icon" href="/" />
      </Head>

      <main className={styles.main}>
        <div>
          <>
            {!session && <>
              Not signed in <br/>
              <button onClick={signIn}>Sign in</button>
            </>}
            {session && <>
              Signed in as {session.user.email} <br/>
              <button onClick={signOut}>Sign out</button>
            </>}
          </>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>auauau</a>
      </footer>
    </div>
  )
}
