import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

import Header from "../components/Header";
import Header4 from "../assets/images/Header4.jpg";
import PageTitle from "../components/PageTitle";

const Contact: React.FC = () => {
  return (
    <main>
      {/* Page Title */}
      <PageTitle title="Contact - Diferancia Global Academy" />

      {/* Header Section */}
      <Header
        title="Build Your Career in Hospitality Join Us Today"
        subtitle="Intensive Training / International Certification / Job Placement Support"
        bgImage={Header4}
        height="400px"
        showButtons={false}
      />

      {/* Contact Section */}
      <section className="bg-white py-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 border border-gray-300 rounded-2xl p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-[#1A233A] mb-4">
              Send a Message
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Do you have a question or need assistance? Feel free to contact us.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-gray-800">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    className="border border-gray-400 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-bold text-gray-800">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    className="border border-gray-400 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-gray-800">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="border border-gray-400 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-bold text-gray-800">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter Your Phone Number"
                    className="border border-gray-400 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-gray-800">Message</label>
                <textarea
                  rows={4}
                  placeholder="Send Your Message"
                  className="border border-gray-400 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-[#C17900] text-white font-bold py-3 px-12 rounded-full text-lg hover:bg-[#A66800] transition-colors shadow-md"
                >
                  Send a Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4 sm:gap-6">

  {/* Address */}
  <div className="border-2 sm:border-[3px] border-[#FFB84D] rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm">
    <div className="bg-[#C17900] p-3 sm:p-4 rounded-lg text-white shrink-0">
      <MapPin size={28} className="sm:w-8 sm:h-8" />
    </div>
    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-tight">
      No.15/I/C, New Digana Road,<br />
      Kundasale, Kandy
    </p>
  </div>

  {/* Phone */}
  <div className="border-2 sm:border-[3px] border-[#FFB84D] rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm">
    <div className="bg-[#C17900] p-3 sm:p-4 rounded-lg text-white shrink-0">
      <Phone size={28} className="sm:w-8 sm:h-8" />
    </div>
    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 space-y-1">
      <p>081 2267 755</p>
      <p>077 3640 718</p>
    </div>
  </div>

  {/* Email */}
  <div className="border-2 sm:border-[3px] border-[#FFB84D] rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm">
    <div className="bg-[#C17900] p-3 sm:p-4 rounded-lg text-white shrink-0">
      <Mail size={28} className="sm:w-8 sm:h-8" />
    </div>
    <p className="text-lg sm:text-xl md:text-xl font-bold text-gray-800 break-words">
      info@diferanciaglobal.com
    </p>
  </div>

</div>

        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Find Us On Map
          </h2>

          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1399.2455521823774!2d80.67887302481695!3d7.2790103556792!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae367a8796b93cf%3A0xf11b3063f9b6574c!2sDiferancia%20Global%20Academy!5e0!3m2!1sen!2slk!4v1772858610226!5m2!1sen!2slk"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;