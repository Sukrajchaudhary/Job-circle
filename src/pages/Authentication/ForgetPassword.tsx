import { CircleDot } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ForgetPassword:React.FC = () => {
  return (
    <section className="p-4">
    <div className="max-w-7xl mx-auto p-4 justify-center items-center py-16">
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center items-center gap-2 mx-auto">
          <div className="hover:translate-x-1 transition-all gap-2 flex justify-center items-center">
            <CircleDot size={36} color="#267d38" strokeWidth={3} />
          </div>
          <h1 className="text-black] font-extrabold font-sans tracking-wider text-xl">
            JOB CIRCLE
          </h1>
        </div>
        <form className="mt-6">
          
        <div>
              <label
                htmlFor="Email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Enter your Email *
              </label>
              <input
                type="Email"
                placeholder="Enter your email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          <div className="mt-6">
            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Send Resend Link
            </button>
          </div>
        </form>
        
        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Try Password {" "}?{" "}
          <Link
            to="/Login"
            className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >
           Login
          </Link>
        </p>
      </div>
    </div>
  </section>
  )
}

export default ForgetPassword
