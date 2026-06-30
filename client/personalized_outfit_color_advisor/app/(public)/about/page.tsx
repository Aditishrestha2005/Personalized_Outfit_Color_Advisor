"use client";

import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Image from "next/image";

export default function AboutPage() {
  const focusAreas = [
    {
      title: "Skin Tone & Undertone Analysis",
      desc: "Your skin tone and undertone play an important role in determining which colors suit you best. Our advisor analyzes these features to recommend colors that naturally enhance your appearance.",
    },
    {
      title: "Personalized Color Palette",
      desc: "Based on your analysis, you receive a personalized color palette featuring shades that complement your natural features and can guide your outfit choices with confidence.",
    },
    {
      title: "Color Guidance for Every Occasion",
      desc: "Whether you're dressing for college, work, a party, or a wedding, your personalized color recommendations help you choose shades that fit both the occasion and your style.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#2B2B2B] font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">

        {/* Hero */}
        <section className="max-w-[1600px] mx-auto px-10 lg:px-12 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#CC7F5D]">
              About Us
            </span>

            <h1 className="text-5xl font-serif font-bold leading-tight text-[#2B2B2B]">
              Discover Colors That{" "}
              <span className="text-[#CC7F5D] italic">
                Complement You
              </span>
            </h1>

            <p className="pt-2 text-lg leading-relaxed text-gray-600 max-w-2xl">
              Personalized Outfit Color Advisor helps you discover outfit
              colors that complement your skin tone and undertone, making
              it easier to choose colors that enhance your natural
              appearance and boost your confidence.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative flex h-[320px] w-full max-w-[420px] items-center justify-center overflow-hidden rounded-3xl border border-[#EFE2D5] bg-[#FAF4EE] p-6 shadow-sm">

              <Image
                src="/ab.png"
                alt="Personalized Color Analysis"
                width={360}
                height={360}
                className="rounded-xl object-contain"
              />

            </div>
          </div>

        </section>

        {/* Purpose */}
        <section className="border-y border-[#EFE2D5] bg-[#FAF4EE] py-20">

          <div className="max-w-[1600px] mx-auto px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            <div className="lg:col-span-4 space-y-3">

              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Our Purpose
              </h2>

              <p className="text-3xl font-serif font-bold text-[#2B2B2B] leading-snug">
                Helping you choose colors with confidence.
              </p>

            </div>

            <div className="lg:col-span-8 space-y-6 text-gray-600 leading-8">

              <p>
                Choosing outfit colors isn't always easy. A color that
                looks great on one person may not complement someone else.
                Your skin tone and undertone play an important role in
                determining which colors naturally suit you.
              </p>

              <p>
                <strong className="text-[#2B2B2B]">
                  Personalized Outfit Color Advisor
                </strong>{" "}
                analyzes your facial photograph and provides personalized
                color recommendations based on your natural features.
                Instead of recommending clothing brands or styles, the
                application helps you understand which colors naturally
                complement your appearance.
              </p>

            </div>

          </div>

        </section>

        {/* How It Works */}

        <section className="max-w-[1600px] mx-auto px-10 lg:px-12 py-24">

          <div className="mb-16 text-center space-y-4">

            <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-[#CC7F5D]">
              How It Works
            </h2>

            <p className="text-4xl font-serif font-bold text-[#2B2B2B]">
              Simple, Personalized, Effective
            </p>

            <p className="mx-auto max-w-2xl text-gray-600 leading-8">
              Our advisor analyzes your facial features to generate
              personalized color recommendations that help you choose
              outfit colors with ease.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {focusAreas.map((item, idx) => (

              <div
                key={idx}
                className="rounded-3xl border border-[#F3E7DE] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <h3 className="mb-4 text-2xl font-serif font-bold text-[#2B2B2B]">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Closing */}

        <section className="border-t border-[#F3E7DE] bg-[#FBF6F0] py-20">

          <div className="max-w-[1600px] mx-auto px-10 lg:px-12">

            <div className="mx-auto max-w-4xl text-center space-y-5">

              <h2 className="text-3xl font-serif font-bold text-[#2B2B2B]">
                Confidence in Every Outfit
              </h2>

              <p className="leading-8 text-gray-600">
                Understanding the colors that complement your natural
                features helps you make confident outfit choices for every
                occasion. Whether you're dressing for college, work, a
                party, or a special event, your personalized color palette
                is always there to guide you.
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}