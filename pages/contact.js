import { useState } from 'react';
import { Element } from 'react-scroll';

export default function contact() {    
    const params = {
        name: '',
        email: '',
        subject: '',
        message: '',
    };

    const [ submitBtnProps, setSubmitBtnProps ] = useState({
        className: 'mt-5 text-xl w-36 h-10 bg-indigo-900 opacity-50 text-white rounded-lg hover:bg-black',
        disabled: true,
    });

    const handleChange = (e) => {
        params[e.target.name] = e.target.value
    };

    const handleEmail = (e) => {
        const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if(emailValidator.test(e.target.value)) {
            setSubmitBtnProps({
                className:'mt-5 text-xl w-36 h-10 bg-indigo-900 text-white rounded-lg hover:bg-black',
                disabled: false,
            })
            console.log(submitBtnProps.disabled)
        }
        else {
            setSubmitBtnProps({
                className: 'mt-5 text-xl w-36 h-10 bg-indigo-900 opacity-50 text-white rounded-lg hover:bg-black',
                disabled: true,
            });
        }
        params.email = e.target.value;
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(params)
    };
    
    return (
    <Element id='contact' name='contact'>
        <div>
            <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
                <p className='text-sm uppercase text-gray-400'>Contact</p>
                <h1 className='text-indigo-900 text-6xl font-bold text-center'>Contact</h1>                
                <div className='md:w-[45%] w-[80%] flex items-center justify-evenly mt-5'>
                    <div className='md:w-[65%]'>
                        <input
                            type='name'
                            name='name'
                            placeholder='Name'
                            onChange={handleChange}
                            className='w-full mt-5 pb-1 pl-4 border-2 rounded-lg h-10 md:text-lg text-base'
                        />
                    </div>
                    <div className='w-full'>
                        <input
                            type='text'
                            name='email-address'
                            id='email.address'
                            autoComplete='email'
                            placeholder='Email'
                            onChange={handleEmail}
                            className='w-full mt-5 ml-1 pb-1 pl-4 border-2 rounded-lg h-10 md:text-lg text-base'
                        />
                    </div>
                </div>
                <div className='flex justify-center text-center md:w-[45%] w-[80%] mt-1'>
                    <input 
                        type='text' 
                        name='subject'   
                        placeholder='Subject'
                        onChange={handleChange}
                        className='mt-1 pb-1 pl-4 w-full rounded-lg text-blue-800 md:text-lg text-base border-2 border-indigo-900h h-10' 
                    />
                </div>
                <div className='md:w-[45%] w-[80%] mt-1'>
                    <textarea 
                        rows='4'
                        name='message'
                        placeholder='Message'
                        required='required'
                        onChange={handleChange}
                        className='w-full mt-1 pl-4 pt-2 pb-2 pr-2 border-2 justify-start rounded-lg h-32 resize-none md:text-lg text-base'
                    />
                </div>
                <div>
                    <button 
                        className={submitBtnProps.className} 
                        type='submit'
                        onClick={handleSubmit}
                        disabled={submitBtnProps.disabled}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </Element>
  )
}
