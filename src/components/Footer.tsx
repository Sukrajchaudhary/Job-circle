import { CircleDot } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <section className="bg-[rgb(23,23,31)]">
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex flex-col sm:flex-col md:flex-row text-white gap-3 justify-between ">
          <div className="w-full flex flex-col items-start">
            <div className="flex justify-center items-center gap-2">
              <div className="hover:translate-x-1 transition-all">
                <CircleDot size={36} color="#267d38" strokeWidth={3} />
              </div>
              <h1 className="text-[#FFFFFF] font-extrabold font-sans tracking-wider text-xl">
                JOB CIRCLE
              </h1>
            </div>
            <div className="px-3 mt-3">
              <p>Job Circle  Pvt. Ltd.</p>
              <p>Manamiju, Nasal Mandir,KTM</p>
              <p>Nepal +977-9767240884 | sukrajchaudhary90@gmail.com</p>
            </div>
          </div>
          <div className="w-full flex flex-col items-start">
            <div className="flex justify-center items-center gap-2">

              <h1 className="text-[#FFFFFF] font-bold font-sans tracking-wider text-xl">
              About  JOB CIRCLE
              </h1>
            </div>
            <div className="px-3 flex flex-col gap-4 mt-3">
              <p>About Us</p>
              <p>Our Services</p>
              <p>Our Blogs</p>
            </div>
          </div>
          <div className="w-full flex flex-col items-start">
            <div className="flex justify-center items-center gap-2">
             
              <h1 className="text-[#FFFFFF] font-bold font-sans tracking-wider text-xl">
              For Candidates
              </h1>
            </div>
            <div className="px-3 flex flex-col gap-4 mt-3">
              <p>Build Your Profile</p>
              <p>Intrenship/jobs</p>
              <p>Brouse Events</p>
            </div>
          </div>
          <div className="w-full flex flex-col items-start">
            <div className="flex justify-center items-center gap-2">
              
              <h1 className="text-[#FFFFFF] font-bold font-sans tracking-wider text-xl">
              For Employers
              </h1>
            </div>
            <div className="px-3 flex flex-col gap-4 mt-3">
              <p>Become an Employer</p>
              <p>Post New Intrenship</p>
             
            </div>
          </div>
          <div className="w-full flex flex-col items-start">
            <div className="flex justify-center items-center gap-2">
          
              <h1 className="text-[#FFFFFF] font-bold font-sans tracking-wider text-xl">
              For Institutes
              </h1>
            </div>
            <div className="px-3 flex flex-col gap-4 mt-3">
              <p>Register as institute</p>
              <p>Organize an events</p>
            
            </div>
          </div>
        
        </div>
      </div>
      <div className="h-[1px] bg-white clear-start"></div>
      <div className="text-center text-white min-h-20 py-9">
      2024 All Rights Reserved © JOB Circle. @Sukraj Chaudhary
      </div>
    </section>
  );
};

export default Footer;
