// HeroSection.tsx
import { Star, Search } from "lucide-react";
import BackgroundPattern from "./BackgroundPattern";

const HeroSection = () => {
  return (
 <div>
 <section className="py-20 lg:py-28 relative overflow-hidden">
      <BackgroundPattern className="  w-60 h-76 -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
     {/* Left Text Content */}
             <img
            src="/ui-img-uploads/BG.jpg"
            alt="Background design"
            className="absolute inset-0  h-full object-cover -z-10 rounded-2xl opacity-60"
             style={{ width: "60%",  height:'100%'}}
          />
        <div className="space-y-8 relative">
          {/* Background image behind left content */}
     
   
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="flex space-x-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={16} className="fill-blue-500 text-blue-500" />
              ))}
              <Star size={16} className="fill-gray-300 text-gray-300" />
            </div>
            <span>Trusted by over 4,332 students</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-[#02073E]">
              Learn Design
              <span className="block text-[#02073E]">with Nia Matos</span>
            </h1>
            <div className="w-28 h-1 bg-yellow-400 rounded"></div>
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Get your blood tests delivered at let home collect sample from the
              victory of the managments that supplies best design system guidelines ever.
            </p>
          </div>

          {/* Search Input */}
        <div className="relative w-[439px] h-[57px] rounded-[20px] bg-white shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Search Course Name"
            className="w-full h-full pl-5 pr-12 text-sm text-gray-500 placeholder-gray-400 bg-transparent focus:outline-none"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1C1C3A] hover:text-blue-600">
            <Search size={20} strokeWidth={2} />
          </button>
        </div>

          {/* Sponsor Logos */}

  <div className="flex items-center w-92 space-x-8 opacity-70 grayscale">
  <p className="text-m text-gray-800 mb-2 opacity-70">Sponsored by:</p>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
      alt="PayPal"
      className="h-6"
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
      alt="Google"
      className="h-6"
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg"
      alt="Dropbox"
      className="h-6"
    />
       {/* <span className="text-base font-semibold text-gray-500">Dropbox</span> */}

</div>


        </div>

        {/* Right Side Image with Overlay */}
        <div className="relative ">
          <img
            src="/ui-img-uploads/dc59eba1-1841-495b-bd2c-4f59a259f3bb.png"
            alt="Students learning"
            className="rounded-2xl shadow-2xl w-96"
          />
          {/* Play Button */}
          {/* <button className="absolute inset-0 m-auto w-14 h-14 bg-white bg-opacity-80 rounded-full shadow-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button> */}

          {/* Yellow Border */}
          <div className="absolute -bottom-4  h-full border-2 border-yellow-400 rounded-2xl -z-10" style={{width:"62%", right: "180px"}}></div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;