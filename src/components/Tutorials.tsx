'use client';

import { Star, Eye } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const tutorials = [
  {
    image: '/ui-img-uploads/stefan-stefancik-5p_7M5MP2Iw-unsplash.jpg',
    rating: 5,
    reviews: 392,
    title: 'How to work with prototype design with adobe xd featuring tools',
    views: '2,538 students watched',
  },
  {
    image: '/ui-img-uploads/avel-chuklanov-DUmFLtMeAbQ-unsplash.jpg',
    rating: 4.5,
    reviews: 524,
    title:
      'Create multiple artboard by using figma prototyping tools development',
    views: '3,532 students watched',
  },
  {
    image: '/ui-img-uploads/corinne-kutz-tMI2_-r5Nfo-unsplash.jpg',
    rating: 5,
    reviews: 392,
    title:
      'Convert your web layout theming easily with sketch zeplin extension',
    views: '1,037 students watched',
  },
    {
    image: '/ui-img-uploads/stefan-stefancik-5p_7M5MP2Iw-unsplash.jpg',
    rating: 5,
    reviews: 392,
    title: 'How to work with prototype design with adobe xd featuring tools',
    views: '2,538 students watched',
  },
];

export default function TutorialsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-20 bg-white relative">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-orange-500 tracking-wide uppercase">
          Quality Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Tutorials that people love most
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Swiper */}
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Pagination, Navigation]}
        >
          {tutorials.map((tut, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="relative">
                  <img
                    src={tut.image}
                    alt={tut.title}
                    className="w-full h-60 object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1F2937"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i >= Math.round(tut.rating) ? 'text-gray-300' : ''
                        }`}
                        fill={i < Math.floor(tut.rating) ? '#facc15' : 'none'}
                      />
                    ))}
                    <span className="text-sm text-gray-700 ml-1">
                      {tut.rating} ({tut.reviews} reviews)
                    </span>
                  </div>

                  <h3 className="font-semibold text-gray-900 text-lg mb-3">
                    {tut.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{tut.views}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External Buttons (with refs) */}
 <div
  ref={prevRef}
  className="absolute left-[-10px] top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer"
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M12.293 3.293a1 1 0 010 1.414L7.414 10l4.879 5.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z" />
  </svg>
</div>


      <div
  ref={nextRef}
  className="absolute right-[-10px] top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer"
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M7.707 16.707a1 1 0 01-1.414-1.414L11.586 10 6.293 4.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6z" />
  </svg>
</div>

      </div>
    </section>
  );
}
