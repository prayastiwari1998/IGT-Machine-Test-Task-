import { Star, Eye } from 'lucide-react';

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
];

export default function TutorialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-orange-500 tracking-wide uppercase">
          Quality Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Tutorials that people love most
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-2">
        {tutorials.map((tut, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm border overflow-hidden"
          >
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
        ))}
      </div>
    </section>
  );
}
