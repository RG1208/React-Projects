import React, { useState } from 'react'

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => { 
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setPassword("")
   }

  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen">
        <div>
          <form 
          onSubmit={submitHandler}
          className="flex flex-col justify-center items-center">

            <input
              required
              value={email}
              onChange={(e) => { 
                setEmail(e.target.value)
               }}
              className="m-2 px-4 py-2 w-80 border-2 border-red-800 rounded-2xl bg-transparent placeholder:text-gray-500 text-gray-400 focus:outline-none"
              type="email"
              placeholder="Email"
            />

            <input
              required
              value={password}
              onChange={(e) => { 
                setPassword(e.target.value)
               }}
              className="m-2 px-4 py-2 w-80 border-2 border-red-800 rounded-2xl bg-transparent placeholder:text-gray-500 text-gray-400 focus:outline-none"
              type="password"
              placeholder="Password"
            />

            <button className="mt-3 h-10 w-80 rounded-full bg-red-900 text-white hover:bg-red-700 transition duration-200">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
