import React from "react";
import Header from "../components/Header";
import Header7 from "../assets/images/Header7.png";
import PageTitle from "../components/PageTitle";

import C1 from "../assets/images/C1.jpg";
import C2 from "../assets/images/C2.jpg";
import C3 from "../assets/images/C3.jpg";
import C4 from "../assets/images/C4.jpg";
import C5 from "../assets/images/C5.jpg";
import C6 from "../assets/images/C6.jpg";
import E1 from "../assets/images/E1.jpg";
import E2 from "../assets/images/E2.jpg";
import E3 from "../assets/images/E3.jpg";

const CertificateCourse: React.FC = () => {
  const hotelCourses = [
    {
      title: "Certificate in Housekeeping Operations",
      image: C1,
      detailImage: Header7,
      description:
        "Professional housekeeping training for clean, safe, and efficient environments.",
      offeredBy: "Diferancia Global Academy – Hotel School",
      duration: "5 Days (Intensive Training)",
      certification: "Locally and Internationally Recognized Certificate",
      jobOpportunities: [
        "Recommended for training positions in star-class hotels",
        "Training allowance provided during placement",
        "Room Attendant roles in International Hotels",
        "Public Area Supervisor opportunities",
      ],
      benefits: [
        "Industry-focused practical training",
        "Guidance from hospitality professionals",
        "Pathway to star-class hotel careers",
        "International recognition for the certificate",
      ],
      content: [
        {
          category: "Foundations of Housekeeping",
          topics: [
            "Job Description of a Room Attendant",
            "Organizational Structure",
            "Types of Guest Rooms",
            "Housekeeper’s Reports",
          ],
        },
      ],
    },
    {
      title: "Basic Certificate in Professional Cookery",
      image: C2,
      detailImage: C2,
      description:
        "Learn cooking techniques with professional cleaning and maintenance for safe, efficient spaces.",
      offeredBy: "Diferancia Global Academy – Hotel School",
      duration: "10 Days (08 Hours per Day)",
      certification: "Basic Certificate in Professional Cookery",
      jobOpportunities: [
        "Commis Chef",
        "Kitchen Assistant",
        "Hotel Kitchen Trainee",
      ],
      content: [
        {
          category: "Introduction and Food Safety",
          topics: [
            "Personal Hygiene",
            "Kitchen Hygiene and Safety",
            "Introduction to Kitchen Equipment",
          ],
        },
      ],
    },
    {
      title: "Certificate in Food & Beverage",
      image: C3,
      detailImage: C3,
      description:
        "Gain practical knowledge in restaurant service, customer handling, table setup, and beverage management.",
      offeredBy: "Diferancia Global Academy – Hotel School",
      duration: "6 Days (Intensive Practical Training)",
      certification: "Locally and Internationally Recognized Certificate",
      content: [
        {
          category: "Service Operations",
          topics: [
            "Taking Food Orders",
            "Serving Beverages",
            "Professional Table Setup",
          ],
        },
      ],
    },
    {
      title: "Certificate in Front Office Management",
      image: C4,
      description:
        "Learn reception operations, guest service management, reservations handling, and communication skills.",
    },
    {
      title: "Certificate in Pastry & Bakery",
      image: C5,
      description:
        "Master baking techniques, pastry production, cake decoration, and dessert presentation.",
    },
    {
      title: "Certificate in Hotel & Tourism Management",
      image: C6,
      detailImage: C6,
      description:
        "Build leadership, hospitality operations, and customer service skills for a successful hotel career.",
      offeredBy: "Diferancia Global Academy – Hotel School",
      duration: "Foundation Program",
      certification:
        "Recognized Certificate in Hotel, Tourism & Hospitality Management",
    },
  ];

  const educationCourses = [
    {
      title: "Certificate in English",
      image: E1,
      detailImage: E1,
      description:
        "Improve speaking, writing, reading, and listening skills for academic and professional success.",
      offeredBy: "Diferancia Global Academy",
      duration: "Certificate Program",
      certification: "Certificate in English Language Training",
      extraDetails:
        "Field Visit Program – Students will have real-life environment practice.",
      content: [
        {
          category: "Core Language Skills",
          topics: [
            "Speaking and Pronunciation",
            "Grammar Mastery",
            "Confidence Building",
          ],
        },
      ],
    },
    {
      title: "Certificate in Information Technology",
      image: E2,
      detailImage: E2,
      description:
        "Learn computer fundamentals, MS Office, internet usage, and basic programming concepts.",
      offeredBy: "Diferancia Global Academy",
      duration: "Certificate Program",
      certification: "Certificate in Computer & Communication Technology",
      content: [
        {
          category: "Microsoft Office Suite",
          topics: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
        },
      ],
    },
    {
      title: "Certificate in Psychology",
      image: E3,
      description:
        "Understand human behavior, mental processes, and practical applications in everyday life.",
    },
  ];

  return (
    <div className="font-serif">
      {/* Page Title */}
      <PageTitle title="Certificate Course - Diferancia Global Academy" />

      <Header
        title="We provide quality hospitality education with practical training for successful careers."
        subtitle="Intensive Training / International Certification / Job Placement Support"
        bgImage={Header7}
        height="400px"
        showButtons={true}
      />

      <section className="bg-gray-200 py-12 sm:py-16 px-4 sm:px-6">
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-10 sm:mb-12">
          <div className="h-[1px] bg-black flex-1 max-w-[100px] sm:max-w-[300px]"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a233a] text-center">
            Our Courses
          </h2>
          <div className="h-[1px] bg-black flex-1 max-w-[100px] sm:max-w-[300px]"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* HOTEL COURSES */}
          <h3 className="text-base sm:text-lg font-bold border-b border-black w-fit mb-8">
            Hotel and Tourism Management
          </h3>

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

          {/* EDUCATION COURSES */}
          <div className="mt-16 sm:mt-20">
            <h3 className="text-base sm:text-lg font-bold border-b border-black w-fit mb-8">
              Educational Courses
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              {educationCourses.map((course, index) => (
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificateCourse;
