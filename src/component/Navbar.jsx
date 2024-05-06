import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {
    const token=localStorage.getItem("token");
    const navigate=useNavigate();
  return (
    <nav className='p-4 md:p-6 shadow-md  bg-white w-full'>
    <div className='container flex justify-between mx-auto flex-col md:flex-row items-center'>
        <img src='https://flipr.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflipr_old_logo.ee0c3d40.png&w=1080&q=75' width={80}></img>
        <a href='#' className='text-xl font-bold mb-4 md:mb-0'></a>
        {
            token ? (
                    <>
                        <span className='mr-4'>Welcome </span>
                        <button className='w-full md:w-auto  p-3 text-white rounded font-bold bg-richblack-500' 
                        onClick={()=>{
                            localStorage.removeItem("token");
                            toast.success("Logged Out")
                            navigate('/login')
                        }}
                        >
                            Logout
                        </button>
                    </>
            ) : (
                <Link to={'/login'}>
                    <button className='w-full md:w-auto p-3 text-white rounded font-bold bg-richblack-700'>
                        Log In
                    </button>
                </Link>
            )
        }
        
    </div>
</nav>
  )
}

export default Navbar