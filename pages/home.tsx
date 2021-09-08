import Head from 'next/head'
import styles from '../styles/home.module.css'
import Link from "next/link"
import { GetStaticProps } from 'next';

function page() {
  return (
    <div className={styles.container}>
      <Head>
        <title>だっしゅぼーど</title>
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.container}>
            <h1 className={styles.headerLogo}>
              <Link href='/home'><a>Kyutech Uoodle216(2021) on Proken</a></Link>
            </h1>
            <div className={styles.username}>
              logined by
            </div>
            <div>
              <Link href='/'><a>Logout</a></Link>
            </div>
          </div>
        </header>

          
        <div className={styles.card}>
          <div className={styles.cardItem}>
            <div className={styles.cardContent}>
              <p>共通</p>
            </div>
            <div className={styles.cardLinkContainer}>
              <div className={styles.cardLink}>
                <a>電気回路Ⅰ(2021):電気電子および電気宇宙【03クラス】:Q01:火曜日5時限木曜日4時限(1)</a>
              </div>
            </div>
          </div>

          <div className={styles.cardItem}>
            <div className={styles.cardContent}>
              <p>共通</p>
            </div>
            <div className={styles.cardLinkContainer}>
              <div className={styles.cardLink}>
                <a>電子回路Ⅰ 2021 （電気電子）</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.copyright}>auau</div>
      </footer>
    </div>
  )
}

export default page

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};