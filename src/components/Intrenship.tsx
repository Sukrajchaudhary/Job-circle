import { Link } from "react-router-dom";

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
          <Link
            className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-red-500 underline-offset-4 hover:underline h-10 p-0"
          to="/internships"
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
          </Link>
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
        {
          [...Array.from({length:4})].map((_,index)=>(<> <div className="w-full ">
          <Link to={`ViewIntrenShipDetailsPage/${index}`}>  <div key={index} className="relative cursor-pointer rounded-xl p-6 space-y-4 border sm:border-gray-200 bg-white hover:shadow-lg transition-all ">
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
            </div></Link>
          </div>
          </>))
         }
        </div>
      </div>
    </section>
  );
};

export default Intrenship;
