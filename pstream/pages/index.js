import Head from 'next/head'
import Navbar from './navbar'
import Content from './content'
import Footer from './footer'
import styles from '../styles/index.module.css'

import logo from '../public/logo.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pstream</title>
        <meta name="Pstream" content="Private live streaming" />
        <link rel="icon" href="/logo.png" />
      </Head>
      
      <main>
        <Navbar/>
        <Content/>
        <Footer/>
      </main>
    </div>
  )
}
