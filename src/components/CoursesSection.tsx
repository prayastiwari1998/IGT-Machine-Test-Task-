
import { Star, Clock, Users, PlayCircle } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "John Smith",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
      rating: 4.8,
      students: 15420,
      duration: "12 weeks",
      price: "$99",
      category: "Development",
      level: "Beginner"
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      instructor: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop",
      rating: 4.9,
      students: 8930,
      duration: "8 weeks",
      price: "$79",
      category: "Design",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      instructor: "Mike Davis",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      rating: 4.7,
      students: 12450,
      duration: "6 weeks",
      price: "$69",
      category: "Marketing",
      level: "Beginner"
    },
    {
      id: 4,
      title: "Data Science with Python",
      instructor: "Dr. Emily Chen",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      rating: 4.9,
      students: 9870,
      duration: "10 weeks",
      price: "$89",
      category: "Data Science",
      level: "Advanced"
    },
    {
      id: 5,
      title: "Mobile App Development",
      instructor: "Alex Rodriguez",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
      rating: 4.8,
      students: 7650,
      duration: "14 weeks",
      price: "$109",
      category: "Development",
      level: "Intermediate"
    },
    {
      id: 6,
      title: "Business Analytics",
      instructor: "Lisa Wang",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      rating: 4.6,
      students: 5430,
      duration: "9 weeks",
      price: "$75",
      category: "Business",
      level: "Intermediate"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colorMap = {
      Development: "bg-blue-100 text-blue-800",
      Design: "bg-purple-100 text-purple-800",
      Marketing: "bg-green-100 text-green-800",
      "Data Science": "bg-orange-100 text-orange-800",
      Business: "bg-red-100 text-red-800"
    };
    return colorMap[category as keyof typeof colorMap] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Popular Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our most popular courses taught by expert instructors from around the world.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(course.category)}`}>
                    {course.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    {course.level}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <PlayCircle 
                    size={48} 
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">by {course.instructor}</p>

                {/* Course Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">
                    {course.price}
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
