import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-[#FFFFFF] py-4">
      <div className="max-w-7xl p-4 mx-auto">
        <div className="flex flex-col justify-start ">
          <h1 className="font-bold text-2xl">
            Contact our Various Departments
          </h1>
          <p>You can contact our various department.</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">
          <div className="max-w-[700px] flex flex-col h-40 p-7 bg-[#FAF9FB] rounded-3xl gap-1 justify-start">
            <h1 className="font-[500] text-xl">Technical</h1>
            <a
              href="tel:+9779809521702"
              className="hover:underline focus:underline flex gap-2 items-center"
            >
            <Phone size={20} color="#100f0f" strokeWidth={2.25} />  9809521702
            </a>
            <a
              href="mailto:sukrajchaudhary902gmail.com"
              className="hover:underline focus:underline flex gap-2 items-center"
            >
             <Mail size={20} color="#100f0f" strokeWidth={2.25} />sukrajchaudhary90@gmail.com
            </a>
          </div>
          <div className="max-w-[700px] flex flex-col h-40 p-7 bg-[#FAF9FB] rounded-3xl gap-1 justify-start">
            <h1 className="font-[500] text-xl">Sales</h1>
            <a
              href="tel:+9779809521702"
              className="hover:underline focus:underline flex gap-2 items-center"
            >
            <Phone size={20} color="#100f0f" strokeWidth={2.25} />  9809521702
            </a>
            <a
              href="mailto:sukrajchaudhary902gmail.com"
              className="hover:underline focus:underline flex gap-2 items-center"
            >
             <Mail size={20} color="#100f0f" strokeWidth={2.25} />sukrajchaudhary90@gmail.com
            </a>
          </div>
          <div className="max-w-[700px] flex flex-col h-40 p-7 bg-[#FAF9FB] rounded-3xl gap-1 justify-start">
            <h1 className="font-[500] text-xl">HR</h1>
            <a
              href="tel:+9779809521702"
              className="hover:underline focus:underline flex gap-2 items-center"
            >
            <Phone size={20} color="#100f0f" strokeWidth={2.25} />  9809521702
            </a>
            <a
              href="mailto:sukrajchaudhary902gmail.com"
              className="hover:underline focus:underline flex gap-2 items-center"
            >
             <Mail size={20} color="#100f0f" strokeWidth={2.25} />sukrajchaudhary90@gmail.com
            </a>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Contact;
