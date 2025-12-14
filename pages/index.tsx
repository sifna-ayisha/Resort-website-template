import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Tours Qatar</title>
        <meta name="description" content="Explore Qatar with desert safaris & city tours" />
      </Head>

      {/* HERO */}
      <section className="relative h-[70vh] bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/60 p-8 rounded text-center text-white max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
            Explore Qatar With Us
          </h1>
          <p className="mb-6 text-lg">
            Desert Safari • City Tours • Adventure Trips
          </p>
          <Link href="#tours">
            <button className="bg-yellow-500 px-6 py-3 rounded font-semibold hover:bg-yellow-600">
              View Tours
            </button>
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Best Tours Qatar
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          We provide unforgettable desert safaris, Doha city tours, and
          adventure experiences tailored for tourists and locals.
        </p>
      </section>

      {/* TOURS */}
      <section id="tours" className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Tours
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Half Day Desert Safari", img: "/tour1.jpg" },
            { title: "Full Day Desert Safari", img: "/tour2.jpg" },
            { title: "Doha City Tour", img: "/tour3.jpg" },
          ].map((tour) => (
            <div key={tour.title} className="bg-white rounded shadow">
              <Image
                src={tour.img}
                alt={tour.title}
                width={400}
                height={250}
                className="rounded-t"
              />
              <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">{tour.title}</h3>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="font-semibold text-xl mb-2">Expert Guides</h3>
            <p className="text-gray-600">Local experts with years of experience</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Best Prices</h3>
            <p className="text-gray-600">Affordable and transparent pricing</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Trusted Service</h3>
            <p className="text-gray-600">Hundreds of happy customers</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© 2025 Best Tours Qatar. All rights reserved.</p>
      </footer>
    </>
  );
}
