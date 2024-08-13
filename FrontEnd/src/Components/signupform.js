import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignupForm = ({ setIsLoggedIn }) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({ fname: "", lname: "", email: "", password: "", confirmpassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [person,setPerson]=useState("Patient");

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevData) => (
      {
        ...prevData,
        [name]: value,
      }
    ));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      toast.error("Passwords do not match");
    }
    else {
      toast.success("User Created Successfully");
      navigate('/login');
    }
  }

  return (
    <div>
      <div className='flex flex-row bg-gray-800 gap-z-1 my-2 rounded-full max-w-max '>
      <button
                onClick={() => { setPerson("Patient") }}
                className={`${person === "Patient" ? "bg-gray-400 text-white" : "bg-transparent text-gray-300"}  px-3 rounded-full transition-all duration-200`}
            >
                Patient
            </button>
            <button
                onClick={() => { setPerson("MedicalStaff") }}
                className={`${person === "MedicalStaff" ? "bg-gray-400 text-white" : "bg-transparent text-gray-300"}  px-3 rounded-full transition-all duration-200`}
            >
                Medical Staff
            </button>
      </div>
      <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-2 mt-1 overflow-x-hidden overflow-y-hidden' >
        <div className='flex flex-row' >
          <label className='w-1/2 px-1 '><p className='text=[0.875rem] text-gray-200 mb-1 leading-[1.375rem] '>First Name<sup>*</sup></p>
            <input className='bg-gray-800 w-full h-[2rem] rounded-[0.5rem] text-gray-100 p-[12px]'
              type="text" required name="fname" value={formData.fname} onChange={changeHandler} placeholder='Enter First Name' />
          </label>
          <label className='w-1/2 px-1 '><p className='text=[0.875rem] text-gray-200 mb-1 leading-[1.375rem] '>Last Name<sup>*</sup></p>
            <input className='bg-gray-800 w-full h-[2rem] rounded-[0.5rem] text-gray-100 p-[12px]'
              type="text" required name="lname" value={formData.lname} onChange={changeHandler} placeholder='Enter Last Name' />
          </label>
        </div>

        <label className='w-full px-1 '><p className='text=[0.875rem] text-gray-200 mb-1 leading-[1.375rem] '>Email Address <sup>*</sup></p>
          <input className='bg-gray-800 w-full h-[2rem] rounded-[0.5rem] text-gray-100 p-[12px]'
            required type="email" name="email" value={formData.email} placeholder='Enter email id' onChange={changeHandler} />
        </label>
        <div className='flex flex-row '>
          <label className='w-full px-1 relative'><p className='text=[0.875rem] text-gray-200 mb-1 leading-[1.375rem] '>Password  <sup className='text-pink-900'>*</sup></p>
            <input required type={showPassword ? ("text") : ("password")} name="password" value={formData.password} placeholder='Enter Password ' onChange={changeHandler}
              className='bg-gray-800 w-full h-[2rem] rounded-[0.5rem] text-gray-100 p-[12px]'
            />
            <span className='absolute  top-[32px] left-44 curser-pointer ' onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (<AiOutlineEyeInvisible fontSize={20} fill='white' />) : (<AiOutlineEye fontSize={20} fill='white' />)}
            </span>
          </label>
          <label className='w-full px-1 relative'><p className='text=[0.875rem] text-gray-200 mb-1 leading-[1.375rem] '>Confirm Password <sup>*</sup></p>
            <input className='bg-gray-800 w-full h-[2rem] rounded-[0.5rem] text-gray-100 p-[12px]'
              required type={showPassword ? "text" : "password"} name="confirmpassword" value={formData.confirmpassword} placeholder='Confirm Password ' onChange={changeHandler} />
            <span className='absolute  top-[32px] left-44 curser-pointer ' onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible fontSize={20} fill='yellow' /> : <AiOutlineEye fontSize={20} fill='white' />}
            </span>
          </label>
        </div>
        <button className='bg-yellow-500 rounded-[8px] font-medium text-black px-[12px] py-[6px]' >Create Account</button>
      </form>
    </div>
  );
}

export default SignupForm;
