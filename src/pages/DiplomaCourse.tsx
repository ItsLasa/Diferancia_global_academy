import React from "react";
import Header from "../components/Header";
import Header6 from "../assets/images/Header6.jpg";
import PageTitle from "../components/PageTitle";

import D1 from "../assets/images/D1.jpg";
import D2 from "../assets/images/D2.jpg";
import D3 from "../assets/images/D3.jpg";

const CertificateCourse: React.FC = () => {
  const hotelCourses = [
    { 
      title: "Diploma in Psychology",
      image: D1,
      description: "Explore human behavior, research methods, and applied psychological principles for professional growth."
    },
    { 
      title: "Diploma in Human Resource Management",
      image: D2,
      description: "Develop recruitment, leadership, training, and organizational management skills."
    },
    { 
      title: "Diploma in Hotel and Tourism Management  ",
      image: D3,
      description: "Gain practical skills in hospitality operations, travel services, and guest relations."
    },
  ];

  // If you want to add Education Courses later, keep this array here (optional)
  // const educationCourses = [...];

  return (
    <div className="font-serif">

            {/* Page Title */}
      <PageTitle title="Diploma Course - Diferancia Global Academy" />

      <Header
        title="Empowering learners with professional skills for career success."
        subtitle="Intensive Training / International Certification / Job Placement Support"
        bgImage={Header6}
        height="400px"
        showButtons={true}
      />

      <section className="bg-gray-200 py-12 sm:py-16 px-4 sm:px-6">
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-10 sm:mb-12">
          <div className="h-[1px] bg-black flex-1 max-w-[100px] sm:max-w-[300px]"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a233a] text-center">
            Our Diploma Courses
          </h2>
          <div className="h-[1px] bg-black flex-1 max-w-[100px] sm:max-w-[300px]"></div>
        </div>

        <div className="max-w-6xl mx-auto">

          {/* HOTEL COURSES 
          <h3 className="text-base sm:text-lg font-bold border-b border-black w-fit mb-8">
            Hotel and Tourism Management
          </h3>*/}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {hotelCourses.map((course, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg border border-gray-300 p-4 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-44 sm:h-52 object-cover rounded-md"
                />
                <h4 className="mt-4 font-bold text-[#1a233a] text-sm sm:text-base">
                  {course.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                  {course.description}
                </p>
                <button className="mt-4 bg-[#C17900] hover:bg-[#a56700] text-white px-6 py-2 rounded-md text-xs sm:text-sm font-semibold w-full sm:w-auto">
                  View More
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 sm:mt-10">
            <button className="bg-[#1a233a] text-white px-8 sm:px-10 py-2.5 sm:py-3 rounded-md font-semibold text-sm sm:text-base">
              More
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CertificateCourse;