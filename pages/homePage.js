import React from 'react';
import Image from 'next/image';
import heroImage from '../public/images/heroimage.jpg';
import { Element } from 'react-scroll';

export default function homePage() {
  return (
    <Element id='home' name='home'>
        <div>
            <div className='flex justify-center text-center md:mx-20 md:pt-32 pt-28'>
                <div className='w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block min-w-[22rem] max-w-[24rem]'>
                    <Image 
                        src={heroImage} 
                        alt='heroImage' 
                        layout='fill' 
                        objectFit='cover' 
                        className='rounded-full cursor-pointer hidden md:block'
                />
                </div>
                <div className='flex flex-col md:ml-20 mx-10 mt-10 max-w-[40rem]'>
                    <h1 className='font-bold text-7xl text-left mb-5'>
                        Hello, I am <span className='text-indigo-900'>Joel</span>
                    </h1>
                    <p className='text-left font-normal mb-5 flex-wrap'>
                        { /*Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                        obcaecati ut quo laudantium neque mollitia sit sed praesentium vel
                        amet exercitationem expedita libero ipsa temporibus aliquid tempora, 
                        dolorem, quae ad! Iure
                        obcaecati ut quo laudantium neque */ }
                        Front-End Engineer with expertise on development websites and professional-quality applications for the browser.
                        Understanding of design principles, UI/UX, and responsive design.
                        Development Back-end servers and RESTful APIs.
                        Positive attitude, strong work ethic, out-of-the-box thinking and high level of professional integrity.
                    </p>
                    <a 
                        href='#' 
                        className='font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black'>
                        See My Portfolio !
                    </a>
                </div>
            </div>
        </div>
    </Element>
  )
}
