import React from 'react'

const Skills:React.FC = () => {
  return (
    <div className=" lg:ml-[270px] w-full">
  <form className="border border-gray-200 flex-1 rounded-lg bg-white px-4 sm:px-8 py-6">
    <h5 className="font-medium text-xl sm:text-2xl">Skills</h5>
    <p className="mb-4 mt-1 text-gray-400">
      Only list relevant skills. E.g. communication, computer, leadership,
      organizational or problem-solving skills.
    </p>
    <div>
{/* skills TODO */}
      <div />
    </div>
    <div className="mt-8">
      <div className=" flex justify-end">
        <button
          className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 hover:shadow-lg h-10 px-5 py-5 ml-auto"
          type="submit"
        >
          Save
        </button>
      </div>
    </div>
  </form>
</div>

  )
}

export default Skills
