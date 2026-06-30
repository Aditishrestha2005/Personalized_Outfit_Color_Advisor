"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#2B2B2B] bg-[#1E1E1E] text-[#F5F5F5]">

      {/* Top Footer */}
      <div className="mx-auto max-w-[1500px] px-10 lg:px-12 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Left */}
          <div className="space-y-5 max-w-lg">
            <h2 className="font-serif text-2xl font-bold text-white">
              Personalized Outfit Color Advisor
            </h2>

            <p className="leading-7 text-gray-400">
              Discover outfit colors that complement your natural features.
              Our personalized color analysis helps you make confident style
              choices for every occasion.
            </p>
          </div>

          {/* Right */}
          <div className="flex justify-start md:justify-end">

            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#CC7F5D]">
                Quick Links
              </h3>

              <ul className="space-y-3 text-gray-400">

                <li>
                  <Link href="/home" className="hover:text-white transition">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link href="/features" className="hover:text-white transition">
                    Features
                  </Link>
                </li>

             

              </ul>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-[#2B2B2B]">

        <div className="mx-auto max-w-[1500px] px-10 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Personalized Outfit Color Advisor.
            All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">

            <span className="cursor-pointer hover:text-white transition">
              Privacy Policy
            </span>

            <span className="cursor-pointer hover:text-white transition">
              Cookies
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}