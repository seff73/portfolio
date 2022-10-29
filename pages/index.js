import Head from 'next/head';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Clients from './clients';
import Contact from './contact';
import HomePage from './homePage';
import Services from './services';
import Work from './work';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joel Enrique Culpa - Software Engineer - Portfolio - Frontend Engineer - Software Developer</title>
        <meta name="Frontend Engineer - Software Developer" content="JOEL ENRIQUE CULPA - SOFTWARE ENGINEER" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <HomePage />
      <Services />
      <Work />
      <Clients />
      <Contact />
      <Footer />
      
    </div>
  )
}
