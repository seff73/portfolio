import { Element } from 'react-scroll';

export default function contact() {
  return (
    <Element id='contact' name='contact'>
        <div>
            <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
                <p className='text-sm uppercase text-gray-400'>Contact</p>
                <h1 className='text-indigo-900 text-6xl font-bold text-center'>Contact</h1>
                <div className='flex justify-center text-center md:w-1/2 w-[90%] my-5'>
                    <input 
                        type='text' 
                        name='email-address' 
                        id='email.address' 
                        autoComplete='email' 
                        placeholder='xyz@gmail.com'
                        className='mt-5 pb-1 pl-8 w-full rounded-tl-lg rounded-bl-lg text-blue-800 text-xl border-2 border-indigo-900h h-10' 
                    />
                    <button 
                        className='mt-5 text-xl w-36 h-10 bg-indigo-900 text-white rounded-tr-lg rounded-br-lg hover:bg-black' 
                        type='submit'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </Element>
  )
}
