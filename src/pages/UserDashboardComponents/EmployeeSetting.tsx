import React from 'react'

const EmployeeSetting:React.FC = () => {
  return (
    <section className="h-full bg-main ">
  <h6 className="font-bold sm:text-2xl text-xl">Settings</h6>
  <div className="mt-8 flex sm:flex-row flex-col gap-8">
    <form className="flex-1 rounded-lg border border-gray-200 bg-white p-6">
      <p className="mb-4 text-t-lg font-medium">Change your Password</p>
      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="oldPassword"
            className="block text-t-md text-brand-black mb-2"
          >
            Old Password<span className="text-brand-red">*</span>
          </label>
          <div className="   relative ">
            <input
              className="block w-full border p-3 text-brand-black focus:outline-none border-gray-200 rounded-lg"
              placeholder="Enter your old password"
              type="password"
              name="oldPassword"
            />
            <button
              type="button"
              className="absolute right-1 top-2.5 flex h-8 w-10 items-center justify-center rounded-md border-gray-300  hover:border-gray-400 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-gray-300"
              >
                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <label
            htmlFor="newPassword"
            className="block text-t-md text-brand-black mb-2"
          >
            New Password<span className="text-brand-red">*</span>
          </label>
          <div className="   relative ">
            <input
              className="block w-full border p-3 text-brand-black focus:outline-none border-gray-200 rounded-lg"
              placeholder="Enter your new password"
              type="password"
              name="newPassword"
            />
            <button
              type="button"
              className="absolute right-1 top-2.5 flex h-8 w-10 items-center justify-center rounded-md border-gray-300  hover:border-gray-400 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-gray-300"
              >
                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-t-md text-brand-black mb-2"
          >
            Confirm Password<span className="text-brand-red">*</span>
          </label>
          <div className="   relative ">
            <input
              className="block w-full border p-3 text-brand-black focus:outline-none border-gray-200 rounded-lg"
              placeholder="Confirm your password"
              type="password"
              name="confirmPassword"
            />
            <button
              type="button"
              className="absolute right-1 top-2.5 flex h-8 w-10 items-center justify-center rounded-md border-gray-300  hover:border-gray-400 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-gray-300"
              >
                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 hover:shadow-lg h-10 px-5 py-5 mt-4"
          type="submit"
        >
          Save Changes
        </button>
      </div>
    </form>
    <section className="h-fit flex-1 rounded-lg border border-gray-200 bg-white p-6">
      <p className="text-t-lg font-medium">Notification Setting</p>
      <ul className="mt-6 flex flex-col gap-7">
        <li className="flex items-center justify-between">
          All notifications{" "}
          <button
            className="bg-red-400 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
            id="headlessui-switch-:r3u:"
            role="switch"
            type="button"
            tabIndex={0}
            aria-checked="true"
            data-headlessui-state="checked"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
            />
          </button>
        </li>
        <li className="flex items-center justify-between">
          Notify me on new Internship post{" "}
          <button
            className="bg-red-400 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
            id="headlessui-switch-:r3v:"
            role="switch"
            type="button"
            tabIndex={0}
            aria-checked="true"
            data-headlessui-state="checked"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
            />
          </button>
        </li>
        <li className="flex items-center justify-between">
          Notify me on new event post{" "}
          <button
            className="bg-red-400 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
            id="headlessui-switch-:r40:"
            role="switch"
            type="button"
            tabIndex={0}
            aria-checked="true"
            data-headlessui-state="checked"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
            />
          </button>
        </li>
        <li className="flex items-center justify-between">
          Notify me on Application Invitation{" "}
          <button
            className="bg-red-400 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
            id="headlessui-switch-:r41:"
            role="switch"
            type="button"
            tabIndex={0}
            aria-checked="true"
            data-headlessui-state="checked"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
            />
          </button>
        </li>
        <li className="flex items-center justify-between">
          Notify me on preferred Internship{" "}
          <button
            className="bg-red-400 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
            id="headlessui-switch-:r42:"
            role="switch"
            type="button"
            tabIndex={0}
            aria-checked="true"
            data-headlessui-state="checked"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
            />
          </button>
        </li>
        <li className="flex items-center justify-between">
          Notify me on preferred Job{" "}
          <button
            className="bg-red-400 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
            id="headlessui-switch-:r43:"
            role="switch"
            type="button"
            tabIndex={0}
            aria-checked="true"
            data-headlessui-state="checked"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
            />
          </button>
        </li>
      </ul>
    </section>
  </div>
  <h6 className="mb-4 mt-8 text-xl sm:text-2xl font-medium">Danger Zone</h6>
  <div className="flex items-center justify-between gap-4 sm:flex-row flex-col rounded-lg border border-gray-200 bg-white p-4">
    <span>
      <p className="text-t-lg font-medium">Deactivate Account</p>
      <p className="text-gray-400">
        Once you deactivate this account, there is no going back. Please be
        certain.
      </p>
    </span>
    <button className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 hover:shadow-lg h-10 px-5 py-5 sm:w-auto w-full">
      Deactivate Account
    </button>
  </div>
</section>

  )
}

export default EmployeeSetting
