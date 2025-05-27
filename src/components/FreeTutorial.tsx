export default function FreeTutorialSection() {
  return (
    <div className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background dots */}
      <div className="absolute left-0 top-0 h-full w-1/2 bg-no-repeat bg-contain" style={{ backgroundImage: "url('/ui-img-uploads/map.jpg')" }}></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left card */}
        <div className="relative z-10">
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden max-w-md">
            <div className="relative">
              <img
                src="/ui-img-uploads/corinne-kutz-tMI2_-r5Nfo-unsplash.jpg"
                alt="Tutorial Thumbnail"
                className="w-full object-cover h-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-70 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center text-sm text-yellow-400 mb-2">
                <span className="mr-1">★★★★★</span>
                <span className="text-gray-600 ml-2">5.0 (392 reviews)</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Convert your web layout theming easily with sketch zeplin extension
              </h3>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 9H9V7h2v4zm0 2H9v2h2v-2z" />
                </svg>
                1,037 students watched
              </div>
            </div>
            <div className="absolute top-[15rem] right-[-0]">
              <span className="bg-green-500 text-white text-base font-semibold px-3 py-2 rounded-lg">✓ Free tutorial</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative z-10">
          <p className="text-sm text-orange-500 font-semibold uppercase mb-3">Free Tutorial</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            More than <span className="inline-block">thousand</span> <br /> of free tutorial upload <br /> every weeks
          </h2>
          <p className="text-gray-600 mb-6">
            Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.
          </p>
          <button className="px-6 py-3 bg-orange-100 text-orange-500 font-semibold rounded-md shadow-sm">
            Explore details
          </button>
        </div>
      </div>
    </div>
  );
}
