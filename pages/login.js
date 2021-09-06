import Header from 'next/head'
import styles from '../styles/login.module.css'
import React, {Component, useState} from 'react'
import Link from 'next/link'



export default function Home() {
  const [ name, password ] = useState([]);



  return (
    <div>
      <header>
        <title>ろぐいん</title>
      </header>

      <main>
        <div>
          <div>

            <header>
                
                <div>KIT Auto Management</div>
            </header>

            <div className={styles.inputArea}>
              <div>
                <label>ユーザ名</label>
                <input value={name}/>
              </div>

              <div>
                <label>パスワード</label>
                <input value={password}/>
              </div>

              <div>
                <link href="/page"><a>Login</a></link>
              </div>
            </div>
          </div>
        
          <footer>
            <div>
              <p>idp.idm.kyutech.ac.jp</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
