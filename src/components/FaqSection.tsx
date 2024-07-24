import { MessageCircleCode } from "lucide-react";
import { useState } from "react";

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAF9FB] py-4">
      <div className="container max-w-7xl mx-auto p-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-[700] text-[30px]">Frequently Asked Questions</h1>
          <p>
            Still have any questions? Contact our Team via{" "}
            <span className="text-red-500">sukrajchaudhary90@gmail.com</span>
          </p>
        </div>
        <div className="flex gap-10 md:flex-row flex-col-reverse mt-10">
          <div className="md:max-w-sm justify-start flex flex-col gap-3">
            <h1 className="font-[700] text-2xl">Ask your Questions?</h1>
            <p className="font-[400] text-[16px] text-[#646464]">
              If the question is not available on our FAQ section, feel free to
              contact us personally. We will resolve your respective doubts.
            </p>
            <button className="text-red-600 hover:text-red-600 hover:bg-red-100 flex justify-center items-center gap-2 border-2 border-gray-300 w-fit p-2 rounded-lg">
              <MessageCircleCode color="#e50b0b" />
              Contact us
            </button>
          </div>
          <div className="w-full">
            <section className="dark:bg-gray-900">
              <div className="container max-w-4xl mx-auto">
                <div className="mt-4 space-y-8">
                  {[...Array.from({ length: 3 })].map((_, index) => (
                    <div
                      key={index}
                      className="border-2 border-gray-100 rounded-lg dark:border-gray-700"
                    >
                      <button
                        onClick={() => handleClick(index)}
                        className="flex items-center justify-between w-full p-8"
                      >
                        <h1 className=" text-black dark:text-white font-[600] text-[16px]">
                          How can I pay for my appointment?
                        </h1>
                        {activeIndex === index ? (
                          <span className="text-gray-400 bg-gray-200 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18 12H6"
                              />
                            </svg>
                          </span>
                        ) : (
                          <span className="text-white bg-blue-500 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                          </span>
                        )}
                      </button>
                      <hr className="border-gray-200 dark:border-gray-700" />
                      <p
                        className={`p-8 text-sm text-gray-500 dark:text-gray-300 transition-all ${
                          activeIndex === index ? "block" : "hidden"
                        }`}
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptas eaque nobis, fugit odit omnis fugiat
                        deleniti animi ab maxime cum laboriosam recusandae
                        facere dolorum veniam quia pariatur obcaecati illo
                        ducimus?
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
