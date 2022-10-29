import Image from 'next/image';
import { Element } from 'react-scroll';
import Netflix from '../public/images/Netflix_app_UI.jpg';
import SmartandSapiens from '../public/images/SmartandSapiens_app.jpg';
import Videogames from '../public/images/videogames_app.jpg';
import Four from '../public/images/4.jpg';
import Five from '../public/images/5.png';
import Six from '../public/images/6.jpg';

export default function work() {
  return (
    <Element id='work' name='work'>
        <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
            <p className='text-sm uppercase text-gray-400'>Portfolio</p>
            <h2 className='text-indigo-900 text-6xl font-bold text-center'>Creative Works</h2>
            <div className='md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10 lg:max-w-[95%] max-w-[133vh]'>
                  <div className='rounded w-80 h-60 shadow-xl relative text-center'
                       onClick={()=> window.open('https://netflix-app-2fa8c.web.app/', '_blank')}
                  >
                      <h2 className='md:text-xl text-base text-indigo-600 font-semibold p-2'>Netflix App UI</h2>
                      <Image 
                          src={Netflix} 
                          alt='one' 
                          layout='fill' 
                          objectFit='contain' 
                          className='p-2 rounded cursor-pointer relative'
                      />
                  </div>
                  <div className='rounded w-80 h-60 shadow-xl relative text-center'
                       onClick={() => window.open('https://smartandsapiens.vercel.app/', '_blank')}
                  >
                      <h2 className='md:text-xl text-base text-indigo-600 font-semibold p-2'>E-commerce Application</h2>
                      <Image 
                          src={SmartandSapiens} 
                          alt='two' 
                          layout='fill' 
                          objectFit='contain' 
                          className='p-2 rounded cursor-pointer'
                      />
                  </div>
                  <div className='rounded w-80 h-60 shadow-xl relative text-center'
                       onClick={() => window.open('https://videogames-app-six.vercel.app/','_blank')}
                  >
                      <h2 className='md:text-xl text-base text-indigo-600 font-semibold p-2'>Videogames App</h2>
                      <Image 
                          src={Videogames} 
                          alt='three' 
                          layout='fill' 
                          objectFit='contain' 
                          className='p-2 rounded cursor-pointer'
                      />
                  </div>
            </div>
            {/*
            <div className='md:flex sm:flex-col md:flex-row justify-center items-start md:gap-10 sm:pb-10 mt-10 lg:max-w-[95%] max-w-[133vh]'>
                  <div className='rounded w-80 h-60 shadow-xl relative'>
                      <Image 
                          src={Four} 
                          alt='four' 
                          layout='fill' 
                          objectFit='cover' 
                          className='p-2 rounded cursor-pointer'
                      />
                  </div>
                  <div className='rounded w-80 h-60 shadow-xl relative'>
                      <Image 
                          src={Five} 
                          alt='five' 
                          layout='fill' 
                          objectFit='cover' 
                          className='p-2 rounded cursor-pointer'
                      />
                  </div>
                  <div className='rounded w-80 h-60 shadow-xl relative'>
                      <Image 
                          src={Six} 
                          alt='six' 
                          layout='fill' 
                          objectFit='cover' 
                          className='p-2 rounded cursor-pointer'
                      />
                  </div>
            </div>
            */}

        </div>
    </Element>
  )
}
