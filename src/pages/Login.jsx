import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const BASE_URL="http://localhost:4000/api/v1"
const Login = () => {
  const navigate=useNavigate();
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const {email,password}=formData;
    const handleOnChange = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }

    const handleOnSubmit=async(e)=>{
      e.preventDefault();
      const loginData = {
        ...formData,
      }
      try {
        const response=await axios.post(`${BASE_URL}/login`,loginData);
        console.log(response.data.token);
        localStorage.setItem("token", JSON.stringify(response.data.token))
        navigate('/');

      } catch (error) {
        console.log("error in login ",error)
        toast.error("Error in login");
      }
    }
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen bg-richblack-700 w-screen">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

          <form onSubmit={handleOnSubmit}>
            

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
              Sign In
            </button>
          </form>
          <div className="text-center text-lg">
          not a member yet?
          <Link to={"/signup"} className="text-blue-700 ">
            <span> Sign Up</span>
          </Link>
        </div>
        </div>
      </div>
  )
}

export default Login