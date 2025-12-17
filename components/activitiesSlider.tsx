"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Activity = { title: string; image: string };

export default function ActivitiesSlider({ activities }: { activities: Activity[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={{ base: 12, sm: 16, md: 24 } as any}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 12 },
          640: { slidesPerView: 1.2, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2.5, spaceBetween: 24 },
          1280: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        {activities.map((a) => (
          <SwiperSlide key={a.title} className="flex items-stretch">
            <div className="activity-card w-full p-3 sm:p-4 md:p-5">
              <div className="overflow-hidden rounded-lg h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={a.image} 
                  alt={a.title} 
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover activity-img" 
                />
              </div>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg font-medium text-gray-800 text-center">{a.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
