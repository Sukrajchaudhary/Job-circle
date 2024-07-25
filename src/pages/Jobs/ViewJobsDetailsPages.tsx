import React from 'react'

const ViewJobsDetailsPages:React.FC = () => {
  return (
    <main className="py-10">
    <div className="w-full flex flex-col  md:flex-row gap-8 max-w-7xl mx-auto">
      <div className="w-full flex-1">
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
                      Social Media Marketing Intern
                    </p>
                    <p className=" uppercase text-red-500 text-sm lg:text-base">
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
                <div className="ml-auto py-2 ">
                  <div className=" flex flex-row justify-between items-center">
                    <span className="mx-2">
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
                        className="lucide lucide-share2  h-6 w-6 hover:text-red-500 hover:cursor-pointer text-gray-400 transition "
                      >
                        <circle cx={18} cy={5} r={3} />
                        <circle cx={6} cy={12} r={3} />
                        <circle cx={18} cy={19} r={3} />
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                      </svg>
                    </span>
                    <span className="mx-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        className="text-red-500 hover:cursor-pointer h-6 w-6 hidden"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M21 7h-6V5h6v2zm-2 3.9A5.002 5.002 0 0 1 14 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V10.9z" />
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        className="h-6 w-6 hover:text-red-500 hover:cursor-pointer text-gray-400 transition block"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M21 7h-2v2h-2V7h-2V5h2V3h2v2h2v2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9V21z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid  sm:grid-cols-2 xl:grid-cols-4 gap-8 py-6 border-b border-gray-100 ">
              <div className="flex gap-3 ">
                <span className=" flex h-14 w-[60px] items-center justify-center rounded-lg bg-red-200  text-d-xs text-red-500">
                  $
                </span>
                <span className="flex flex-col gap-2">
                  <p className="text-t-xs text-gray-400">Offered Salary</p>
                  <p className="font-medium">
                    Rs 5000 - 12000{" "}
                    <span className="text-xs text-gray-500">/ Monthly</span>
                  </p>
                </span>
              </div>
              <div className="flex gap-3 ">
                <span className=" flex h-14 w-[60px] items-center justify-center rounded-lg bg-red-200  text-d-sm text-red-500">
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
                <span className=" flex h-14 w-[60px] items-center justify-center rounded-lg bg-red-200  text-d-sm text-red-500">
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
                <span className=" flex h-14 w-[60px] items-center justify-center rounded-lg bg-red-200  text-d-sm text-red-500">
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
                    We’re looking for a creative Social Media Marketing Intern.
                    Enjoy flexible start times (11 AM or 12 PM), work 6-7 hours a
                    day with a 1-hour lunch break, and work 6 days a week. After 4
                    months, earn a certificate of completion and have the chance
                    for a full-time role.
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
                    <li>
                      Assist in developing and implementing social media
                      strategies.
                    </li>
                    <li>
                      Create and curate engaging content for Facebook, Twitter,
                      Instagram, and LinkedIn.
                    </li>
                    <li>Monitor and engage with our audience on social media.</li>
                    <li>
                      Support social media campaigns, including paid advertising.
                    </li>
                    <li>Analyze and report on campaign performance.</li>
                    <li>
                      Stay updated with social media trends and best practices.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pb-6">
              <p className="text-base sm:text-t-lg font-medium">Requirements:</p>
              <div className="mt-2  text-gray-500">
                <div className="show-list-style text-sm sm:text-base editor-styles">
                  <ul>
                    <li>
                      Pursuing or recently completed a degree in Marketing,
                      Communications, or related field.
                    </li>
                    <li>Strong understanding of social media platforms.</li>
                    <li>Excellent written and verbal communication skills.</li>
                    <li>Creative and detail-oriented.</li>
                    <li>Basic knowledge of social media analytics tools.</li>
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
                  Social media posts
                </span>
                <span className="p-2 bg-gray-100 rounded-md text-gray-600 font-medium text-sm text-center">
                  Social media marketing
                </span>
                <span className="p-2 bg-gray-100 rounded-md text-gray-600 font-medium text-sm text-center">
                  Content strategy
                </span>
                <span className="p-2 bg-gray-100 rounded-md text-gray-600 font-medium text-sm text-center">
                  Canva
                </span>
              </ul>
            </div>
          </div>
          <div className="my-4 rounded-lg bg-white p-4 sm:p-8">
            <p className="text-t-lg font-medium">Tags</p>
            <ul className="flex flex-wrap items-center gap-3  pt-4">
              <li className="rounded-md border border-gray-200 px-3 py-2 text-t-sm">
                #SocialMediaIntern
              </li>
            </ul>
          </div>
          <div className="my-4 rounded-lg bg-white p-8">
            <p className="text-t-lg font-medium mb-4">About Company</p>
            <a
              className="text-red-500 font-medium hover:underline"
              href="/company/bhyakur"
            >
              Bhyakur Media
            </a>
            <p className="mt-2">
              <span className="text-gray-500">Location:</span> Kathmandu, Nepal
            </p>
            <p className="my-2">
              <span className="text-gray-500">Address:</span> Thapa Gaun
            </p>
            <div className="show-list-style text-sm sm:text-base editor-styles line-clamp-2 text-gray-500">
              <p>Software Development company</p>
            </div>
            <div className="flex  justify-end">
              <a
                className="justify-center rounded-lg text-sm ring-offset-background duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 px-5 py-5 text-red-500 flex items-center gap-1 hover:gap-2 transition-all font-medium"
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
              <p className="mt-4 text-t-xs text-gray-400">Application ends:</p>
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
      <div className="hidden md:block md:w-[28%]  lg:w-[25%]">
        <div className="  rounded-lg border border-gray-200 bg-white p-6">
          <p className="text-t-lg font-medium">
            Are you interested in this Internship?
          </p>
          <p className="mt-5 text-t-xs text-gray-400">Application ends:</p>
          <p className="font-medium">July 31, 2024</p>
          <button className="inline-flex items-center justify-center font-bold text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:shadow-lg h-10 px-5 w-full mt-4 rounded-lg bg-brand-red py-3 text-white hover:bg-red-600">
            Apply Now
          </button>
        </div>
        <div className="mt-5 rounded-lg border border-gray-200 bg-white">
          <p className="border-b border-gray-100 p-6 pb-4 text-t-lg font-medium">
            More Internships by Bhyakur Media
          </p>
          <ul>
            <li className="border-b border-gray-200 p-6 last:border-0">
              <p className="text-t-lg font-medium">Content Writer Intern</p>
              <p className="mt-3 flex  text-t-xs text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mr-1 h-4 w-4"
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
                Kathmandu, Nepal
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="ml-4 mr-1 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>{" "}
                Full Time
              </p>
              <a
                className="mt-4 flex items-center gap-4 font-medium text-red-500"
                href="/internships/content-writer-intern-juniorlevel-fulltime-onsite"
              >
                <button className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-red-500 underline-offset-4 hover:underline h-10 py-5 px-0">
                  See Details{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
   
  </main>
  )
}

export default ViewJobsDetailsPages
