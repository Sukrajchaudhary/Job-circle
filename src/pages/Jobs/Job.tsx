import React from "react";
import { Link } from "react-router-dom";

const Job: React.FC = () => {
  return (
    <div className=" bg-is-background-secondary">
      <section className="min-h-screen p-0">
        <div className=" lg:hidden block bg-white p-2">
          <form className="relative  mt-6 container px-4 ">
            <input
              className="w-full border border-gray-200 outline-none rounded-lg bg-white py-3 pl-12"
              placeholder="Search Internship"
              type="text"
              defaultValue=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="absolute text-gray-400 top-3 left-4 w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </form>
        </div>
        <div className="bg-white shadow-sm border-b border-gray-200 relative z-5  py-6  ">
          <div className="container flex items-center  max-w-7xl mx-auto px-4">
            <div className="lg:border-r border-gray-200  pr-6">
              <div className="relative " data-headlessui-state="">
                <button
                  className="w-full cursor-pointer justify-between border border-gray-200 flex items-center gap-3 rounded-lg bg-red-500 px-4 py-3 font-medium text-white min-w-[12rem]"
                  id="headlessui-listbox-button-:r2j:"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <p> Internship</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <ul className="items-center gap-5 pl-6 text-gray-900 md:flex hidden">
              <div className="flex-1  relative " data-headlessui-state="">
                <button
                  className="text-t-sm flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium  text-gray-900 min-w-max"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                  id="headlessui-popover-button-:r2k:"
                >
                  <span>Sort</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
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
            </ul>
          </div>
        </div>
        {/*  */}
        {/* Desktp View */}
        <main className="py-2  max-w-7xl mx-auto hidden md:block  ">
          <div className="container flex gap-8 p-3">
            <div className=" grid grid-cols-1  w-full md:flex md:w-[300px]  lg:w-[400px] flex-col gap-4  overflow-y-scroll  max-h-[100vh] ">
              <div className="w-full">
                <div className="relative cursor-pointer rounded-lg border sm:border-gray-200 bg-white px-6 py-6 hover:shadow-lg transition-all ">
                  <div className=" flex items-center gap-3">
                    <img
                      alt="logo"
                      loading="lazy"
                      width={100}
                      height={100}
                      decoding="async"
                      data-nimg={1}
                      className=" h-16 w-16 rounded-md"
                      srcSet="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1718261566427-415127206.jpg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1718261566427-415127206.jpg&w=256&q=75 2x"
                      src="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1718261566427-415127206.jpg&w=256&q=75"
                      style={{ color: "transparent" }}
                    />
                    <div>
                      <p className="text-t-lg font-medium">Marketing Intern </p>
                      <p className="mt-2 text-t-sm text-brand-red">
                        Rstca Investment Fund{" "}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col gap-3">
                    <ul className="flex items-center gap-2 md:gap-3 pb-2 pt-4 flex-wrap">
                      <li className="rounded border border-gray-200 px-3 py-1 text-t-sm">
                        #MarketingIntern
                      </li>
                      <li />
                    </ul>
                    <div className="mt-2 flex justify-between">
                      <p className="flex items-center gap-2 text-t-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className=" h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Expired
                      </p>
                      <a
                        className="flex items-center gap-2 text-t-sm font-medium text-brand-red"
                        href="/internships/marketing-intern-entrylevel-fulltime-onsite"
                      >
                        View Details{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-4 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="relative cursor-pointer rounded-lg border sm:border-gray-200 bg-white px-6 py-6 hover:shadow-lg transition-all ">
                  <div className=" flex items-center gap-3">
                    <img
                      alt="logo"
                      loading="lazy"
                      width={100}
                      height={100}
                      decoding="async"
                      data-nimg={1}
                      className=" h-16 w-16 rounded-md"
                      srcSet="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1718261566427-415127206.jpg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1718261566427-415127206.jpg&w=256&q=75 2x"
                      src="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1718261566427-415127206.jpg&w=256&q=75"
                      style={{ color: "transparent" }}
                    />
                    <div>
                      <p className="text-t-lg font-medium">Receptionist </p>
                      <p className="mt-2 text-t-sm text-brand-red">
                        Rstca Investment Fund{" "}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col gap-3">
                    <ul className="flex items-center gap-2 md:gap-3 pb-2 pt-4 flex-wrap">
                      <li className="rounded border border-gray-200 px-3 py-1 text-t-sm">
                        #InternshipExperience
                      </li>
                      <li className="rounded border border-gray-200 px-3 py-1 text-t-sm">
                        #JobOpening
                      </li>
                      <li>+2</li>
                    </ul>
                    <div className="mt-2 flex justify-between">
                      <p className="flex items-center gap-2 text-t-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className=" h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Expired
                      </p>
                      <a
                        className="flex items-center gap-2 text-t-sm font-medium text-brand-red"
                        href="/internships/receptionist-entrylevel-fulltime-onsite"
                      >
                        View Details{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-4 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="w-full flex-1 hidden md:block overflow-hidden overflow-y-auto hide-scrollbar max-h-[100vh]">
              <div className="">
                <div className="rounded-lg bg-white p-4 sm:p-8">
                  <div className="border-b border-gray-100 pb-6 ">
                    <div className="flex gap-4 mb-4 ">
                      <div className=" flex items-center gap-4">
                        <img
                          alt="logo"
                          loading="lazy"
                          width={100}
                          height={100}
                          decoding="async"
                          data-nimg={1}
                          className=" h-16 w-16 rounded-md"
                          srcSet="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1710921523966-784536741.jpg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1710921523966-784536741.jpg&w=256&q=75 2x"
                          src="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1710921523966-784536741.jpg&w=256&q=75"
                          style={{ color: "transparent" }}
                        />
                        <div className="flex flex-col justify-between py-2 gap-1">
                          <p className="text-t-lg font-medium">
                            Content Writer Intern
                          </p>
                          <p className=" uppercase text-brand-red text-sm lg:text-base">
                            <a href="/company/bhyakur">Bhyakur Media</a>
                          </p>
                          <p className=" flex items-center text-t-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              className="mr-1 h-5 w-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                              />
                            </svg>{" "}
                            Kathmandu
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              className="ml-3 mr-1 h-5 w-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                              />
                            </svg>{" "}
                            Full Time
                          </p>
                        </div>
                      </div>
                      <div className=" ml-auto flex flex-col space-y-2 justify-between">
                        <button className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 hover:shadow-lg h-10 px-5 py-5">
                          Apply Now
                        </button>
                        <a
                          className="justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-red-500 underline-offset-4 hover:underline h-10 py-5 flex items-center gap-1 px-0"
                          href="/internships/content-writer-intern-juniorlevel-fulltime-onsite"
                        >
                          View on full page{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="grid  sm:grid-cols-2 xl:grid-cols-4 gap-8 py-6 border-b border-gray-100 ">
                    <div className="flex gap-3 ">
                      <span className=" flex h-14 w-[60px] items-center justify-center rounded-lg bg-soft-main/10  text-d-xs text-brand-red">
                        $
                      </span>
                      <span className="flex flex-col gap-2">
                        <p className="text-t-xs text-gray-400">
                          Offered Salary
                        </p>
                        <p className="font-medium">
                          Rs 5000 - 12000{" "}
                          <span className="text-xs text-gray-500">
                            / Monthly
                          </span>
                        </p>
                      </span>
                    </div>
                    <div className="flex gap-3 ">
                      <span className=" flex h-14 w-[60px] items-center justify-center rounded-lg bg-soft-main/10  text-d-sm text-brand-red">
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
                          className="lucide lucide-map-pin h-7 w-7"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx={12} cy={10} r={3} />
                        </svg>
                      </span>
                      <span className="flex flex-col gap-2">
                        <p className="text-t-xs text-gray-400">Location</p>
                        <p className="font-medium">Onsite</p>
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className=" flex h-14 w-[60px] items-center justify-center rounded-lg bg-soft-main/10  text-d-sm text-brand-red">
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
                          className="lucide lucide-bar-chart"
                        >
                          <line x1={12} x2={12} y1={20} y2={10} />
                          <line x1={18} x2={18} y1={20} y2={4} />
                          <line x1={6} x2={6} y1={20} y2={16} />
                        </svg>
                      </span>
                      <span className="flex flex-col  gap-2">
                        <p className="text-t-xs text-gray-400">Level</p>
                        <p className="font-medium">Junior</p>
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className=" flex h-14 w-[60px] items-center justify-center rounded-lg bg-soft-main/10  text-d-sm text-brand-red">
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
                          className="lucide lucide-users-round"
                        >
                          <path d="M18 21a8 8 0 0 0-16 0" />
                          <circle cx={10} cy={8} r={5} />
                          <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                        </svg>
                      </span>
                      <span className="flex flex-col  gap-2">
                        <p className="text-t-xs text-gray-400">Openings</p>
                        <p className="font-medium">2</p>
                      </span>
                    </div>
                  </div>
                  <div className="py-6">
                    <p className="text-base sm:text-t-lg font-medium">
                      Job Description:
                    </p>
                    <div className="mt-2 text-gray-500">
                      <div className="show-list-style text-sm sm:text-base editor-styles">
                        <p>
                          As a Content Writer Intern, you will assist in
                          creating and editing content across diverse topics.
                          This role offers hands-on experience in content
                          production and editorial processes, providing valuable
                          insights into the media industry.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pb-6">
                    <p className=" text-base sm:text-t-lg font-medium">
                      Responsibilities of the Candidate:
                    </p>
                    <div className="mt-2  text-gray-500">
                      <div className="show-list-style text-sm sm:text-base editor-styles">
                        <ul>
                          <li>Assist in writing and editing articles</li>
                          <li>Conduct research on assigned topics</li>
                          <li>
                            Proofread content to ensure accuracy and clarity
                          </li>
                          <li>
                            Meet deadlines and follow editorial guidelines
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pb-6">
                    <p className="text-base sm:text-t-lg font-medium">
                      Requirements:
                    </p>
                    <div className="mt-2  text-gray-500">
                      <div className="show-list-style text-sm sm:text-base editor-styles">
                        <ul>
                          <li>Strong writing and editing skills</li>
                          <li>
                            Ability to research and write on various topics
                          </li>
                          <li>Basic knowledge of SEO is a plus</li>
                          <li>
                            Enthusiasm for learning and a keen eye for detail
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-base sm:text-t-lg font-medium">
                      Required skills
                    </p>
                    <ul className="mt-3 flex gap-3 flex-wrap">
                      <span className="p-2 bg-gray-100 rounded-md text-gray-600 font-medium text-sm text-center">
                        Content writing
                      </span>
                      <span className="p-2 bg-gray-100 rounded-md text-gray-600 font-medium text-sm text-center">
                        On-page seo
                      </span>
                      <span className="p-2 bg-gray-100 rounded-md text-gray-600 font-medium text-sm text-center">
                        Research skills
                      </span>
                    </ul>
                  </div>
                </div>
                <div className="my-4 rounded-lg bg-white p-4 sm:p-8">
                  <p className="text-t-lg font-medium">Tags</p>
                  <ul className="flex flex-wrap items-center gap-3  pt-4">
                    <li className="rounded-md border border-gray-200 px-3 py-2 text-t-sm">
                      #ContentCreationIntern
                    </li>
                  </ul>
                </div>
                <div className="my-4 rounded-lg bg-white p-8">
                  <p className="text-t-lg font-medium mb-4">About Company</p>
                  <a
                    className="text-brand-red font-medium hover:underline"
                    href="/company/bhyakur"
                  >
                    Bhyakur Media
                  </a>
                  <p className="mt-2">
                    <span className="text-gray-500">Location:</span> Kathmandu,
                    Nepal
                  </p>
                  <p className="my-2">
                    <span className="text-gray-500">Address:</span> Thapa Gaun
                  </p>
                  <div className="show-list-style text-sm sm:text-base editor-styles line-clamp-2 text-gray-500">
                    <p>Software Development company</p>
                  </div>
                  <div className="flex  justify-end">
                    <a
                      className="justify-center rounded-lg text-sm ring-offset-background duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 px-5 py-5 text-brand-red flex items-center gap-1 hover:gap-2 transition-all font-medium"
                      href="/company/bhyakur"
                    >
                      View Company Profile{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-3 w-3  "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="my-4 flex items-center gap-5 justify-between sm:flex-row flex-col rounded-lg bg-white p-8">
                  <div className=" sm:w-auto w-full">
                    <p className="text-t-lg font-medium">
                      Are you interested in this Internship?
                    </p>
                    <p className="mt-4 text-t-xs text-gray-400">
                      Application ends:
                    </p>
                    <p className="font-medium">July 31, 2024</p>
                  </div>
                  <div className="flex flex-col sm:w-auto w-full gap-2">
                    <button className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 hover:shadow-lg h-10 px-5 py-5 w-full">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* end of desktop view */}
        {/* start Mobile view */}
        <main className="py-2  max-w-7xl mx-auto sm:hidden md:hidden  ">
          <div className="container flex gap-8 p-3">
            <div className=" grid grid-cols-1  w-full md:flex md:w-[300px]  lg:w-[400px] flex-col gap-4  overflow-y-scroll  max-h-[100vh] ">
              {[...Array.from({ length: 4 })].map((_, index) => (
                <>
                  <Link to={`/ViewJobsDetailsPages/${index}`}>
                    <div key={index} className="w-full">
                      <div className="relative cursor-pointer rounded-lg border sm:border-gray-200 bg-white px-6 py-6 hover:shadow-lg transition-all ">
                        <div className=" flex items-center gap-3">
                          <img
                            alt="logo"
                            loading="lazy"
                            width={100}
                            height={100}
                            decoding="async"
                            data-nimg={1}
                            className=" h-16 w-16 rounded-md"
                            srcSet="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1718261566427-415127206.jpg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1718261566427-415127206.jpg&w=256&q=75 2x"
                            src="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1718261566427-415127206.jpg&w=256&q=75"
                            style={{ color: "transparent" }}
                          />
                          <div>
                            <p className="text-t-lg font-medium">
                              Marketing Intern{" "}
                            </p>
                            <p className="mt-2 text-t-sm text-brand-red">
                              Rstca Investment Fund{" "}
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-col gap-3">
                          <ul className="flex items-center gap-2 md:gap-3 pb-2 pt-4 flex-wrap">
                            <li className="rounded border border-gray-200 px-3 py-1 text-t-sm">
                              #MarketingIntern
                            </li>
                            <li />
                          </ul>
                          <div className="mt-2 flex justify-between">
                            <p className="flex items-center gap-2 text-t-sm">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className=" h-5 w-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              Expired
                            </p>
                            <a
                              className="flex items-center gap-2 text-t-sm font-medium text-brand-red"
                              href="/internships/marketing-intern-entrylevel-fulltime-onsite"
                            >
                              View Details{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </main>
        {/*End of mobile view  */}
      </section>
    </div>
  );
};

export default Job;
