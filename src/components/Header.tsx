import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Slide {
  title: string;
  subtitle?: string;
  bgImage: string;
}

interface HeaderProps {
  slides?: Slide[];
  title?: string;
  subtitle?: string;
  bgImage?: string;

  height?: string;
  maxWidth?: string;
  showButtons?: boolean;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnLink?: string;
}

const Header: React.FC<HeaderProps> = ({
  slides,
  title,
  subtitle,
  bgImage,
  height = "600px",
  maxWidth = "100%",
  showButtons = true,
  primaryBtnText = "Apply Now",
  secondaryBtnText = "More Details",
  primaryBtnLink = "/apply",
  secondaryBtnLink = "/about",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides && slides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [slides]);

  const currentData = slides
    ? slides[currentSlide]
    : { title, subtitle, bgImage };

  return (
    <header
      className="relative w-full flex items-center overflow-hidden"
      style={{
        minHeight: height,
        maxWidth: maxWidth,
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${currentData.bgImage})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/90 via-[#0a1128]/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full py-12">
        <div className="max-w-3xl text-white flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-4 drop-shadow-md">
            {currentData.title}
          </h1>

          {currentData.subtitle && (
            <p className="text-base md:text-lg font-light mb-8 text-gray-200 max-w-xl">
              {currentData.subtitle}
            </p>
          )}

          {showButtons && (
            <div className="flex flex-wrap gap-4">
              <Link
                to={primaryBtnLink}
                className="bg-[#e68a00] hover:bg-[#ff9900] text-white px-8 py-3 rounded-xl text-base md:text-lg font-bold transition-all shadow-lg active:scale-95"
              >
                {primaryBtnText}
              </Link>

              <Link
                to={secondaryBtnLink}
                className="border-2 border-white hover:bg-white hover:text-[#0a1128] text-white px-8 py-3 rounded-xl text-base md:text-lg font-bold transition-all active:scale-95"
              >
                {secondaryBtnText}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Slide Indicators */}
      {slides && slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 transition-all rounded-full ${
                currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
