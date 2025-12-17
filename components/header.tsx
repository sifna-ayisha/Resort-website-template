"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      {/* ================= TOP HEADER ================= */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-3 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={170}
              height={60}
              priority
              className="object-contain"
            />
          </div>

          {/* MAIN NAV (DESKTOP) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm tracking-wide text-gray-700 font-medium">
            <Link href="#home" className="hover:text-[var(--primary)]">HOME</Link>
            <Link href="#about" className="hover:text-[var(--primary)]">ABOUT US</Link>
            <Link href="#hotels" className="hover:text-[var(--primary)]">HOTELS & RESORTS</Link>
            <Link href="#offers" className="hover:text-[var(--primary)]">SPECIAL OFFERS</Link>
            <Link href="#awards" className="hover:text-[var(--primary)]">AWARDS</Link>
            <Link href="#blog" className="hover:text-[var(--primary)]">BLOG</Link>
            <Link href="#contact" className="hover:text-[var(--primary)]">CONTACT</Link>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">

            {/* BOOK NOW (DESKTOP) */}
            <Link
              href="#book"
              className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full
                         bg-gradient-to-r from-[#932c85] to-[#3d2e71]
                         text-white !text-white font-semibold text-sm shadow
                         hover:text-white hover:opacity-90 transition"
              style={{
                textShadow: "0 1px 4px rgba(255,255,255,0.6)"
              }}
            >
              BOOK NOW →
            </Link>

            {/* WHATSAPP */}
            <a
              href="https://api.whatsapp.com/send?phone=97471105550"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white shadow hover:bg-[#1EBE57] transition"
            >
              <FaWhatsapp size={18} />
            </a>

            {/* HAMBURGER (MOBILE) */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-gray-700">
            <Link onClick={() => setMenuOpen(false)} href="#home">HOME</Link>
            <Link onClick={() => setMenuOpen(false)} href="#about">ABOUT US</Link>
            <Link onClick={() => setMenuOpen(false)} href="#hotels">HOTELS & RESORTS</Link>
            <Link onClick={() => setMenuOpen(false)} href="#offers">SPECIAL OFFERS</Link>
            <Link onClick={() => setMenuOpen(false)} href="#awards">AWARDS</Link>
            <Link onClick={() => setMenuOpen(false)} href="#blog">BLOG</Link>
            <Link onClick={() => setMenuOpen(false)} href="#contact">CONTACT</Link>

            {/* BOOK NOW (MOBILE) */}
            <Link
              href="#book"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex justify-center px-6 py-2 rounded-full
                         bg-gradient-to-r from-[#932c85] to-[#3d2e71]
                         text-white !text-white font-semibold
                         hover:text-white"
              style={{
                textShadow: "0 1px 4px rgba(255,255,255,0.6)"
              }}
            >
              BOOK NOW →
            </Link>
          </nav>
        </div>
      )}

      {/* ================= SECOND HEADER (DESKTOP ONLY) ================= */}
      <div className="bg-white hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 tracking-wide font-medium">
            <Link href="#overview">OVERVIEW</Link>
            <Link href="#accommodation">ACCOMMODATION</Link>
            <Link href="#experience">EXPERIENCE</Link>
            <Link href="#activities">ACTIVITIES</Link>
            <Link href="#facilities">FACILITIES</Link>
            <Link href="#dining">DINING</Link>
            <Link href="#packages">PACKAGES</Link>
            <Link href="#gallery">GALLERY</Link>
            <Link href="#testimonials">TESTIMONIALS</Link>
            <Link href="#location">LOCATION</Link>
          </nav>
        </div>
      </div>

    </header>
  );
}
