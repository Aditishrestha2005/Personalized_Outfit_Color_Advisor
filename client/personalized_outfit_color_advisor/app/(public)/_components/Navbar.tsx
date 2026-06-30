"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About Us", href: "/about" },
    { name: "Analyze", href: "/login" },
    { name: "Features", href: "/features" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#F3E7DE] bg-[#FFFDFB]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-[1600px] items-center px-12">

        {/* Logo */}
        <div className="flex flex-1">
          <Link href="/home">
            <Image
              src="/plogo.png"
              alt="Personalized Outfit Color Advisor"
              width={90}
              height={90}
              className="object-contain transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-12 text-[17px] font-medium text-[#2B2B2B]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative transition-all duration-300 ${
                    isActive
                      ? "text-[#CC7F5D] font-semibold"
                      : "hover:text-[#CC7F5D]"
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#CC7F5D]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Login */}
        <div className="flex flex-1 justify-end">
          <Link
            href="/login"
            className="rounded-full bg-[#CC7F5D] px-8 py-3 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B96E50] hover:shadow-lg"
          >
            Login
          </Link>
        </div>

      </nav>
    </header>
  );
}