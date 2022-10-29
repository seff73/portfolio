import { useState } from 'react';
import { Element } from 'react-scroll';
import emailjs from '@emailjs/browser';

export default function Contact() {    
    const [ templateParams, setTemplateParams ] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [ submitBtnProps, setSubmitBtnProps ] = useState({
        className: 'mt-4 text-xl w-36 h-10 bg-indigo-900 opacity-50 text-white rounded-lg hover:bg-black',
        disabled: true,
    });
    
    const successHidden = 'bg-green-400 text-white px-1 rounded-lg hidden';
    const successBlock = 'bg-green-400 text-white px-1 rounded-lg';
    const errorHidden = 'bg-red-400 text-white px-1 rounded-lg hidden';
    const errorBlock = 'bg-red-400 text-white px-1 rounded-lg';
    const [ successMsg, setSuccessMsg ] = useState(successHidden)
    const [ errorMsg, setErrorMsg ] = useState(errorHidden)
    
    const handleChange = (e) => {
        setTemplateParams({
            ...templateParams,
            [e.target.name]: e.target.value
        });
        if(errorMsg === errorBlock) setErrorMsg(errorHidden)
        if(successMsg === successBlock) setSuccessMsg(successHidden)
        
    };

    const handleEmail = (e) => {
        const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g 
        if(emailValidator.test(e.target.value)) {
            setSubmitBtnProps({
                className:'mt-4 text-xl w-36 h-10 bg-indigo-900 text-white rounded-lg hover:bg-black',
                disabled: false,
            })
            
            
        }
        else {
            setSubmitBtnProps({
                className: 'mt-4 text-xl w-36 h-10 bg-indigo-900 opacity-50 text-white rounded-lg hover:bg-black',
                disabled: true,
            })
            
        }
        setTemplateParams({
            ...templateParams,
            email: e.target.value
        });
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(`${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`, templateParams, `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                setSuccessMsg(successBlock);
                
                setTemplateParams({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
        
                });

                setSubmitBtnProps({
                    className: 'mt-4 text-xl w-36 h-10 bg-indigo-900 opacity-50 text-white rounded-lg hover:bg-black',
                    disabled: true,
                });

            }, function(error) {
                console.log('FAILED...', error);
                setErrorMsg(errorBlock)
            });
    };
    
    return (
    <Element id='contact' name='contact'>
        <div>
            <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
                <p className='text-sm uppercase text-gray-400'>Contact</p>
                <h1 className='text-indigo-900 text-6xl font-bold text-center'>Contact</h1>                
                <div className='md:w-[44.65%] w-[78.8%] flex items-center justify-evenly mt-5'>
                    <div className='md:w-[65%]'>
                        <input
                            type='name'
                            name='name'
                            placeholder='Name'
                            value={templateParams.name}
                            onChange={handleChange}
                            className='w-full mt-5 pb-1 pl-4 border-2 rounded-lg h-10 md:text-base text-base'
                        />
                    </div>
                    <div className='w-full'>
                        <input
                            type='text'
                            name='email'
                            value={templateParams.email}
                            id='email.address'
                            autoComplete='email'
                            placeholder='Email'
                            onChange={handleEmail}
                            className='w-full mt-5 ml-1 pb-1 pl-4 border-2 rounded-lg h-10 md:text-base text-base'
                        />
                    </div>
                </div>
                <div className='flex justify-center text-center md:w-[45%] w-[80%] mt-1'>
                    <input 
                        type='text' 
                        name='subject'
                        value={templateParams.subject}   
                        placeholder='Subject'
                        onChange={handleChange}
                        className='mt-1 pb-1 pl-4 w-full rounded-lg text-blue-800 md:text-base text-base border-2 border-indigo-900h h-10' 
                    />
                </div>
                <div className='md:w-[45%] w-[80%] mt-1'>
                    <textarea 
                        rows='4'
                        name='message'
                        value={templateParams.message}
                        placeholder='Message'
                        required='required'
                        onChange={handleChange}
                        className='w-full mt-1 pl-4 pt-2 pb-2 pr-2 border-2 justify-start rounded-lg h-32 resize-none md:text-base text-base'
                    />
                </div>
                <div className='text-center'>
                    <h3 className={successMsg}>Your message was successfully sent!</h3>
                </div>
                <div className='text-center'>
                    <h3 className={errorMsg}>Sorry:( try again!</h3>
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
