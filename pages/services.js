import { Element } from 'react-scroll';
import { GiCardboardBox } from 'react-icons/gi';
import { HiColorSwatch } from 'react-icons/hi';
import { MdDeveloperBoard } from 'react-icons/md';
import { AiOutlineBlock } from 'react-icons/ai';
import { RiTeamLine } from 'react-icons/ri';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { MdOutlineDevices } from 'react-icons/md';
import { RiUserHeartLine } from 'react-icons/ri';

export default function services() {
  return (
    <Element id='services' name='services'>
        <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
            <p className='text-sm uppercase text-gray-400'>
                My skills
            </p>
            <h1 className='text-indigo-900 text-6xl font-bold text-center'>
                My Expertise
            </h1>
            <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
                <div className='flex flex-col justify-center items-center'>
                    { /* First Block*/ }
                    <div className='flex justify-center items-center cursor-pointer'>
                        <MdOutlineDevices className='w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                        <h2 className='md:text-xl text-base text-indigo-600 font-semibold '>
                           Front-End Dev 
                        </h2>
                    </div>
                    <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                        HTML5/CSS3, JavaScript, React Js, Next Js, Content managment systems and E-commerce Platforms,
                        Responsive and Mobile Desing, SASS, Tailwind, BootStrap
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    { /* Second Block*/ }
                    <div className='flex justify-center items-center cursor-pointer'>
                        <AiOutlineCloudServer className='w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                        <h2 className='md:text-xl text-base text-indigo-600 font-semibold'>
                           Server side Dev 
                        </h2>
                    </div>
                    <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                        Experience with RESTful services
                        and APIs, PostgreSQL, Node Js, Express Js, Firebase, Sanity, Server side Security,
                        Git and Version Control Systems
                    </p>
                </div>

            </div>
            
            { /* Second section */ }
            <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
                <div className='flex flex-col justify-center items-center'>
                    { /* Third Block*/ }
                    <div className='flex justify-center items-center cursor-pointer'>
                        <RiTeamLine className='w-10 h-10 bg-green-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                        <h2 className='md:text-xl text-base text-indigo-600 font-semibold '>
                           Soft Skills
                        </h2>
                    </div>
                    <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                        Comunication, Collaboration, TeamWork, Critical Thinking, Problem-Solving, Organization,
                        Resourcefulness, Emotional Intelligence, Continuous Learning and Adaptability
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    { /* Fourth Block*/ }
                    <div className='flex justify-center items-center cursor-pointer'>
                        <RiUserHeartLine  className='md:w-10 md:h-10 w-[1.6rem] h-[2.4rem] bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                        <h2 className='md:text-xl text-base text-indigo-600 font-semibold'>
                           Interests 
                        </h2>
                    </div>
                    <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                        Big Data, Intelligence Artificial, Web 3.0, Internet of Things, Cyber Security,
                        Hyperautomation, Machine Learning, Robotic Process Automation, Leadership,
                        Blockchain and SmartContracts

                    </p>
                </div>
            </div>
        </div>
    </Element>
  );
};
