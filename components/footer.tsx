import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3d2e71] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p className="mb-2 text-white">
            📍 Al Nasr Tower A - Floor NB 20<br />
            Doha, Qatar
          </p>
          <p className="mb-2 text-white">✉️ info@besttoursqatar.com</p>
          <p className="text-white">📞 +974 7110 5550</p>
          <p className="text-white">📞 +974 7110 5551</p>
        </div>

        {/* CHAT */}
        <div>
          <h3 className="text-lg font-bold mb-4">Chat With Us</h3>
          <p className="mb-3 text-white">
            +974 7110 5550 <br /> +974 7110 5551
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=97471105550"
            className="btn"
          >
            WhatsApp Chat
          </a>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-white hover:underline">Home</Link></li>
            <li><Link href="/about" className="text-white hover:underline">About</Link></li>
            <li><Link href="/contact" className="text-white hover:underline">Contact Us</Link></li>
            <li><Link href="/services" className="text-white hover:underline">Services</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link href="#tours" className="text-white hover:underline">City Tour</Link></li>
            <li><Link href="#tours" className="text-white hover:underline">Dhow Cruise</Link></li>
            <li><Link href="#tours" className="text-white hover:underline">Fishing Tour</Link></li>
            <li><Link href="#tours" className="text-white hover:underline">Kayaking Tour</Link></li>
            <li><Link href="#tours" className="text-white hover:underline">West Coast Tour</Link></li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-white">
        © 2025 Best Tour Qatar. All Rights Reserved.
      </div>
    </footer>
  );
}
