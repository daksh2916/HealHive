import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';

const Loginform = ({setIsLoggedIn}) => {
const navigate =useNavigate();

    const [formdata,setFormData]=useState({email:"",password:""});
  const [showPassword,setShowPassword]=useState(false);
  function changeHandler(event) {
    const {name,value} = event.target;
    setFormData((prevdata)=>(
      {
        ...prevdata,
        [name]:value,
      }

    ));
    

  }

  function submitHandler(event){
event.preventDefault();
setIsLoggedIn(true);
toast.success("Logged In");
navigate("/dashboard");
  };
  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-2 mt-4 overflow-x-hidden overflow-y-hidden'>
        <label className='w-full px-1 '>
          <p className='text=[0.875rem] text-gray-200 mb-1 leading-[1.375rem] '>Email Address <sup className='text-pink-900'>*</sup></p>
        <input required type="email" name="email" value={formdata.email} placeholder='Enter email id' onChange={changeHandler} className='p-[12px] bg-gray-800 w-full h-[2rem] rounded-[0.5rem] text-gray-100' /></label>

        <label className='w-full px-1 relative'><p className='text=[0.875rem] text-gray-200 mb-1 leading-[1.375rem] '>Password  <sup className='text-pink-900'>*</sup></p>
          <input required type={showPassword?("text"):("password")} name="password" value={formdata.password} placeholder='Enter Password ' onChange={changeHandler}
          className='bg-gray-800 w-full h-[2rem] rounded-[0.5rem] text-gray-100 p-[12px]'
          />
          <span className='absolute right-3 top-[30px] curser-pointer ' onClick={()=>setShowPassword((prev)=>!prev)}>
            {showPassword?(<AiOutlineEyeInvisible fontSize={20} fill='white' />):(<AiOutlineEye fontSize={20} fill='white' />)}
          </span>
          <Link to="#">
          <p className='mt-1 right-1 text-[0.725rem] text-gray-300 max-w-max ml-auto'>Forgot Password</p>
          </Link>
        </label>
        <button className='bg-yellow-500 rounded-[8px] font-medium text-black px-[12px] py-[6px]'>Sign In</button>
    </form>
  )
}

export default Loginform;