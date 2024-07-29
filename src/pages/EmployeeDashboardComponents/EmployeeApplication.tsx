import { Eye, Trash2 } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const EmployeeApplication: React.FC = () => {
  const location = useLocation();

  return (
    <section>
      <h6 className="font-bold sm:text-2xl text-xl">
        Internship/Job Applications
      </h6>
      <div className="flex w-full items-center space-x-2 rounded-xl my-3 mb-7 text-center text-sm text-t-sm font-medium dark:bg-gray-800 dark:text-gray-400">
        <a
          className="flex items-center hover:underline text-gray-600 "
          href="/dashboard/candidate"
        >
          Dashboard
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
            className="lucide lucide-chevron-right  ml-2 h-4 w-4"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
        <span className="flex items-center text-gray-400   ">
          {location?.pathname}
        </span>
      </div>
      <ul className="mt-6 flex overflow-y-scroll md:overflow-y-auto w-full border-gray-200 text-gray-400">
        <li className="border-brand-red text-brand-red flex cursor-pointer items-center justify-between gap-2 font-medium border-b px-3 py-2.5 first:pl-0 ">
          All
          <span className="bg-red-500 text-white py-1 px-2 font-bold rounded-md flex justify-center items-center text-xs">
            3
          </span>
        </li>
        <li className="border-gray-100 text-gray-400 flex cursor-pointer items-center justify-between gap-2 font-medium border-b px-3 py-2.5 first:pl-0 ">
          Pending
        </li>
        <li className="border-gray-100 text-gray-400 flex cursor-pointer items-center justify-between gap-2 font-medium border-b px-3 py-2.5 first:pl-0 ">
          Viewed
        </li>
        <li className="border-gray-100 text-gray-400 flex cursor-pointer items-center justify-between gap-2 font-medium border-b px-3 py-2.5 first:pl-0 ">
          Shortlisted
        </li>
        <li className="border-gray-100 text-gray-400 flex cursor-pointer items-center justify-between gap-2 font-medium border-b px-3 py-2.5 first:pl-0 ">
          Offered
        </li>
        <li className="border-gray-100 text-gray-400 flex cursor-pointer items-center justify-between gap-2 font-medium border-b px-3 py-2.5 first:pl-0 ">
          Hired
        </li>
        <li className="border-gray-100 text-gray-400 flex cursor-pointer items-center justify-between gap-2 font-medium border-b px-3 py-2.5 first:pl-0 ">
          Rejected
          <span className="bg-slate-200 text-slate-600 py-1 px-2 font-bold rounded-md flex justify-center items-center text-xs">
            3
          </span>
        </li>
        <li className="border-gray-100 text-gray-400 flex cursor-pointer items-center justify-between gap-2 font-medium border-b px-3 py-2.5 first:pl-0 ">
          Withdrawn
        </li>
      </ul>
      <div>
        <div className="rounded-md border bg-white">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                    <button className="inline-flex items-center justify-center text-is-default rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-5 py-5 font-medium">
                      Title
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={0}
                        viewBox="0 0 15 15"
                        className="ml-2 h-4 w-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                    Company
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                    <div className="text-center">Status</div>
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                    <div className="text-center">Location</div>
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                    <div className="text-center">Openings</div>
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                    <div className="text-center">
                      <button className="inline-flex items-center justify-center text-is-default rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-5 py-5 font-medium">
                        Applied Date
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={0}
                          viewBox="0 0 15 15"
                          className="ml-2 h-4 w-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                    <div className="text-center">Actions</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array.from({ length: 4 })].map((_, index) => (
                  <>
                    {" "}
                    <tr
                      key={index}
                      className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                    >
                      <td className="p-4 text-left align-middle">
                        <div>React.js Developer</div>
                      </td>
                      <td className="p-4 text-left align-middle">
                        <div>PlexBit</div>
                      </td>
                      <td className="p-4 text-left align-middle">
                        <div className="text-center text-red-700 bg-red-300 rounded-lg text-sm font-semibold">
                          Pending
                        </div>
                      </td>
                      <td className="p-4 text-left align-middle">
                        <div className="text-center">Kathmandu, Nepal</div>
                      </td>
                      <td className="p-4 text-left align-middle">
                        <div className="text-center">2</div>
                      </td>
                      <td className="p-4 text-left align-middle">
                        <div className="text-center">2024-07-21</div>
                      </td>
                      <td className="p-4 text-left align-middle">
                        <div className="text-center">
                          <Link to={`/ViewIntrenShipDetailsPage/${index}`}>
                            {" "}
                            <button className=" p-1 px-2  text-black rounded-md">
                            <Eye />
                            </button>
                          </Link>
                  
                            {" "}
                            <button className="p-1 px-2  text-white rounded-md">
                            <Trash2 color="#f10e0e" />
                            </button>
                        
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeApplication;
