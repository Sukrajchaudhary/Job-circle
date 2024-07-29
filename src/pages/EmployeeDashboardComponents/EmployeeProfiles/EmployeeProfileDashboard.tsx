import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const EmployeeProfile: React.FC = () => {
  const location = useLocation();
  return (
    <main className="flex gap-8 py-8 md:pt-16  lg:flex-row flex-col">
      <aside className=" lg:fixed lg:w-64 md:pb-6">
        <ul className="font-medium flex gap-2 overflow-y-scroll md:overflow-auto lg:block">
          <li className=" min-w-fit">
            <Link
              className={`${
                location.pathname === "/Employee/Home/profile/about"
                  ? "bg-red-600 hover:bg-red-400"
                  : ""
              } text-gray-400 mb-2 flex items-center rounded-lg  px-4 py-3  hover:bg-white`}
              to="/Employee/Home/profile/about"
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
            </Link>
          </li>
          <li className=" min-w-fit">
            <Link
              className={`${
                location.pathname === "/Employee/Home/profile/education"
                  ? "bg-red-600 hover:bg-red-400"
                  : ""
              } text-gray-400 mb-2 flex items-center rounded-lg  px-4 py-3  hover:bg-white`}
              to="/Employee/Home/profile/education"
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
            </Link>
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
            <Link
              className={`${
                location.pathname === "/Employee/Home/profile/skills"
                  ? "bg-red-600 hover:bg-red-400"
                  : ""
              } text-gray-400 mb-2 flex items-center rounded-lg  px-4 py-3  hover:bg-white`}
              to="/Employee/Home/profile/skills"
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
            </Link>
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
            <Link
              className={`${
                location.pathname === "/Employee/Home/profile/language"
                  ? "bg-red-600 hover:bg-red-400"
                  : ""
              } text-gray-400 mb-2 flex items-center rounded-lg  px-4 py-3  hover:bg-white`}
              to="/Employee/Home/profile/language"
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
            </Link>
          </li>
          <li className=" min-w-fit ">
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
      {/*  */}
      <Outlet />
    </main>
  );
};

export default EmployeeProfile;