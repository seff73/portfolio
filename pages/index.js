import Head from 'next/head';
import NavBar from '../components/NavBar';
import HomePage from './homePage';
import Services from './services';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <HomePage />
      <Services />
      
    </div>
  )
}
