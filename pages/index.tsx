import styles from '../styles/login.module.css'
import Head from "next/head";
// import React, {useState} from 'react';
import { GetStaticProps } from 'next';
import Link from "next/link"


export default function Home() {

  // const [ user ] = useState([]);

  // const [ pwd ] = useState([]);

  return (
    <div>
      <Head>
        <title>ろぐいん</title>
      </Head>

      <main>
        <div>
          <div>

            <header>
                
                <div>KIT Auto Management</div>
            </header>

            <div className={styles.inputArea}>
              <div>
                <label>ユーザ名</label>
                <input/>
              </div>

              <div>
                <label>パスワード</label>
                <input/>
              </div>

              <div>
                <Link href="/home"><a>Login</a></Link>
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
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};