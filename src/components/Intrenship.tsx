const Intrenship = () => {
  return (
    <section className=" bg-[#FAF9FB] py-14 ">
      <div className="container max-w-7xl mx-auto ">
        <div className=" flex justify-between gap-6 sm:text-left text-center sm:flex-row flex-col mb-12">
          <div className=" ">
            <h5 className=" text-3xl font-bold mb-3">
              Get your dream Internship now
            </h5>
            <p className="text-t-md text-is-secondary">
              Search your career opportunity through the available positions.
            </p>
          </div>
          <a
            className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-red-500 underline-offset-4 hover:underline h-10 p-0"
            href="/internships"
          >
            Browse all Internships{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 256 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
            </svg>
          </a>
        </div>
        <div className="mt-4  flex overflow-x-auto gap-4 mb-8">
          <button className="px-4 py-3 min-w-max transition-all rounded-xl bg-red-500 text-white">
            Featured Internship
          </button>
          <button className="px-4 py-3 min-w-max transition-all rounded-xl bg-gray-100 text-is-default hover:bg-gray-200/70">
            Nearest
          </button>
          <button className="px-4 py-3 min-w-max transition-all rounded-xl bg-gray-100 text-is-default hover:bg-gray-200/70">
            Newest
          </button>
          <button className="px-4 py-3 min-w-max transition-all rounded-xl bg-gray-100 text-is-default hover:bg-gray-200/70">
            Oldest
          </button>
        </div>
        <div className="gap-6 lg:gap-8 grid w-full sm:grid-cols-2 md:grid-cols-3 p-3 ">
          <div className="w-full ">
            <div className="relative cursor-pointer rounded-xl p-6 space-y-4 border sm:border-gray-200 bg-white hover:shadow-lg transition-all ">
              <img
                alt="logo"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className=" h-16 w-16 rounded-full object-cover"
                srcSet="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1710921523966-784536741.jpg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1710921523966-784536741.jpg&w=256&q=75 2x"
                src="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1710921523966-784536741.jpg&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <div>
                <a href="/internships/content-writer-intern-juniorlevel-fulltime-onsite">
                  <p className="text-xl font-semibold text-is-default">
                    Content Writer Intern
                  </p>
                </a>
                <a href="/company/98cba4ce-1c12-4705-991e-54c4ee84ec06">
                  <p className="mt-2 text-sm text-is-primary uppercase">
                    Bhyakur Media
                  </p>
                </a>
              </div>
              <div className=" flex flex-col gap-4 text-is-secondary">
                <div className=" line-clamp-1 text-sm">
                  <div className="show-list-style text-sm sm:text-base editor-styles">
                    <p>
                      As a Content Writer Intern, you will assist in creating
                      and editing content across diverse topics. This role
                      offers hands-on experience in content production and
                      editorial processes, providing valuable insights into the
                      media industry.
                    </p>
                  </div>
                </div>
                <div className=" text-is-secondary text-xs flex items-center flex-wrap gap-2">
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                    </svg>{" "}
                    8 days left
                  </div>
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>{" "}
                    Kathmandu
                  </div>
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      />
                    </svg>
                    Full Time
                  </div>
                </div>
                <div className=" flex justify-between">
                  <a
                    className="justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-red-500 underline-offset-4 hover:underline h-10 p-0 flex items-center gap-1 hover:gap-2"
                    href="/internships/content-writer-intern-juniorlevel-fulltime-onsite"
                  >
                    Apply Now{" "}
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
                      className="lucide lucide-move-right h-4 w-5 "
                    >
                      <path d="M18 8L22 12L18 16" />
                      <path d="M2 12H22" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="relative cursor-pointer rounded-xl p-6 space-y-4 border sm:border-gray-200 bg-white hover:shadow-lg transition-all ">
              <img
                alt="logo"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className=" h-16 w-16 rounded-full object-cover"
                srcSet="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1710921523966-784536741.jpg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1710921523966-784536741.jpg&w=256&q=75 2x"
                src="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1710921523966-784536741.jpg&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <div>
                <a href="/internships/kickstart-your-career-join-bhyakur-media-as-a-social-media-marketing-intern-entrylevel-fulltime-onsite">
                  <p className="text-xl font-semibold text-is-default">
                    Social Media Marketing Intern
                  </p>
                </a>
                <a href="/company/98cba4ce-1c12-4705-991e-54c4ee84ec06">
                  <p className="mt-2 text-sm text-is-primary uppercase">
                    Bhyakur Media
                  </p>
                </a>
              </div>
              <div className=" flex flex-col gap-4 text-is-secondary">
                <div className=" line-clamp-1 text-sm">
                  <div className="show-list-style text-sm sm:text-base editor-styles">
                    <p>
                      We’re looking for a creative Social Media Marketing
                      Intern. Enjoy flexible start times (11 AM or 12 PM), work
                      6-7 hours a day with a 1-hour lunch break, and work 6 days
                      a week. After 4 months, earn a certificate of completion
                      and have the chance for a full-time role.
                    </p>
                  </div>
                </div>
                <div className=" text-is-secondary text-xs flex items-center flex-wrap gap-2">
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                    </svg>{" "}
                    8 days left
                  </div>
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>{" "}
                    Kathmandu
                  </div>
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      />
                    </svg>
                    Full Time
                  </div>
                </div>
                <div className=" flex justify-between">
                  <a
                    className="justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-red-500 underline-offset-4 hover:underline h-10 p-0 flex items-center gap-1 hover:gap-2"
                    href="/internships/kickstart-your-career-join-bhyakur-media-as-a-social-media-marketing-intern-entrylevel-fulltime-onsite"
                  >
                    Apply Now{" "}
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
                      className="lucide lucide-move-right h-4 w-5 "
                    >
                      <path d="M18 8L22 12L18 16" />
                      <path d="M2 12H22" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="relative cursor-pointer rounded-xl p-6 space-y-4 border sm:border-gray-200 bg-white hover:shadow-lg transition-all ">
              <img
                alt="logo"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className=" h-16 w-16 rounded-full object-cover"
                srcSet="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1702884601118-172054315.png&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1702884601118-172054315.png&w=256&q=75 2x"
                src="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1702884601118-172054315.png&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <div>
                <a href="/internships/project-manager-intern-midlevel-contract-onsite">
                  <p className="text-xl font-semibold text-is-default">
                    Project Manager Intern{" "}
                  </p>
                </a>
                <a href="/company/4bced9cc-9949-45ce-9698-235c774d1cf3">
                  <p className="mt-2 text-sm text-is-primary uppercase">
                    Annapurna Aroma Pvt. Ltd.
                  </p>
                </a>
              </div>
              <div className=" flex flex-col gap-4 text-is-secondary">
                <div className=" line-clamp-1 text-sm">
                  <div className="show-list-style text-sm sm:text-base editor-styles">
                    <p>
                      The Project Manager Intern will support the organization
                      and execution of the event as per the instructions of the
                      Company. This role is ideal for someone passionate about
                      travel, and cultural exchange. The intern will gain
                      hands-on experience in event planning, customer service,
                      and project management. The Project Manager Intern will
                      support the organization and execution of the event as per
                      the instructions of the Company. This role is ideal for
                      someone passionate about travel, and cultural exchange.
                      The intern will gain hands-on experience in event
                      planning, customer service, and project management.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>Benefits:</p>
                    <p>
                      - Hands-on experience in event planning and management.
                    </p>
                    <p>
                      -Travel to scenic and culturally rich locations in the
                      Himalayan Region of Nepal, and explore new places while
                      working.
                    </p>
                    <p>
                      -Opportunity to explore new destinations and cultures as
                      part of the job.
                    </p>
                  </div>
                </div>
                <div className=" text-is-secondary text-xs flex items-center flex-wrap gap-2">
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                    </svg>{" "}
                    27 days left
                  </div>
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>{" "}
                    Kathmandu
                  </div>
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      />
                    </svg>
                    Contract
                  </div>
                </div>
                <div className=" flex justify-between">
                  <a
                    className="justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-red-500 underline-offset-4 hover:underline h-10 p-0 flex items-center gap-1 hover:gap-2"
                    href="/internships/project-manager-intern-midlevel-contract-onsite"
                  >
                    Apply Now{" "}
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
                      className="lucide lucide-move-right h-4 w-5 "
                    >
                      <path d="M18 8L22 12L18 16" />
                      <path d="M2 12H22" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="relative cursor-pointer rounded-xl p-6 space-y-4 border sm:border-gray-200 bg-white hover:shadow-lg transition-all ">
              <img
                alt="logo"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className=" h-16 w-16 rounded-full object-cover"
                srcSet="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1701923991160-975133043.jpg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1701923991160-975133043.jpg&w=256&q=75 2x"
                src="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1701923991160-975133043.jpg&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <div>
                <a href="/internships/flutter-internship-entrylevel-fulltime-hybrid">
                  <p className="text-xl font-semibold text-is-default">
                    Flutter Internship
                  </p>
                </a>
                <a href="/company/771f7a3c-062d-4987-887f-62a7e9cf5637">
                  <p className="mt-2 text-sm text-is-primary uppercase">
                    (moru)paynep Pvt. Ltd.
                  </p>
                </a>
              </div>
              <div className=" flex flex-col gap-4 text-is-secondary">
                <div className=" line-clamp-1 text-sm">
                  <div className="show-list-style text-sm sm:text-base editor-styles">
                    <p>
                      MORU Digital is seeking a Flutter intern who will build
                      cross-platform applications, offering a modern development
                      experience with high performance and native-like user
                      interfaces
                      <span style={{ color: "rgb(107, 114, 128)" }}>.</span>
                    </p>
                  </div>
                </div>
                <div className=" text-is-secondary text-xs flex items-center flex-wrap gap-2">
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                    </svg>{" "}
                    11 days left
                  </div>
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>{" "}
                    Kathmandu
                  </div>
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      />
                    </svg>
                    Full Time
                  </div>
                </div>
                <div className=" flex justify-between">
                  <a
                    className="justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-red-500 underline-offset-4 hover:underline h-10 p-0 flex items-center gap-1 hover:gap-2"
                    href="/internships/flutter-internship-entrylevel-fulltime-hybrid"
                  >
                    Apply Now{" "}
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
                      className="lucide lucide-move-right h-4 w-5 "
                    >
                      <path d="M18 8L22 12L18 16" />
                      <path d="M2 12H22" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="relative cursor-pointer rounded-xl p-6 space-y-4 border sm:border-gray-200 bg-white hover:shadow-lg transition-all ">
              <img
                alt="logo"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className=" h-16 w-16 rounded-full object-cover"
                srcSet="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1701768556031-820006917.png&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1701768556031-820006917.png&w=256&q=75 2x"
                src="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1701768556031-820006917.png&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <div>
                <a href="/internships/digital-marketing-intern-id221-entrylevel-fulltime-onsite">
                  <p className="text-xl font-semibold text-is-default">
                    Digital Marketing Intern-ID221
                  </p>
                </a>
                <a href="/company/a7d352bf-3a51-4576-ad6d-6fbb01517181">
                  <p className="mt-2 text-sm text-is-primary uppercase">
                    Internsathi
                  </p>
                </a>
              </div>
              <div className=" flex flex-col gap-4 text-is-secondary">
                <div className=" line-clamp-1 text-sm">
                  <div className="show-list-style text-sm sm:text-base editor-styles">
                    <p>
                      We are seeking a motivated and enthusiastic Marketing
                      Intern to join our dynamic team. This role involves a
                      combination of digital marketing tasks and occasional
                      fieldwork. This is a great opportunity for students
                      pursuing their bachelor's degree in BBA, BBS, or BBM who
                      are looking to gain practical experience in the marketing
                      field.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>Location: Tripureshwor, Kathmandu</p>
                    <p>
                      <br />
                    </p>
                    <p>
                      Please send us your resume to hr@talentsathi.com for fast
                      track
                    </p>
                  </div>
                </div>
                <div className=" text-is-secondary text-xs flex items-center flex-wrap gap-2">
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                    </svg>{" "}
                    1 day left
                  </div>
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>{" "}
                    Kathmandu
                  </div>
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      />
                    </svg>
                    Full Time
                  </div>
                </div>
                <div className=" flex justify-between">
                  <a
                    className="justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-red-500 underline-offset-4 hover:underline h-10 p-0 flex items-center gap-1 hover:gap-2"
                    href="/internships/digital-marketing-intern-id221-entrylevel-fulltime-onsite"
                  >
                    Apply Now{" "}
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
                      className="lucide lucide-move-right h-4 w-5 "
                    >
                      <path d="M18 8L22 12L18 16" />
                      <path d="M2 12H22" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="relative cursor-pointer rounded-xl p-6 space-y-4 border sm:border-gray-200 bg-white hover:shadow-lg transition-all ">
              <img
                alt="logo"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className=" h-16 w-16 rounded-full object-cover"
                srcSet="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1713755438115-464376748.png&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1713755438115-464376748.png&w=256&q=75 2x"
                src="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1713755438115-464376748.png&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <div>
                <a href="/internships/content-writer-intern-entrylevel-fulltime-remote">
                  <p className="text-xl font-semibold text-is-default">
                    Content Writer Intern
                  </p>
                </a>
                <a href="/company/205cf2e7-5283-443e-9704-24c04e20fc17">
                  <p className="mt-2 text-sm text-is-primary uppercase">
                    Nepaya
                  </p>
                </a>
              </div>
              <div className=" flex flex-col gap-4 text-is-secondary">
                <div className=" line-clamp-1 text-sm">
                  <div className="show-list-style text-sm sm:text-base editor-styles">
                    <p>
                      Nepaya is looking for a talented fresher who wants to
                      pursue a career in Content Writing. As a content writer
                      intern, you'll be guided in creating content for different
                      platforms, while our focus will be on SEO Content Writing.
                      You'll gain expertise by learning and growing with
                      industry experts. If you want to kickstart your journey in
                      content creation, Repay is the perfect suit for you.&nbsp;
                    </p>
                  </div>
                </div>
                <div className=" text-is-secondary text-xs flex items-center flex-wrap gap-2">
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                    </svg>{" "}
                    8 days left
                  </div>
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>{" "}
                    Kathmandu
                  </div>
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      />
                    </svg>
                    Full Time
                  </div>
                </div>
                <div className=" flex justify-between">
                  <a
                    className="justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-red-500 underline-offset-4 hover:underline h-10 p-0 flex items-center gap-1 hover:gap-2"
                    href="/internships/content-writer-intern-entrylevel-fulltime-remote"
                  >
                    Apply Now{" "}
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
                      className="lucide lucide-move-right h-4 w-5 "
                    >
                      <path d="M18 8L22 12L18 16" />
                      <path d="M2 12H22" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="relative cursor-pointer rounded-xl p-6 space-y-4 border sm:border-gray-200 bg-white hover:shadow-lg transition-all ">
              <img
                alt="logo"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className=" h-16 w-16 rounded-full object-cover"
                srcSet="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1709197805630-119758486.jpg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1709197805630-119758486.jpg&w=256&q=75 2x"
                src="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1709197805630-119758486.jpg&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <div>
                <a href="/internships/content-writer-and-creator-multi-language-entrylevel-fulltime-onsite">
                  <p className="text-xl font-semibold text-is-default">
                    Content Writer and Creator (Multi-Language)
                  </p>
                </a>
                <a href="/company/cc37ecbc-1a5a-45c4-a5af-2c24b0514e86">
                  <p className="mt-2 text-sm text-is-primary uppercase">
                    Niraksa Company Pvt Ltd
                  </p>
                </a>
              </div>
              <div className=" flex flex-col gap-4 text-is-secondary">
                <div className=" line-clamp-1 text-sm">
                  <div className="show-list-style text-sm sm:text-base editor-styles">
                    <p>
                      We are seeking a talented and dynamic individual to join
                      our team as a Content Writer and Creator. This role
                      involves producing engaging written content and creating
                      audio or video content in multiple languages, primarily
                      English and Nepali, with proficiency in Hindi considered a
                      strong asset.
                    </p>
                  </div>
                </div>
                <div className=" text-is-secondary text-xs flex items-center flex-wrap gap-2">
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                    </svg>{" "}
                    160 days left
                  </div>
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>{" "}
                    Kathmandu
                  </div>
                  <div className="flex items-center gap-1 bg-is-surface p-3 rounded-lg">
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
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      />
                    </svg>
                    Full Time
                  </div>
                </div>
                <div className=" flex justify-between">
                  <a
                    className="justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-red-500 underline-offset-4 hover:underline h-10 p-0 flex items-center gap-1 hover:gap-2"
                    href="/internships/content-writer-and-creator-multi-language-entrylevel-fulltime-onsite"
                  >
                    Apply Now{" "}
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
                      className="lucide lucide-move-right h-4 w-5 "
                    >
                      <path d="M18 8L22 12L18 16" />
                      <path d="M2 12H22" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intrenship;
