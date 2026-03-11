import React from "react";

import Header from "../components/Header";
import PartnerSection from "../components/PartnerSection";
import PageTitle from "../components/PageTitle";

import Header2 from "../assets/images/Header2.jpg";
import A1 from "../assets/images/A1.png";

const About: React.FC = () => {
  return (
    <main>
      {/* Page Title */}
      <PageTitle title="About - Diferancia Global Academy" />

      {/* Header Section */}
      <Header
        title="We provide quality hospitality education with practical training for successful careers."
        subtitle="Intensive Training / International Certification / Job Placement Support"
        bgImage={Header2}
        height="400px"
        showButtons={true}
      />

      {/* What We Do Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              What We Do
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-800 leading-relaxed text-justify">
              <p className="font-semibold">
                Diferancia Global Academy (Pvt) Ltd provides leadership in
                professional education by delivering quality, industry-relevant
                training programs. We design and develop modern curricula,
                prepare structured learning materials, and offer practical
                skill-based courses that meet current market demands.
              </p>
              <p className="font-semibold">
                Our focus includes professional training, career development
                programs, academic guidance, research-based learning, and
                specialized projects that support diverse educational and career
                pathways. Through diploma and certification programs, we are
                committed to building knowledgeable, skilled, and confident
                professionals ready for real-world success.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-sm shadow-lg">
              <img src={A1} alt="Campus" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <PartnerSection />
    </main>
  );
};

export default About;