import React from 'react'
const Education: React.FC = () => {
    return (
        <>
            <div className=" lg:ml-[270px] w-full">
                <form className="border border-gray-200 flex-1 rounded-lg bg-white  px-4 sm:px-8 py-6">
                    <h5 className="font-medium text-xl sm:text-2xl">Education</h5>
                    <p className="mb-4 mt-1 text-gray-400">
                        Give a detailed look into your academic history.
                    </p>
                    <button
                        className="border-0 mb-2 flex w-full items-center border-gray-200 py-3 text-left "
                        id="headlessui-disclosure-button-:r5r:"
                        type="button"
                        aria-expanded="true"
                        data-headlessui-state="open"
                        aria-controls="headlessui-disclosure-panel-:r5s:"
                    >
                        <div>
                            <span className="text-t-lg font-medium">
                                Asian School of Management and Technology
                            </span>
                            <p className="mt-2 text-t-sm text-gray-400">May 17, 2021 - Present</p>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="rotate-180 transform ml-auto mr-4 h-5 w-5 "
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-5 w-5 text-is-fill-error"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                        </svg>
                    </button>
                    <div
                        className=" border-b border-gray-200 pb-6  text-brand-black"
                        id="headlessui-disclosure-panel-:r5s:"
                        data-headlessui-state="open"
                    >
                        <div className="w-full sm:grid grid-cols-7 space-y-6 sm:space-y-0 gap-2">
                            <div className=" space-y-2  w-full sm:col-span-3">
                                <p>School/College Type</p>
                                <div
                                    className="relative "

                                    data-headlessui-state=""
                                >
                                    <button
                                        className="w-full flex cursor-pointer font-medium items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-black"
                                        id="headlessui-listbox-button-:r5t:"
                                        type="button"
                                        aria-haspopup="listbox"
                                        aria-expanded="false"
                                        data-headlessui-state=""
                                    >
                                        <p> School (SLC, SEE, 1-10, +2, A Levels)</p>
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
                            <div className=" col-span-4">
                                <input
                                    hidden
                                    readOnly
                                    type="hidden"
                                    defaultValue="cca7919b-48a3-4306-a9f9-c878982c550a"
                                    name="name[id]"
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
                                        display: "none"
                                    }}
                                />
                                <input
                                    hidden
                                    readOnly
                                    type="hidden"
                                    defaultValue="Asian School of Management and Technology"
                                    name="name[value]"
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
                                        display: "none"
                                    }}
                                />
                                <div className="">
                                    <div className="relative">
                                        <p
                                            className="mb-2"
                                            id="headlessui-combobox-label-:r5u:"
                                            data-headlessui-state=""
                                        >
                                            School/College<span className="text-brand-red">*</span>
                                        </p>
                                        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <input
                                                className="w-full border border-gray-200 py-3.5 rounded-lg pl-3 pr-10 text-base leading-5 text-black focus:ring-0"
                                                placeholder="Search school..."
                                                id="headlessui-combobox-input-:r5v:"
                                                role="combobox"
                                                aria-expanded="false"
                                                aria-autocomplete="list"
                                                data-headlessui-state=""
                                                type="text"
                                                aria-labelledby="headlessui-combobox-label-:r5u:"
                                            />
                                            <button
                                                className="absolute inset-y-0 right-0 flex items-center pr-2"
                                                id="headlessui-combobox-button-:r60:"
                                                type="button"
                                                tabIndex={-1}
                                                aria-haspopup="listbox"
                                                aria-expanded="false"
                                                data-headlessui-state=""
                                                aria-labelledby="headlessui-combobox-label-:r5u: headlessui-combobox-button-:r60:"
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
                        </div>
                        <div className="my-6 grid gap-6">
                            <input
                                hidden
                                readOnly
                                type="hidden"
                                defaultValue="8cf9e191-f991-473a-9725-4409848772e3"
                                name="name[id]"
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
                                    display: "none"
                                }}
                            />
                            <input
                                hidden
                                readOnly
                                type="hidden"
                                defaultValue="BSc in Computer Science and Information Technology (BSc CSIT)"
                                name="name[value]"
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
                                    display: "none"
                                }}
                            />
                            <div className="">
                                <div className="relative">
                                    <p
                                        className="mb-2"
                                        id="headlessui-combobox-label-:r61:"
                                        data-headlessui-state=""
                                    >
                                        Degree<span className="text-brand-red">*</span>
                                    </p>
                                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                        <input
                                            className="w-full border border-gray-200 py-3.5 rounded-lg pl-3 pr-10 text-base leading-5 text-black focus:ring-0"
                                            placeholder="Search degree.."
                                            id="headlessui-combobox-input-:r62:"
                                            role="combobox"
                                            aria-expanded="false"
                                            aria-autocomplete="list"
                                            data-headlessui-state=""
                                            type="text"
                                            aria-labelledby="headlessui-combobox-label-:r61:"
                                        />
                                        <button
                                            className="absolute inset-y-0 right-0 flex items-center pr-2"
                                            id="headlessui-combobox-button-:r63:"
                                            type="button"
                                            tabIndex={-1}
                                            aria-haspopup="listbox"
                                            aria-expanded="false"
                                            data-headlessui-state=""
                                            aria-labelledby="headlessui-combobox-label-:r61: headlessui-combobox-button-:r63:"
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
                            <input
                                hidden
                                readOnly
                                type="hidden"
                                defaultValue="41a6eca6-0ec4-42c3-824f-170967285fa2"
                                name="name[id]"
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
                                    display: "none"
                                }}
                            />
                            <input
                                hidden
                                readOnly
                                type="hidden"
                                defaultValue="Kathmandu"
                                name="name[value]"
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
                                    display: "none"
                                }}
                            />
                            <div className="">
                                <div className="relative">
                                    <p
                                        className="mb-2"
                                        id="headlessui-combobox-label-:r64:"
                                        data-headlessui-state=""
                                    >
                                        City<span className="text-brand-red">*</span>
                                    </p>
                                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                        <input
                                            className="w-full border border-gray-200 py-3.5 rounded-lg pl-3 pr-10 text-base leading-5 text-black focus:ring-0"
                                            placeholder="eg. Kathmandu"
                                            id="headlessui-combobox-input-:r65:"
                                            role="combobox"
                                            aria-expanded="false"
                                            aria-autocomplete="list"
                                            data-headlessui-state=""
                                            type="text"
                                            aria-labelledby="headlessui-combobox-label-:r64:"
                                        />
                                        <button
                                            className="absolute inset-y-0 right-0 flex items-center pr-2"
                                            id="headlessui-combobox-button-:r66:"
                                            type="button"
                                            tabIndex={-1}
                                            aria-haspopup="listbox"
                                            aria-expanded="false"
                                            data-headlessui-state=""
                                            aria-labelledby="headlessui-combobox-label-:r64: headlessui-combobox-button-:r66:"
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
                        <div className="my-6 grid md:grid-cols-2 gap-6">
                            <div className="">
                                <label
                                    htmlFor="schools[0].startDate"
                                    className="block text-t-md text-brand-black"
                                >
                                    Start Date<span className="text-brand-red">*</span>
                                </label>
                                <div className="  mt-2 ">
                                    <input
                                        className="block w-full border p-3 text-t-md text-brand-black focus:outline-none  border-gray-200  rounded-lg "
                                        placeholder="Select start date"
                                        max="2024-07-26"
                                        type="date"
                                        name="schools[0].startDate"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <input
                                id="schools[0].isRunning"
                                className=" h-5 w-5 rounded-lg border-2 border-gray-100 accent-red-500 outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-500 focus:outline-none focus:border-red-500   "
                                type="checkbox"
                                name="schools[0].isRunning"
                            />
                            <label htmlFor="schools[0].isRunning" className="text-t-md text-gray-400">
                                I Currently Study Here
                            </label>
                        </div>
                    </div>
                    <button
                        className="mt-4 flex items-center gap-3 text-t-sm font-medium text-brand-red"
                        type="button"
                    >
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
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>{" "}
                        Add Education
                    </button>
                    <div className=" mt-8">
                        <div className=" flex justify-end">
                            <button
                                className="inline-flex items-center justify-center font-bold rounded-lg text-sm ring-offset-background duration-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 hover:shadow-lg h-10 px-5 py-5 ml-auto"
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Education
