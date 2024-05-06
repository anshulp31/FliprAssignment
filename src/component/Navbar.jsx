import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const token=localStorage.getItem("token");
    const navigate=useNavigate();
  return (
    <nav className='p-4 md:p-6 shadow-md  bg-white w-full'>
    <div className='container flex justify-between mx-auto flex-col md:flex-row items-center'>
        <a href='#' className='text-xl font-bold mb-4 md:mb-0'></a>
        {
            token ? (
                    <>
                        <span className='mr-4'>Welcome </span>
                        <button className='w-full md:w-auto bg-black p-3 text-white rounded font-medium' 
                        onClick={()=>{
                            localStorage.removeItem("token");
                            navigate('/login')
                        }}
                        >
                            Logout
                        </button>
                    </>
            ) : (
                <Link to={'/login'}>
                    <button className='w-full md:w-auto bg-black p-3 text-white rounded font-medium'>
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