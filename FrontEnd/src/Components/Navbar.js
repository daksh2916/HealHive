import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png';
import { toast } from 'react-hot-toast';
import "react-toastify/ReactToastify.css"

const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
 const logout=()=>{
    setIsLoggedIn(false);
    toast.success("Logged Out"
        
    );
 };

  return (
    <div className="flex justify-evenly items-center w-11/12 max-w-[1160px] py-4 mx-auto px-0">
      <Link to="/" className=''>
        <img src={logo} alt="logo" width={80} loading="lazy" className='rounded-[50px] pl-0 mr-auto' />
      </Link>
      <nav className='flex gap-x-[10rem]'>
        <ul className="flex  gap-8 m-3 text-white">
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="#" >About</Link>
          </li>
          <li>
            <Link to="#" >Contact</Link>
          </li>
        </ul>
              <div className='flex  text-white gap-x-4 items-center'>
                  { !isLoggedIn&&
                      <Link to="/login">
                          <button className='bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-gray-700'>
                              Login
                          </button>
                      </Link>
                  }
                  {  !isLoggedIn&&
                      <Link to="/signup">
                          <button className='bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-gray-700'>
                              SignUp
                          </button>
                      </Link>
                  }
                  {  isLoggedIn&&
                      <Link to="/">
                          <button onClick={logout} className='bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-gray-700'>
                              Logout
                          </button>
                      </Link>
                  }
                  {  isLoggedIn&&
                      <Link to="/dashboard">
                          <button className='bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-gray-700'>
                              Dashboard
                          </button>
                      </Link>

                  }
              </div>
      </nav>
    </div>
  );
};

export default Navbar;
