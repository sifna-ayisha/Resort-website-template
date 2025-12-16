import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      
      {/* ================= TOP HEADER ================= */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </div>

          {/* MAIN NAV */}
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
            
            {/* BOOK NOW BUTTON */}
            <Link
              href="#book"
              className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full
                        bg-gradient-to-r from-[#932c85] to-[#3d2e71]
                        !text-white text-sm font-semibold shadow
                        hover:opacity-90 transition"
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
          </div>

        </div>
      </div>

      {/* ================= SECOND HEADER ================= */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 tracking-wide font-medium">
            <Link href="#overview" className="hover:text-[var(--primary)]">OVERVIEW</Link>
            <Link href="#accommodation" className="hover:text-[var(--primary)]">ACCOMMODATION</Link>
            <Link href="#experience" className="hover:text-[var(--primary)]">EXPERIENCE</Link>
            <Link href="#activities" className="hover:text-[var(--primary)]">ACTIVITIES</Link>
            <Link href="#facilities" className="hover:text-[var(--primary)]">FACILITIES</Link>
            <Link href="#dining" className="hover:text-[var(--primary)]">DINING</Link>
            <Link href="#packages" className="hover:text-[var(--primary)]">PACKAGES</Link>
            <Link href="#gallery" className="hover:text-[var(--primary)]">GALLERY</Link>
            <Link href="#testimonials" className="hover:text-[var(--primary)]">TESTIMONIALS</Link>
            <Link href="#location" className="hover:text-[var(--primary)]">LOCATION</Link>
          </nav>
        </div>
      </div>

    </header>
  );
}
