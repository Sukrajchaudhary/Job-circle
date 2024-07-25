import React from 'react'
import { useLocation } from 'react-router-dom'

const EmployeeApplication:React.FC = () => {
 const loaction:any= useLocation()
  return (
    <section>
  <h6 className="font-bold sm:text-2xl text-xl">Internship/Job Applications</h6>
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
     {loaction?.pathname}
    </span>
  </div>
  <ul className="mt-6 flex  overflow-y-scroll md:overflow-y-auto  w-full border-gray-200 text-gray-400">
    <li className="border-brand-red text-brand-red flex cursor-pointer items-center justify-between gap-2 font-medium border-b px-3 py-2.5 first:pl-0 ">
      All
      <span className="bg-red-500 text-white py-1 px-2 font-bold rounded-md flex justify-center items-center   text-xs">
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
      <span className="bg-slate-200 text-slate-600 py-1 px-2 font-bold rounded-md flex justify-center items-center   text-xs">
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
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0" />
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            <tr
              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              data-state="false"
            >
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <a
                  className=" hover:text-brand-red"
                  href="/internships/frontend-developer-id136-juniorlevel-fulltime-remote"
                >
                  Frontend Developer -ID136
                </a>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <a
                  className="flex items-center gap-2 text-t-sm font-medium hover:text-red-500"
                  href="/company/contactrecruiter693339"
                >
                  <img
                    alt="logo"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className=" h-12 w-12 rounded-md object-cover"
                    srcSet="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1704219829366-277175250.png&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1704219829366-277175250.png&w=256&q=75 2x"
                    src="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1704219829366-277175250.png&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  Talentsathi
                </a>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <div className="text-center">
                  <span className="rounded-full px-2 py-1 text-xs font-bold text-red-500 bg-red-200">
                    REJECTED
                  </span>
                </div>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <div className="text-center">Kathmandu</div>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <div className="text-center">1</div>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <div className="text-center">May 20, 2024</div>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <div className="flex justify-end">
                  <a
                    className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-50 text-slate-500 hover:text-red-500 h-10 px-5 py-5 flex items-center gap-4 text-t-sm "
                    href="/internships/frontend-developer-id136-juniorlevel-fulltime-remote"
                  >
                    See Details{" "}
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
                      className="lucide lucide-chevron-right h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <button
                    className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-50 hover:text-red-500 h-8 w-8 p-0 text-black"
                    type="button"
                    id="radix-:r38:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <span className="sr-only">Open menu</span>
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
                      className="lucide lucide-ellipsis-vertical h-4 w-4"
                    >
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={12} cy={5} r={1} />
                      <circle cx={12} cy={19} r={1} />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr
              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              data-state="false"
            >
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <a
                  className=" hover:text-brand-red"
                  href="/internships/front-end-developer-intern-id131-entrylevel-fulltime-onsite"
                >
                  Front-End Developer Intern - ID131
                </a>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <a
                  className="flex items-center gap-2 text-t-sm font-medium hover:text-red-500"
                  href="/company/contactrecruiter960978"
                >
                  <img
                    alt="logo"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className=" h-12 w-12 rounded-md object-cover"
                    srcSet="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1701768556031-820006917.png&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1701768556031-820006917.png&w=256&q=75 2x"
                    src="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1701768556031-820006917.png&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  Internsathi
                </a>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <div className="text-center">
                  <span className="rounded-full px-2 py-1 text-xs font-bold text-is-error bg-is-surface-error">
                    REJECTED
                  </span>
                </div>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <div className="text-center">Kathmandu</div>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <div className="text-center">1</div>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <div className="text-center">May 14, 2024</div>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <div className="flex justify-end">
                  <a
                    className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-50 text-slate-500 hover:text-red-500 h-10 px-5 py-5 flex items-center gap-4 text-t-sm "
                    href="/internships/front-end-developer-intern-id131-entrylevel-fulltime-onsite"
                  >
                    See Details{" "}
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
                      className="lucide lucide-chevron-right h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <button
                    className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-50 hover:text-red-500 h-8 w-8 p-0 text-black"
                    type="button"
                    id="radix-:r3a:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <span className="sr-only">Open menu</span>
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
                      className="lucide lucide-ellipsis-vertical h-4 w-4"
                    >
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={12} cy={5} r={1} />
                      <circle cx={12} cy={19} r={1} />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr
              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              data-state="false"
            >
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <a
                  className=" hover:text-brand-red"
                  href="/internships/full-stack-developer-react-node-internship-id130-entrylevel-fulltime-onsite"
                >
                  Full Stack Developer (React + Node) Internship - ID130
                </a>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <a
                  className="flex items-center gap-2 text-t-sm font-medium hover:text-red-500"
                  href="/company/contactrecruiter960978"
                >
                  <img
                    alt="logo"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className=" h-12 w-12 rounded-md object-cover"
                    srcSet="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1701768556031-820006917.png&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1701768556031-820006917.png&w=256&q=75 2x"
                    src="/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1701768556031-820006917.png&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  Internsathi
                </a>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <div className="text-center">
                  <span className="rounded-full px-2 py-1 text-xs font-bold text-is-error bg-is-surface-error">
                    REJECTED
                  </span>
                </div>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <div className="text-center">Kathmandu</div>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <div className="text-center">2</div>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <div className="text-center">May 14, 2024</div>
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                <div className="flex justify-end">
                  <a
                    className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-50 text-slate-500 hover:text-red-500 h-10 px-5 py-5 flex items-center gap-4 text-t-sm "
                    href="/internships/full-stack-developer-react-node-internship-id130-entrylevel-fulltime-onsite"
                  >
                    See Details{" "}
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
                      className="lucide lucide-chevron-right h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <button
                    className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-50 hover:text-red-500 h-8 w-8 p-0 text-black"
                    type="button"
                    id="radix-:r3c:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <span className="sr-only">Open menu</span>
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
                      className="lucide lucide-ellipsis-vertical h-4 w-4"
                    >
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={12} cy={5} r={1} />
                      <circle cx={12} cy={19} r={1} />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

  )
}

export default EmployeeApplication
