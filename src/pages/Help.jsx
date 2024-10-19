import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { categories } from "../components/Help/HelpAccordianData";

function Help() {
  const accordionMap = [
    { title: "Partner Onboarding" },
    { title: "Legal" },
    { title: "FAQs" },
    { title: "Instamart Onboarding" },
  ];

  const [activeAccordion, setActiveAccordion] = useState(0); // To track active accordion category
  const [activeQuestion, setActiveQuestion] = useState(null); // To track active question within the category

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
    setActiveQuestion(null); // Reset active question when a new accordion section is clicked
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <main className="min-h-full bg-[#37718E] px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-left mb-5 ml-36">
        <h1 className="mt-4 text-xl font-bold tracking-tight text-white sm:text-3xl">
          Help & Support
        </h1>
        <p className="text-base leading-7 text-white">
          Let's take a step ahead and help you better.
        </p>
      </div>
      <div className="bg-white mx-auto flex justify-center w-[80%] overflow-y-auto   h-[100vh] p-11">
        <div className="flex-auto w-20 bg-[#EDF1F7]">
          {accordionMap.map((item, index) => (
            <p key={index}>
              <button
                onClick={() => toggleAccordion(index)}
                className={`text-left w-full py-2 px-4 font-semibold ${
                  activeAccordion === index
                    ? "bg-[#37718E] text-white"
                    : "text-black"
                }`}
              >
                {item.title}
              </button>
            </p>
          ))}
        </div>

        <div className="flex-auto w-60">
          <div className="w-full max-w-md mx-auto">
            {activeAccordion !== null && (
              <div>
                {/* Display only the questions from the active category */}
                <p className="text-2xl font-medium">
                  {categories[activeAccordion].category}
                </p>

                {categories[activeAccordion].questions.map((item, index) => (
                  <div key={index} className="border-b">
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="flex justify-between w-full py-4 text-left "
                    >
                      <span className="font-semibold">{item.question}</span>
                      <span>
                        {activeQuestion === index ? (
                          <FaAngleUp />
                        ) : (
                          <FaAngleDown />
                        )}
                      </span>
                    </button>
                    {activeQuestion === index && (
                      <div className="py-2 text-sm text-gray-600">{item.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Help;
