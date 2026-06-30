"use client";

import {
  FaPalette,
  FaCamera,
  FaClockRotateLeft,
} from "react-icons/fa6";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaPalette />,
      title: "Personalized Color Recommendations",
      desc: "Receive outfit colors carefully selected to complement your unique skin tone and undertone.",
    },
    {
      icon: <FaCamera />,
      title: "Simple Photo Analysis",
      desc: "Upload a clear facial photograph and receive your personalized color palette in just a few moments.",
    },
    {
      icon: <FaClockRotateLeft />,
      title: "Analysis History",
      desc: "Save every analysis and revisit your personalized color recommendations whenever you need them.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-28 bg-[#FFFDFB]"
    >
<div className="max-w-[1500px] mx-auto px-10 lg:px-12">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[0.25em] text-lg md:text-xl font-bold text-[#CC7F5D]">
  WHY CHOOSE US
</span>

          <h2 className="mt-5 text-5xl md:text-6xl font-serif font-bold leading-tight text-[#2B2B2B]">
            More Than Just
            <span className="text-[#CC7F5D] italic">
              {" "}Color Advice
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg leading-8">
            Designed to make choosing outfit colors simple,
            personalized, and enjoyable.
          </p>

        </div>

        {/* Features */}

        <div className="grid lg:grid-cols-3 gap-8">

          {reasons.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-[#EFE2D5] bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-[#FAF4EE] flex items-center justify-center text-[#CC7F5D] text-3xl mb-8 group-hover:bg-[#CC7F5D] group-hover:text-white transition-all">

                {item.icon}

              </div>

              <h3 className="text-2xl font-serif font-bold text-[#2B2B2B] mb-5">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}