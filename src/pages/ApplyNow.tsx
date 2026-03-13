import React, { useState, useRef, useEffect } from "react";
import { CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

import Header from "../components/Header";
import Header6 from "../assets/images/Header6.jpg";
import PageTitle from "../components/PageTitle";

// ─── EmailJS credentials  ─────────────────────
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "template_p1de5fm";
const EMAILJS_PUBLIC_KEY = "uD5OES7bdDW8Wr0bd";
// ─────────────────────────────────────────────────────────────────────────────

// Course options
const courses = [
  // Certificate Courses
  { value: "housekeeping", label: "Certificate in Housekeeping Operations" },
  { value: "cooking", label: "Certificate in Cooking" },
  { value: "food_beverage", label: "Certificate in Food & Beverage" },
  { value: "front_office", label: "Certificate in Front Office Management" },
  { value: "pastry_bakery", label: "Certificate in Pastry & Bakery" },
  { value: "hotel_tourism", label: "Certificate in Hotel & Tourism Management" },
  { value: "english", label: "Certificate in English" },
  { value: "it", label: "Certificate in Information Technology" },
  { value: "psychology", label: "Certificate in Psychology" },

  // Diploma Courses
  { value: "diploma_psychology", label: "Diploma in Psychology" },
  { value: "diploma_hrm", label: "Diploma in Human Resource Management" },
  { value: "diploma_hotel_tourism", label: "Diploma in Hotel and Tourism Management" },
];

// Scrollable dropdown component
const ScrollableDropdown: React.FC<{
  selected: string;
  setSelected: (value: string) => void;
}> = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col space-y-2 relative" ref={ref}>
      <label className="text-white font-medium ml-1">Course</label>
      <div
        className="bg-white rounded-xl py-3 px-4 flex justify-between items-center cursor-pointer outline-none focus:ring-2 focus:ring-orange-500 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selected ? "text-gray-800" : "text-gray-400"}>
          {selected ? courses.find((c) => c.value === selected)?.label : "Select a course"}
        </span>
        <ChevronDown size={20} />
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white rounded-xl shadow-lg max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {courses.map((course) => (
            <div
              key={course.value}
              className="px-4 py-3 cursor-pointer hover:bg-orange-100 transition-all"
              onClick={() => handleSelect(course.value)}
            >
              {course.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ApplyNow: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!selectedCourse) {
      setErrorMsg("Please select a course.");
      return;
    }

    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      setIsModalOpen(true);
      // Reset form after successful submission
      formRef.current.reset();
      setSelectedCourse("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMsg("Failed to send your application. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  // The readable course label for the hidden input
  const selectedCourseLabel =
    courses.find((c) => c.value === selectedCourse)?.label ?? "";

  return (
    <main className="font-sans">
      <PageTitle title="Apply Now - Diferancia Global Academy" />

      <Header
        title="We provide quality hospitality education with practical training for successful careers."
        subtitle="Intensive Training / International Certification / Job Placement Support"
        bgImage={Header6}
        height="400px"
        showButtons={true}
      />

      <section className="bg-[#0a1128] py-12 px-4 sm:py-16 sm:px-6 lg:px-8 flex justify-center items-start">
        <div className="w-full max-w-3xl bg-[#0f172a] p-6 sm:p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-800">

          <div className="flex items-center justify-center mb-10">
            <div className="grow h-px bg-gray-600"></div>
            <h2 className="px-6 text-white text-2xl sm:text-3xl font-bold tracking-wide">
              Apply Now
            </h2>
            <div className="grow h-px bg-gray-600"></div>
          </div>

          {/* Error message */}
          {errorMsg && (
            <div className="mb-6 bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-xl text-center">
              {errorMsg}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

            {/* Hidden input for course – EmailJS reads this by name */}
            <input type="hidden" name="course" value={selectedCourseLabel} />

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="firstName" className="text-white font-medium ml-1">First Name</label>
                <input id="firstName" name="first_name" required type="text" placeholder="First Name"
                  className="bg-white rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="lastName" className="text-white font-medium ml-1">Last Name</label>
                <input id="lastName" name="last_name" required type="text" placeholder="Last Name"
                  className="bg-white rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
              </div>
            </div>

            {/* NIC & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="nic" className="text-white font-medium ml-1">NIC No</label>
                <input id="nic" name="nic_no" required type="text" placeholder="12345678900"
                  className="bg-white rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="phone" className="text-white font-medium ml-1">
                  Phone Number <span className="text-xs text-gray-400">(WhatsApp)</span>
                </label>
                <input id="phone" name="phone_number" required type="tel" placeholder="+94 77 123 4567"
                  className="bg-white rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="address" className="text-white font-medium ml-1">Address</label>
              <input id="address" name="address" required type="text" placeholder="123, Main Street, Colombo"
                className="bg-white rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
            </div>

            {/* Scrollable Course Dropdown */}
            <ScrollableDropdown selected={selectedCourse} setSelected={setSelectedCourse} />

            {/* Special Notes */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="notes" className="text-white font-medium ml-1">Special Notes</label>
              <textarea id="notes" name="special_notes" rows={4} placeholder="Any additional information..."
                className="bg-white rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none" />
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                disabled={isSending}
                className="bg-[#e68a00] hover:bg-[#ff9900] disabled:opacity-60 disabled:cursor-not-allowed text-white text-xl font-bold py-3 px-16 rounded-xl transition-all shadow-lg active:scale-95 w-full md:w-auto flex items-center justify-center gap-3"
              >
                {isSending ? (
                  <>
                    <Loader2 className="animate-spin" size={22} />
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>

          </form>
        </div>

        {/* Success Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <div className="bg-white p-8 sm:p-10 rounded-3xl w-full max-w-sm flex flex-col items-center text-center shadow-2xl">
              <div className="text-green-500 mb-6">
                <CheckCircle2 size={80} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Submission Successful</h3>
              <button onClick={() => setIsModalOpen(false)}
                className="bg-[#059669] hover:bg-[#047857] text-white font-bold py-3 px-12 rounded-2xl transition-all w-full text-lg">
                OK
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default ApplyNow;