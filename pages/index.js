import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'

function page() {
  return (
    <div className={styles.container}>
      <Head>
        <title>だっしゅぼーど</title>
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.container}>
            <h1 >
              <a>Kyutech Uoodle216(2021) on Proken</a>
            </h1>
            <div className={styles.username}>
              logined by
            </div>
          </div>

          <div>
            <div className={styles.card}>
              <div>
                <div>
                  <p>共通</p>
                </div>
                <div>
                  <div>
                    <a>電気回路Ⅰ(2021):電気電子および電気宇宙【03クラス】:Q01:火曜日5時限木曜日4時限(1)</a>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <div>
                </div>
                <div>
                  <p>共通</p>
                </div>
                <div>
                  <div>
                    <a>電子回路Ⅰ 2021 （電気電子）</a>
                  </div>
                </div>
              </div>

              
              

              

            </div>
          </div>
        </header>


      </main>

      <footer classNameN={styles.footer}>
        <a>auau</a>
      </footer>
    </div>
  )
}

export default page