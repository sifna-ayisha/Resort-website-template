import {
  FaSwimmingPool,
  FaWifi,
  FaParking,
  FaUtensils,
  FaConciergeBell,
  FaBicycle,
  FaChild,
  FaUserMd,
  FaShieldAlt,
  FaStore,
  FaPlane,
  FaPaw,
} from "react-icons/fa";

const amenities = [
  { icon: FaSwimmingPool, label: "Infinity Pool" },
  { icon: FaWifi, label: "Free Wi-Fi" },
  { icon: FaParking, label: "Free Parking" },
  { icon: FaUtensils, label: "Restaurant" },
  { icon: FaConciergeBell, label: "Room Service" },
  { icon: FaBicycle, label: "Cycle" },
  { icon: FaChild, label: "Kids Play Area" },
  { icon: FaUserMd, label: "Doctor on Call" },
  { icon: FaShieldAlt, label: "Safe Locker" },
  { icon: FaStore, label: "Thattukada" },
  { icon: FaPlane, label: "Travel Desk" },
  { icon: FaPaw, label: "Pet Friendly" },
];

export default function Amenities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TITLE */}
        <h2 className="text-center text-3xl font-light tracking-wide text-gray-800 mb-16">
          Amenities
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-14 gap-x-6 text-center">
          {amenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-4 text-gray-600 hover:text-[var(--primary)] transition"
              >
                <Icon size={34} className="opacity-80" />
                <p className="text-sm tracking-wide">{item.label}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
