import img3 from "../assets/img3.jpg"
const Help = () => {
  return (
    <section className="bg-[#FFFFFF] py-4">
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-black font-semibold text-2xl">How can we help</h1>
          <p>Making your talent search easy</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            <div className="border-2 border-gray-200 max-w-[760px] overflow-hidden rounded-lg ">
            <img src={img3} alt="" className="bg-cover w-full blur-2 hover:scale-105 transition-all " />
           <div className="flex flex-col justify-center items-center gap-2 p-3">
           <h1 className="text-2xl font-semibold">Free Internship Posting</h1>
           <p className="text-[rgb(159,163,175)]">Post an Internship of your open vacancies absolutely for free.</p>
           </div>
            </div>
            <div className="border-2 border-gray-200 max-w-[760px] overflow-hidden rounded-lg ">
            <img src={img3} alt="" className="bg-cover w-full blur-2 hover:scale-105 transition-all " />
           <div className="flex flex-col justify-center items-center gap-2 p-3">
           <h1 className="text-2xl font-semibold">All Types of Internship</h1>
           <p className="text-[rgb(159,163,175)]">Post an Internship of your open vacancies absolutely for free.</p>
           </div>
            </div>
            <div className="border-2 border-gray-200 max-w-[760px] overflow-hidden rounded-lg ">
            <img src={img3} alt="" className="bg-cover w-full blur-2 hover:scale-105 transition-all " />
           <div className="flex flex-col justify-center items-center gap-2 p-3">
           <h1 className="text-2xl font-semibold">Hire the best</h1>
           <p className="text-[rgb(159,163,175)] ">Post an Internship of your open vacancies absolutely for free.</p>
           </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
