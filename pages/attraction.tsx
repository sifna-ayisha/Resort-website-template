import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

const attractions = [
  { title: "Chembra Peak", desc: "Highest peak in Wayanad, famous for trekking." },
  { title: "Banasura Dam", desc: "Largest earthen dam in India with stunning views." },
  { title: "Pookode Lake", desc: "Freshwater lake surrounded by forests and hills." },
  { title: "Edakkal Caves", desc: "Ancient caves with prehistoric carvings and rock art." },
  { title: "Soochipara Waterfalls", desc: "Three-tiered waterfall ideal for photography." },
  { title: "Lakkidi View Point", desc: "Scenic viewpoint offering misty valley views." },
];

export default function Attractions() {
  return (
    <>
      <Head>
        <title>Nearby Attractions | Avadale Wayanad</title>
      </Head>

      <Header />

      <section className="py-24 bg-[#f5f7e6]">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12">Nearby Attractions</h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {attractions.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src="/images/slide1.jpg"
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
