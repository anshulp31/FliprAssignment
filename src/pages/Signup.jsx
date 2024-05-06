import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const BASE_URL="http://localhost:4000/api/v1";
const Signup = () => {
    const navigate = useNavigate()
    const [formData,setFormData]=useState({
        username:"",
        email:"",
        password:""
    })

    const {username,email,password}=formData;

    // Handle input fields, when some value changes
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = async(e) => {
        e.preventDefault()
    
        
        const signupData = {
          ...formData,
        }
        // console.log(signupData)
        try {
            const response=await axios.post(`${BASE_URL}/signup`,signupData);
            console.log(response);
            navigate('/login');
        } catch (error) {
            console.log(error)
        }
        // setFormData({
        //     username:"",
        //     email: "",
        //     password: "",
            
        // })
    }

  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center min-h-screen bg-richblack-700 w-screen">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

          <form onSubmit={handleOnSubmit}>
            <div className="mb-4">
              <label for="username" class="block text-gray-700">
                Username:
              </label>
              <input
                required
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleOnChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none "
                placeholder="Enter your username"
              />
            </div>

            <div className="mb-4">
              <label for="email" class="block text-gray-700">
                Email:
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none "
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label for="password" class="block text-gray-700">
                Password:
              </label>
              <input
                required
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-richblack-600 text-white rounded-lg py-2 px-4 focus:outline-none "
            >
              Sign Up
            </button>
          </form>
          <div className="text-center text-lg">
          Already a member?
          <Link to={"/login"} className="text-blue-700 ">
            <span> Sign in</span>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
}

export default Signup