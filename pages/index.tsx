import Head from "next/head";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollImage from "@/components/scrollImage";
import { useEffect, useState } from "react";
import Amenities from "@/components/amenties";
import ActivitiesSlider from "@/components/activitiesSlider";
import Gallery from "@/components/gallery";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const heroImages = [
    "/images/slide1.jpg",
    "/images/slide2.avif",
    "/images/slide3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true,     
  });
}, []);

  /* PACKAGES / SERVICES */
  const tours = [
    {
      id: 1,
      title: "Luxury Resort Stay",
      description: "Premium rooms surrounded by nature and scenic views.",
      image: "/images/hotel.jpg",
    },
    {
      id: 2,
      title: "Book Your Tour Buses",
      description: "Luxury buses for group travel.",
      image: "/images/bus.jpg",
    },
    {
      id: 3,
      title: "Book Your Night Bus",
      description: "Safe and comfortable night journeys.",
      image: "/images/bus.jpg",
    },
    {
      id: 4,
      title: "Book Your Party Hall",
      description: "Perfect venues for celebrations.",
      image: "/images/hotel.jpg",
    },
  ];

  /* WHY CHOOSE US */
  const features = [
    {
      title: "Nature Inspired Luxury",
      description:
        "Experience peaceful resort stays surrounded by greenery and fresh air.",
    },
    {
      title: "Curated Holiday Packages",
      description:
        "Perfectly designed packages for families, couples and groups.",
    },
    {
      title: "Trusted Hospitality",
      description:
        "Warm service, comfort and attention to every guest’s needs.",
    },
  ];

  /* TESTIMONIALS */
  const testimonials = [
    {
      name: "Ahmed R",
      text: "Beautiful resort, peaceful atmosphere and amazing hospitality.",
    },
    {
      name: "Priya S",
      text: "Perfect getaway for family. Loved the activities and food!",
    },
    {
      name: "John D",
      text: "One of the best stays I’ve had. Highly recommended.",
    },
  ];

  /* RESORT ACTIVITIES */
  const activities = [
    { title: "Campfire Evenings", image: "/images/resort.jpg" },
    { title: "Sunrise Walk", image: "/images/resort.jpg" },
    { title: "Cycling", image: "/images/resort.jpg" },
    { title: "Nature Walk", image: "/images/resort.jpg" },
    { title: "Mountain View", image: "/images/resort.jpg" },
    { title: "Outdoor Games", image: "/images/resort.jpg" },
  ];

  return (
    <>
      <Head>
        <title>Luxury Resort & Holiday Packages</title>
        <meta
          name="description"
          content="Luxury resort stays, holiday packages, transport services and event venues."
        />
      </Head>

      <Header />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">ESCAPE TO NATURE</h1>
          <h2 className="text-xl md:text-3xl mb-6">LUXURY • COMFORT • SERENITY</h2>
          <p className="mb-8 text-base md:text-lg">
            Premium resort stays, holiday packages & memorable experiences.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="#tours" className="btn px-4 py-2 md:px-6 md:py-3 text-sm md:text-base">
              Explore Packages
            </Link>

            <a
              href="https://api.whatsapp.com/send?phone=97471105550"
              className="px-6 py-2 md:px-8 md:py-3 rounded-md font-bold bg-[#3d2e71] text-white hover:bg-[#932c85] transition text-sm md:text-base"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-2xl md:text-4xl font-bold text-[#3d2e71] mb-6">
              Premium Resort & Holiday Experiences
            </h2>
            <p className="text-gray-700 mb-4">
              Discover luxury stays designed for relaxation, comfort and peace.
            </p>
            <p className="text-gray-700 mb-6">
              Whether it’s a family vacation, romantic getaway or group retreat,
              we create experiences you’ll cherish forever.
            </p>
            <Link
                    href="/about"
                    className="inline-block bg-[#932c85] text-white !text-white px-6 py-3 rounded hover:bg-[#3d2e71] transition"
                  >
                    Know More
                  </Link>
          </div>

    <div className="h-56 md:h-80" data-aos="fade-left">
      <ScrollImage src="/images/hotel.jpg" alt="Luxury Resort" />
    </div>
    
  </div>
</section>


      {/* PARALLAX */}
      <section className="parallax h-[60vh] flex items-center justify-center text-white text-center">
        <div className="bg-black/50 w-full h-full flex items-center justify-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Where Nature Meets Luxury
            </h2>
            <p className="text-base md:text-lg">
              Wake up to breathtaking views and peaceful surroundings
            </p>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-24 bg-white">
        <div className="text-center mb-14">
          <p className="tracking-widest text-sm text-gray-500 uppercase">
            Explore & Experience
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-black mt-2">ACTIVITIES</h2>
        </div>

        <ActivitiesSlider activities={activities} />
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 bg-gray-50">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#3d2e71] mb-12">
          Why Choose Us
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white p-8 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-[#932c85] mb-3">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>
       {/* ROOM TYPES */}
      <section className="py-24 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 text-center" data-aos="fade-down">
            Our Exclusive Room Types
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Single Room */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in" data-aos-delay="100">
              <img
                src="/images/hotel.jpg"
                alt="Single Room"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Single Room</h3>
                <p className="text-gray-600">
                  Cozy and comfortable, perfect for solo travelers seeking tranquility and rest.
                </p>
              </div>
            </div>

            {/* Double Room */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in" data-aos-delay="200">
              <img
                src="/images/slide3.jpg"
                alt="Double Room"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Double Room</h3>
                <p className="text-gray-600">
                  Ideal for couples, offering comfort and elegance with modern amenities.
                </p>
              </div>
            </div>

            {/* Family Cottage */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in" data-aos-delay="300">
              <img
                src="/images/slide1.jpg"
                alt="Family Cottage"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Family Cottage</h3>
                <p className="text-gray-600">
                  Spacious and welcoming, perfect for family getaways and memorable moments.
                </p>
              </div>
            </div>

            {/* Pillar House */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in" data-aos-delay="400">
              <img
                src="/images/hotel.jpg"
                alt="Pillar House"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Pillar House</h3>
                <p className="text-gray-600">
                  A unique and charming stay, blending traditional architecture with modern comforts.
                </p>
              </div>
            </div>

            {/* Hut */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in" data-aos-delay="500">
              <img
                src="/images/slide3.jpg"
                alt="Hut"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Hut</h3>
                <p className="text-gray-600">
                  A rustic yet comfortable retreat, perfect for nature lovers and adventurers.
                </p>
              </div>
            </div>

            {/* Tent */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in" data-aos-delay="600">
              <img
                src="/images/slide1.jpg"
                alt="Tent"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tent</h3>
                <p className="text-gray-600">
                  Experience the great outdoors with our luxurious and spacious tents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


            {/* PACKAGES */}
            <section id="tours" className="py-20 px-6 bg-white">
              <h2 className="text-2xl md:text-4xl font-bold text-center text-[#3d2e71] mb-12">
                Our Packages & Services
              </h2>

              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {tours.map((tour) => (
                  <div key={tour.id} className="bg-gray-50 rounded shadow">
                    <div className="h-56">
                      <ScrollImage src={tour.image} alt={tour.title} />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#3d2e71] mb-2">
                        {tour.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{tour.description}</p>

                      <Link href="#contact" className="btn">
                        Book Now →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
      </section>

      <Amenities />
      {/* LOCAL ATTRACTIONS */}
      <section className="py-24 bg-[#f5f7e6]" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" data-aos="fade-down">
      Explore Local Attractions Near Our Resort
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden" data-aos="flip-left" data-aos-delay="100">
        <img
          src="/images/slide1.jpg"
          alt="Chembra Peak"
          className="h-56 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">Chembra Peak</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Chembra Peak is the highest point in Wayanad reaching 2,100 meters
            above sea level. Popular for trekking through tea plantations and
            lush forests.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden" data-aos="flip-up" data-aos-delay="200">
        <img
          src="/images/slide1.jpg"
          alt="Banasura Dam"
          className="h-56 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">Banasura Dam</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The Banasura Sagar Dam is the largest earthen dam in India and the
            second largest in Asia, offering breathtaking views.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden" data-aos="flip-right" data-aos-delay="300">
        <img
          src="/images/slide1.jpg"
          alt="Pookode Lake"
          className="h-56 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">Pookode Lake</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Pookode Lake is a serene freshwater lake known for its natural charm
            and unique map-shaped structure.
          </p>
        </div>
      </div>
    </div>

    {/* VIEW ALL BUTTON */}
    <div className="flex justify-center mt-14" data-aos="zoom-in" data-aos-delay="400">
      <Link
        href="/attraction"
        className="bg-green-800 text-white px-10 py-3 rounded-md font-semibold hover:bg-green-900 transition"
      >
        VIEW ALL
      </Link>
    </div>
  </div>
</section>

    {/* GALLERY SECTION */}
    <Gallery />



      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-[#3d2e71] mb-12">
          Guest Reviews
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded shadow">
              <p className="italic mb-4">"{t.text}"</p>
              <p className="font-bold text-[#932c85]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
