"use client";

import Link from "next/link";

export default function Hero() {
  return (
  <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-gradient-to-b from-[#FFFDFB] to-[#FBF6F0]">
     <div className="max-w-[1500px] mx-auto w-full px-10 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16">
        
        {/* Left Content */}
        <div className="space-y-8 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2B2B2B] leading-[1.15]">
            Discover the Colors That <span className="text-[#CC7F5D] italic">Define</span> You.
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Stop guessing your outfit combinations. Our color analysis solution evaluates your unique skin tones and profile elements to construct your ultimate capsule wardrobe palette.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/login"
              className="bg-[#CC7F5D] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#B96E50] transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Analyze My Colors
            </Link>
        
          </div>
        </div>

        {/* Right Content */}
        <div className="relative w-full h-[450px] lg:h-[550px] bg-[#F7EFE9] rounded-3xl overflow-hidden border border-[#F3E7DE] p-8 flex flex-col justify-between shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#CC7F5D]/5 rounded-full blur-3xl -z-10" />
          
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white max-w-xs shadow-md space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Your Palette matches</div>
            <div className="text-xl font-bold font-serif text-[#2B2B2B]">Warm Autumn 🍂</div>
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-full bg-[#A34828]" />
              <div className="w-10 h-10 rounded-full bg-[#D4A373]" />
              <div className="w-10 h-10 rounded-full bg-[#CCD5AE]" />
              <div className="w-10 h-10 rounded-full bg-[#E9D8A6]" />
            </div>
          </div>

          <div className="self-end bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-white max-w-xs shadow-md text-right space-y-2">
            <p className="text-sm italic font-medium text-gray-600">"The confidence boost is unmatched. I finally know exactly what to buy!"</p>
            <span className="text-xs font-bold text-[#CC7F5D]">- Elena R.</span>
          </div>
        </div>

      </div>
    </section>
  );
}