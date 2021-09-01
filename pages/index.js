//import Image from 'next/image';
import Header from 'next/head'
// import styles from '../styles/Home.module.css'
import React, {Component} from 'react'
//import { connect } from 'react-redux';
//import Router from 'next/router';
//import firebase from "firebase";
import Account from '../components/account'



export default function Home() {
  const [ session, loading ] = useSession()

  return (
    <div className={styles.container}>
      <Header>
        <title>Page title</title>
        <meta name="description" content="descrive site here" />
        <link rel="icon" href="/" />
      </Header>

      <main className={styles.main}>
        <div>
          <Account onLogined={this.logined} onLogouted={this.logouted} />
          {/* <>
            {!session && <>
              Not signed in <br/>
              <button onClick={signIn}>Sign in</button>
            </>}
            {session && <>
              Signed in as {session.user.email} <br/>
              <button onClick={signOut}>Sign out</button>
            </>}
          </> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a>auauau</a>
      </footer>
    </div>
  )
}
