import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
//import { useEffect } from "react";

import Header from "../components/Header";
import PartnerSection from "../components/PartnerSection";
import StudentFeedback from "../components/StudentFeedBack";
import PageTitle from "../components/PageTitle";

import Header1 from "../assets/images/Header1.jpg";
import Header8 from "../assets/images/Header8.jpg";
import Header9 from "../assets/images/Header9.jpg";
import Logo3 from "../assets/images/Logo3.png";
import G1 from "../assets/images/G1.jpg";

// Certificate Images
import C1 from "../assets/images/C1.jpg";
import C2 from "../assets/images/C2.jpg";
import C3 from "../assets/images/C3.jpg";
import C4 from "../assets/images/C4.jpg";
import C5 from "../assets/images/C5.jpg";
import C6 from "../assets/images/C6.jpg";
import E1 from "../assets/images/E1.jpg";
import E2 from "../assets/images/E2.jpg";
import E3 from "../assets/images/E3.jpg";

// Diploma Images
import D1 from "../assets/images/D1.jpg";
import D2 from "../assets/images/D2.jpg";
import D3 from "../assets/images/D3.jpg";

// Profile
import Profile from "../assets/images/Profile.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Home component Slider
  const homeSlides = [
    {
      title: "Build Your Career in Hospitality",
      subtitle:
        "Intensive Training / International Certification / Job Placement Support",
      bgImage: Header1,
    },
    {
      title: "Build Your Career in Hospitality",
      subtitle:
        "Intensive Training / International Certification / Job Placement Suppor",
      bgImage: Header8,
    },
    {
      title: "Build Your Career in Hospitality",
      subtitle:
        "Intensive Training / International Certification / Job Placement Suppor",
      bgImage: Header9,
    },
  ];

  // Certificate Courses
  const certificateCourses = [
    {
      title: "Certificate in Housekeeping Operations",
      image: C1,
      description:
        "Professional housekeeping training for clean, safe, and efficient environments.",
    },
    {
      title: "Basic Certificate in Professional Cookery",
      image: C2,
      description:
        "Learn cooking techniques with professional cleaning and maintenance for safe, efficient spaces.",
    },
    {
      title: "Certificate in Food & Beverage",
      image: C3,
      description:
        "Gain practical knowledge in restaurant service, customer handling, table setup, and beverage management.",
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
      description:
        "Build leadership, hospitality operations, and customer service skills for a successful hotel career.",
    },
    {
      title: "Certificate in English",
      image: E1,
      description:
        "Improve speaking, writing, reading, and listening skills for academic and professional success.",
    },
    {
      title: "Certificate in Information Technology",
      image: E2,
      description:
        "Learn computer fundamentals, MS Office, internet usage, and basic programming concepts.",
    },
    {
      title: "Certificate in Psychology",
      image: E3,
      description:
        "Understand human behavior, mental processes, and practical applications in everyday life.",
    },
  ];

  // Diploma Courses
  const diplomaCourses = [
    {
      title: "Diploma in Psychology",
      image: D1,
      description:
        "Explore human behavior, research methods, and applied psychological principles for professional growth.",
    },
    {
      title: "Diploma in Human Resource Management",
      image: D2,
      description:
        "Develop recruitment, leadership, training, and organizational management skills.",
    },
    {
      title: "Diploma in Hotel and Tourism Management",
      image: D3,
      description:
        "Gain practical skills in hospitality operations, travel services, and guest relations.",
    },
  ];

  // Feedback Data
  const feedbackData = [
    {
      name: "Nimal Perera",
      course: "Front Office Management",
      rating: 5,
      review:
        "The training was practical and industry-focused. I gained real confidence working in hospitality after completing this program.",
      image: Profile,
    },
    {
      name: "Sanduni Fernando",
      course: "Pastry & Bakery",
      rating: 5,
      review:
        "Excellent lecturers and hands-on sessions. The bakery course helped me start my own small business.",
      image: Profile,
    },
    {
      name: "Kamal Silva",
      course: "Housekeeping Operations",
      rating: 4,
      review:
        "The program gave me the skills needed for real-world housekeeping roles. Very informative and structured.",
      image: Profile,
    },
    {
      name: "Chathuri Jayasinghe",
      course: "Food & Beverage Service",
      rating: 5,
      review:
        "I loved the practical training and real restaurant simulations. It made me confident to work in a busy hotel environment.",
      image: Profile,
    },
    {
      name: "Ruwan Weerasinghe",
      course: "Culinary Arts",
      rating: 5,
      review:
        "The culinary techniques I learned were top-notch. The instructors were very supportive and knowledgeable.",
      image: Profile,
    },
  ];

  return (
    <main className="bg-[#f1f1f1] overflow-x-hidden">
      {/* Page Title */}
      <PageTitle title="Diferancia Global Academy" />

      {/* HEADER */}
      <Header slides={homeSlides} height="400px" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* INTRO SECTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10 pb-12 border-b border-gray-400"
        >
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Ready to reimagine your career?
            </h1>
            <p className="text-2xl text-gray-800 leading-relaxed text-justify md:text-left">
              Diferancia Global Academy (Pvt) Ltd is a professional education
              and training institute committed to delivering quality,
              industry-focused courses that empower students with practical
              skills and knowledge for career success.
            </p>
          </div>

          <div className="lg:w-1/3 flex justify-center">
            <img src={Logo3} alt="Logo" className="w-60 object-contain" />
          </div>
        </motion.div>

        {/* STATS SECTION */}
        <div className="flex flex-col md:flex-row items-stretch gap-8 mb-16 py-10">
          <div className="md:w-1/3 flex items-center">
            <p className="text-gray-800 font-medium text-2xl leading-snug text-center md:text-left">
              Organization dedicated to addressing today's challenges and
              emerging opportunities, bringing everything together under one
              unified vision.
            </p>
          </div>

          <div className="flex flex-1 items-center justify-around md:border-l-2 border-black py-2">
            <div className="flex-1 text-center">
              <h2 className="text-5xl font-bold font-serif ">560</h2>
              <p className="text-xl text-gray-800">Fellows</p>
            </div>
            <div className="flex-1 text-center border-l-2 border-black px-4">
              <h2 className="text-5xl font-bold font-serif">10</h2>
              <p className="text-xl text-gray-800">Teachers</p>
            </div>
            <div className="flex-1 text-center border-l-2 border-black px-4">
              <h2 className="text-5xl font-bold font-serif">12</h2>
              <p className="text-xl text-gray-800">Programs</p>
            </div>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <hr className="border-gray-400 my-16 w-full py-10" />
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="lg:w-1/2 w-full">
            <img
              src={G1}
              alt="Students and Professionals"
              className="rounded-3xl shadow-lg w-full object-cover h-[300px] md:h-[450px]"
            />
          </div>

          <div className="lg:w-1/2 w-full">
            <h2 className="text-4xl font-bold text-[#1A233A] mb-6">
              About Diferancia Global Academy
            </h2>

            <ul className="space-y-4 text-xl md:text-2xl text-gray-900 font-medium">
              {[
                "Industry-focused and career-oriented",
                "Experienced and qualified lecturers",
                "Practical, real-world training",
                "Modern learning environment",
                "Skill development and career guidance",
                "Commitment to academic excellence",
                "Supportive and student-friendly culture",
                "Preparation for local and international opportunities",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PROGRAMS SECTION */}
        <hr className="border-gray-400 my-16 w-full" />
        <section className="py-10">
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="h-[1.5px] bg-black flex-1 max-w-62.5[250px]"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a233a] whitespace-nowrap">
              Our Courses
            </h2>
            <div className="h-[1.5px] bg-black flex-1 max-w-62.5[250px]"></div>
          </div>

          {/* Certificate Courses */}
          <div className="mt-16 sm:mt-20">
            <h3 className="text-base sm:text-lg font-bold border-b border-black w-fit mb-8">
              Certificate Courses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              {certificateCourses.map((course) => (
                <div
                  key={course.title}
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
            <div className="text-center mt-12">
              <button
                onClick={() => navigate("/CertificateCourse")}
                className="bg-[#1A233A] text-white px-10 py-3 rounded-md font-semibold hover:bg-black transition"
              >
                Explore All Courses
              </button>
            </div>
          </div>

          {/* Diploma Courses */}
          <div className="mt-16 sm:mt-20">
            <h3 className="text-base sm:text-lg font-bold border-b border-black w-fit mb-8">
              Diploma Programs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              {diplomaCourses.map((course) => (
                <div
                  key={course.title}
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
            <div className="text-center mt-12">
              <button
                onClick={() => navigate("/DiplomaCourse")}
                className="bg-[#1A233A] text-white px-10 py-3 rounded-md font-semibold hover:bg-black transition"
              >
                Explore All Courses
              </button>
            </div>
          </div>
        </section>

        {/* STUDENT FEEDBACK */}
        <StudentFeedback feedbacks={feedbackData} />
      </div>

      <PartnerSection />
    </main>
  );
};

export default Home;
