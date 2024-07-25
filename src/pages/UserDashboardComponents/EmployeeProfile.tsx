import React from "react";

const EmployeeProfile: React.FC = () => {
  return (
    <main className="flex gap-8 py-8 md:pt-16  lg:flex-row flex-col">
      <aside className=" lg:fixed lg:w-64 md:pb-6">
        <ul className="font-medium flex gap-2 overflow-y-scroll md:overflow-auto lg:block">
          <li className=" min-w-fit">
            <a
              className="  bg-white text-brand-red mb-2 flex items-center rounded-lg  px-4 py-3  hover:bg-white "
              href="/dashboard/candidate/profile"
            >
              <div className="text-[20px] transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6667 13.75H7.33341C5.30837 13.75 3.66675 15.3916 3.66675 17.4167V19.25H18.3334V17.4167C18.3334 15.3916 16.6918 13.75 14.6667 13.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.0001 10.0833C13.0251 10.0833 14.6667 8.44171 14.6667 6.41667C14.6667 4.39162 13.0251 2.75 11.0001 2.75C8.97504 2.75 7.33341 4.39162 7.33341 6.41667C7.33341 8.44171 8.97504 10.0833 11.0001 10.0833Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="ml-3">About</span>
            </a>
          </li>
          <li className=" min-w-fit">
            <a
              className=" text-gray-400 mb-2 flex items-center rounded-lg  px-4 py-3  hover:bg-white "
              href="/dashboard/candidate/profile/education"
            >
              <div className="text-[20px] transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <span className="ml-3">Education</span>
            </a>
          </li>
          <li className=" min-w-fit">
            <a
              className=" text-gray-400 mb-2 flex items-center rounded-lg  px-4 py-3  hover:bg-white "
              href="/dashboard/candidate/profile/projects"
            >
              <div className="text-[20px] transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
              <span className="ml-3">Projects</span>
            </a>
          </li>
          <li className=" min-w-fit">
            <a
              className=" text-gray-400 mb-2 flex items-center rounded-lg  px-4 py-3  hover:bg-white "
              href="/dashboard/candidate/profile/experience"
            >
              <div className="text-[20px] transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-briefcase-business h-6 w-6"
                >
                  <path d="M12 12h.01" />
                  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                  <rect width={20} height={14} x={2} y={6} rx={2} />
                </svg>
              </div>
              <span className="ml-3">Experience</span>
            </a>
          </li>
          <li className=" min-w-fit">
            <a
              className=" text-gray-400 mb-2 flex items-center rounded-lg  px-4 py-3  hover:bg-white "
              href="/dashboard/candidate/profile/skills"
            >
              <div className="text-[20px] transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <span className="ml-3">Skills</span>
            </a>
          </li>
          <li className=" min-w-fit">
            <a
              className=" text-gray-400 mb-2 flex items-center rounded-lg  px-4 py-3  hover:bg-white "
              href="/dashboard/candidate/profile/achievement"
            >
              <div className="text-[20px] transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                  />
                </svg>
              </div>
              <span className="ml-3">Achievement</span>
            </a>
          </li>
          <li className=" min-w-fit">
            <a
              className=" text-gray-400 mb-2 flex items-center rounded-lg  px-4 py-3  hover:bg-white "
              href="/dashboard/candidate/profile/training"
            >
              <div className="text-[20px] transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                <svg
                  width={20}
                  height={20}
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.66699 16.6673V3.33399L18.3337 3.33398V16.6673H1.66699Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16699 6.66602H10.8337"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4.16699 9.16602H7.50035"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15.0004 12.3577C15.9713 12.0146 16.667 11.0885 16.667 10C16.667 8.61931 15.5477 7.5 14.167 7.5C12.7863 7.5 11.667 8.61931 11.667 10C11.667 11.0885 12.3627 12.0146 13.3337 12.3577V15L14.167 14.1667L15.0004 15V12.3577Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="ml-3">Training</span>
            </a>
          </li>
          <li className=" min-w-fit">
            <a
              className=" text-gray-400 mb-2 flex items-center rounded-lg  px-4 py-3  hover:bg-white "
              href="/dashboard/candidate/profile/language"
            >
              <div className="text-[20px] transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                  />
                </svg>
              </div>
              <span className="ml-3">Language</span>
            </a>
          </li>
          <li className=" min-w-fit">
            <a
              className=" text-gray-400 mb-2 flex items-center rounded-lg  px-4 py-3  hover:bg-white "
              href="/dashboard/candidate/profile/email-phone"
            >
              <div className="text-[20px] transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <span className="ml-3">Email and Phone</span>
            </a>
          </li>
        </ul>
      </aside>
      <div className=" lg:ml-[270px] w-full">
        <div className="flex-1 flex flex-col gap-10">
          <section className="border border-gray-200 flex-1 rounded-lg bg-white px-4 sm:px-8 py-6">
            <h5 className="font-medium text-xl sm:text-2xl ">About yourself</h5>
            <p className="mb-4 mt-1 text-gray-400">
              Fill out your primary information.
            </p>
            <label htmlFor="upload-button">
              <div className="inline-flex items-center gap-3 cursor-pointer mb-6 ">
                <img
                  alt="Profile"
              
                  width={64}
                  height={64}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full object-cover mx-2 shadow-lg border"
                  srcSet="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1708139690949-244871614.jpg&w=64&q=75 1x, /_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1708139690949-244871614.jpg&w=128&q=75 2x"
                  src="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1708139690949-244871614.jpg&w=128&q=75"
                  style={{
                    color: "transparent",
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                  }}
                />
                <span className="flex items-center gap-2 font-bold text-brand-red hover:underline ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Upload Profile Picture
                </span>
              </div>
            </label>{" "}
            <input
              id="upload-button"
              accept="image/png, image/jpeg"
              type="file"
              style={{ display: "none" }}
            />
            <form className="flex flex-col gap-6 ">
              <div className=" grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-t-md text-brand-black mb-2"
                  >
                    First Name<span className="text-brand-red">*</span>
                  </label>
                  <div className="   relative ">
                    <input
                      className="block w-full border p-3 text-brand-black focus:outline-none border-gray-200 rounded-lg"
                      placeholder="eg. Emma"
                      type="text"
                      name="firstName"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-t-md text-brand-black mb-2"
                  >
                    Last Name<span className="text-brand-red">*</span>
                  </label>
                  <div className="   relative ">
                    <input
                      className="block w-full border p-3 text-brand-black focus:outline-none border-gray-200 rounded-lg"
                      placeholder="eg. Copper"
                      type="text"
                      name="lastName"
                    />
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="relative" data-headlessui-state="">
                    <label
                      className="block mb-2"
                      id="headlessui-listbox-label-:r52:"
                      data-headlessui-state=""
                    >
                      Gender<span className="text-brand-red">*</span>
                    </label>
                    <button
                      className="w-full flex cursor-pointer font-medium items-center justify-between gap-2 rounded-lg border border-gray-200 px-4 py-2   text-black  border-gray-200 "
                      id="headlessui-listbox-button-:r53:"
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-headlessui-state=""
                      aria-labelledby="headlessui-listbox-label-:r52: headlessui-listbox-button-:r53:"
                    >
                      <span>Male</span>
                      <span className="flex gap-1 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="birth"
                    className="block text-t-md text-brand-black"
                  >
                    Date Of Birth<span className="text-brand-red">*</span>
                  </label>
                  <div className="  mt-2 ">
                    <input
                      className="block w-full border p-3 text-t-md text-brand-black focus:outline-none  border-gray-200  rounded-lg "
                      max="2024-07-25"
                      type="date"
                      name="birth"
                    />
                  </div>
                </div>
              </div>
           {/* TODO For Abou us */}
            </form>
          </section>
          <section className="border border-gray-200 flex-1 rounded-lg bg-white  px-4 sm:px-8 py-6">
            <h6 className="mb-4  font-medium text-xl sm:text-2xl ">Address</h6>
            <form className="flex flex-col gap-6 ">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  hidden
                  readOnly
                  type="hidden"
                  defaultValue="Bagmati"
                  name="name"
                  style={{
                    position: "fixed",
                    top: 1,
                    left: 1,
                    width: 1,
                    height: 0,
                    padding: 0,
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    whiteSpace: "nowrap",
                    borderWidth: 0,
                    display: "none",
                  }}
                />
                <div className="">
                  <div className="relative">
                    <p
                      className="mb-2"
                      id="headlessui-combobox-label-:r54:"
                      data-headlessui-state=""
                    >
                      Province<span className="text-brand-red">*</span>
                    </p>
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                      <input
                        className="w-full border border-gray-200 py-3.5 rounded-lg pl-3 pr-10 text-base leading-5 text-black focus:ring-0"
                        placeholder="eg. Bagmati"
                        id="headlessui-combobox-input-:r55:"
                        role="combobox"
                        aria-expanded="false"
                        aria-autocomplete="list"
                        data-headlessui-state=""
                        type="text"
                        aria-labelledby="headlessui-combobox-label-:r54:"
                      />
                      <button
                        className="absolute inset-y-0 right-0 flex items-center pr-2"
                        id="headlessui-combobox-button-:r56:"
                        type="button"
                        tabIndex={-1}
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        data-headlessui-state=""
                        aria-labelledby="headlessui-combobox-label-:r54: headlessui-combobox-button-:r56:"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-chevrons-up-down h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        >
                          <path d="m7 15 5 5 5-5" />
                          <path d="m7 9 5-5 5 5" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>{" "}
                <input
                  hidden
                  readOnly
                  type="hidden"
                  defaultValue="Kathmandu"
                  name="name"
                  style={{
                    position: "fixed",
                    top: 1,
                    left: 1,
                    width: 1,
                    height: 0,
                    padding: 0,
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    whiteSpace: "nowrap",
                    borderWidth: 0,
                    display: "none",
                  }}
                />
                <div className="">
                  <div className="relative">
                    <p
                      className="mb-2"
                      id="headlessui-combobox-label-:r57:"
                      data-headlessui-state=""
                    >
                      City<span className="text-brand-red">*</span>
                    </p>
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                      <input
                        className="w-full border border-gray-200 py-3.5 rounded-lg pl-3 pr-10 text-base leading-5 text-black focus:ring-0"
                        placeholder="eg. Kathmandu"
                        id="headlessui-combobox-input-:r58:"
                        role="combobox"
                        aria-expanded="false"
                        aria-autocomplete="list"
                        data-headlessui-state=""
                        type="text"
                        aria-labelledby="headlessui-combobox-label-:r57:"
                      />
                      <button
                        className="absolute inset-y-0 right-0 flex items-center pr-2"
                        id="headlessui-combobox-button-:r59:"
                        type="button"
                        tabIndex={-1}
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        data-headlessui-state=""
                        aria-labelledby="headlessui-combobox-label-:r57: headlessui-combobox-button-:r59:"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-chevrons-up-down h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        >
                          <path d="m7 15 5 5 5-5" />
                          <path d="m7 9 5-5 5 5" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="postalCode"
                  className="block text-t-md text-brand-black mb-2"
                >
                  Postal Code
                </label>
                <div className="   relative ">
                  <input
                    className="block w-full border p-3 text-brand-black focus:outline-none border-gray-200 rounded-lg"
                    placeholder="eg. 22022"
                    type="number"
                    name="postalCode"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-t-md text-brand-black mb-2"
                >
                  Current Address<span className="text-brand-red">*</span>
                </label>
                <div className="   relative ">
                  <input
                    className="block w-full border p-3 text-brand-black focus:outline-none border-gray-200 rounded-lg"
                    placeholder="eg. Kathmandu"
                    type="text"
                    name="address"
                  />
                </div>
              </div>
              <button
                className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 hover:shadow-lg h-10 px-5 py-5 ml-auto"
                type="submit"
              >
                Save
              </button>
            </form>
          </section>
          <form className="flex-1 rounded-lg bg-white  px-4 sm:px-8 py-6">
            <div className="">
              <h6 className="mb-4 font-medium text-xl sm:text-2xl ">
                Social Links
              </h6>
              <div className="mb-2 flex gap-4">
                <p className="block w-[200px]">Social Website</p>
                <p>Link</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <div className="flex w-full  gap-4">
                    <div className=" w-36 ">
                      <div>
                        <div className="relative" data-headlessui-state="">
                          <label
                            className="block mb-2"
                            id="headlessui-listbox-label-:r5c:"
                            data-headlessui-state=""
                          />
                          <button
                            className="w-full flex cursor-pointer font-medium items-center justify-between gap-2 rounded-lg border border-gray-200 px-4 py-2   text-black  border-gray-200 "
                            id="headlessui-listbox-button-:r5d:"
                            type="button"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            data-headlessui-state=""
                            aria-labelledby="headlessui-listbox-label-:r5c: headlessui-listbox-button-:r5d:"
                          >
                            <span>Linkedin</span>
                            <span className="flex gap-1 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-5"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 ">
                      <div>
                        <div className="   relative ">
                          <input
                            className="block w-full border p-3 text-brand-black focus:outline-none border-gray-200 rounded-lg"
                            placeholder="eg. www.social-site.com"
                            type="text"
                            name="socialLinks[0].link"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="mt-4 flex items-center gap-2 text-t-sm font-medium text-brand-red"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  Add Social Link
                </button>
              </div>
              <div className="ml-auto  flex flex-wrap  justify-end gap-4">
                <button
                  className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 hover:shadow-lg h-10 px-5 py-5"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
          <div className="flex-1 rounded-lg bg-white  px-4 sm:px-8 py-6">
            <h6 className="mb-4  font-medium text-xl sm:text-2xl">Resume </h6>
            <div className="flex gap-2">
              <label
                htmlFor="upload-resume"
                className="flex w-[150px] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-100 p-4 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-cloud-upload h-6 w-6"
                >
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m16 16-4-4-4 4" />
                </svg>
                <p className="text-sm text-center">Upload Resume</p>
              </label>
              <input
                id="upload-resume"
                accept="application/pdf"
                className=" relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
                type="file"
                style={{ display: "none" }}
              />
              <div className=" relative  text-brand-red border border-brand-red rounded-lg w-[150px] flex flex-col justify-center items-center text-center ">
                <a
                  target="_blank"
                  className="flex flex-col justify-center items-center text-center gap-2 hover:underline"
                  href="https://api.internsathi.com/uploads/1715766497588-915110211.pdf"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-file-text h-6 w-6"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                  <span className="text-sm text0-ce ">1715....pdf</span>
                </a>
                <button className="absolute -top-2 -right-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    className="  text-red-500  "
                    height={25}
                    width={25}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Note: Can only be used to apply for a job
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmployeeProfile;
