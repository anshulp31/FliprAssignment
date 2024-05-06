import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Login from './pages/Login'
import OpenRoute from './component/OpenRoute'

function App() {
  
  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-700 font-inter">
      <Routes>
        <Route path="/" element={<Home />} />
        {/** All the open route that all user can access the route */}
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App
