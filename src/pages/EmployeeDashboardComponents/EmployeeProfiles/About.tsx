import React from 'react'

const About:React.FC = () => {
  return (
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
  )
}

export default About
