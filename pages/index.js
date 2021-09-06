//import Image from 'next/image';
import Header from 'next/head'
import styles from '../styles/Home.module.css'
import React, {Component, useState} from 'react'
//import { connect } from 'react-redux';
//import Router from 'next/router';
//import firebase from "firebase";
import Account from '../components/account'



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
                <button>Login</button>
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
