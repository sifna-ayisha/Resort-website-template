"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">

        {/* TOP HEADER */}
        <div className="border-b">
          <div className="max-w-7xl mx-auto px-3 py-1.5 flex items-center justify-between">

            {/* LOGO */}
            <div className="flex items-center">
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                width={150}
                height={50}
                priority
                className="object-contain w-[140px] sm:w-[160px] lg:w-[150px]"
              />
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
              <Link href="#home">HOME</Link>
              <Link href="#about">ABOUT US</Link>
              <Link href="#hotels">HOTELS & RESORTS</Link>
              <Link href="#offers">SPECIAL OFFERS</Link>
              <Link href="#awards">AWARDS</Link>
              <Link href="#blog">BLOG</Link>
              <Link href="#contact">CONTACT</Link>
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-3">

              {/* BOOK NOW (DESKTOP – WHITE) */}
              <Link
                href="#book"
                className="hidden md:flex items-center px-5 py-1 rounded-full
                           bg-white border border-gray-300 shadow
                           text-sm font-semibold hover:bg-gray-100 transition"
              >
                <span className="bg-gradient-to-r from-[#932c85] to-[#3d2e71]
                                 bg-clip-text text-transparent">
                  BOOK NOW →
                </span>
              </Link>

              {/* WHATSAPP */}
              <a
                href="https://api.whatsapp.com/send?phone=97471105550"
                target="_blank"
                className="bg-[#25D366] text-white rounded-full
                           p-2.5 shadow"
              >
                <FaWhatsapp className="text-[22px]" />
              </a>

              {/* HAMBURGER */}
              <button
                className="lg:hidden p-2"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <FaTimes className="text-[26px]" />
                ) : (
                  <FaBars className="text-[26px]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t shadow-md">
            <nav className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
              {[
                "home",
                "about",
                "hotels",
                "offers",
                "awards",
                "blog",
                "contact",
              ].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.toUpperCase()}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* SECOND HEADER (DESKTOP) */}
        <div className="hidden lg:block bg-white border-t">
          <div className="max-w-7xl mx-auto px-6 py-1.5">
            <nav className="flex justify-center gap-6 text-sm text-gray-600 font-medium">
              <Link href="#overview">OVERVIEW</Link>
              <Link href="#accommodation">ACCOMMODATION</Link>
              <Link href="#experience">EXPERIENCE</Link>
              <Link href="#activities">ACTIVITIES</Link>
              <Link href="#facilities">FACILITIES</Link>
              <Link href="#dining">DINING</Link>
              <Link href="#packages">PACKAGES</Link>
              <Link href="#gallery">GALLERY</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* HEADER SPACER (IMPORTANT) */}
      <div className="h-[92px] lg:h-[120px]" />

      {/* ================= FIXED BOOK NOW (MOBILE) ================= */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-white border-t shadow-lg">
        <Link
          href="#book"
          className="block text-center py-3 font-semibold
                     bg-gradient-to-r from-[#932c85] to-[#3d2e71]
                     text-white"
        >
          BOOK NOW →
        </Link>
      </div>
    </>
  );
}
