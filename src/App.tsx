import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DiplomaCourse from "./pages/DiplomaCourse";
import CertificateCourse from "./pages/CertificateCourse";
import ApplyNow from "./pages/ApplyNow";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./navigation/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

<<<<<<< HEAD
import { FaWhatsapp } from "react-icons/fa"; // whatsapp icon

=======
>>>>>>> 2b1a3a97cddab6f6e29bedc13faa911b288cba08
function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 bg-white">
        <Navbar />
<<<<<<< HEAD
        {/* Floating Whatsapp Icon */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/94773640718"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
            title="Chat with us on Whatsapp"
          >
            <FaWhatsapp size={32} />
          </a>
        </div>
        <main>
          <ScrollToTop />
=======
        <main>
          <ScrollToTop/>
>>>>>>> 2b1a3a97cddab6f6e29bedc13faa911b288cba08
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/DiplomaCourse" element={<DiplomaCourse />} />
            <Route path="/CertificateCourse" element={<CertificateCourse />} />
            <Route path="/apply" element={<ApplyNow />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
