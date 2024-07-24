import img from "../assets/asset 2.jpeg";
import img1 from "../assets/asset 3.jpeg"
const Home = () => {
  return (
    <>
      <section className="flex min-h-[656px] h-auto w-full flex-col items-center justify-center gap-4 bg-[rgb(23,23,31)] ">
        <div className="  text-white mt-32 md:mt-5  max-w-[900px] mx-auto p-2">
          <h3 className=" font-[700]  leading-none text-4xl md:text-5xl md:leading-tight tracking-wide text-center">
            Wellcome to the most popular Job Circle Platforms.
          </h3>
          <p className="mt-4 text-t-lg text-center">
            We've helped over 2,500 freshers to get into the most popular
            internships.
          </p>
          <div>
            <form className="mt-6 flex flex-col md:flex-row rounded-xl md:rounded-full  bg-white p-3 md:p-1 text-black min-w-max">
              <div className="relative " data-headlessui-state="">
                <button
                  className="w-full flex cursor-pointer items-center justify-between gap-2 border border-gray-200 px-4 py-3 bg-red-100 font-medium rounded-full  min-w-[12rem] h-full"
                  id="headlessui-listbox-button-:R6bhauila:"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <p> {/* */}All Opportunities</p>
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
              <input
                type="text"
                id=""
                className="flex-1 border-r border-dashed border-r-gray-300 px-3  md:my-0 my-4  text-t-md text-gray-500 outline-none"
                placeholder="Enter the title, keywords or phrase"
                defaultValue=""
              />
              <button
                type="submit"
                className=" border-none rounded-full bg-red-300 p-2 md:p-3 text-white outline-none md:block flex justify-center items-center gap-2 "
              >
                <span className="md:hidden block">Search</span>{" "}
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:h-8 md:w-8  h-6 w-6 md:mx-0"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={11} cy={11} r={8} />
                  <line x1={21} y1={21} x2="16.65" y2="16.65" />
                </svg>
              </button>
            </form>
            <ul className="flex gap-4 flex-wrap justify-center md:flex-nowrap mt-8 mb-20 ">
              <span className="font-semibold tracking-wide">
                Popular Searches:
              </span>{" "}
              <a
                className=" underline "
                href="/internships?q=Business development"
              >
                Business development
              </a>
              <a className=" underline " href="/internships?q=UI/UX Design">
                UI/UX Design
              </a>
              <a className=" underline " href="/internships?q=Frontend ">
                Frontend{" "}
              </a>
              <a className=" underline " href="/internships?q=Backend ">
                Backend{" "}
              </a>
            </ul>
          </div>
        </div>
      </section>
      <section className="container flex flex-col md:flex-row gap-12 py-14">
        <div className=" grid sm:grid-cols-2 gap-10 container max-w-7xl mx-auto p-5 ">
          <div className="rounded-3xl py-7 sm:py-14 px-6 sm:px-11 space-y-4  relative overflow-hidden hover:-translate-y-2 transition-all ">
            <img
              alt="for_candidate"
              loading="lazy"
              width={1296}
              height={580}
              decoding="async"
              data-nimg={1}
              className=" absolute top-0 left-0 -z-10 w-full h-full object-cover"
             
              src={img}
              style={{ color: "transparent" }}
            />
            <p className=" text-2xl font-bold">For Candidate</p>
            <p className=" sm:max-w-sm text-is-secondary">
              Unlock endless opportunities and connect with top employers. Let
              your skills shine and land your dream job.
            </p>
            <a
              className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-5 py-5 text-is-primary bg-white"
              href="/dashboard/candidate/profile"
            >
              Upload your CV
            </a>
          </div>
          <div className="rounded-3xl py-7 sm:py-14 px-6 sm:px-11 space-y-4  relative overflow-hidden text-white hover:-translate-y-2 transition-all">
            <img
              alt="for_employer"
              loading="lazy"
              width={1296}
              height={580}
              decoding="async"
              data-nimg={1}
              className=" absolute top-0 left-0 -z-10 w-full h-full object-cover"
            
              src={img1}
              style={{ color: "transparent" }}
            />
            <p className=" text-2xl font-bold">For Employer or Company</p>
            <p className=" sm:max-w-sm ">
              Access a pool of skilled candidates and streamline your hiring
              process. Find the best talent for your company's success
            </p>
            <button className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-5 py-5 text-red-500 bg-white ">
              <a href="/dashboard/company/internships-jobs/post">
                Start Hiring
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
