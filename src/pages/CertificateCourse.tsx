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
    // {
    //   title: "Certificate in Housekeeping Operations",
    //   image: C1,
    //   description:
    //     "Professional housekeeping training for clean, safe, and efficient environments.",
    // },

    {
      title: "Certificate in Housekeeping Operations",
      image: C1,
      detailImage: Header7,
      description:
        "Professional housekeeping training for clean, safe, and efficient environments.",

      offeredBy: "Diferancia Global Academy – Hotel School",
      introduction:
        "Diferancia Global Academy is one of Sri Lanka’s leading institutions in professional and vocational education, providing industry-focused training programs designed to prepare students for careers in the hospitality industry.",

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
            "Organizational Structure of the Housekeeping Department",
            "Importance of the Housekeeping Department",
            "Types of Guest Rooms",
            "Housekeeper’s Reports",
          ],
        },
        {
          category: "Cleaning & Maintenance Procedures",
          topics: [
            "Standard Cleaning and Servicing Procedures",
            "Cleaning Equipment and Proper Usage",
            "Cleaning Public Areas and Back-of-House Areas",
            "Cleaning Front-of-House Areas",
          ],
        },
        {
          category: "Safety & Professional Standards",
          topics: [
            "Safety Rules for Guest Rooms",
            "Safety Protocols for Housekeeping Areas",
            "Professionalism in Guest Interaction",
            "Hygiene and Sanitation Standards",
          ],
        },
      ],
    },
    // {
    //   title: "Basic Certificate in Professional Cookery",
    //   image: C2,
    //   description:
    //     "Learn cooking techniques with professional cleaning and maintenance for safe, efficient spaces.",
    // },
    {
      title: "Basic Certificate in Professional Cookery",
      image: C2,
      detailImage: C2,
      description:
        "Learn cooking techniques with professional cleaning and maintenance for safe, efficient spaces.",

      offeredBy: "Diferancia Global Academy – Hotel School",
      introduction:
        "Diferancia Global Academy is one of Sri Lanka’s leading institutions in professional and vocational education, offering industry-focused training programs designed for students who wish to build a career in the culinary and hospitality industry.",

      duration: "10 Days (08 Hours per Day)",
      certification: "Basic Certificate in Professional Cookery",

      jobOpportunities: [
        "Commis Chef",
        "Kitchen Assistant",
        "Hotel Kitchen Trainee",
        "Restaurant Cook",
      ],

      benefits: [
        "Fundamental knowledge of professional kitchen operations",
        "Practical skills in food preparation techniques",
        "Training on international culinary basics",
        "Mastering professional cooking methods for hotels & restaurants",
      ],

      content: [
        {
          category: "Introduction and Food Safety",
          topics: [
            "Introduction to Professional Cookery",
            "Food Poisoning and Causes",
            "Methods of Food Contamination",
            "Personal Hygiene in the Kitchen",
            "Proper Food Handling Practices",
            "Kitchen Hygiene and Safety",
            "Pest and Animal Control in Food Areas",
            "Cleaning and Sanitation Procedures",
            "Areas Requiring Disinfection",
            "Introduction to Kitchen Equipment and Utensils",
            "High-Risk Foods and Food Safety Measures",
            "Food Receiving and Distribution Areas",
          ],
        },
        {
          category: "Food Categories",
          topics: ["Meat", "Poultry", "Game", "Frozen Foods", "Dry Foods"],
        },
        {
          category: "Ingredients and Flavouring",
          topics: [
            "Ingredients Used in Food Preparation",
            "Types of Herbs",
            "Factors Affecting Food Taste",
            "Medicinal Plants Used in Cooking",
            "Types of Spices",
            "South and Southeast Asian Spices",
            "Types of Seasonings",
            "Food Colourings, Flavours, and Essences",
          ],
        },
        {
          category: "International Culinary Basics",
          topics: [
            "International Cuisine and Its History",
            "Fish Stock (Fumet de Poisson)",
            "Glaze",
            "Roux",
            "Other Thickening Agents for Sauces",
            "Types of Sauces",
          ],
        },
        {
          category: "Food Preparation Skills",
          topics: [
            "Fish, Chicken, and Beef Cutting Techniques",
            "Veal, Lamb, and Pork Cutting Techniques",
            "Egg-Based Dishes",
            "Potato Preparation Techniques",
          ],
        },
        {
          category: "Menu Planning",
          topics: [
            "Four Course Menu Preparation (Indian, Italian, French, Sri Lankan)",
            "Western and Sri Lankan Breakfast Menu Preparation",
          ],
        },
      ],
    },
    // {
    //   title: "Certificate in Food & Beverage",
    //   image: C3,
    //   description:
    //     "Gain practical knowledge in restaurant service, customer handling, table setup, and beverage management.",
    // },
    {
      title: "Certificate in Food & Beverage",
      image: C3,
      detailImage: C3,
      description:
        "Gain practical knowledge in restaurant service, customer handling, table setup, and beverage management.",

      offeredBy: "Diferancia Global Academy – Hotel School",
      introduction:
        "Diferancia Global Academy is one of Sri Lanka’s leading institutions in professional and vocational education, offering industry-focused training programs designed to prepare students for careers in the hospitality industry.",

      duration: "6 Days (Intensive Practical Training)",
      certification: "Locally and Internationally Recognized Certificate",

      jobOpportunities: [
        "Recommended for training positions in star-class hotels",
        "Training allowance provided during the placement",
        "F&B Service Associate in Hotels & Restaurants",
        "Banquet Service Staff",
        "Restaurant Steward",
      ],

      benefits: [
        "Comprehensive practical training in F&B operations",
        "Industry-recognized certification for global careers",
        "Direct recommendations to star-class hotels",
        "Mastering professional table setup and guest service",
      ],

      content: [
        {
          category: "Service Operations & Guest Handling",
          topics: [
            "Introduction to Food and Beverage Service",
            "Taking Food Orders & Serving Food",
            "Offering and Serving Beverages & Appetizers",
            "Clearing Plates and Glassware",
            "Suggesting Desserts and After-Dinner Drinks",
          ],
        },
        {
          category: "Table Setup & Service Styles",
          topics: [
            "Professional Table Setup Techniques",
            "Breakfast Setup & Dinner Setup",
            "Plated Service Standards",
            "American Service Style",
            "Gueridon Service (Table-side Service)",
          ],
        },
        {
          category: "Beverage Knowledge & Management",
          topics: [
            "Classification of Beverages",
            "Classification of Alcoholic Beverages",
            "Global Wine Producers by Country",
            "Types of Wine Glasses",
            "Constituents and Liqueurs",
            "Categories of Liqueurs",
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
    // {
    //   title: "Certificate in Hotel & Tourism Management",
    //   image: C6,
    //   description:
    //     "Build leadership, hospitality operations, and customer service skills for a successful hotel career.",
    // },
    {
      title: "Certificate in Hotel & Tourism Management",
      image: C6,
      detailImage: C6,
      description:
        "Build leadership, hospitality operations, and customer service skills for a successful hotel career.",

      offeredBy: "Diferancia Global Academy – Hotel School",
      introduction:
        "Diferancia Global Academy is one of Sri Lanka’s leading institutions in professional and vocational education, providing industry-focused training programs designed to prepare students for careers in the hotel, tourism, and hospitality industry.",

      duration: "Foundation Program",
      certification:
        "Recognized Certificate in Hotel, Tourism & Hospitality Management",

      jobOpportunities: [
        "Entry-level positions in Star Class Hotels",
        "Front Office Assistant",
        "Guest Relations Trainee",
        "Tourism Industry Coordinator",
        "Hospitality Management Trainee",
      ],

      benefits: [
        "Comprehensive foundation in hotel operations",
        "Preparation for further professional studies",
        "Development of professional grooming and etiquette",
        "Gaining practical skills for the tourism sector",
      ],

      content: [
        {
          category: "Industry Overview & Operations",
          topics: [
            "Introduction to the Hospitality Industry",
            "Hotel Operations and Management",
            "Tourism Industry Overview",
            "Basic Hotel Management Skills",
          ],
        },
        {
          category: "Departmental Operations",
          topics: [
            "Front Office Operations",
            "Housekeeping Operations",
            "Food and Beverage Service",
          ],
        },
        {
          category: "Professional Skills & Relations",
          topics: [
            "Customer Service and Guest Relations",
            "Communication Skills for Hospitality",
            "Professional Grooming and Etiquette",
          ],
        },
      ],
    },
  ];

  const educationCourses = [
    // {
    //   title: "Certificate in English",
    //   image: E1,
    //   description:
    //     "Improve speaking, writing, reading, and listening skills for academic and professional success.",
    // },
    {
      title: "Certificate in English",
      image: E1,
      detailImage: E1,
      description:
        "Improve speaking, writing, reading, and listening skills for academic and professional success.",

      offeredBy: "Diferancia Global Academy",
      introduction:
        "Diferancia Global Academy provides high-quality professional and language training programs designed to improve communication skills for academic, professional, and everyday use.",

      duration: "Certificate Program",
      certification: "Certificate in English Language Training",

      benefits: [
        "Improve English speaking confidence",
        "Develop strong grammar and vocabulary skills",
        "Enhance listening and reading abilities",
        "Improve writing and communication skills",
        "Practical learning experience through field visits",
      ],

      extraDetails:
        "Field Visit Program – Students will have the opportunity to practice their English communication skills in real-life environments during our specially organized field visits.",

      content: [
        {
          category: "Core Language Skills",
          topics: [
            "Speaking and Pronunciation",
            "Listening Skills",
            "Reading Skills",
            "Writing Skills",
          ],
        },
        {
          category: "Language Foundations",
          topics: [
            "Grammar Mastery",
            "Vocabulary Development",
            "Sentence Structure",
            "Confidence Building in Communication",
          ],
        },
        {
          category: "Practical Application",
          topics: [
            "Real-life Conversation Practice",
            "Academic and Professional Writing",
            "Field Visit Communication Exercises",
          ],
        },
      ],
    },
    // {
    //   title: "Certificate in Information Technology",
    //   image: E2,
    //   description:
    //     "Learn computer fundamentals, MS Office, internet usage, and basic programming concepts.",
    // },
    {
      title: "Certificate in Information Technology",
      image: E2,
      detailImage: E2,
      description:
        "Learn computer fundamentals, MS Office, internet usage, and basic programming concepts.",

      offeredBy: "Diferancia Global Academy",
      introduction:
        "Diferancia Global Academy is committed to providing quality professional and vocational education, helping students develop practical skills for modern careers. This program is designed for beginners who want to build strong computer and digital communication skills required in today’s academic and professional environments.",

      duration: "Certificate Program",
      certification: "Certificate in Computer & Communication Technology",

      benefits: [
        "Improve essential computer skills",
        "Learn widely used office software (MS Office)",
        "Develop digital communication knowledge",
        "Gain practical hands-on computer experience",
        "Enhance career and education opportunities",
      ],

      content: [
        {
          category: "Computer Fundamentals",
          topics: [
            "Fundamentals of Personal Computers (PC)",
            "Operating Systems Basics",
            "Hardware and Software Overview",
          ],
        },
        {
          category: "Microsoft Office Suite",
          topics: [
            "Microsoft Word (Document Processing)",
            "Microsoft Excel (Spreadsheets & Data)",
            "Microsoft PowerPoint (Presentations)",
            "Microsoft Access (Database Management Systems - DBMS)",
          ],
        },
        {
          category: "Digital Communication & Design",
          topics: [
            "Internet and Email Communication",
            "Web Browsing and Online Safety",
            "Adobe Photoshop Basics (Graphic Design)",
          ],
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
                key={index} // Use index to avoid duplicate key errors
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

          {/* EDUCATION COURSES */}
          <div className="mt-16 sm:mt-20">
            <h3 className="text-base sm:text-lg font-bold border-b border-black w-fit mb-8">
              Educational Courses
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              {educationCourses.map((course, index) => (
                <div
                  key={index} // Use index for unique keys
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
        </div>
      </section>
    </div>
  );
};

export default CertificateCourse;
