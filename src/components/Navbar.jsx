import React, { useState, useEffect } from "react";

const sections = ["home", "about", "education", "skills", "projects", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState({ message: "", type: "" });

  // ScrollSpy + Navbar shrink
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // offset for navbar height
      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) current = section;
      });

      setActiveSection(current);
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section helper
  const scrollToSection = (section) => {
    const el = document.getElementById(section);
    if (!el) return;
    window.scrollTo({
      top: el.offsetTop - 70, // navbar height offset
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  // Toast helper
  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 2500);
  };

  // Search form
  const handleSearch = (e) => {
    e.preventDefault();
    const targetSection = searchQuery.toLowerCase().trim();

    if (!sections.includes(targetSection)) {
      showToast(`Section '${targetSection}' not found!`, "error");
    } else {
      scrollToSection(targetSection);
    }

    setSearchQuery("");
  };

  return (
    <nav
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700/90 backdrop-blur-md shadow-lg py-2"
          : "bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600/80 backdrop-blur-sm py-4"
      }`}
    >
      {/* Toast */}
      {toast.message && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 min-w-[220px] px-5 py-3 rounded-md text-white font-medium text-center pointer-events-none ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo + Search */}
        <div className="flex items-center space-x-4">
          <h1
            className="text-2xl font-bold text-white hover:text-green-300 tracking-wide hover:scale-105 transition cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Engr. Josimuddin
          </h1>

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
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative transition-all duration-200 ${
                activeSection === section
                  ? "text-yellow-400 font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-yellow-400"
                  : "hover:text-yellow-400"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
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
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`block transition ${
                activeSection === section
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-yellow-400"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
