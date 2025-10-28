import React, { useState, useEffect } from "react";

const sections = ["home", "about", "education", "skills", "projects", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState({ message: "", type: "" });

  // Scroll Spy + Navbar Shrink
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          current = section;
        }
      });
      setActiveSection(current);
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 2500);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const targetSection = searchQuery.toLowerCase().trim();

    if (!sections.includes(targetSection)) {
      showToast(`Section '${targetSection}' not found!`, "error");
    } else {
      const element = document.getElementById(targetSection);
      if (element) element.scrollIntoView({ behavior: "smooth" });
      // Optional: success message
      // showToast(`Section '${targetSection}' found!`, "success");
    }

    setSearchQuery("");
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700/90 backdrop-blur-md shadow-lg py-2"
          : "bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600/80 backdrop-blur-sm py-4"
      }`}
    >
      {/* Toast message */}
      {toast.message && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 min-w-[220px] px-5 py-3 rounded-md text-white font-medium text-center pointer-events-none animate-toast ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Left: Logo + Search Box */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white hover:text-green-300 tracking-wide hover:scale-105 transition">
            Engr. Josimuddin
          </h1>

          {/* Search Box */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white rounded-lg overflow-hidden border border-gray-300"
          >
            <span className="px-2 text-gray-500">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-2 py-1 w-40 focus:outline-none"
            />
          </form>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`relative transition-all duration-200 ${
                activeSection === section
                  ? "text-yellow-400 font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-yellow-400"
                  : "hover:text-yellow-400"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md text-center py-4 space-y-3">
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white rounded-lg overflow-hidden border border-gray-300 px-6"
          >
            <span className="px-2 text-gray-500">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-2 py-2 focus:outline-none"
            />
          </form>

          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsOpen(false)}
              className={`block transition ${
                activeSection === section
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-yellow-400"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
