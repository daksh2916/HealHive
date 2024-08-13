import React from 'react';
import Signupform from './signupform';
import Loginform from './loginform';
import {FcGoogle} from 'react-icons/fc'

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
    return (
        <div className='flex w-9/12 max-w-[1160px] py-3 mx-auto gap-x-24 gap-y-[10rem]'>
            <div className='w-11/12 max-1-[450px] ml-3 mr-0'>
            <h1
                className='text-gray-400 font-semibold text-[1.875rem] leading-[2.375rem]'
                >{title}</h1>
                <p className=' text-[1.125rem] leading-[1.635rem] mt-3'>
                    <span className='text-gray-100'>{desc1}</span>
                    <br/>
                    <span className='text-blue-100 italic'>{desc2}</span>
                </p>
                {formType === "signup" ? <Signupform setIsLoggedIn={setIsLoggedIn} /> : <Loginform setIsLoggedIn={setIsLoggedIn} />}

                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-gray-700'></div>
                    <p className='text-gray-700 font-medum leading-[1.375rem]'>OR</p>
                    <div className='w-full h-[1px] bg-gray-700'></div>
                </div>
                <button className='flex w-full justify-center items-center rounded-[8px] font-medium text-gray-400 border border-gray-400 px-[12px] py-[8px] gap-x-2 mt-6'>
                    <FcGoogle/>
                    <p>Sign Up with Google</p>
                </button>
            </div>
            <div className='w-10/12'>
                <img
                    src={image}
                    alt="Signup"
                    width={400}
                    height={558}
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default Template;
