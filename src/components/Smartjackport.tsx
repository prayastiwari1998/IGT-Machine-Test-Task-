import { useRef } from 'react';
import PopularCoursesSection from './PopularCourse';

export default function SmartJackpots() {
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/ui-img-uploads/stefan-stefancik-5p_7M5MP2Iw-unsplash.jpg')] bg-cover bg-no-repeat bg-center opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Feature Boxes */}
        <div className="grid grid-cols-2 gap-6">
          {[
            {
              value: '80K+',
              description: 'We have more than students',
              color: 'text-orange-300',
            },
            {
              value: '150+',
              description: 'Free online tutorials videos available',
              color: 'text-orange-400',
            },
            {
              value: '90+',
              description: 'Daily updated blog post maintain',
              color: 'text-pink-500',
            },
            {
              value: '& 3M',
              description: 'Job posted everydays with qualification',
              color: 'text-purple-400',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl shadow-xl px-12 py-12 text-center transform ${idx % 2 === 0 ? 'translate-y-6' : '-translate-y-6'} transition-transform duration-300 hover:shadow-2xl hover:scale-105`}
            >
              <h3 className={`text-4xl md:text-6xl font-bold mb-5 mt-3 ${item.color}`}>
                {item.value}
              </h3>
              <p className="text-gray-500 text-sm leading-snug mb-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Content */}
        <div>
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-6">
            Core Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            Smart Jackpots<br />
            that you may love this<br />
            anytime & anywhere
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Get your tests delivered at let home collect sample from the
            victory of the managments that supplies best design system
            guidelines ever. Get your tests delivered at let home collect
            sample.
          </p>
          <button className="px-6 py-3 rounded-md bg-orange-100 text-orange-500 text-sm font-semibold shadow hover:bg-orange-200 transition">
            Explore details
          </button>
        </div>
      </div>


      <div className="flex justify-center mt-8">
        <button onClick={scrollToNextSection} className="text-orange-500 hover:text-orange-600 transition" aria-label="Scroll to next section">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

    </section>

      <div ref={nextSectionRef} className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-slate-50">
   
        <PopularCoursesSection/>
      </div>
  </>
  );
}
