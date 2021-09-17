import styles from '../styles/login.module.css'
import { GetStaticProps } from 'next';
import { useEffect, FC, useState } from 'react'
import { useRouter } from 'next/router'


import { auth } from '../utils/firebase'

const Home: FC = (props: any) => {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState<null | {object}>(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : router.push('/login')
    })
  }, [])

  const logOut = async () => {
    try {
      await auth.signOut()
      router.push('/login')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <pre>{currentUser && JSON.stringify(currentUser, null, 4)}</pre>
      <button onClick={logOut}>Logout</button>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home