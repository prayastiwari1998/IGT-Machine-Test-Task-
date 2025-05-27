import React from "react";
import { ChevronDown, Eye, Star } from "lucide-react";

const CourseCard = ({
  title,
  subtitle,
  bulletPoints = [],
}: {
  title: string;
  subtitle: string;
  bulletPoints?: string[];
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex flex-wrap items-start justify-between gap-4">
       
        <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-orange-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

      
        <div className="flex-grow">
          <div className="flex items-center text-sm text-gray-500 gap-4 mb-2">
            <span className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
              <span className="ml-1 text-gray-500">(392 reviews)</span>
            </span>
            <span className="flex items-center gap-1">
              <Eye size={16} className="text-gray-400" />
              2,538 students watched
            </span>
          </div>
          <h4 className="text-slate-900 font-semibold text-base mb-1">
            {title}
          </h4>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>

     
      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center bg-emerald-400 text-white px-4 py-2 rounded-lg font-semibold text-base space-x-4">
          <span>7 Video Classes</span>
          <span className="w-px h-4 bg-white opacity-50"></span>
          <span>4 hrs</span>
        </div>
        <ChevronDown className="text-gray-400" size={18} />
      </div>


      </div>

 
      {bulletPoints.length > 0 && (
        <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-600">
          {bulletPoints.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M18.7778 18.7778C23.0741 14.4815 23.0741 7.51852 18.7778 3.22222C14.4815 -1.07407 7.51852 -1.07407 3.22222 3.22222C-1.07407 7.51852 -1.07407 14.4815 3.22222 18.7778C7.51852 23.0741 14.486 23.0741 18.7778 18.7778ZM7.05612 9.31874L9.52974 11.7924L14.9484 6.37823L16.8653 8.29517L11.4512 13.7093L9.52974 15.6263L7.61279 13.7093L5.13917 11.2357L7.05612 9.31874Z" fill="#B5C3CB"/>
</svg>
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const PopularCoursesSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-orange-500 tracking-widest uppercase">
            Quality Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Popular Designing Course
          </h2>
        </div>

        <div className="space-y-6">
          <CourseCard
            title="Professional graphic design tutorial full course with exercise file"
            subtitle="Get your tutorials delivered at let home collect sample from the victory of the managments."
          />

          <CourseCard
            title="Become ultimate photoshop expert within 30 days"
            subtitle="Get your tutorials delivered at let home collect sample from the victory of the managments."
            bulletPoints={[
              "How to reduce file pixel dimentions without loosing quality",
              "How to make logo pixel perfects with different extension",
              "Create vector file from restarize layer styles",
              "Make color gradient with photoshop build-in tools",
            ]}
          />
              <CourseCard
            title="Professional graphic design tutorial full course with exercise file"
            subtitle="Get your tutorials delivered at let home collect sample from the victory of the managments."
          />

          
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesSection;
