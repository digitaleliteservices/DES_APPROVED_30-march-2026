import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { CLIENTS } from "../constants"
export default function ClientsCarouselPreview() {
  return (
    <section className="py-5 bg-[#fdfdfdff] relative overflow-hidden">
     
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-0 relative z-10">

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 6 },
          }}
        >
          {CLIENTS.map((client) => (
            <SwiperSlide key={`top-${client.id}`}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-[200px] bg-transparent
                           border border-white/0 rounded-2xl
                           p-5 flex flex-col items-center justify-between
                           transition-all duration-500
                           hover:bg-transparent  overflow-hidden"
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    src={client.image}
                    alt={client.title}
                    className="max-w-full max-h-16 object-contain
                               transition-all duration-500
                               scale-70 group-hover:scale-110"
                  />
                </div>

                <div className="text-center">
                  <span className="text-[9px] font-black text-yellow-600 uppercase tracking-[0.25em] block mb-1">
                    {client.category}
                  </span>
                  <h4 className="text-xs font-bold text-[#951d06]">
                    {client.title}
                  </h4>
                </div>

                <div
                  className="absolute bottom-0 left-0 w-full h-[3px]
                             bg-yellow-400 scale-x-0
                             group-hover:scale-x-100
                             transition-transform duration-500 origin-left"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
