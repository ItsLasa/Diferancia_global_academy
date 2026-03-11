import React from "react";

import P1 from "../assets/images/P1.png";
import P2 from "../assets/images/P2.png";
import P3 from "../assets/images/P3.png";
import P4 from "../assets/images/P4.png";
import P5 from "../assets/images/P5.webp";
import P6 from "../assets/images/P6.png";
import P7 from "../assets/images/P7.png";
import P8 from "../assets/images/P8.png";

interface Partners {
  id: number;
  name: string;
  logo: string;
}

const PartnerSection: React.FC = () => {
  const partners: Partners[] = [
    { id: 1, name: "Eco SWP Lodge", logo: P1 },
    { id: 2, name: "Hotel Casamara", logo: P2 },
    { id: 3, name: "The Royal Mall", logo: P3 },
    { id: 4, name: "Royal Mansion Resort", logo: P4 },
    { id: 5, name: "Queens-Logo", logo: P5 },
    { id: 6, name: "The Golden Crown", logo: P6},
    { id: 7, name: "Oak Ray Regency", logo: P7 }, 
    { id: 8, name: "LMH", logo: P8 }, 
  ];

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto font-serif">
      <div className="flex items-center justify-center gap-6 mb-12">
        <div className="h-[1.5px] bg-black flex-1 max-w-[200px]"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A233A] whitespace-nowrap">
          Our Partners
        </h2>
        <div className="h-[1.5px] bg-black flex-1 max-w-[200px]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="filter grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-20 md:max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
